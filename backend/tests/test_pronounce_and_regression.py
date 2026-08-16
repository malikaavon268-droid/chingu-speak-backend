"""Iter 19: pronunciation score + TTS/transcribe/admin regressions."""
import os
import pytest
import requests

BASE_URL = os.environ.get("EXPO_PUBLIC_BACKEND_URL", "https://chingu-speak-backend.preview.emergentagent.com").rstrip("/")


@pytest.fixture(scope="module")
def s():
    sess = requests.Session()
    sess.headers.update({"Content-Type": "application/json"})
    return sess


# --- pronounce-score ---

class TestPronounce:
    def test_french(self, s):
        r = s.post(f"{BASE_URL}/api/pronounce-score",
                   json={"text": "Bonjour, je m'appelle Marie", "language": "fr", "app_locale": "en"}, timeout=60)
        assert r.status_code == 200, r.text
        d = r.json()
        assert isinstance(d["score"], int) and 0 <= d["score"] <= 100, d
        assert isinstance(d["tip"], str) and d["tip"].strip(), d

    def test_empty_text_400(self, s):
        r = s.post(f"{BASE_URL}/api/pronounce-score", json={"text": "", "language": "fr"}, timeout=30)
        assert r.status_code == 400, r.text

    def test_korean(self, s):
        r = s.post(f"{BASE_URL}/api/pronounce-score",
                   json={"text": "annyeonghaseyo, jeoneun Marie imnida", "language": "ko", "app_locale": "en"}, timeout=60)
        assert r.status_code == 200, r.text
        d = r.json()
        assert 0 <= d["score"] <= 100
        assert d["tip"].strip()


# --- TTS regression ---

class TestTTS:
    def test_voice_and_speed(self, s):
        r = s.post(f"{BASE_URL}/api/tts",
                   json={"text": "Hello there", "target_lang": "en", "voice": "nova", "speed": 1.25}, timeout=90)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["audio_base64"] and len(d["audio_base64"]) > 500

    def test_voice_omitted(self, s):
        r = s.post(f"{BASE_URL}/api/tts",
                   json={"text": "Hello there", "target_lang": "en", "speed": 1.0}, timeout=90)
        assert r.status_code == 200, r.text
        assert r.json()["audio_base64"]


# --- Transcribe (Whisper fallback) ---

class TestTranscribe:
    def test_whisper_roundtrip(self, s):
        tts = s.post(f"{BASE_URL}/api/tts",
                     json={"text": "Hello there, how are you today?", "target_lang": "en", "voice": "nova"}, timeout=90)
        assert tts.status_code == 200
        audio_b64 = tts.json()["audio_base64"]
        r = s.post(f"{BASE_URL}/api/transcribe",
                   json={"audio_base64": audio_b64, "mime_type": "audio/mpeg", "language": "en"}, timeout=120)
        # CF edge may return 403/1010 for large body via requests too, treat as env issue
        if r.status_code in (403,) and "cloudflare" in r.text.lower():
            pytest.skip("Cloudflare edge 1010 on large body")
        assert r.status_code == 200, r.text
        assert r.json()["text"].strip()


# --- Admin regression ---

class TestAdmin:
    @pytest.fixture(scope="class")
    def token(self, s):
        r = s.post(f"{BASE_URL}/api/admin/login", json={"username": "chingunadi", "password": "0644782611"}, timeout=30)
        assert r.status_code == 200, r.text
        return r.json()["access_token"]

    def test_settings_get(self, s, token):
        r = s.get(f"{BASE_URL}/api/admin/settings", headers={"Authorization": f"Bearer {token}"}, timeout=30)
        assert r.status_code == 200, r.text
        assert "deepgram_stt_model" in r.json()

    def test_settings_post(self, s, token):
        r = s.post(f"{BASE_URL}/api/admin/settings",
                   json={"key": "deepgram_stt_model", "value": "nova-2"},
                   headers={"Authorization": f"Bearer {token}"}, timeout=30)
        assert r.status_code == 200, r.text
        assert r.json()["ok"] is True

    def test_settings_no_token_401(self, s):
        r = s.get(f"{BASE_URL}/api/admin/settings", timeout=30)
        assert r.status_code == 401, r.text
