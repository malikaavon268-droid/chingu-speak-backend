# Chingu Speak — Full Project (Feb 2026)

## Product definition

- **Problem:** Help mobile users translate, practice, and learn languages through text, voice, camera, and guided scenarios.
- **Architecture:** Expo SDK 54 mobile client; FastAPI + MongoDB workspace backend; PHP + MySQL production API/admin path.
- **Primary personas:** language learners, travelers, multilingual professionals, and administrators managing content and service settings.
- **Core requirements:** reliable Android/iOS startup, localized RTL/LTR navigation, translation and practice flows, gamified progression, safe device-permission handling, and production API parity.

## Workspace verification — 2026-06-13

- Fully recursively cloned `https://github.com/ghizlanefit-cell/chinguspeak-v3` into `/app`.
- Verified required initialized directories: `/app/admin-panel` (45 files), `/app/backend` (6 files), `/app/php-backend` (21 files), and `/app/frontend` (104 files).
- Repository metadata and complete directory tree were retained; no application files were changed during setup.

## Android APK workflow — 2026-07-11

- Replaced `.github/workflows/android-apk.yml` with a direct GitHub Actions Android release build; the workflow does not use EAS or an Expo access token.
- The workflow uses Ubuntu, Node 20, Java 17 (Zulu), Yarn, Expo prebuild, Gradle `assembleRelease`, repository signing secrets, and uploads `app-release.apk` as an artifact.
- Generated a local JKS signing key at `frontend/release.keystore` with alias `upload`; its Base64 export is in the ignored local file `frontend/keystore_b64.txt`.

## Preview and workflow recovery — 2026-07-11

- Restored the Expo preview by reinstalling the frontend dependencies; the clone had no `yarn.lock` and incomplete local packages, preventing Expo from resolving `expo-audio`.
- Added the generated `frontend/yarn.lock` and changed the workflow to use `yarn install`.
- Removed the unavailable Yarn cache configuration from the Node 20 setup step; the preview was verified on the Chingu Speak onboarding screen.

## Expo Go connection recovery — 2026-07-11

- Recreated `frontend/.env` for the current workspace and directed Metro through `11b578d4-9896-406f-9774-7c8f633d8b80.preview.emergentagent.com`.
- Removed old-workspace configuration references and restarted Metro.
- Verified the current host serves both a valid Expo Android manifest and the Android JavaScript bundle.
- Recreated `backend/.env` with the workspace MongoDB connection and verified `GET /api/ping` returns `200 OK`.

## Hostinger PHP mobile API connection — 2026-07-11

- Added `frontend/.env.production` so native production builds target `https://linen-wolf-239815.hostingersite.com/api` without duplicating the `/api` path.
- Added an additive existing-database migration at `php-backend/db/migrate_hostinger_llm.sql`; it preserves data and prevents preview-only Emergent keys from becoming active on Hostinger.
- Added OpenAI server-environment fallback support, Admin → LLM & API Keys OpenAI validation, safe missing-key errors, and removed a previously hardcoded Deepgram fallback key.
- Updated the PHP and Hostinger deployment guides with the API upload location, migration, and production key setup steps.

## Android release crash hardening — 2026-07-11

- The GitHub Actions Android workflow now writes `EXPO_PUBLIC_BACKEND_URL` to `frontend/.env` before Expo prebuild, using the Hostinger API host by default or a repository variable override.
- Added release checks that enforce Expo SDK 54 New Architecture with Reanimated 4.x and its final `react-native-worklets` Babel plugin.
- Added the missing `expo-asset` native peer dependency required by `expo-audio` and deduplicated `@expo/vector-icons` to version 15.1.1.
- Expo Doctor now passes every crash-relevant check; only the expected Continuous Native Generation sync notice remains. Local preview and release configuration verification passed.

## Android native startup crash remediation — 2026-07-11

- Video evidence confirmed the signed APK crashed before React Native rendered any UI.
- Removed `react-native-keyboard-controller@1.18.5`, the highest-risk native startup dependency under Expo SDK 54 / React Native 0.81 / New Architecture; its root `KeyboardProvider` was initialized before the first screen.
- Replaced all keyboard-controller components in root, chat, auth, and translate screens with built-in React Native `KeyboardAvoidingView` and `ScrollView` components.
- Verified no keyboard-controller import remains, ran a clean Android prebuild with New Architecture enabled, and confirmed the Expo preview renders successfully.

## EAS remote Android APK workflow — 2026-07-12

- Replaced the six-hour local Gradle workflow with an EAS remote APK workflow using `expo/expo-github-action@v8` and the existing internal-distribution `apk` profile.
- Removed GitHub runner Java, Gradle, Expo prebuild, local keystore, and artifact-upload steps; native compilation and signing now run on Expo infrastructure.
- The workflow validates `EXPO_TOKEN`, initializes the EAS project non-interactively, starts the APK build without waiting, and writes the EAS build URL to the GitHub Actions summary.
- Fixed EAS initialization failing to resolve `expo-router`: the workflow now runs `yarn install --frozen-lockfile` before `eas init`, while still leaving Gradle, prebuild, keystore, and local Android compilation on Expo infrastructure.
- Added and committed `frontend/yarn.lock` (`5c4efc7`) so EAS receives a deterministic dependency lockfile during its remote build setup.
- Fixed EAS Gradle startup failure by committing the previously untracked, valid `frontend/android/gradle/wrapper/gradle-wrapper.jar` in commit `31ed5e0`; the remote EAS worker can now execute `./gradlew`.

The entire chinguspeak project from `github.com/ghizlanefit-cell/chinguspeak` is now cloned into `/app`, plus the premium animation + mascot upgrade.

## Directory layout

```
/app
├── frontend/          # Expo mobile app (upgraded — moti + reanimated + new mascot)
├── backend/           # Python FastAPI mobile backend (server.py, mobile_routes.py)
├── php-backend/       # PHP API + auth + admin (Hostinger-ready, 23 files)
│   ├── api/           # users, mobile, auth, languages, scenarios, llm_keys, admins,
│   │                  # settings, dashboard, broadcast, styles
│   ├── lib/           # jwt, db, http, auth, seed
│   ├── config/        # config.php
│   ├── db/            # schema.sql + 2026-06-08 migration
│   ├── index.php      # entrypoint
│   ├── .htaccess
│   └── README.md
├── admin-panel/       # React admin web panel (Login, Dashboard, Users, Languages,
│                      # Scenarios, LlmKeys, Admins, Settings, MobilePreview)
├── scripts/           # pre-push-cleanup.sh, preview-mode-on.sh
├── .github/workflows/
│   └── android-apk.yml   # CI for Android APK build
├── HOSTINGER_DEPLOY.md  # deployment instructions
├── image_testing.md
└── memory/PRD.md
```

## Premium animation + mascot upgrade (this iteration)

### 1. New 3D purple mascot
- Generated via Gemini Nano Banana (`gpt-image-1` / EMERGENT_LLM_KEY).
- Replaces:
  - `frontend/assets/images/chingu-bot.png`
  - `frontend/assets/images/chingu-idle.png`
  - `frontend/assets/images/chingu-active.png`
- Source PNG kept at `frontend/assets/images/chingu-purple-0.png`.

### 2. Framer-Motion-style animations (moti + react-native-reanimated)
- Added `moti@0.30.0` (`yarn add moti`) and `expo-blur` (`yarn expo install expo-blur`).
- New reusable components under `frontend/src/components/`:
  - `BouncePress.tsx` — spring `whileTap={{ scale: 0.95 }}` for primary CTAs.
  - `FloatingMascot.tsx` — idle `y: [0, -8, 0]` loop + tap scale-bounce + speaking pulse.
  - `AnimatedWaveform.tsx` — live pink → purple gradient bars (replaces static pink bars).
  - `DraggableSheet.tsx` — drag-to-expand glassmorphic bottom sheet with spring snap.

### 3. Screens updated
- `app/index.tsx` (onboarding) — new mascot + bouncy "Get Started" / "Explore the app".
- `app/(tabs)/index.tsx` (home) — glassmorphic hero card (BlurView), floating mascot, bouncy "Start Chat" / "Voice Chat" / "Camera Translate".
- `app/(tabs)/_layout.tsx` — floating mic uses BouncePress + subtle pulse.
- `app/voice-screen.tsx` — `AnimatedWaveform` + `FloatingMascot` + `DraggableSheet` result panel.
- `app/_layout.tsx` — Stack now uses `animation: "slide_from_right"` + `animationDuration: 280`.

### 4. PHP backend + admin panel
Restored from the repo exactly as in source. Both run independently of the Expo app:

```
# PHP backend (run on any LAMP/Hostinger host)
cd php-backend
# Edit config/config.php with your DB credentials
# Import db/schema.sql + db/fix_2026_06_08.sql into MySQL
# Point your web server document root at php-backend/

# Admin panel
cd admin-panel
yarn install
yarn start         # dev
yarn build         # production bundle in build/
```

### 5. Native build notes
- Animations run at 60fps on iOS/Android dev & prod builds.
- Voice screen audio recording still uses `expo-audio` (unchanged).
- No new device permissions added.
- APK CI: `.github/workflows/android-apk.yml` builds a signed Android APK directly with Expo prebuild and Gradle (no EAS).

## Global language and navigation — 2026-07-11

- Added an app-wide locale layer for every existing app-interface language, including Spanish, Korean, Arabic, French, German, Japanese, Chinese, Portuguese, Russian, Italian, Dutch, Turkish, Polish, and Vietnamese.
- Connected language selection to navigation tabs, onboarding, home, profile, settings, language picker, translation, voice, camera, practice, saved history, and chat controls.
- Added RTL direction support for Arabic with a safe native refresh after language changes, plus RTL-aware shared Back controls.
- Verified Spanish and Korean UI switching, Arabic translations and RTL refresh path, App Language → Settings Back navigation, and Settings → Profile Back navigation.
- Added the missing `GET /api/public/settings` backend route so mobile startup no longer returns a 404.

### 6. Files to copy into your repo (animation upgrade)

```
frontend/src/components/BouncePress.tsx        (new)
frontend/src/components/FloatingMascot.tsx     (new)
frontend/src/components/AnimatedWaveform.tsx   (new)
frontend/src/components/DraggableSheet.tsx     (new)
frontend/app/index.tsx                         (updated)
frontend/app/_layout.tsx                       (updated)
frontend/app/(tabs)/index.tsx                  (updated)
frontend/app/(tabs)/_layout.tsx                (updated)
frontend/app/voice-screen.tsx                  (updated)
frontend/assets/images/chingu-bot.png          (replaced)
frontend/assets/images/chingu-idle.png         (replaced)
frontend/assets/images/chingu-active.png       (replaced)
frontend/package.json                          (added moti + expo-blur)
```

## Splash freeze diagnosis + full repo re-clone — 2026-07-12

- Cloned the full `appsumonadi/chinguspeak-v1.0.0keystone` repo into `/app` (frontend, backend, php-backend, admin-panel, scripts, .github workflows, memory, tests) preserving workspace `.git`/`.emergent` and env files.
- Restored preview: reinstalled frontend deps (SDK 54), rebuilt `/app/backend/.env` (MONGO_URL, DB_NAME, JWT_SECRET, EMERGENT_LLM_KEY), installed backend requirements (skipped pinned litellm wheel — already present), restarted services. Onboarding + Home tabs verified on web preview.
- APK splash-freeze ROOT CAUSE: `frontend/app/_layout.tsx` previously hid splash solely via `useIconFonts()`; in release APKs the font map is empty → `loaded=true` on first render → `SplashScreen.hideAsync()` could fire before Android's first frame (SDK 54 + New Arch) and be silently dropped → splash frozen. Expo Go loads fonts async from CDN → hide lands after layout → works. Ref: expo/expo#39648.
- P0 fix applied in `frontend/app/_layout.tsx`: splash hide now routes through root `onLayout` once `appReady` is true, plus a guarded 3-second fallback timeout to prevent indefinite startup block; duplicate hide calls are safely ignored.
- Verification passed: ESLint, TypeScript, Expo config resolution, Expo web onboarding render, testing-agent regression iteration 7, and an Android JavaScript export of all 1,609 modules. Native APK cold-start validation remains a release-device confirmation task, not a code blocker.
- Verified NOT the cause: startup API calls all async+caught (no php-backend wait), AdMob SDK not installed, expo-updates disabled in Manifest.
- Note: live Hostinger `/api/ping` returned HTML (not JSON) — php-backend routing/deploy on Hostinger needs verification before pointing native builds at it.

## EAS project archive ENOENT remediation — 2026-07-12

- Diagnosed EAS tarball upload failure as a tracked, zero-byte top-level file in `frontend/` whose filename contained control and invalid UTF-8 bytes; no broken symlinks were present.
- Deleted the corrupted tracked file and added `frontend/.easignore` covering Git metadata, dependencies, Expo/Metro state, generated builds, native caches, temporary files, logs, signing credentials, and local environment files.
- Verified the cleaned project with an EAS-style local archive emulation: 217 included paths, valid 11 MB tarball, zero broken symlinks, zero nonportable filenames, frozen Yarn install pass, TypeScript pass, and testing-agent regression pass.
- Official `eas build:inspect` archive generation reached the expected Expo account login requirement in this workspace; authenticated GitHub Actions remains the final upload confirmation.

## EAS Gradle wrapper restoration — 2026-07-13

- Resolved EAS `Unable to access jarfile android/gradle/wrapper/gradle-wrapper.jar` by restoring Gradle's official 8.14.3 wrapper JAR and ensuring it is included in Git/EAS archives.
- Verified wrapper SHA-256 `7d3a4ac4de1c32b59bc6a4eb8ecb8e612ccd0cf1ae1e99f66902da64df296172`, executable manifest, ZIP integrity, version alignment, and EAS-style staged inclusion.
- Added `distributionSha256Sum=bd71102213493060956ec229d946beee57158dbd89d0e62b91bca0fa2c5f3531` for the Gradle 8.14.3 distribution.
- Removed a hardcoded Deepgram credential fallback; transcription now uses the admin setting or `DEEPGRAM_API_KEY` and returns a safe configuration error when unavailable.
- Aligned `mobile_routes.py` JWT development fallback with `server.py`, restoring backend startup and public `/api/ping` + `/api/health` responses.

## Release APK splash-screen hardening — 2026-07-13

- Hardened native splash control with three independent release-safe paths: root content `onLayout`, a 3-second readiness fallback, and an unconditional module-level 8-second emergency hide watchdog.
- Wrapped preference hydration in a 6-second timeout and default-state fallback; initialization failures are logged but never block root rendering.
- Added `AbortController`-backed 8-second timeout handling to the shared API client, covering public settings, auth/credits, streak checks, keepalive, and all feature requests.
- Added a root React Error Boundary with a safe retry screen; both boundary activation and rendering explicitly hide the native splash.
- Verified ESLint, TypeScript, onboarding render, onboarding-to-home navigation, and startup console output. Native release APK cold-start remains the final confirmation.

## Temporary Emergent backend + Universal LLM routing — 2026-07-13

- Configured `EMERGENT_LLM_KEY` only in the ignored backend environment; no LLM credential is embedded in Expo source, `EXPO_PUBLIC_*`, `app.json`, `eas.json`, or committed files.
- Switched every EAS build profile (`apk`, `preview`, `production`, `production-apk`) from the temporary Hostinger URL to `https://chingu-mobile-dev.preview.emergentagent.com`.
- Expo preview already used the same Emergent backend through `frontend/.env`, so preview and APK builds now share one FastAPI/MongoDB test backend.
- Verified public backend health plus real external `/api/chat` and `/api/translate` responses using the server-side Universal LLM integration.
- Migrated active FastAPI text, image, chat, and module generation calls to `stream_message()` through a shared helper with one short retry for transient provider budget/rate/connection failures; three consecutive external chat calls passed.
- Hostinger can be restored later by changing only `EXPO_PUBLIC_BACKEND_URL`; the mobile client never needs direct access to an LLM key.

## Deep startup isolation + native diagnostics — 2026-07-13

- Confirmed Expo SDK 54 prebuild itself generates `.expo/.virtual-metro-entry` in `MainApplication.kt`; it is not the release-only root cause and was intentionally preserved.
- Reduced root `_layout.tsx` to a minimal shell: splash control, root providers, Error Boundary, Router, and trace instrumentation only. Preferences, language direction, monetization, streak, keepalive, and font warmup now load lazily after first render in `AppRuntime`.
- Added startup checkpoints from module evaluation through RootLayout, Router, debug screen, Home, and deferred initialization. Diagnostic builds upload traces at 1.5s, 5s, and 9s to `/api/startup-diagnostics`; retrieve them with `/api/startup-diagnostics/latest` because EAS build logs cannot include runtime device logs.
- Added a native `MainActivity` 10-second splash watchdog using `SplashScreenManager.hide()`; this works even when JavaScript never starts.
- Added `startup-debug` isolation route. The GitHub Actions `apk` profile sets `EXPO_PUBLIC_STARTUP_BYPASS=true`, skips auth/storage/network startup calls, displays a trace screen, and redirects directly to Home.
- Removed the runtime icon-font CDN loader after diagnostics reproduced repeated empty-font rejections. Release export confirms all vector fonts are bundled as non-empty assets; startup no longer awaits font loading.
- Validation passed: TypeScript, ESLint, Python lint/compile, 14 backend/release prerequisite tests, normal preview navigation, bypass trace upload, and Android release JavaScript export with 45 assets.
- Final release gates passed after regression fixes: zero ESLint warnings/errors, TypeScript pass, 19 combined backend/release tests, guarded debug route, and Android no-bytecode export. Hermes bytecode cannot execute in this ARM workspace, but EAS uses its own Android build image and previously built the APK successfully.

## Emergency Testing Screen + native icon fonts — 2026-07-13

- Replaced the entire Expo Router/AppRuntime startup path with a bare React Native root that immediately renders `Testing Screen`; Router, vector icons, assets, authentication, storage, and API initialization are not imported or executed.
- Root `AppErrorBoundary` now prints the exact error name, message, JavaScript stack, and React component stack directly on-screen instead of a generic recovery message.
- Ran `npx expo install --fix`; Expo confirmed dependencies are already synchronized.
- Copied non-empty Ionicons, Feather, and Material Icons files into `assets/fonts/` and lowercase `android/app/src/main/assets/fonts/` aliases matching the exact `@expo/vector-icons` family names (`ionicons`, `feather`, `material`). Android ExpoFontLoader detects these native assets as already loaded and avoids the rejected JS asset reload path.
- Added `expo-font` config-plugin references so future prebuilds regenerate the same native files. A clean SDK 54 prebuild reproduced all three fonts with correct non-zero sizes.
- Added guarded `Font.loadAsync` warmup that catches failures and proceeds with system-font fallbacks; splash rendering never waits for fonts.
- Converted GitHub Actions to build a self-contained `app-debug.apk`: Java 17, temporary debug keystore, bundled JS with Metro developer support disabled, font-size checks, and artifact upload.
- Web preview verified the exact `Testing Screen`; deployment scan passed with no blockers.

## Backlog
- P1: Verify Hostinger php-backend `/api/*` routing returns JSON; resolve committed `android/` vs app.json config drift (`prebuild --clean`).
- P2: Add fetch timeouts in `src/api/client.ts`; align ICON_VECTOR_VERSION with @expo/vector-icons 15.1.1.

## Category learning + progression + full i18n — 2026-07-12

- Category chips on /scenarios now navigate to dedicated screens `/category/{daily|travel|work|school}` with dynamic AI content (POST /api/modules/content) + static fallback vocab/phrases per tier (src/data/categories.ts).
- Gamified progression (src/state/progress.ts): XP store, levels 1–5 (0/60/150/280/450), module completion +40 XP, scenario open +10 XP, auto level-up with LevelUpModal, tier/scenario locking by level, profile "Your Progress" card. Level synced into prefs.level.
- i18n system extended (src/i18n/extra.ts merged into t()): ~45 new keys fully translated for en/es/ko/ar/fr; scenarios, category, home, learn, profile screens localized. Other locales fall back to English for new keys.
- Backend fix: server.py now calls register_mobile_routes(app, db) — /api/modules/content, streaks, translate, chat mobile routes were previously unregistered (404).
- Testing agent iteration_6: backend 6/6 + all frontend flows PASS (KO/ES/AR verified live).

## Backlog (updated)
- P0: No open code blockers; splash-freeze startup guard resolved on 2026-07-12.
- P1: Hostinger php-backend needs /api/modules/content + streak parity check for production APK; verify /api routing returns JSON.
- P2: Full translations of new keys for remaining 10 locales (currently English fallback); testIDs on app-language rows; RNW shadow/pointerEvents deprecation cleanup.
- P3: Run release APK device validation to fully confirm splash-freeze resolution on Android cold start.

## Real navigation re-enabled + workspace re-clone — 2026-07-13 (this session)

- Fully re-cloned `https://github.com/skinzinco-lgtm/Chingu-speak-1.0.0` into `/app` (frontend, backend, php-backend as reference-only, admin-panel, `.github/workflows/android-apk.yml`, memory, scripts), preserving `.git`/`.emergent` and the pod's protected `frontend/.env` (`EXPO_PACKAGER_PROXY_URL`/`EXPO_PACKAGER_HOSTNAME`) and `backend/.env` (`MONGO_URL`/`DB_NAME`).
- Configured `backend/.env`: added `EMERGENT_LLM_KEY`, `JWT_SECRET`, `ADMIN_USERNAME`/`ADMIN_PASSWORD`. Installed all backend Python deps (emergentintegrations/litellm already present in the base image; rest installed via pip).
- Installed all frontend deps via `yarn install` (new deps pulled in: `@react-navigation/*`, `expo-audio`, `expo-image-picker`, `expo-file-system`, `expo-asset`, `expo-updates`, `@react-native-community/datetimepicker`).
- **Re-enabled real navigation** in `frontend/app/_layout.tsx`: removed the emergency "Testing Screen" bypass; root now renders `GestureHandlerRootView > SafeAreaProvider > AppErrorBoundary > AppRuntime` (the full app Stack with all screens) with `StartupConsoleOverlay` always mounted on top and a splash-hide watchdog (onLayout + 8s emergency timeout).
- Set `EXPO_PUBLIC_STARTUP_DIAGNOSTICS=true` in `frontend/.env` so the on-device runtime console stays visible; `EXPO_PUBLIC_MOCK_API` left unset so the app talks to the real FastAPI backend (not `src/api/mocks.ts`).
- **Verified live, no Gray Screen**: onboarding → Home tabs (Home/Translate/Voice/Saved/Profile) → chat round-trip (real Gemini reply via EMERGENT_LLM_KEY) → translate round-trip → admin login/stats, all confirmed via testing_agent_v3_expo iteration_14 (backend 13/13 pytest pass).
- **Bug found & fixed**: `StartupConsoleOverlay` was an opaque absolute-positioned top band that intercepted taps on real controls underneath it (reproduced on Auth screen's Register tab). Fixed by setting `pointerEvents="box-none"` on the shell and `pointerEvents="none"` + auto-`scrollToEnd` on the log `ScrollView`, so the overlay is purely visual and never blocks touches, while still auto-following the latest trace line.
- Updated `/app/memory/test_credentials.md` with the admin login (chingunadi / 0644782611, seeded from `backend/.env` on startup).
- Known non-blocking gap: `POST /api/transcribe` (Deepgram STT in `mobile_routes.py`) needs `DEEPGRAM_API_KEY`, not configured — returns a clean 503, does not crash the app.

## Next tasks
1. User: use Expo Go / the live preview URL to test on a physical device now that real navigation + the on-device debug console are active; if a Gray Screen ever returns, the exact error will show via `AppErrorBoundary`/`StartupConsoleOverlay`.
2. For an installable APK, use Emergent's **Publish** button (top-right) — this environment does not run the repo's own GitHub Actions/EAS workflow.
3. Configure `DEEPGRAM_API_KEY` (admin settings or backend env) to enable voice transcription.
4. Verify Hostinger php-backend `/api/*` JSON routing and mobile endpoint parity (php-backend is kept reference-only in this workspace).
5. P2: Audit other top-of-screen controls (chat-back, admin-back, translate header) that sit near the overlay band for the same touch-blocking pattern class, though the box-none/none fix should cover all of them.
