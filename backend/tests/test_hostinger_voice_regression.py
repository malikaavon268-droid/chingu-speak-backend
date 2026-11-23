"""
Backend regression against the user's external Hostinger PHP server
(https://linen-wolf-239815.hostingersite.com), which app/voice-screen.tsx and
app/chat.tsx now target in production (EXPO_PUBLIC_BACKEND_URL override in
.github/workflows/android-apk.yml). The Emergent-managed /app/backend FastAPI
service is NOT touched by this test file.

Covers: /api/ping, /api/public/settings, /api/chat, /api/auth/register,
/api/credits/me, /api/streak/status, /api/history.
"""
import os
import uuid
import pytest
import requests

HOSTINGER_URL = "https://linen-wolf-239815.hostingersite.com"
API = f"{HOSTINGER_URL}/api"


@pytest.fixture
def api_client():
    session = requests.Session()
    session.headers.update({"Content-Type": "application/json"})
    return session


class TestHostingerHealth:
    def test_ping(self, api_client):
        r = api_client.get(f"{API}/ping")
        assert r.status_code == 200
        data = r.json()
        assert data["status"] == "ok"

    def test_public_settings(self, api_client):
        r = api_client.get(f"{API}/public/settings")
        assert r.status_code == 200
        assert "items" in r.json()


class TestHostingerChat:
    def test_chat_round_trip(self, api_client):
        session_id = f"TEST_voice_regress_{uuid.uuid4()}"
        r = api_client.post(f"{API}/chat", json={
            "session_id": session_id,
            "message": "Say hi",
            "practice_lang": "ko",
            "teach_style": "roast",
            "app_locale": "en",
        })
        assert r.status_code == 200
        data = r.json()
        assert data["session_id"] == session_id
        assert isinstance(data["reply"], str) and len(data["reply"]) > 0


class TestHostingerAuth:
    def test_register_and_credits_and_streak_and_history(self, api_client):
        email = f"TEST_sdet_{uuid.uuid4().hex[:10]}@example.com"
        r = api_client.post(f"{API}/auth/register", json={
            "email": email, "password": "TestPass123!", "name": "TEST SDET",
        })
        assert r.status_code == 200
        reg = r.json()
        assert "access_token" in reg
        # Server normalizes email to lowercase - not a bug, just case-insensitive storage.
        assert reg["user"]["email"].lower() == email.lower()
        token = reg["access_token"]
        auth_headers = {"Authorization": f"Bearer {token}"}

        r2 = api_client.get(f"{API}/credits/me", headers=auth_headers)
        assert r2.status_code == 200
        credits_data = r2.json()
        assert "credits" in credits_data

        r3 = api_client.get(f"{API}/streak/status", headers=auth_headers)
        assert r3.status_code == 200
        assert "streak_days" in r3.json()

        r4 = api_client.get(f"{API}/history", headers=auth_headers)
        assert r4.status_code == 200
        assert "items" in r4.json()
        assert r4.json()["items"] == []  # fresh user, no history yet
