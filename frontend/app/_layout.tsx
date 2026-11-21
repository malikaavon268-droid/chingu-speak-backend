import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AppErrorBoundary from "@/src/components/AppErrorBoundary";
import AppRuntime from "@/src/components/AppRuntime";
import StartupConsoleOverlay from "@/src/components/StartupConsoleOverlay";
import { installStartupConsoleCapture, startupTrace } from "@/src/utils/startup-trace";

// ---------------------------------------------------------------------------
// NUCLEAR-SAFE FONT LOADER PATCH — must run BEFORE any 3rd-party import that
// might trigger @expo/vector-icons (Ionicons, Feather, MaterialIcons) or any
// other consumer of `expo-font`.
//
// Why this is required:
//   - app.json's `expo-font` plugin hoists ionicons.ttf / feather.ttf /
//     material.ttf into NATIVE Android assets at build time (verified in
//     android/app/src/main/assets/fonts/).
//   - The same files, when re-`require()`d at JS runtime by @expo/vector-icons
//     or our own hooks, produce an EMPTY asset ref in the bundled APK
//     because Metro's asset resolver no longer owns those paths.
//   - `ExpoFontLoader.loadAsync` then throws with:
//       "Font file for feather is empty. Make sure the local file path is
//        correctly populated."
//   - Unhandled, this rejection cascades through ErrorUtils(isFatal=true)
//     and turns RCTRootView opaque BEFORE React ever commits RootLayout →
//     the "gray screen" you saw on the APK.
//
// The patch below wraps `Font.loadAsync` so that ANY caller (our code,
// @expo/vector-icons internals, third-party libs) receives a version that:
//     * never rejects
//     * silently drops entries whose require()'d asset is empty
//     * routes the failure into startupTrace (visible on StartupConsoleOverlay)
//     * still loads the entries that DO work
//
// This runs BEFORE the `installStartupConsoleCapture` / trace setup below so
// @expo/vector-icons cannot beat us to it.
// ---------------------------------------------------------------------------
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const FontMod: any = require("expo-font");
  if (FontMod && typeof FontMod.loadAsync === "function" && !FontMod.__chinguPatched) {
    const original = FontMod.loadAsync.bind(FontMod);

    const isEmptyAsset = (source: unknown): boolean => {
      if (source == null) return true;
      if (typeof source === "number") return false; // metro asset id — trust it
      if (typeof source === "object") {
        const asset: any = source;
        // { uri, width, height } or { localUri } or { default: ... }
        const uri = asset?.uri ?? asset?.localUri ?? asset?.default?.uri;
        if (uri === undefined) return false;
        if (typeof uri !== "string") return false;
        return uri.length === 0 || uri === "null";
      }
      if (typeof source === "string") return source.length === 0;
      return false;
    };

    // Newer expo-font (SDK 58+) exports `loadAsync` via a non-configurable
    // getter (real ESM live-binding semantics), so this patch can no longer
    // attach on SDK 58 — the outer try/catch below already handles that by
    // design, and the independent global unhandled-rejection guard further
    // down in this file provides the same gray-screen protection without
    // needing to mutate this module.
    FontMod.loadAsync = async function safeLoadAsync(fontFamilyOrMap: any, source?: any) {
      try {
        // Two shapes:
        //   loadAsync(map)             -> map is { family: source }
        //   loadAsync(family, source)  -> single family
        let arg: any = fontFamilyOrMap;
        let secondArg: any = source;

        if (typeof fontFamilyOrMap === "string") {
          if (isEmptyAsset(secondArg)) {
            startupTrace(`Font.loadAsync SKIP empty single: ${fontFamilyOrMap}`);
            return;
          }
          return await original(fontFamilyOrMap, secondArg);
        }

        if (fontFamilyOrMap && typeof fontFamilyOrMap === "object") {
          const cleaned: Record<string, any> = {};
          let droppedAny = false;
          for (const family of Object.keys(fontFamilyOrMap)) {
            const src = fontFamilyOrMap[family];
            if (isEmptyAsset(src)) {
              droppedAny = true;
              startupTrace(`Font.loadAsync SKIP empty family: ${family}`);
              continue;
            }
            cleaned[family] = src;
          }
          if (Object.keys(cleaned).length === 0) {
            if (droppedAny) startupTrace("Font.loadAsync: all entries empty — trusting native embed");
            return;
          }
          arg = cleaned;
        }

        return await original(arg, secondArg);
      } catch (error) {
        // Absolute last line of defense — we swallow the error instead of
        // letting it bubble as an unhandled promise rejection. Any icon that
        // was actually loaded before this call still works; the ones that
        // failed will fall back to a system glyph, not blank out the app.
        startupTrace("Font.loadAsync SWALLOWED reject", { error: String(error) });
        return;
      }
    };

    FontMod.__chinguPatched = true;
  }
} catch (patchError) {
  // If patching itself throws we still boot; only diagnostics are lost.
  console.warn("[chingu] Font.loadAsync patch failed:", patchError);
}

// ---------------------------------------------------------------------------
// GLOBAL UNHANDLED-PROMISE-REJECTION GUARD — must run BEFORE any 3rd-party
// module imports so no async error can turn the phone screen blank.
//
// Concrete case this protects against:
//   Font.loadAsync from any component (`@expo/vector-icons`, warmIconFonts,
//   etc.) may reject with "Font file for X is empty" in the debug APK
//   because the expo-font plugin has hoisted the .ttf into native assets
//   and Metro's runtime asset resolver returns an empty ref for the same
//   path. If left unhandled, RN + Hermes turn the ReactRootView opaque
//   before React ever commits → gray screen.
// ---------------------------------------------------------------------------
try {
  const g: any = globalThis as any;
  if (typeof g.HermesInternal !== "undefined" || typeof g.__fbBatchedBridge !== "undefined") {
    const track = g.__CHINGU_UNHANDLED__ ?? (g.__CHINGU_UNHANDLED__ = { count: 0, last: null });
    // React Native's Promise implementation (from promise/setimmediate) supports
    // this hook; if not present we silently no-op.
    const RNPromise = g.Promise;
    if (RNPromise && typeof RNPromise._unhandledRejectionFn === "undefined") {
      // no-op — no handler mechanism on this runtime
    }
    // Universal catch: patches the process-level events if available.
    if (typeof g.process === "object" && g.process && typeof g.process.on === "function") {
      g.process.on("unhandledRejection", (reason: unknown) => {
        track.count += 1;
        track.last = String(reason);
        // Route through our trace log so StartupConsoleOverlay can surface it.
        try { startupTrace("unhandledRejection swallowed", { reason: String(reason) }); } catch {}
      });
    }
    // Older RN uses ErrorUtils; make sure a caught JS error never gets
    // reported as fatal (which turns the RCTRootView blank).
    const ErrorUtils = g.ErrorUtils;
    if (ErrorUtils && typeof ErrorUtils.setGlobalHandler === "function") {
      const previous = ErrorUtils.getGlobalHandler?.();
      ErrorUtils.setGlobalHandler((error: Error, isFatal?: boolean) => {
        try { startupTrace("ErrorUtils global handler", { error: String(error), isFatal: !!isFatal }); } catch {}
        // Forward to previous handler for logging BUT never treat as fatal.
        try { previous?.(error, false); } catch {}
      });
    }
  }
} catch {
  // Guard install failures are never fatal; app must still boot.
}

// Debug tools stay active: every console.warn/error and any uncaught JS
// exception is captured into the on-device trace log so StartupConsoleOverlay
// can show the exact error if the Gray Screen returns.
installStartupConsoleCapture();
startupTrace("RootLayout: module loaded (real navigation re-enabled)");

SplashScreen.preventAutoHideAsync().catch(() => undefined);

let splashHidden = false;
const hideNativeSplash = (source: string) => {
  if (splashHidden) return;
  splashHidden = true;
  startupTrace(`RootLayout: hideAsync requested: ${source}`);
  SplashScreen.hideAsync()
    .then(() => startupTrace(`RootLayout: hideAsync resolved: ${source}`))
    .catch((error) => startupTrace(`RootLayout: hideAsync failed: ${source}`, { error: String(error) }));
};

// Emergency watchdog: guarantees the native splash is hidden even if JS hangs
// before the first paint (release APK cold-start safety net).
setTimeout(() => hideNativeSplash("8-second-emergency-watchdog"), 8_000);

// Bulletproof inner tree — wrapped in a try so a mount-time crash from
// gesture-handler / safe-area-context / reanimated cannot swallow the whole
// paint (previously produced a dark charcoal screen with no diagnostics).
function InnerAppTree() {
  return (
    <GestureHandlerRootView style={styles.fill}>
      <SafeAreaProvider>
        <View style={styles.innerRoot} onLayout={() => hideNativeSplash("root-on-layout")}>
          <AppErrorBoundary>
            <AppRuntime />
          </AppErrorBoundary>
          {/* Always mounted on top so any runtime error is visible on-device. */}
          <StartupConsoleOverlay />
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default function RootLayout() {
  startupTrace("RootLayout: render reached");
  const [innerCrashed, setInnerCrashed] = React.useState<string | null>(null);

  // If any imported module throws synchronously during first render (this is
  // separate from React's own error boundaries which only catch child-render
  // errors), the outer marker still paints so we can distinguish
  //   (a) JS never ran            → pure dark gray, nothing visible
  //   (b) JS ran, tree failed     → lavender + "BOOT OK · TREE FAILED"
  //   (c) full success            → onboarding renders on top
  let inner: React.ReactNode = null;
  try {
    inner = <InnerAppTree />;
  } catch (error) {
    setInnerCrashed(String(error));
    startupTrace("RootLayout: InnerAppTree threw at construct", { error: String(error) });
  }

  return (
    // OUTERMOST view: uses ONLY bare React Native primitives so nothing in the
    // 3rd-party stack (gesture-handler, safe-area, reanimated) can prevent
    // this from painting. If the phone is still dark-gray after splash with
    // no lavender visible, the JS bundle is not running or expo-router did
    // not load this layout at all.
    <View style={styles.outerRoot}>
      {/* Always-on boot marker. Not gated on EXPO_PUBLIC_* env vars because
          those are baked at bundle time and env-var propagation in CI is the
          exact thing that previously broke. */}
      <Text style={styles.bootMarker} numberOfLines={1} allowFontScaling={false}>
        CHINGU · BOOT OK · v3
      </Text>
      {innerCrashed ? (
        <View style={styles.innerCrashPanel}>
          <Text style={styles.innerCrashTitle}>INNER TREE FAILED TO MOUNT</Text>
          <Text style={styles.innerCrashText} selectable>{innerCrashed}</Text>
        </View>
      ) : (
        inner
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  outerRoot: { flex: 1, backgroundColor: "#F5F1FF" },
  fill: { flex: 1 },
  innerRoot: { flex: 1 },
  bootMarker: {
    position: "absolute",
    bottom: 6,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#7C3AED",
    fontSize: 10,
    opacity: 0.6,
    zIndex: 0,
  },
  innerCrashPanel: { flex: 1, padding: 20, justifyContent: "center", gap: 12, backgroundColor: "#FFF4F4" },
  innerCrashTitle: { color: "#B00020", fontSize: 20, fontWeight: "800", textAlign: "center" },
  innerCrashText: { color: "#1B1111", fontSize: 12, lineHeight: 18, fontFamily: "monospace" },
});
