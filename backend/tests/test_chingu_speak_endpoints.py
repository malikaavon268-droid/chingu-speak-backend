"""
Backend endpoint tests for Chingu Speak — post real-navigation-re-enable pass.
Covers: public health/settings, languages, translate, chat, history CRUD,
mobile auth (register/login), and admin login/stats.
"""
import os
import uuid
import pytest
import requests

BASE_URL = os.environ.get("EXPO_BACKEND_URL", "").rstrip("/") or os.environ.get("EXPO_PUBLIC_BACKEND_URL", "").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


class TestHealth:
    def test_ping(self, api_client):
        r = api_client.get(f"{API}/ping")
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "ok"

    def test_public_settings(self, api_client):
        r = api_client.get(f"{API}/public/settings")
        assert r.status_code == 200
        assert "items" in r.json()

    def test_languages(self, api_client):
        r = api_client.get(f"{API}/languages")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data["languages"], list)
        assert len(data["languages"]) > 5


class TestTranslateAndChat:
    def test_translate_text(self, api_client):
        payload = {"text": "Hello friend", "source_lang": "en", "target_lang": "ko"}
        r = api_client.post(f"{API}/translate", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["source_text"] == payload["text"]
        assert data["translated_text"]

    def test_translate_empty_text_400(self, api_client):
        r = api_client.post(f"{API}/translate", json={"text": "   "})
        assert r.status_code == 400

    def test_chat_round_trip(self, api_client):
        session_id = f"TEST_session_{uuid.uuid4()}"
        r = api_client.post(f"{API}/chat", json={"session_id": session_id, "message": "Say hi"})
        assert r.status_code == 200
        data = r.json()
        assert data["session_id"] == session_id
        assert data["reply"]

        hist = api_client.get(f"{API}/chat/{session_id}/history")
        assert hist.status_code == 200
        assert len(hist.json()["messages"]) == 2

        cleanup = api_client.delete(f"{API}/chat/{session_id}")
        assert cleanup.status_code == 200


class TestHistoryCRUD:
    def test_create_and_list_history(self, api_client):
        payload = {
            "kind": "text",
            "source_text": "TEST_source",
            "translated_text": "TEST_translated",
            "source_lang": "en",
            "target_lang": "ko",
        }
        create = api_client.post(f"{API}/history", json=payload)
        assert create.status_code == 200
        created = create.json()
        item_id = created["id"]
        assert created["source_text"] == payload["source_text"]

        listing = api_client.get(f"{API}/history")
        assert listing.status_code == 200
        ids = [i["id"] for i in listing.json()["items"]]
        assert item_id in ids

        fav = api_client.post(f"{API}/history/{item_id}/favorite")
        assert fav.status_code == 200
        assert fav.json()["favorite"] is True

        delete = api_client.delete(f"{API}/history/{item_id}")
        assert delete.status_code == 200


class TestMobileAuth:
    def test_register_and_login(self, api_client):
        email = f"TEST_user_{uuid.uuid4().hex[:8]}@example.com"
        password = "password123"
        reg = api_client.post(f"{API}/auth/register", json={"email": email, "password": password})
        assert reg.status_code == 200
        reg_data = reg.json()
        assert reg_data["user"]["email"] == email.lower()
        assert reg_data["access_token"]

        login = api_client.post(f"{API}/auth/login", json={"email": email, "password": password})
        assert login.status_code == 200
        login_data = login.json()
        assert login_data["user"]["email"] == email.lower()

        # cleanup
        token = login_data["access_token"]
        api_client.delete(f"{API}/auth/delete-account", headers={"Authorization": f"Bearer {token}"})

    def test_login_wrong_password_401(self, api_client):
        email = f"TEST_baduser_{uuid.uuid4().hex[:8]}@example.com"
        api_client.post(f"{API}/auth/register", json={"email": email, "password": "correctpass"})
        r = api_client.post(f"{API}/auth/login", json={"email": email, "password": "wrongpass"})
        assert r.status_code == 401


class TestAdmin:
    def test_admin_login_success(self, api_client):
        r = api_client.post(f"{API}/admin/login", json={"username": "chingunadi", "password": "0644782611"})
        assert r.status_code == 200
        data = r.json()
        assert data["access_token"]
        return data["access_token"]

    def test_admin_login_bad_creds(self, api_client):
        r = api_client.post(f"{API}/admin/login", json={"username": "chingunadi", "password": "wrong"})
        assert r.status_code == 401

    def test_admin_stats_with_token(self, api_client):
        login = api_client.post(f"{API}/admin/login", json={"username": "chingunadi", "password": "0644782611"})
        token = login.json()["access_token"]
        stats = api_client.get(f"{API}/admin/stats", headers={"Authorization": f"Bearer {token}"})
        assert stats.status_code == 200
        data = stats.json()
        assert "conversations" in data and "translations" in data


class TestTranscribeGracefulDegradation:
    def test_transcribe_without_deepgram_key_returns_error_not_crash(self, api_client):
        """mobile_routes.py /api/transcribe should 503 gracefully when DEEPGRAM_API_KEY missing."""
        r = api_client.post(f"{API}/transcribe", json={"audio_base64": "aGVsbG8=", "mime_type": "audio/m4a"})
        assert r.status_code in (503, 500)
