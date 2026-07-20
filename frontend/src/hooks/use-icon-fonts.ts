// Icon-font warmup used at app startup.
//
// IMPORTANT — why this is a no-op:
//
// app.json's `expo-font` plugin already embeds ionicons.ttf, feather.ttf and
// material.ttf as NATIVE font resources at build time (see the Android
// android/app/src/main/assets/fonts/ payload). Those fonts are available to
// React Native the moment the ReactRootView mounts — no JS-side loading is
// required.
//
// The previous implementation additionally called `Font.loadAsync` with
// `require("../../assets/fonts/feather.ttf")` etc. In the debug APK bundle
// that path resolves to an EMPTY asset ref because Metro's asset system no
// longer has ownership of files that the expo-font plugin has hoisted into
// native assets. The resulting rejection —
//
//   ExpoFontLoader.loadAsync has been rejected.
//   → Caused by: Font file for feather is empty.
//
// bubbled up as an uncaught promise rejection and left the phone on a
// dark-gray screen (unhandled promise rejection → RN root paint aborts on
// some Android + Hermes debug builds). See test_result.md iteration where
// the exact stack was captured via Expo Go's dev overlay.
//
// Trusting the plugin to have done its job removes the double-load and
// eliminates the crash entirely.

export async function warmIconFonts(): Promise<boolean> {
  // Fonts are already embedded natively by app.json's expo-font plugin.
  return true;
}

// Legacy compatibility export — some screens import this expecting a
// [ready, error] tuple hook. Fonts are always "ready" at this point.
export const useIconFonts = (): readonly [boolean, Error | null] => [true, null] as const;
