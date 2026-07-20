// Fully offline "Learn / Tutor Mode" lesson path — Duolingo-style unit map.
// No network calls: reads structured curriculum from src/data/lessons and
// local XP/progress from src/state/progress. Strict sequential unlocking —
// a lesson opens only once the previous one in the 30-lesson sequence is done.
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { usePrefs } from "@/src/state/prefs";
import { useProgress, nextThreshold, LEVEL_THRESHOLDS, TIER_KEYS } from "@/src/state/progress";
import { useAppLocale } from "@/src/i18n";
import { theme } from "@/src/theme";
import { getLanguage } from "@/src/constants/languages";
import { LESSONS, lessonsByLevel, XP_PER_LESSON, hasDedicatedPack } from "@/src/data/lessons";
import { getNextLessonId, isLessonUnlocked, levelProgress } from "@/src/data/lessons/unlock";

const LEVELS = [1, 2, 3, 4, 5] as const;

export default function LearnScreen() {
  const router = useRouter();
  const prefs = usePrefs();
  const progress = useProgress();
  const { t } = useAppLocale();

  const doneIds = progress.done;
  const targetLang = getLanguage(prefs.to);
  const dedicated = hasDedicatedPack(prefs.to);
  const nextLessonId = React.useMemo(() => getNextLessonId(doneIds), [doneIds]);

  const nextThresh = nextThreshold(progress.level);
  const prevThresh = LEVEL_THRESHOLDS[Math.max(0, progress.level - 1)];
  const pct = nextThresh !== null
    ? Math.min(100, Math.round(((progress.xp - prevThresh) / (nextThresh - prevThresh)) * 100))
    : 100;

  const totalDone = doneIds.filter((id) => LESSONS.some((l) => l.id === id)).length;

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#F4EDFF", "#FFFFFF"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity testID="learn-back-button" onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="chevron-back" size={21} color={theme.text} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{t("learn")} · {targetLang.flag} {targetLang.name}</Text>
            <Text style={styles.sub}>{t("offlineLessons" as any)}</Text>
          </View>
          <View style={styles.xpPill} testID="learn-xp-pill">
            <Ionicons name="flash" size={13} color="#8B5CF6" />
            <Text style={styles.xpPillText}>{progress.xp} {t("xpWord" as any)}</Text>
          </View>
        </View>

        {/* Progress strip */}
        <View style={styles.progressCard} testID="learn-progress-card">
          <View style={styles.progressTop}>
            <Text style={styles.progressLabel}>
              {t("levelWord" as any)} {progress.level} · {t(TIER_KEYS[progress.level - 1] as any)}
            </Text>
            <Text style={styles.progressCount}>{totalDone}/{LESSONS.length} lessons</Text>
          </View>
          <View style={styles.xpTrack}>
            <LinearGradient colors={["#A78BFA", "#EC4899"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.xpFill, { width: `${pct}%` }]} />
          </View>
          <Text style={styles.xpHint}>
            {nextThresh !== null ? `${nextThresh - progress.xp} ${t("xpToNext" as any)}` : t("maxLevelReached" as any)}
          </Text>
        </View>

        {!dedicated && (
          <View style={styles.fallbackBanner} testID="learn-fallback-banner">
            <Ionicons name="information-circle" size={14} color="#B45309" />
            <Text style={styles.fallbackText}>{t("fallbackLangNote" as any)}</Text>
          </View>
        )}

        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          {LEVELS.map((level) => {
            const levelLessons = lessonsByLevel(level);
            const { done, total } = levelProgress(level, doneIds);
            return (
              <View key={level} style={styles.levelBlock}>
                <View style={styles.levelHeadRow}>
                  <Text style={styles.levelHead}>
                    {t("levelWord" as any)} {level} · {t(TIER_KEYS[level - 1] as any)}
                  </Text>
                  <View style={styles.levelChip}>
                    <Text style={styles.levelChipText}>{done}/{total}</Text>
                  </View>
                </View>

                {levelLessons.map((l) => {
                  const isDone = doneIds.includes(l.id);
                  const unlocked = isLessonUnlocked(l.id, doneIds);
                  const isCurrent = !isDone && l.id === nextLessonId;

                  return (
                    <TouchableOpacity
                      key={l.id}
                      testID={`lesson-card-${l.id}`}
                      disabled={!unlocked}
                      activeOpacity={0.85}
                      onPress={() => unlocked && router.push(`/lesson/${l.id}` as any)}
                      style={[styles.lessonCard, !unlocked && styles.lessonCardLocked, isCurrent && styles.lessonCardCurrent]}
                    >
                      <View
                        style={[
                          styles.lessonIcon,
                          isDone && styles.lessonIconDone,
                          isCurrent && styles.lessonIconCurrent,
                        ]}
                      >
                        <Ionicons
                          name={isDone ? "checkmark" : !unlocked ? "lock-closed" : (l.icon as any)}
                          size={18}
                          color={isDone || isCurrent ? "#fff" : !unlocked ? "#9CA3AF" : theme.primary}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Text style={[styles.lessonTitle, !unlocked && styles.lessonTitleLocked]}>{l.titleEn}</Text>
                        <Text style={styles.lessonSub}>
                          {isDone ? t("completedWord" as any) : !unlocked ? t("lockedLessonHint" as any) : `+${XP_PER_LESSON} ${t("xpWord" as any)}`}
                        </Text>
                      </View>
                      {isCurrent && (
                        <View style={styles.playBadge}>
                          <Ionicons name="play" size={13} color="#fff" />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  header: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 16, paddingVertical: 10 },
  iconBtn: {
    width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center",
    backgroundColor: "#fff", borderWidth: 1, borderColor: "#ECE4FD",
  },
  title: { color: theme.text, fontSize: 16, fontWeight: "800" },
  sub: { color: theme.textMuted, fontSize: 12, marginTop: 2 },
  xpPill: { flexDirection: "row", alignItems: "center", gap: 4, backgroundColor: "#EDE4FF", paddingHorizontal: 10, height: 30, borderRadius: 999 },
  xpPillText: { color: "#8B5CF6", fontSize: 12, fontWeight: "800" },

  progressCard: { marginHorizontal: 16, marginTop: 4, backgroundColor: "#fff", borderRadius: 18, padding: 14, ...theme.shadow.sm },
  progressTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  progressLabel: { color: theme.text, fontSize: 13, fontWeight: "800" },
  progressCount: { color: "#8B5CF6", fontSize: 12, fontWeight: "800" },
  xpTrack: { height: 8, borderRadius: 4, backgroundColor: "#F1EBFB", overflow: "hidden" },
  xpFill: { height: 8, borderRadius: 4 },
  xpHint: { color: theme.textMuted, fontSize: 11, marginTop: 6 },

  fallbackBanner: { flexDirection: "row", alignItems: "center", gap: 6, marginHorizontal: 16, marginTop: 10, backgroundColor: "#FEF3C7", borderRadius: 12, paddingHorizontal: 12, paddingVertical: 8 },
  fallbackText: { color: "#B45309", fontSize: 11, fontWeight: "700", flex: 1 },

  content: { paddingHorizontal: 16, paddingTop: 14, paddingBottom: 110 },
  levelBlock: { marginBottom: 20 },
  levelHeadRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 },
  levelHead: { color: theme.text, fontSize: 14, fontWeight: "800" },
  levelChip: { paddingHorizontal: 10, height: 22, borderRadius: 999, backgroundColor: "#EDE4FF", alignItems: "center", justifyContent: "center" },
  levelChipText: { color: "#8B5CF6", fontSize: 11, fontWeight: "800" },

  lessonCard: {
    flexDirection: "row", alignItems: "center", gap: 12, padding: 13,
    backgroundColor: "#fff", borderRadius: 16, marginBottom: 9, ...theme.shadow.sm,
  },
  lessonCardLocked: { opacity: 0.55 },
  lessonCardCurrent: { borderWidth: 1.5, borderColor: theme.primary },
  lessonIcon: { width: 40, height: 40, borderRadius: 13, alignItems: "center", justifyContent: "center", backgroundColor: "#F3EEFF" },
  lessonIconDone: { backgroundColor: theme.success },
  lessonIconCurrent: { backgroundColor: theme.primary },
  lessonTitle: { color: theme.text, fontSize: 14, fontWeight: "800" },
  lessonTitleLocked: { color: "#9CA3AF" },
  lessonSub: { color: theme.textMuted, fontSize: 11, marginTop: 2 },
  playBadge: { width: 30, height: 30, borderRadius: 15, backgroundColor: theme.primary, alignItems: "center", justifyContent: "center" },
});
