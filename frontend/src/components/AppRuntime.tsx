import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppState, AppStateStatus, Platform } from "react-native";

import { api } from "@/src/api/client";
import StreakClaimModal from "@/src/components/StreakClaimModal";
import { useMonetizationSync } from "@/src/hooks/use-monetization-sync";
import { applyLayoutDirection } from "@/src/i18n";
import { loadPrefs, setCredits, usePrefs } from "@/src/state/prefs";
import { startupTrace } from "@/src/utils/startup-trace";
import { withTimeout } from "@/src/utils/timeout";

const KEEPALIVE_INTERVAL_MS = 4 * 60 * 1000;
const INITIALIZATION_TIMEOUT_MS = 6_000;

export default function AppRuntime() {
  startupTrace("AppNavigation: AppRuntime render started");
  const prefs = usePrefs();
  const [showStreak, setShowStreak] = React.useState(false);
  const [streakLoading, setStreakLoading] = React.useState(false);
  const [streakDays, setStreakDays] = React.useState(0);
  const [streakReward, setStreakReward] = React.useState(5);

  React.useEffect(() => {
    startupTrace("AppNavigation: post-render initialization started");
    withTimeout(loadPrefs(), INITIALIZATION_TIMEOUT_MS, "Preferences initialization")
      .then(() => startupTrace("AppNavigation: preferences loaded"))
      .catch((error) => startupTrace("AppNavigation: preferences defaulted", { error: String(error) }));

    import("@/src/hooks/use-icon-fonts")
      .then(({ warmIconFonts }) => warmIconFonts())
      .then((loaded) => startupTrace(loaded ? "AppNavigation: icon font warmup finished" : "AppNavigation: icon font fallback active"))
      .catch((error) => startupTrace("AppNavigation: icon font warmup failed", { error: String(error) }));
  }, []);

  React.useEffect(() => {
    startupTrace("AppNavigation: layout direction effect started", { language: prefs.appLang });
    try {
      applyLayoutDirection(prefs.appLang);
    } catch (error) {
      startupTrace("AppNavigation: layout direction failed", { error: String(error) });
    }
  }, [prefs.appLang]);

  useMonetizationSync(prefs.userToken);

  React.useEffect(() => {
    let active = true;
    startupTrace("AppNavigation: streak initialization started", { authenticated: !!prefs.userToken });
    const run = async () => {
      if (!prefs.userToken) return setShowStreak(false);
      try {
        const status = await api.streakStatus(prefs.userToken);
        if (!active) return;
        setStreakDays(status.streak_days || 0);
        setStreakReward(status.next_reward || 5);
        setShowStreak(!!status.can_claim_today);
      } catch (error) {
        if (active) setShowStreak(false);
        startupTrace("AppNavigation: streak initialization failed", { error: String(error) });
      }
    };
    void run();
    return () => { active = false; };
  }, [prefs.userToken]);

  const claimStreak = async () => {
    startupTrace("AppNavigation: streak claim started");
    if (!prefs.userToken) return;
    try {
      setStreakLoading(true);
      const claim = await api.streakClaim(prefs.userToken);
      await setCredits(claim.credits || 0);
      setStreakDays(claim.streak_days || 0);
      setShowStreak(false);
    } catch {
      setShowStreak(false);
    } finally {
      setStreakLoading(false);
    }
  };

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    let mounted = true;
    const pingNow = () => { api.ping().catch(() => undefined); };
    const startTimer = () => {
      if (timer) return;
      pingNow();
      timer = setInterval(pingNow, KEEPALIVE_INTERVAL_MS);
    };
    const stopTimer = () => {
      if (!timer) return;
      clearInterval(timer);
      timer = null;
    };
    startupTrace("AppNavigation: keepalive effect started");
    startTimer();
    const handle = (state: AppStateStatus) => {
      if (!mounted) return;
      if (state === "active") startTimer();
      else stopTimer();
    };
    const sub = Platform.OS !== "web" ? AppState.addEventListener("change", handle) : null;
    return () => {
      mounted = false;
      stopTimer();
      sub?.remove?.();
    };
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: "#F5F1FF" }, animation: "slide_from_right", animationDuration: 280 }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="camera" />
        <Stack.Screen name="chat" />
        <Stack.Screen name="language-picker" options={{ presentation: "modal" }} />
        <Stack.Screen name="settings" />
        <Stack.Screen name="paywall" options={{ presentation: "modal" }} />
        <Stack.Screen name="admin-login" />
        <Stack.Screen name="admin" />
        <Stack.Screen name="auth" options={{ presentation: "modal" }} />
        <Stack.Screen name="translate-screen" />
        <Stack.Screen name="voice-screen" />
        <Stack.Screen name="saved-screen" />
        <Stack.Screen name="profile-screen" />
      </Stack>
      <StreakClaimModal visible={showStreak} streakDays={streakDays} reward={streakReward} loading={streakLoading} onClaim={claimStreak} onClose={() => setShowStreak(false)} />
    </>
  );
}