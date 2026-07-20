import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, RefreshControl } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { Ionicons, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useFocusEffect, usePathname } from "expo-router";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing, cancelAnimation } from "react-native-reanimated";

import { api, HistoryItem } from "@/src/api/client";
import { loadPrefs, usePrefs } from "@/src/state/prefs";
import { useProgress } from "@/src/state/progress";
import { getLessonMeta } from "@/src/data/lessons";
import { getNextLessonId, lessonIndex } from "@/src/data/lessons/unlock";
import { theme, chinguMascot } from "@/src/theme";
import CreditsPill from "@/src/components/CreditsPill";
import BouncePress from "@/src/components/BouncePress";
import FloatingMascot from "@/src/components/FloatingMascot";
import { useAppLocale } from "@/src/i18n";
import { scheduleStartupTraceUpload, STARTUP_BYPASS, startupTrace } from "@/src/utils/startup-trace";

// ─── Twinkling sparkle decoration (reanimated) ─────────────────────────────
function Sparkle({ top, left, right, size = 6, delay = 0, color = "#A78BFA" }: any) {
  const o = useSharedValue(0.25);
  const s = useSharedValue(0.8);
  React.useEffect(() => {
    const dur = 1200 + delay;
    o.value = withRepeat(withTiming(0.9, { duration: dur, easing: Easing.inOut(Easing.ease) }), -1, true);
    s.value = withRepeat(withTiming(1.15, { duration: dur, easing: Easing.inOut(Easing.ease) }), -1, true);
    return () => { cancelAnimation(o); cancelAnimation(s); };
  }, [o, s, delay]);
  const style = useAnimatedStyle(() => ({ opacity: o.value, transform: [{ scale: s.value }] }));
  return (
    <Animated.View
      style={[{
        pointerEvents: "none",
        position: "absolute",
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        top, left, right,
      }, style]}
    />
  );
}

export default function Home() {
  startupTrace("Home: render started", { bypass: STARTUP_BYPASS });
  const router = useRouter();
  const pathname = usePathname();
  const prefs = usePrefs();
  const progress = useProgress();
  const { t } = useAppLocale();
  const [history, setHistory] = React.useState<HistoryItem[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const nextLessonId = React.useMemo(() => getNextLessonId(progress.done), [progress.done]);
  const nextLesson = getLessonMeta(nextLessonId || undefined);

  const load = React.useCallback(async () => {
    try { const r = await api.listHistory(); setHistory(r.items.slice(0, 4)); } catch {}
  }, []);
  useFocusEffect(React.useCallback(() => {
    startupTrace("Home: focus effect started", { bypass: STARTUP_BYPASS });
    if (STARTUP_BYPASS) return;
    void loadPrefs().catch((error) => startupTrace("Home: preference load failed", { error: String(error) }));
    void load();
  }, [load]));

  React.useEffect(() => {
    startupTrace("Home: mounted");
    scheduleStartupTraceUpload();
  }, []);

  const onRefresh = async () => {
    if (STARTUP_BYPASS) return;
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };
  const scoped = React.useCallback((path: string) => {
    if (!pathname?.startsWith("/mobile")) return path;
    if (path.startsWith("/mobile")) return path;
    return `/mobile${path}`;
  }, [pathname]);

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#F4EDFF", "#F5F1FF", "#FFFFFF"]} locations={[0, 0.4, 1]} style={StyleSheet.absoluteFill} />
      {/* twinkling sparkles around the page */}
      <Sparkle top={120} left={28}  size={8} color="#C4B5FD" />
      <Sparkle top={200} right={36} size={6} color="#FBCFE8" delay={400} />
      <Sparkle top={300} left={20}  size={5} color="#A78BFA" delay={800} />
      <Sparkle top={420} right={26} size={7} color="#F472B6" delay={200} />

      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
          refreshControl={<RefreshControl tintColor={theme.primary} refreshing={refreshing} onRefresh={onRefresh} />}
        >
          {STARTUP_BYPASS && (
            <View testID="startup-bypass-banner" style={styles.debugBanner}>
              <Text style={styles.debugBannerTitle}>Startup debug bypass active</Text>
              <Text style={styles.debugBannerBody}>Home opened without authentication, storage hydration, or API calls.</Text>
            </View>
          )}
          {/* ─── Top bar: hamburger + wordmark + gems ────────────────────── */}
          <View style={styles.topBar}>
            <TouchableOpacity testID="home-menu" onPress={() => router.push(scoped("/(tabs)/profile") as any)} style={styles.iconBtn}>
              <Feather name="menu" size={20} color={theme.text} />
            </TouchableOpacity>

            <View style={styles.brandRow}>
              <Text style={styles.brandChingu}>chingu</Text>
              <Text style={styles.brandSpeak}>speak</Text>
            </View>

            <CreditsPill
              testID="home-credits-pill"
              credits={prefs.credits}
              onPress={() => router.push(scoped("/paywall") as any)}
            />
          </View>

          {/* ─── Hero card with mascot (glassmorphic) ─────────────────── */}
          <View style={styles.heroCardWrap}>
            <LinearGradient
              colors={["rgba(196,181,253,0.55)", "rgba(244,114,182,0.18)", "rgba(255,255,255,0.6)"]}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}
              style={StyleSheet.absoluteFill}
            />
            <BlurView intensity={28} tint="light" style={StyleSheet.absoluteFill} />
            <View style={styles.heroIllustration}>
              <FloatingMascot
                testID="home-hero-mascot"
                source={chinguMascot}
                size={220}
                amplitude={10}
                duration={3000}
                onPress={() => router.push(scoped("/chat") as any)}
              />
              {/* mini sparkles around mascot */}
              <Sparkle top={20}  left={20}  size={5} color="#F472B6" />
              <Sparkle top={70}  right={10} size={6} color="#A78BFA" delay={300} />
              <Sparkle top={170} left={8}   size={4} color="#C4B5FD" delay={500} />
              <Sparkle top={150} right={30} size={5} color="#FBCFE8" delay={700} />
            </View>

            <Text style={styles.heroGreeting}>{t("hiChingu" as any)}</Text>
            <Text style={styles.heroSub}>{t("languageFriend")}</Text>

            <BouncePress
              testID="hero-start-chat"
              onPress={() => router.push(scoped("/chat") as any)}
              pressScale={0.95}
              damping={11}
              stiffness={260}
            >
              <LinearGradient
                colors={["#A78BFA", "#C084FC", "#F472B6"]}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={styles.startCta}
              >
                <Ionicons name="chatbubbles" size={16} color="#fff" />
                <Text style={styles.startCtaText}>{t("startChat")}</Text>
              </LinearGradient>
            </BouncePress>
          </View>

          {/* ─── Voice Chat + Camera Translate ──────────────────────────── */}
          <View style={styles.duoRow}>
            <BouncePress
              testID="home-voice-card"
              style={{ flex: 1 }}
              onPress={() => router.push(scoped("/(tabs)/voice") as any)}
              pressScale={0.94}
            >
              <View style={styles.duoCard}>
                <LinearGradient colors={["#A78BFA", "#7C3AED"]} style={styles.duoIcon}>
                  <Ionicons name="mic" size={20} color="#fff" />
                </LinearGradient>
                <Text style={styles.duoTitle}>{t("voiceChat")}</Text>
              </View>
            </BouncePress>
            <BouncePress
              testID="home-camera-card"
              style={{ flex: 1 }}
              onPress={() => router.push(scoped("/camera") as any)}
              pressScale={0.94}
            >
              <View style={styles.duoCard}>
                <LinearGradient colors={["#F472B6", "#EC4899"]} style={styles.duoIcon}>
                  <Ionicons name="camera" size={20} color="#fff" />
                </LinearGradient>
                <Text style={styles.duoTitle}>{t("cameraTranslate")}</Text>
              </View>
            </BouncePress>
          </View>

          {/* ─── 4 Mode Cards (Tutor / Role-Play / Scenarios / Learn) ──── */}
          <Text style={styles.sectionTitle}>{t("practiceModes")}</Text>
          <View style={styles.modesRow}>
            {[
              { key: "tutor",     icon: "school",     color: "#8B5CF6", bg: "#EDE4FF", label: t("tutorMode" as any),  route: "/modes" },
              { key: "roleplay",  icon: "chatbubble-ellipses", color: "#F59E0B", bg: "#FEF3C7", label: t("rolePlayLabel" as any), route: "/modes" },
              { key: "scenarios", icon: "albums",     color: "#3B82F6", bg: "#DBEAFE", label: t("scenarios"), route: "/scenarios" },
              { key: "learn",     icon: "book",       color: "#10B981", bg: "#D1FAE5", label: t("learn"), route: "/learn" },
            ].map((m) => (
              <TouchableOpacity key={m.key} testID={`mode-${m.key}`} style={styles.modeCard} activeOpacity={0.85} onPress={() => router.push(scoped(m.route) as any)}>
                <View style={[styles.modeIcon, { backgroundColor: m.bg }]}>
                  <Ionicons name={m.icon as any} size={22} color={m.color} />
                </View>
                <Text style={styles.modeLabel}>{m.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* ─── Continue Learning ──────────────────────────────────────── */}
          <View style={styles.historyHead}>
            <Text style={styles.sectionTitle}>{t("continueLearning")}</Text>
            <TouchableOpacity onPress={() => router.push(scoped("/(tabs)/saved") as any)}>
              <Text style={styles.seeAll}>{t("seeAll")}</Text>
            </TouchableOpacity>
          </View>

          {history.length === 0 ? (
            <TouchableOpacity
              testID="continue-empty"
              style={styles.continueCard}
              activeOpacity={0.85}
              onPress={() => router.push(scoped(nextLesson ? `/lesson/${nextLesson.id}` : "/learn") as any)}
            >
              <View style={styles.continueIcon}>
                <Ionicons name={nextLesson ? "book" : "rocket"} size={18} color="#fff" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.continueTitle}>{nextLesson ? "Start Learning" : t("startFirstChat" as any)}</Text>
                <Text style={styles.continueSub}>
                  {nextLesson ? `Lesson ${lessonIndex(nextLesson.id) + 1} · ${nextLesson.titleEn}` : t("lesson1Hint" as any)}
                </Text>
              </View>
              <Text style={styles.continueAction}>{t("begin")}</Text>
            </TouchableOpacity>
          ) : history.map((h) => (
            <TouchableOpacity
              key={h.id}
              testID={`continue-${h.id}`}
              style={styles.continueCard}
              activeOpacity={0.85}
              onPress={() => router.push(scoped("/(tabs)/saved") as any)}
            >
              <View style={[styles.continueIcon, { backgroundColor: "#EC4899" }]}>
                <Ionicons name="bookmark" size={16} color="#fff" />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.continueTitle} numberOfLines={1}>{h.source_text}</Text>
                <Text style={styles.continueSub} numberOfLines={1}>{h.translated_text}</Text>
              </View>
              <Text style={styles.continueAction}>{t("begin")}</Text>
            </TouchableOpacity>
          ))}

          <View style={{ height: 140 }} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  debugBanner: { borderRadius: 18, borderWidth: 1, borderColor: "#C4B5FD", backgroundColor: "#EDE9FE", padding: 14, gap: 4 },
  debugBannerTitle: { color: "#5B21B6", fontSize: 14, fontWeight: "800" },
  debugBannerBody: { color: "#6D28D9", fontSize: 12, lineHeight: 17 },
  root: { flex: 1, backgroundColor: theme.bg },
  scroll: { paddingHorizontal: 18, paddingTop: 4 },

  // ─── Top bar ─────────────────────────────────────────────────────────
  topBar: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, marginBottom: 10 },
  iconBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", ...theme.shadow.sm },
  brandRow: { flexDirection: "row", alignItems: "baseline" },
  brandChingu: { color: "#1F2937", fontSize: 22, fontWeight: "900", letterSpacing: -0.4 },
  brandSpeak:  { color: theme.accent, fontSize: 22, fontWeight: "900", letterSpacing: -0.4, marginLeft: 2 },
  gemPill: { flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "#fff", paddingHorizontal: 10, paddingVertical: 6, borderRadius: 999, ...theme.shadow.sm },
  gemText: { color: theme.text, fontSize: 12, fontWeight: "800" },

  // ─── Hero ──────────────────────────────────────────────────────────────
  heroCardWrap: {
    backgroundColor: "rgba(255,255,255,0.55)",
    borderRadius: 28,
    paddingTop: 24,
    paddingBottom: 22,
    paddingHorizontal: 22,
    marginTop: 12,
    marginBottom: 18,
    alignItems: "center",
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
    ...theme.shadow.md,
  },
  heroIllustration: { width: 240, height: 240, alignItems: "center", justifyContent: "center" },
  mascotWrap: { width: 220, height: 220, alignItems: "center", justifyContent: "center" },
  mascot: { width: 220, height: 220 },
  bubble: { position: "absolute", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 18, zIndex: 2, ...theme.shadow.sm },
  bubbleBlue: { top: 16, left: 18, backgroundColor: "#60A5FA" },
  bubblePink: { top: 30, right: 8,  backgroundColor: "#EC4899" },
  bubbleText: { color: "#fff", fontWeight: "900", fontSize: 14 },

  heroGreeting: { color: theme.text, fontSize: 19, fontWeight: "900", marginTop: 4, letterSpacing: -0.4 },
  heroSub:      { color: theme.textMuted, fontSize: 13, marginTop: 4 },
  startCta: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 16, paddingHorizontal: 64, borderRadius: 999, marginTop: 18, shadowColor: theme.primary, shadowOpacity: 0.35, shadowRadius: 18, shadowOffset: { width: 0, height: 8 }, elevation: 10 },
  startCtaText: { color: "#fff", fontSize: 15, fontWeight: "800" },

  // ─── Duo cards ─────────────────────────────────────────────────────────
  duoRow: { flexDirection: "row", gap: 12, marginBottom: 24 },
  duoCard: { flex: 1, backgroundColor: "#fff", borderRadius: 20, padding: 16, alignItems: "center", gap: 10, ...theme.shadow.sm },
  duoIcon: { width: 42, height: 42, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  duoTitle: { color: theme.text, fontSize: 13, fontWeight: "800", textAlign: "center", lineHeight: 16 },

  // ─── Section title ─────────────────────────────────────────────────────
  sectionTitle: { color: theme.text, fontSize: 16, fontWeight: "800", marginBottom: 12, letterSpacing: -0.2 },

  // ─── Mode 4-grid ───────────────────────────────────────────────────────
  modesRow: { flexDirection: "row", justifyContent: "space-between", marginBottom: 26 },
  modeCard: { width: "23%", alignItems: "center", gap: 8 },
  modeIcon: { width: 56, height: 56, borderRadius: 18, alignItems: "center", justifyContent: "center", ...theme.shadow.sm },
  modeLabel: { color: theme.text, fontSize: 11, fontWeight: "700", textAlign: "center", lineHeight: 14 },

  // ─── Continue Learning ────────────────────────────────────────────────
  historyHead: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  seeAll: { color: theme.primary, fontSize: 13, fontWeight: "700" },
  continueCard: { flexDirection: "row", alignItems: "center", gap: 12, backgroundColor: "#fff", borderRadius: 18, padding: 14, marginBottom: 10, ...theme.shadow.sm },
  continueIcon: { width: 40, height: 40, borderRadius: 12, backgroundColor: "#8B5CF6", alignItems: "center", justifyContent: "center" },
  continueTitle: { color: theme.text, fontSize: 13, fontWeight: "800" },
  continueSub: { color: theme.textMuted, fontSize: 11, marginTop: 2 },
  continueAction: { color: theme.accent, fontSize: 12, fontWeight: "800" },
});
