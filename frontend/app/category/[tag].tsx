import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { api, ModuleContentResponse } from "@/src/api/client";
import { usePrefs } from "@/src/state/prefs";
import { theme } from "@/src/theme";
import { useAppLocale } from "@/src/i18n";
import { getCategory, SCENARIOS, FALLBACK_CONTENT } from "@/src/data/categories";
import { useProgress, completeModule, nextThreshold, TIER_KEYS } from "@/src/state/progress";
import LevelUpModal from "@/src/components/LevelUpModal";

const TIERS = [1, 2, 3] as const;
const MODULE_XP = 40;

export default function CategoryScreen() {
  const router = useRouter();
  const pathname = usePathname();
  const { tag } = useLocalSearchParams<{ tag: string }>();
  const prefs = usePrefs();
  const progress = useProgress();
  const { t } = useAppLocale();
  const category = getCategory(tag);

  const [tier, setTier] = React.useState<1 | 2 | 3>(1);
  const [aiContent, setAiContent] = React.useState<ModuleContentResponse["content"] | null>(null);
  const [aiLoading, setAiLoading] = React.useState(false);
  const [lockedHint, setLockedHint] = React.useState<string | null>(null);
  const [xpToast, setXpToast] = React.useState<string | null>(null);
  const [levelUpTo, setLevelUpTo] = React.useState<number | null>(null);

  const scoped = React.useCallback(
    (p: string) => (pathname?.startsWith("/mobile") ? `/mobile${p}` : p),
    [pathname],
  );

  const moduleId = `${category.key}-l${tier}`;
  const moduleDone = progress.done.includes(moduleId);
  const tierLocked = (lvl: number) => lvl > progress.level;
  const fallback = FALLBACK_CONTENT[category.key][tier];
  const catScenarios = SCENARIOS.filter((s) => s.tag === category.tag);
  const next = nextThreshold(progress.level);
  const prevThreshold = next !== null ? [0, 60, 150, 280, 450][progress.level - 1] : 450;
  const pct = next !== null ? Math.min(100, Math.round(((progress.xp - prevThreshold) / (next - prevThreshold)) * 100)) : 100;

  // Dynamic AI content for the selected category + tier.
  React.useEffect(() => {
    let active = true;
    const run = async () => {
      try {
        setAiLoading(true);
        setAiContent(null);
        const res = await api.moduleContent({
          module: "learn",
          topic: `${category.tag} vocabulary and phrases`,
          level: `tier ${tier}`,
          app_locale: prefs.appLang,
          target_lang: prefs.to,
        });
        if (!active) return;
        setAiContent(res.content || null);
      } catch {
        if (active) setAiContent(null);
      } finally {
        if (active) setAiLoading(false);
      }
    };
    if (!tierLocked(tier)) run();
    return () => { active = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category.key, tier, prefs.appLang, prefs.to, progress.level]);

  const onSelectTier = (lvl: 1 | 2 | 3) => {
    if (tierLocked(lvl)) {
      setLockedHint(t("unlockAtLevel" as any).replace("{n}", String(lvl)));
      setTimeout(() => setLockedHint(null), 2500);
      return;
    }
    setTier(lvl);
  };

  const onComplete = async () => {
    const res = await completeModule(moduleId, MODULE_XP);
    if (res.alreadyDone) return;
    if (res.leveledUp) {
      setLevelUpTo(res.newLevel);
    } else {
      setXpToast(t("xpAwarded" as any).replace("{n}", String(res.awarded)));
      setTimeout(() => setXpToast(null), 2500);
    }
  };

  const openScenario = (s: (typeof SCENARIOS)[number]) => {
    if (s.level > progress.level) {
      setLockedHint(t("unlockAtLevel" as any).replace("{n}", String(s.level)));
      setTimeout(() => setLockedHint(null), 2500);
      return;
    }
    completeModule(`scn-${s.key}`, 10).catch(() => {});
    router.push({ pathname: scoped("/chat") as any, params: { mode: "roleplay", scenario: s.key, title: t(s.titleKey as any) } });
  };

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#F4EDFF", "#FFFFFF"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        {/* Sticky header */}
        <View style={styles.header}>
          <TouchableOpacity testID="category-back" onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="chevron-back" size={22} color={theme.text} />
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, marginLeft: -38 }}>
            <View style={[styles.catIcon, { backgroundColor: category.color + "22" }]}>
              <Ionicons name={category.icon as any} size={16} color={category.color} />
            </View>
            <Text style={styles.title} testID="category-title">{t(category.nameKey as any)}</Text>
          </View>
        </View>

        {/* Progress strip */}
        <View style={styles.progressCard} testID="category-progress">
          <View style={styles.progressTop}>
            <Text style={styles.progressLabel}>
              {t("levelWord" as any)} {progress.level} · {t(TIER_KEYS[progress.level - 1] as any)}
            </Text>
            <Text style={styles.xpText}>{progress.xp} {t("xpWord" as any)}</Text>
          </View>
          <View style={styles.xpTrack}>
            <LinearGradient colors={["#A78BFA", "#EC4899"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.xpFill, { width: `${pct}%` }]} />
          </View>
          <Text style={styles.xpHint}>
            {next !== null ? `${next - progress.xp} ${t("xpToNext" as any)}` : t("maxLevelReached" as any)}
          </Text>
        </View>

        {/* Tier chips — fixed-size, horizontal scroller */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tierScroller} contentContainerStyle={styles.tierRow}>
          {TIERS.map((lvl) => {
            const locked = tierLocked(lvl);
            const active = tier === lvl;
            return (
              <TouchableOpacity
                key={lvl}
                testID={`category-tier-${lvl}`}
                onPress={() => onSelectTier(lvl)}
                style={[styles.tierChip, active && styles.tierChipActive]}
              >
                {locked && <Ionicons name="lock-closed" size={12} color={active ? "#fff" : "#9CA3AF"} />}
                <Text style={[styles.tierChipText, active && styles.tierChipTextActive]}>
                  {t("levelWord" as any)} {lvl}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {lockedHint && (
          <View style={styles.lockedHint} testID="locked-hint">
            <Ionicons name="lock-closed" size={12} color="#B45309" />
            <Text style={styles.lockedHintText}>{lockedHint}</Text>
          </View>
        )}

        <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 4, paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
          {/* Vocabulary */}
          <Text style={styles.section}>{t("vocabulary" as any)}</Text>
          <View style={styles.wordWrap} testID="category-vocab">
            {(aiContent?.steps?.length ? aiContent.steps.map((s) => s.heading || "").filter(Boolean).slice(0, 6) : fallback.vocab).map((w, i) => (
              <View key={`${w}-${i}`} style={styles.wordChip}>
                <Text style={styles.wordText}>{w}</Text>
              </View>
            ))}
          </View>

          {/* Phrases */}
          <Text style={styles.section}>{t("phrases" as any)}</Text>
          <View style={styles.card} testID="category-phrases">
            {(aiContent?.practice_prompts?.length ? aiContent.practice_prompts.slice(0, 4) : fallback.phrases).map((p, i) => (
              <View key={i} style={[styles.phraseRow, i > 0 && styles.phraseBorder]}>
                <Ionicons name="chatbubble-ellipses-outline" size={15} color={category.color} />
                <Text style={styles.phraseText}>{p}</Text>
              </View>
            ))}
            <TouchableOpacity
              testID="category-practice-chat"
              onPress={() => router.push({ pathname: scoped("/chat") as any, params: { mode: "tutor", title: t(category.nameKey as any) } })}
              activeOpacity={0.85}
              style={styles.practiceBtn}
            >
              <Ionicons name="sparkles" size={14} color="#8B5CF6" />
              <Text style={styles.practiceBtnText}>{t("practiceInChat" as any)}</Text>
            </TouchableOpacity>
          </View>

          {/* AI Booster */}
          <Text style={styles.section}>{t("aiBooster" as any)}</Text>
          <View style={styles.card} testID="category-ai-booster">
            {aiLoading ? (
              <ActivityIndicator color="#8B5CF6" size="small" />
            ) : (
              <Text style={styles.aiIntro}>{aiContent?.intro || t("moduleLoadFailed" as any)}</Text>
            )}
          </View>

          {/* Complete module */}
          <TouchableOpacity testID="category-complete-module" onPress={onComplete} disabled={moduleDone} activeOpacity={0.9} style={{ marginTop: 16 }}>
            <LinearGradient
              colors={moduleDone ? ["#D1D5DB", "#D1D5DB"] : ["#A78BFA", "#EC4899"]}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              style={styles.completeBtn}
            >
              <Ionicons name={moduleDone ? "checkmark-circle" : "flag"} size={16} color="#fff" />
              <Text style={styles.completeText}>
                {moduleDone ? t("completedWord" as any) : `${t("markComplete" as any)} · +${MODULE_XP} ${t("xpWord" as any)}`}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          {xpToast && (
            <Text style={styles.xpToast} testID="xp-toast">{xpToast}</Text>
          )}

          {/* Scenarios for this category */}
          <Text style={styles.section}>{t("scenarios" as any)}</Text>
          {catScenarios.map((s) => {
            const locked = s.level > progress.level;
            return (
              <TouchableOpacity
                key={s.key}
                testID={`category-scenario-${s.key}`}
                style={[styles.scnCard, locked && { opacity: 0.55 }]}
                activeOpacity={0.85}
                onPress={() => openScenario(s)}
              >
                <View style={[styles.scnIcon, { backgroundColor: s.color + "22" }]}>
                  <Ionicons name={s.icon as any} size={20} color={s.color} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.scnTitle}>{t(s.titleKey as any)}</Text>
                  <Text style={styles.scnBlurb}>{t(s.blurbKey as any)}</Text>
                </View>
                <View style={[styles.levelBadge, locked && styles.levelBadgeLocked]}>
                  {locked ? (
                    <Ionicons name="lock-closed" size={11} color="#9CA3AF" />
                  ) : (
                    <Text style={styles.levelBadgeText}>{t("levelWord" as any)} {s.level}</Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>

      <LevelUpModal visible={levelUpTo !== null} newLevel={levelUpTo || 1} onClose={() => setLevelUpTo(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 8 },
  iconBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", ...theme.shadow.sm },
  catIcon: { width: 26, height: 26, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  title: { color: theme.text, fontSize: 17, fontWeight: "800" },

  progressCard: { marginHorizontal: 20, marginTop: 8, backgroundColor: "#fff", borderRadius: 18, padding: 14, ...theme.shadow.sm },
  progressTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  progressLabel: { color: theme.text, fontSize: 13, fontWeight: "800" },
  xpText: { color: "#8B5CF6", fontSize: 12, fontWeight: "800" },
  xpTrack: { height: 8, borderRadius: 4, backgroundColor: "#F1EBFB", overflow: "hidden" },
  xpFill: { height: 8, borderRadius: 4 },
  xpHint: { color: theme.textMuted, fontSize: 11, marginTop: 6 },

  tierScroller: { flexGrow: 0, flexShrink: 0, height: 56 },
  tierRow: { paddingHorizontal: 20, gap: 8, alignItems: "center" },
  tierChip: { height: 36, paddingHorizontal: 14, borderRadius: 999, backgroundColor: "#fff", borderWidth: 1, borderColor: theme.border, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 6, flexShrink: 0 },
  tierChipActive: { backgroundColor: theme.primary, borderColor: theme.primary },
  tierChipText: { color: theme.text, fontSize: 12, fontWeight: "700" },
  tierChipTextActive: { color: "#fff" },

  lockedHint: { flexDirection: "row", alignItems: "center", gap: 6, marginHorizontal: 20, marginBottom: 8, backgroundColor: "#FEF3C7", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8 },
  lockedHintText: { color: "#B45309", fontSize: 12, fontWeight: "700", flex: 1 },

  section: { color: theme.text, fontSize: 15, fontWeight: "800", marginTop: 16, marginBottom: 8 },
  wordWrap: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  wordChip: { paddingHorizontal: 12, height: 32, borderRadius: 999, backgroundColor: "#fff", borderWidth: 1, borderColor: theme.border, alignItems: "center", justifyContent: "center" },
  wordText: { color: theme.text, fontSize: 12, fontWeight: "700" },

  card: { backgroundColor: "#fff", borderRadius: 18, padding: 14, ...theme.shadow.sm },
  phraseRow: { flexDirection: "row", alignItems: "flex-start", gap: 8, paddingVertical: 8 },
  phraseBorder: { borderTopWidth: 1, borderTopColor: "#F1EBFB" },
  phraseText: { color: theme.text, fontSize: 13, flex: 1, lineHeight: 19 },
  practiceBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 10, height: 40, borderRadius: 12, backgroundColor: "#EDE4FF" },
  practiceBtnText: { color: "#8B5CF6", fontSize: 13, fontWeight: "800" },

  aiIntro: { color: "#6B6585", fontSize: 12, lineHeight: 18 },

  completeBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, height: 50, borderRadius: 999 },
  completeText: { color: "#fff", fontSize: 14, fontWeight: "800" },
  xpToast: { color: "#10B981", fontSize: 13, fontWeight: "800", textAlign: "center", marginTop: 10 },

  scnCard: { flexDirection: "row", alignItems: "center", gap: 12, padding: 14, backgroundColor: "#fff", borderRadius: 18, marginBottom: 10, ...theme.shadow.sm },
  scnIcon: { width: 42, height: 42, borderRadius: 13, alignItems: "center", justifyContent: "center" },
  scnTitle: { color: theme.text, fontSize: 14, fontWeight: "800" },
  scnBlurb: { color: theme.textMuted, fontSize: 11, marginTop: 2 },
  levelBadge: { paddingHorizontal: 8, height: 22, borderRadius: 999, backgroundColor: "#EDE4FF", alignItems: "center", justifyContent: "center" },
  levelBadgeLocked: { backgroundColor: "#F3F4F6" },
  levelBadgeText: { color: "#8B5CF6", fontSize: 10, fontWeight: "800" },
});
