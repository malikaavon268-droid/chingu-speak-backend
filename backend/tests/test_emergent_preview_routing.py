"""Integration checks for Emergent preview routing, public APIs, and key safety."""

# Modules/features covered: EAS env routing, key leakage guardrails, public endpoints, live chat/translate.
import json
import os
import re
import subprocess
import uuid
from pathlib import Path

import pytest
import requests
from dotenv import load_dotenv


load_dotenv(Path("/app/frontend/.env"))
BASE_URL = os.environ.get("EXPO_PUBLIC_BACKEND_URL", "").rstrip("/")


@pytest.mark.skipif(not BASE_URL, reason="EXPO_PUBLIC_BACKEND_URL is missing")
class TestEmergentPreviewRouting:
    def test_eas_profiles_target_expected_preview_url(self):
        expected = "https://chingu-mobile-dev.preview.emergentagent.com"
        eas = json.loads(Path("/app/frontend/eas.json").read_text())
        profiles = ["apk", "preview", "production", "production-apk"]
        for profile in profiles:
            actual = (
                eas.get("build", {})
                .get(profile, {})
                .get("env", {})
                .get("EXPO_PUBLIC_BACKEND_URL", "")
            )
            assert actual == expected, f"{profile} points to {actual}"

    def test_no_emergent_secret_in_frontend_or_backend_source(self):
        secret_pat = re.compile(r"sk-emergent-[A-Za-z0-9]{8,}")
        targets = [
            Path("/app/frontend/eas.json"),
            Path("/app/frontend/app.json"),
            Path("/app/frontend/.env"),
            Path("/app/frontend/src/api/client.ts"),
            Path("/app/backend/server.py"),
            Path("/app/backend/mobile_routes.py"),
        ]
        for path in targets:
            text = path.read_text(encoding="utf-8", errors="ignore")
            assert not secret_pat.search(text), f"Potential secret leak in {path}"

    def test_backend_env_is_git_ignored(self):
        proc = subprocess.run(
            ["git", "-C", "/app", "check-ignore", "backend/.env"],
            capture_output=True,
            text=True,
            check=False,
        )
        assert proc.returncode == 0, "backend/.env is not ignored"

    def test_ping_endpoint_public(self):
        r = requests.get(f"{BASE_URL}/api/ping", timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("status") == "ok"
        assert data.get("service") == "chingu-speak"

    def test_public_settings_endpoint_public(self):
        r = requests.get(f"{BASE_URL}/api/public/settings", timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "items" in data
        assert isinstance(data["items"], list)

    def test_translate_returns_real_response(self):
        payload = {
            "text": "Good morning my friend",
            "source_lang": "en",
            "target_lang": "fr",
        }
        r = requests.post(f"{BASE_URL}/api/translate", json=payload, timeout=80)
        assert r.status_code == 200, r.text
        data = r.json()
        translated = (data.get("translated_text") or "").strip()
        assert translated
        assert "EMERGENT_LLM_KEY not configured" not in translated
        assert translated.lower() != payload["text"].lower()

    def test_chat_returns_ai_response_not_missing_key_error(self):
        payload = {
            "session_id": f"TEST_preview_{uuid.uuid4()}",
            "message": "Say hello in French and English in one short line.",
        }
        last_text = ""
        for _ in range(2):
            r = requests.post(f"{BASE_URL}/api/chat", json=payload, timeout=80)
            last_text = r.text
            if r.status_code == 200:
                data = r.json()
                reply = (data.get("reply") or "").strip()
                assert reply
                assert "EMERGENT_LLM_KEY not configured" not in reply
                return
        pytest.fail(f"Chat failed after retry. Last response: {last_text[:500]}")
