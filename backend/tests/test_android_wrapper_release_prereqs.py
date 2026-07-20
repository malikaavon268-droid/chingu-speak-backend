"""Regression tests for Android Gradle wrapper release prerequisites.

Verifies wrapper JAR integrity/version pins, Git/EAS inclusion, and Deepgram key fallback safety.
"""

import hashlib
import re
import subprocess
import tarfile
import zipfile
from pathlib import Path


ROOT = Path("/app")
FRONTEND = ROOT / "frontend"
WRAPPER_JAR = FRONTEND / "android/gradle/wrapper/gradle-wrapper.jar"
WRAPPER_PROPS = FRONTEND / "android/gradle/wrapper/gradle-wrapper.properties"
MOBILE_ROUTES = ROOT / "backend/mobile_routes.py"

EXPECTED_WRAPPER_SHA256 = "7d3a4ac4de1c32b59bc6a4eb8ecb8e612ccd0cf1ae1e99f66902da64df296172"
EXPECTED_DISTRIBUTION_URL = "https\\://services.gradle.org/distributions/gradle-8.14.3-bin.zip"
EXPECTED_DISTRIBUTION_SHA256 = "bd71102213493060956ec229d946beee57158dbd89d0e62b91bca0fa2c5f3531"


# ---------- Android wrapper binary integrity ----------
def test_wrapper_jar_exists_and_non_empty():
    assert WRAPPER_JAR.exists(), f"Missing file: {WRAPPER_JAR}"
    assert WRAPPER_JAR.stat().st_size > 0, "Wrapper JAR exists but is empty"


def test_wrapper_jar_checksum_matches_gradle_official():
    digest = hashlib.sha256(WRAPPER_JAR.read_bytes()).hexdigest()
    assert digest == EXPECTED_WRAPPER_SHA256


def test_wrapper_jar_contains_gradle_wrapper_main_class():
    # Zip/JAR signature check (PK..)
    header = WRAPPER_JAR.read_bytes()[:4]
    assert header[:2] == b"PK", "Wrapper JAR is not a ZIP/JAR binary"

    # Ensure launcher class is present so Gradle wrapper can execute.
    with zipfile.ZipFile(WRAPPER_JAR, "r") as jar_zip:
        assert "org/gradle/wrapper/GradleWrapperMain.class" in jar_zip.namelist()


# ---------- Wrapper version pinning ----------
def test_wrapper_properties_pin_gradle_8_14_3_and_distribution_sha():
    content = WRAPPER_PROPS.read_text(encoding="utf-8")
    assert f"distributionUrl={EXPECTED_DISTRIBUTION_URL}" in content
    assert f"distributionSha256Sum={EXPECTED_DISTRIBUTION_SHA256}" in content


# ---------- Inclusion in Git and EAS staging ----------
def test_wrapper_jar_not_gitignored():
    rel = "frontend/android/gradle/wrapper/gradle-wrapper.jar"
    r = subprocess.run(["git", "-C", str(ROOT), "check-ignore", "-q", rel])
    assert r.returncode == 1, "Wrapper JAR is ignored by git patterns"


def test_wrapper_jar_present_in_eas_style_staged_archive(tmp_path):
    archive = tmp_path / "eas_stage.tar.gz"
    rel = "./android/gradle/wrapper/gradle-wrapper.jar"
    cmd = (
        f"cd {FRONTEND} && "
        f"tar -czf {archive} --exclude-from=.easignore ."
    )
    subprocess.run(cmd, shell=True, check=True)

    with tarfile.open(archive, "r:gz") as tf:
        names = set(tf.getnames())

    assert rel in names, "Wrapper JAR missing from EAS-style staged archive"


# ---------- Deepgram fallback safety ----------
def test_no_hardcoded_deepgram_api_key_fallback():
    code = MOBILE_ROUTES.read_text(encoding="utf-8")

    # Ensure env fallback default remains empty-string (no embedded secret).
    assert 'os.environ.get("DEEPGRAM_API_KEY", "")' in code

    # Guard against accidental literal hardcoded fallback assignment.
    literal_assignment = re.search(r'deepgram_key\s*=\s*"[^\"]{8,}"', code)
    assert literal_assignment is None, "Detected literal hardcoded deepgram_key assignment"
