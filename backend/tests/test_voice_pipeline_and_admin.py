"""
Voice pipeline (TTS -> Transcribe -> Chat) and Admin panel regression.

Backend base URL is read from EXPO_PUBLIC_BACKEND_URL / EXPO_BACKEND_URL.
The transcribe body is large (~50KB base64); we still send it via requests
which is a proper POST (not urllib) — Cloudflare 1010 was only observed with
raw urllib. If it re-surfaces, fall back to curl.
"""
import base64
import os
import subprocess
import tempfile

import pytest
import requests

BASE_URL = (
    os.environ.get("EXPO_BACKEND_URL", "").rstrip("/")
    or os.environ.get("EXPO_PUBLIC_BACKEND_URL", "").rstrip("/")
)
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------------- Voice pipeline (guest / no auth) ----------------


class TestVoicePipeline:
    tts_audio_b64: str = ""

    def test_1_tts_returns_mp3(self, api_client):
        r = api_client.post(
            f"{API}/tts",
            json={"text": "Hello, nice to meet you", "target_lang": "en"},
            timeout=60,
        )
        assert r.status_code == 200, f"TTS failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert data.get("audio_base64"), "audio_base64 is empty"
        # sanity: it must decode as bytes and be a plausible mp3 length
        raw = base64.b64decode(data["audio_base64"])
        assert len(raw) > 1000, f"TTS audio suspiciously small: {len(raw)} bytes"
        assert data.get("mime", "").startswith("audio/"), f"bad mime: {data.get('mime')}"
        TestVoicePipeline.tts_audio_b64 = data["audio_base64"]

    def test_2_transcribe_tts_audio(self, api_client):
        assert TestVoicePipeline.tts_audio_b64, "must run TTS test first"
        payload = {
            "audio_base64": TestVoicePipeline.tts_audio_b64,
            "mime_type": "audio/mpeg",
            "language": "en",
        }
        # Use requests first
        try:
            r = api_client.post(f"{API}/transcribe", json=payload, timeout=90)
            status = r.status_code
            body_text = r.text
        except Exception as e:
            status = -1
            body_text = str(e)

        # Fallback to curl if edge (Cloudflare) blocked or 5xx
        if status != 200:
            with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as fp:
                import json as _json
                _json.dump(payload, fp)
                data_file = fp.name
            out = subprocess.run(
                [
                    "curl", "-sS", "-o", "-", "-w", "\n__HTTP__%{http_code}",
                    "-X", "POST", f"{API}/transcribe",
                    "-H", "Content-Type: application/json",
                    "--data-binary", f"@{data_file}",
                    "--max-time", "90",
                ],
                capture_output=True, text=True,
            )
            combined = out.stdout
            # split trailing marker
            if "__HTTP__" in combined:
                body_text, code_str = combined.rsplit("__HTTP__", 1)
                status = int(code_str.strip())
            else:
                body_text = combined
                status = -1

        assert status == 200, f"/transcribe failed: {status} {body_text[:400]}"
        import json as _json
        data = _json.loads(body_text)
        assert isinstance(data.get("text"), str) and data["text"].strip(), (
            f"transcribe returned empty text: {data}"
        )

    def test_3_chat_reply(self, api_client):
        r = api_client.post(
            f"{API}/chat",
            json={
                "session_id": "voice-regress-1",
                "message": "Teach me a Spanish greeting",
                "practice_lang": "es",
            },
            timeout=60,
        )
        assert r.status_code == 200, f"chat failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert data.get("reply"), "chat reply is empty"
        assert data["session_id"] == "voice-regress-1"


# ---------------- Admin panel end-to-end ----------------


class TestAdminPanel:
    token: str = ""

    def test_1_admin_login(self, api_client):
        r = api_client.post(
            f"{API}/admin/login",
            json={"username": "chingunadi", "password": "0644782611"},
            timeout=30,
        )
        assert r.status_code == 200, f"admin login failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert data.get("access_token"), "no access_token in admin login response"
        TestAdminPanel.token = data["access_token"]

    def test_2_admin_stats_requires_auth(self, api_client):
        r = api_client.get(f"{API}/admin/stats", timeout=15)
        assert r.status_code in (401, 403), f"expected 401/403, got {r.status_code}"

    def test_3_admin_stats_with_token(self, api_client):
        assert TestAdminPanel.token
        r = api_client.get(
            f"{API}/admin/stats",
            headers={"Authorization": f"Bearer {TestAdminPanel.token}"},
            timeout=30,
        )
        assert r.status_code == 200, f"stats failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        for k in ("conversations", "messages", "translations"):
            assert k in data, f"missing key {k} in stats: {data}"
            assert isinstance(data[k], int), f"{k} should be int: {data[k]!r}"

    def test_4_admin_conversations(self, api_client):
        assert TestAdminPanel.token
        r = api_client.get(
            f"{API}/admin/conversations",
            headers={"Authorization": f"Bearer {TestAdminPanel.token}"},
            timeout=30,
        )
        assert r.status_code == 200, f"conversations failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert "items" in data and isinstance(data["items"], list), (
            f"conversations shape wrong: {list(data.keys())}"
        )

    def test_5_admin_translations(self, api_client):
        assert TestAdminPanel.token
        r = api_client.get(
            f"{API}/admin/translations",
            headers={"Authorization": f"Bearer {TestAdminPanel.token}"},
            timeout=30,
        )
        assert r.status_code == 200, f"translations failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert "items" in data and isinstance(data["items"], list), (
            f"translations shape wrong: {list(data.keys())}"
        )
