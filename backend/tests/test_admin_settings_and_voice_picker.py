"""
Regression tests for new features (iteration 18):
1) Admin Settings endpoints (Deepgram key + STT model)
2) TTS with explicit voice+speed
3) Transcribe fallback still works when NO deepgram_api_key is set (Whisper path)

Backend base URL is read from EXPO_PUBLIC_BACKEND_URL / EXPO_BACKEND_URL.
"""
import base64
import json
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


@pytest.fixture(scope="module")
def admin_token(api_client):
    r = api_client.post(
        f"{API}/admin/login",
        json={"username": "chingunadi", "password": "0644782611"},
        timeout=30,
    )
    assert r.status_code == 200, f"admin login failed: {r.status_code} {r.text[:400]}"
    tok = r.json().get("access_token")
    assert tok, "no access_token returned from admin login"
    return tok


# ---------------- ADMIN SETTINGS ----------------


class TestAdminSettings:
    def test_1_get_settings_requires_auth(self, api_client):
        r = api_client.get(f"{API}/admin/settings", timeout=15)
        assert r.status_code in (401, 403), (
            f"expected 401/403 without token, got {r.status_code} {r.text[:200]}"
        )

    def test_2_get_settings_returns_shape(self, api_client, admin_token):
        r = api_client.get(
            f"{API}/admin/settings",
            headers={"Authorization": f"Bearer {admin_token}"},
            timeout=15,
        )
        assert r.status_code == 200, f"GET settings failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        for k in ("deepgram_stt_model", "deepgram_api_key_set", "deepgram_api_key_masked"):
            assert k in data, f"missing key {k} in settings response: {data}"
        assert isinstance(data["deepgram_api_key_set"], bool)
        # Raw key must NEVER be returned
        assert "deepgram_api_key" not in data, (
            f"raw deepgram_api_key must not be exposed, got: {data}"
        )

    def test_3_post_settings_model_nova2(self, api_client, admin_token):
        r = api_client.post(
            f"{API}/admin/settings",
            json={"key": "deepgram_stt_model", "value": "nova-2"},
            headers={"Authorization": f"Bearer {admin_token}"},
            timeout=15,
        )
        assert r.status_code == 200, f"POST settings failed: {r.status_code} {r.text[:400]}"
        assert r.json().get("ok") is True

        # verify via GET (persistence)
        g = api_client.get(
            f"{API}/admin/settings",
            headers={"Authorization": f"Bearer {admin_token}"},
            timeout=15,
        ).json()
        assert g["deepgram_stt_model"] == "nova-2", (
            f"model didn't persist: {g}"
        )

    def test_4_post_unsupported_key_rejected(self, api_client, admin_token):
        r = api_client.post(
            f"{API}/admin/settings",
            json={"key": "not_allowed", "value": "x"},
            headers={"Authorization": f"Bearer {admin_token}"},
            timeout=15,
        )
        assert r.status_code == 400, (
            f"expected 400 for unsupported key, got {r.status_code} {r.text[:200]}"
        )

    def test_5_post_settings_requires_auth(self, api_client):
        r = api_client.post(
            f"{API}/admin/settings",
            json={"key": "deepgram_stt_model", "value": "nova-3"},
            timeout=15,
        )
        assert r.status_code in (401, 403), (
            f"expected 401/403 without token, got {r.status_code}"
        )

    def test_6_deepgram_api_key_not_set_by_default(self, api_client, admin_token):
        """The problem statement says no Deepgram key is set — verify."""
        g = api_client.get(
            f"{API}/admin/settings",
            headers={"Authorization": f"Bearer {admin_token}"},
            timeout=15,
        ).json()
        # This is the expected state for the fallback test below
        assert g["deepgram_api_key_set"] is False, (
            f"Expected deepgram_api_key_set False; got {g}. "
            "Whisper fallback test may not be a true 'fallback' scenario."
        )
        assert g["deepgram_api_key_masked"] == "", (
            f"masked should be empty when no key set: {g}"
        )


# ---------------- TTS with explicit voice + speed ----------------


class TestTTSVoiceSpeed:
    def test_1_tts_with_explicit_voice_and_speed(self, api_client):
        r = api_client.post(
            f"{API}/tts",
            json={
                "text": "Hola, encantado de conocerte",
                "target_lang": "es",
                "voice": "shimmer",
                "speed": 1.25,
            },
            timeout=60,
        )
        assert r.status_code == 200, f"TTS explicit voice failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert data.get("audio_base64"), f"audio_base64 empty: {data}"
        raw = base64.b64decode(data["audio_base64"])
        assert len(raw) > 1000, f"TTS audio too small: {len(raw)} bytes"
        assert data.get("mime", "").startswith("audio/"), f"bad mime: {data.get('mime')}"

    def test_2_tts_voice_omitted_uses_default(self, api_client):
        r = api_client.post(
            f"{API}/tts",
            json={"text": "Bonjour", "target_lang": "fr"},
            timeout=60,
        )
        assert r.status_code == 200, f"TTS default voice failed: {r.status_code} {r.text[:400]}"
        data = r.json()
        assert data.get("audio_base64"), f"audio_base64 empty: {data}"


# ---------------- Transcribe fallback (Whisper when no Deepgram key) ----------------


class TestTranscribeFallback:
    tts_audio_b64: str = ""

    def test_1_generate_english_tts_for_fallback(self, api_client):
        r = api_client.post(
            f"{API}/tts",
            json={"text": "Testing transcription fallback", "target_lang": "en"},
            timeout=60,
        )
        assert r.status_code == 200, f"TTS failed: {r.status_code} {r.text[:400]}"
        b64 = r.json().get("audio_base64")
        assert b64
        TestTranscribeFallback.tts_audio_b64 = b64

    def test_2_transcribe_uses_whisper_fallback(self, api_client):
        assert TestTranscribeFallback.tts_audio_b64
        payload = {
            "audio_base64": TestTranscribeFallback.tts_audio_b64,
            "mime_type": "audio/mpeg",
            "language": "en",
        }

        # Preferred path: requests
        status = -1
        body_text = ""
        try:
            r = api_client.post(f"{API}/transcribe", json=payload, timeout=120)
            status = r.status_code
            body_text = r.text
        except Exception as e:
            body_text = f"requests exception: {e}"

        # Fallback path: curl --data @file (avoids CF edge 1010 on large bodies)
        if status != 200:
            with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as fp:
                json.dump(payload, fp)
                data_file = fp.name
            out = subprocess.run(
                [
                    "curl", "-sS", "-o", "-", "-w", "\n__HTTP__%{http_code}",
                    "-X", "POST", f"{API}/transcribe",
                    "-H", "Content-Type: application/json",
                    "--data-binary", f"@{data_file}",
                    "--max-time", "120",
                ],
                capture_output=True, text=True,
            )
            combined = out.stdout
            if "__HTTP__" in combined:
                body_text, code_str = combined.rsplit("__HTTP__", 1)
                status = int(code_str.strip())

        assert status == 200, f"/transcribe failed: {status} {body_text[:400]}"
        data = json.loads(body_text)
        assert isinstance(data.get("text"), str) and data["text"].strip(), (
            f"Whisper fallback returned empty text: {data}"
        )
