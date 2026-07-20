"""Startup diagnostics + startup support endpoint tests.

Covers trace ingestion/retrieval, _id exclusion, and core startup-safe health routes.
"""

import time
import uuid


class TestStartupDiagnostics:
    # Startup diagnostics endpoints
    def test_startup_diagnostics_post_records_session(self, api_client, base_url):
        session_id = f"TEST_startup_{uuid.uuid4().hex[:10]}"
        payload = {
            "session_id": session_id,
            "platform": "android",
            "bypass": True,
            "events": [
                "[CHINGU_STARTUP +10ms] module started",
                "[CHINGU_STARTUP +120ms] root onLayout fired",
            ],
        }

        response = api_client.post(f"{base_url}/api/startup-diagnostics", json=payload)
        assert response.status_code == 200, response.text
        data = response.json()
        assert data["status"] == "recorded"
        assert data["session_id"] == session_id

    def test_startup_diagnostics_latest_includes_record_and_excludes_mongo_id(self, api_client, base_url):
        session_id = f"TEST_startup_{uuid.uuid4().hex[:10]}"
        payload = {
            "session_id": session_id,
            "platform": "android",
            "bypass": False,
            "events": ["[CHINGU_STARTUP +220ms] AppRuntime render started"],
        }
        create_response = api_client.post(f"{base_url}/api/startup-diagnostics", json=payload)
        assert create_response.status_code == 200, create_response.text

        # Brief wait for write visibility on remote Mongo-backed service
        time.sleep(0.5)

        latest_response = api_client.get(f"{base_url}/api/startup-diagnostics/latest?limit=10")
        assert latest_response.status_code == 200, latest_response.text
        items = latest_response.json().get("items", [])
        assert isinstance(items, list)
        assert len(items) > 0

        matched = [item for item in items if item.get("session_id") == session_id]
        assert len(matched) >= 1, f"Session {session_id} not found in latest items"

        item = matched[0]
        assert "_id" not in item
        assert item["platform"] == "android"
        assert isinstance(item.get("events"), list)

    def test_startup_diagnostics_limit_bounds(self, api_client, base_url):
        response = api_client.get(f"{base_url}/api/startup-diagnostics/latest?limit=999")
        assert response.status_code == 200, response.text
        items = response.json().get("items", [])
        assert len(items) <= 25


class TestStartupSupportRoutes:
    # Startup support and keepalive routes
    def test_ping_returns_ok(self, api_client, base_url):
        response = api_client.get(f"{base_url}/api/ping")
        assert response.status_code == 200, response.text
        data = response.json()
        assert data["status"] == "ok"
        assert data["service"] == "chingu-speak"

    def test_health_returns_ok(self, api_client, base_url):
        response = api_client.get(f"{base_url}/api/health")
        assert response.status_code == 200, response.text
        assert response.json().get("status") == "ok"