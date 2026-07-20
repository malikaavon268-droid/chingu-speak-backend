"""Tests for POST /api/modules/content (mobile learn module) and public settings."""
import os
import time
import requests

BASE_URL = os.environ.get("EXPO_PUBLIC_BACKEND_URL", "https://chingu-mobile-dev.preview.emergentagent.com").rstrip("/")


class TestPingAndPublic:
    def test_ping(self):
        r = requests.get(f"{BASE_URL}/api/ping", timeout=15)
        assert r.status_code == 200, r.text
        assert r.json().get("status") == "ok"

    def test_public_settings(self):
        r = requests.get(f"{BASE_URL}/api/public/settings", timeout=15)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "items" in data and isinstance(data["items"], list)


class TestModulesContent:
    """POST /api/modules/content should return JSON content, no 404 (was 404 before fix)."""

    def _post(self, payload):
        return requests.post(f"{BASE_URL}/api/modules/content", json=payload, timeout=60)

    def test_learn_module_daily(self):
        r = self._post({
            "module": "learn",
            "topic": "daily vocabulary and phrases",
            "level": "tier 1",
            "app_locale": "en",
            "target_lang": "es",
        })
        assert r.status_code == 200, f"{r.status_code} {r.text[:400]}"
        data = r.json()
        assert data.get("module") == "learn"
        assert "content" in data and isinstance(data["content"], dict)
        # Contract keys expected by frontend (with graceful fallbacks)
        content = data["content"]
        for key in ["title", "intro", "steps", "practice_prompts"]:
            assert key in content, f"Missing key {key} in content: {content}"

    def test_learn_module_travel_ko(self):
        r = self._post({
            "module": "learn",
            "topic": "travel vocabulary and phrases",
            "level": "tier 1",
            "app_locale": "ko",
            "target_lang": "en",
        })
        assert r.status_code == 200, f"{r.status_code} {r.text[:400]}"
        assert r.json().get("locale") == "ko"

    def test_module_content_rejects_unknown_module(self):
        r = self._post({"module": "bogus", "topic": "x", "level": "1"})
        assert r.status_code == 400, r.text

    def test_roleplay_module(self):
        r = self._post({
            "module": "roleplay",
            "topic": "travel and social situations",
            "level": "1",
            "app_locale": "en",
            "target_lang": "es",
        })
        assert r.status_code == 200, f"{r.status_code} {r.text[:400]}"
        assert "content" in r.json()
