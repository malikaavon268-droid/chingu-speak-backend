// Offline lesson flow: vocabulary flashcards -> auto-graded quiz -> results.
// 100% local — no network calls. XP is scaled by quiz accuracy and awarded
// once via src/state/progress (completeModule), which also drives the
// strict-sequential unlocking shown on app/learn.tsx.
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { usePrefs } from "@/src/state/prefs";
import { useProgress, completeModule } from "@/src/state/progress";
import { useAppLocale } from "@/src/i18n";
import { theme } from "@/src/theme";
import { getLessonMeta, getLessonContent, XP_PER_LESSON } from "@/src/data/lessons";
import { isLessonUnlocked } from "@/src/data/lessons/unlock";
import LevelUpModal from "@/src/components/LevelUpModal";

type Phase = "vocab" | "quiz" | "result";

export default function LessonScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const prefs = usePrefs();
  const progress = useProgress();
  const { t } = useAppLocale();

  const meta = getLessonMeta(id);
  const content = meta ? getLessonContent(prefs.to, meta.id) : null;
  const unlocked = meta ? isLessonUnlocked(meta.id, progress.done) : false;
  const valid = !!meta && !!content && unlocked;

  const [phase, setPhase] = React.useState<Phase>("vocab");
  const [qIndex, setQIndex] = React.useState(0);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [selected, setSelected] = React.useState<number | null>(null);
  const [fillText, setFillText] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [wasCorrect, setWasCorrect] = React.useState(false);
  const [xpEarned, setXpEarned] = React.useState(0);
  const [wasAlreadyDone, setWasAlreadyDone] = React.useState(false);
  const [leveledUpTo, setLeveledUpTo] = React.useState<number | null>(null);
  const resultAwarded = React.useRef(false);

  // Deep-link / stale-state safety: bounce back to the lesson path if the id
  // is unknown or the lesson is still locked.
  React.useEffect(() => {
    if (!valid) {
      const timer = setTimeout(() => router.replace("/learn" as any), 30);
      return () => clearTimeout(timer);
    }
  }, [valid, router]);

  const totalQ = content?.quiz.length || 0;
  const currentQ = content?.quiz[qIndex];

  const resetLesson = () => {
    setPhase("vocab"); setQIndex(0); setCorrectCount(0); setSelected(null);
    setFillText(""); setChecked(false); setWasCorrect(false); setXpEarned(0);
    setWasAlreadyDone(false);
    resultAwarded.current = false;
  };

  const normalize = (s: string) => s.trim().toLowerCase();

  const checkMc = (idx: number) => {
    if (checked || !currentQ || currentQ.type !== "mc") return;
    setSelected(idx);
    setChecked(true);
    const correct = idx === currentQ.a;
    setWasCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
  };

  const checkFill = () => {
    if (checked || !fillText.trim() || !currentQ || currentQ.type !== "fill") return;
    const correct = normalize(fillText) === normalize(currentQ.a);
    setChecked(true);
    setWasCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
  };

  const nextQuestion = () => {
    if (qIndex + 1 >= totalQ) {
      setPhase("result");
    } else {
      setQIndex((i) => i + 1);
      setSelected(null); setFillText(""); setChecked(false); setWasCorrect(false);
    }
  };

  // Award XP (scaled by accuracy) exactly once when the results screen shows.
  React.useEffect(() => {
    if (phase !== "result" || resultAwarded.current || !meta) return;
    resultAwarded.current = true;
    const accuracy = totalQ > 0 ? correctCount / totalQ : 0;
    const award = Math.round(XP_PER_LESSON * accuracy);
    completeModule(meta.id, award).then((res) => {
      setXpEarned(res.alreadyDone ? 0 : res.awarded);
      setWasAlreadyDone(res.alreadyDone);
      if (res.leveledUp) setLeveledUpTo(res.newLevel);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  if (!valid || !meta || !content) {
    return (
      <View style={styles.root}>
        <SafeAreaView style={styles.centerRoot}>
          <Ionicons name="lock-closed" size={28} color="#9CA3AF" />
          <Text style={styles.lockedRedirectText}>{t("lockedLessonHint" as any)}</Text>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#F4EDFF", "#FFFFFF"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity testID="lesson-back-button" onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="close" size={20} color={theme.text} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>{meta.titleEn}</Text>
            <Text style={styles.sub}>
              {phase === "vocab" ? t("vocabularyStep" as any) : phase === "quiz" ? `${t("quizStep" as any)} · ${qIndex + 1}/${totalQ}` : t("lessonCompleteTitle" as any)}
            </Text>
          </View>
        </View>

        {phase === "quiz" && (
          <View style={styles.quizProgressTrack} testID="quiz-progress-track">
            <View style={[styles.quizProgressFill, { width: `${(qIndex / Math.max(1, totalQ)) * 100}%` }]} />
          </View>
        )}

        {phase === "vocab" && (
          <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
            <Text style={styles.introText}>{content.intro}</Text>
            {content.examples.map((ex, i) => (
              <View key={`${ex.target}-${i}`} style={styles.vocabCard} testID={`vocab-card-${i}`}>
                <Text style={styles.vocabTarget}>{ex.target}</Text>
                {!!ex.translit && <Text style={styles.vocabTranslit}>{ex.translit}</Text>}
                <Text style={styles.vocabMeaning}>{ex.meaning}</Text>
              </View>
            ))}
            <TouchableOpacity testID="start-quiz-button" activeOpacity={0.9} onPress={() => setPhase("quiz")} style={{ marginTop: 12 }}>
              <LinearGradient colors={theme.gradient.primaryHot} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.primaryBtn}>
                <Ionicons name="school" size={16} color="#fff" />
                <Text style={styles.primaryBtnText}>{t("startQuizBtn" as any)}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        )}

        {phase === "quiz" && currentQ && (
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
            <View style={styles.questionCard} testID={`quiz-question-${qIndex}`}>
              <Text style={styles.questionLabel}>
                {t("questionOfLabel" as any).replace("{n}", String(qIndex + 1)).replace("{total}", String(totalQ))}
              </Text>
              <Text style={styles.questionText}>{currentQ.q}</Text>

              {currentQ.type === "mc" ? (
                <View style={{ gap: 10, marginTop: 14 }}>
                  {currentQ.options.map((opt, i) => {
                    const isSelected = selected === i;
                    const isAnswer = i === currentQ.a;
                    const showCorrect = checked && isAnswer;
                    const showWrong = checked && isSelected && !isAnswer;
                    return (
                      <TouchableOpacity
                        key={i}
                        testID={`quiz-option-${i}`}
                        disabled={checked}
                        activeOpacity={0.85}
                        onPress={() => checkMc(i)}
                        style={[styles.option, showCorrect && styles.optionCorrect, showWrong && styles.optionWrong]}
                      >
                        <Text style={[styles.optionText, (showCorrect || showWrong) && styles.optionTextOn]}>{opt}</Text>
                        {showCorrect && <Ionicons name="checkmark-circle" size={18} color="#fff" />}
                        {showWrong && <Ionicons name="close-circle" size={18} color="#fff" />}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ) : (
                <View style={{ marginTop: 14 }}>
                  <TextInput
                    testID="quiz-fill-input"
                    value={fillText}
                    onChangeText={setFillText}
                    editable={!checked}
                    placeholder={t("typeAnswerPlaceholder" as any)}
                    placeholderTextColor="#B3A9CC"
                    style={[styles.fillInput, checked && (wasCorrect ? styles.fillInputCorrect : styles.fillInputWrong)]}
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                  {!checked && (
                    <TouchableOpacity testID="quiz-check-button" activeOpacity={0.9} onPress={checkFill} disabled={!fillText.trim()} style={{ marginTop: 12 }}>
                      <View style={[styles.secondaryBtn, !fillText.trim() && styles.secondaryBtnDisabled]}>
                        <Text style={styles.secondaryBtnText}>{t("checkAnswerBtn" as any)}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              )}

              {checked && (
                <Text style={[styles.feedbackText, wasCorrect ? styles.feedbackCorrect : styles.feedbackWrong]}>
                  {wasCorrect
                    ? t("correctFeedback" as any)
                    : `${t("incorrectFeedback" as any)} ${currentQ.type === "fill" ? currentQ.a : ""}`}
                </Text>
              )}
            </View>

            {checked && (
              <TouchableOpacity testID="quiz-next-button" activeOpacity={0.9} onPress={nextQuestion} style={{ marginTop: 16 }}>
                <LinearGradient colors={theme.gradient.primaryHot} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.primaryBtn}>
                  <Text style={styles.primaryBtnText}>{qIndex + 1 >= totalQ ? "Finish" : t("nextBtn" as any)}</Text>
                  <Ionicons name="arrow-forward" size={16} color="#fff" />
                </LinearGradient>
              </TouchableOpacity>
            )}
          </ScrollView>
        )}

        {phase === "result" && (
          <View style={styles.resultRoot} testID="lesson-result">
            <LinearGradient colors={["#8B5CF6", "#EC4899"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.resultBadge}>
              <Ionicons name="trophy" size={36} color="#fff" />
            </LinearGradient>
            <Text style={styles.resultTitle}>{t("lessonCompleteTitle" as any)}</Text>
            <Text style={styles.resultScoreLabel}>{t("scoreLabel" as any)}</Text>
            <Text style={styles.resultScore} testID="lesson-result-score">{correctCount}/{totalQ}</Text>
            <View style={styles.xpEarnedPill}>
              <Ionicons name="flash" size={14} color="#8B5CF6" />
              <Text style={styles.xpEarnedText} testID="lesson-result-xp">+{xpEarned} {t("xpEarnedLabel" as any)}</Text>
            </View>
            {wasAlreadyDone && <Text style={styles.alreadyDoneNote}>{t("alreadyCompletedNote" as any)}</Text>}

            <TouchableOpacity testID="result-back-to-path" activeOpacity={0.9} onPress={() => router.replace("/learn" as any)} style={{ alignSelf: "stretch", marginTop: 20 }}>
              <LinearGradient colors={theme.gradient.primaryHot} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.primaryBtn}>
                <Text style={styles.primaryBtnText}>{t("backToPathBtn" as any)}</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity testID="result-retry-lesson" activeOpacity={0.85} onPress={resetLesson} style={{ marginTop: 10 }}>
              <Text style={styles.retryText}>{t("retryLessonBtn" as any)}</Text>
            </TouchableOpacity>
          </View>
        )}
      </SafeAreaView>
      <LevelUpModal visible={leveledUpTo !== null} newLevel={leveledUpTo || 1} onClose={() => setLeveledUpTo(null)} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  centerRoot: { flex: 1, alignItems: "center", justifyContent: "center", gap: 10, padding: 24 },
  lockedRedirectText: { color: theme.textMuted, fontSize: 13, textAlign: "center" },

  header: { flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 16, paddingVertical: 10 },
  iconBtn: { width: 36, height: 36, borderRadius: 18, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", borderWidth: 1, borderColor: "#ECE4FD" },
  title: { color: theme.text, fontSize: 15, fontWeight: "800" },
  sub: { color: theme.textMuted, fontSize: 12, marginTop: 2 },

  quizProgressTrack: { height: 6, borderRadius: 3, backgroundColor: "#F1EBFB", marginHorizontal: 16, overflow: "hidden" },
  quizProgressFill: { height: 6, borderRadius: 3, backgroundColor: theme.primary },

  content: { paddingHorizontal: 18, paddingTop: 14, paddingBottom: 100, gap: 12 },
  introText: { color: theme.textMuted, fontSize: 13, lineHeight: 20, marginBottom: 4 },

  vocabCard: { backgroundColor: "#fff", borderRadius: 16, padding: 16, ...theme.shadow.sm },
  vocabTarget: { color: theme.text, fontSize: 20, fontWeight: "900" },
  vocabTranslit: { color: theme.primary, fontSize: 13, fontWeight: "700", marginTop: 2, fontStyle: "italic" },
  vocabMeaning: { color: theme.textMuted, fontSize: 13, marginTop: 6 },

  primaryBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, height: 50, borderRadius: 999 },
  primaryBtnText: { color: "#fff", fontSize: 14, fontWeight: "800" },
  secondaryBtn: { height: 46, borderRadius: 999, backgroundColor: "#EDE4FF", alignItems: "center", justifyContent: "center" },
  secondaryBtnDisabled: { opacity: 0.5 },
  secondaryBtnText: { color: "#8B5CF6", fontSize: 14, fontWeight: "800" },

  questionCard: { backgroundColor: "#fff", borderRadius: 18, padding: 16, ...theme.shadow.sm },
  questionLabel: { color: theme.textMuted, fontSize: 11, fontWeight: "700" },
  questionText: { color: theme.text, fontSize: 16, fontWeight: "800", marginTop: 6, lineHeight: 22 },

  option: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 14, height: 48, borderRadius: 14, backgroundColor: "#F9F6FF", borderWidth: 1, borderColor: theme.border },
  optionCorrect: { backgroundColor: theme.success, borderColor: theme.success },
  optionWrong: { backgroundColor: theme.danger, borderColor: theme.danger },
  optionText: { color: theme.text, fontSize: 13, fontWeight: "700", flex: 1 },
  optionTextOn: { color: "#fff" },

  fillInput: { height: 48, borderRadius: 14, borderWidth: 1, borderColor: theme.border, backgroundColor: "#F9F6FF", paddingHorizontal: 14, fontSize: 14, color: theme.text },
  fillInputCorrect: { borderColor: theme.success, backgroundColor: "#ECFDF5" },
  fillInputWrong: { borderColor: theme.danger, backgroundColor: "#FEF2F2" },

  feedbackText: { fontSize: 13, fontWeight: "800", marginTop: 12 },
  feedbackCorrect: { color: theme.success },
  feedbackWrong: { color: theme.danger },

  resultRoot: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 32 },
  resultBadge: { width: 88, height: 88, borderRadius: 44, alignItems: "center", justifyContent: "center", marginBottom: 16 },
  resultTitle: { color: theme.text, fontSize: 22, fontWeight: "900" },
  resultScoreLabel: { color: theme.textMuted, fontSize: 12, marginTop: 14 },
  resultScore: { color: theme.text, fontSize: 32, fontWeight: "900", marginTop: 2 },
  xpEarnedPill: { flexDirection: "row", alignItems: "center", gap: 6, backgroundColor: "#EDE4FF", paddingHorizontal: 14, height: 34, borderRadius: 999, marginTop: 14 },
  xpEarnedText: { color: "#8B5CF6", fontSize: 13, fontWeight: "800" },
  alreadyDoneNote: { color: theme.textMuted, fontSize: 11, textAlign: "center", marginTop: 10, lineHeight: 16 },
  retryText: { color: theme.textMuted, fontSize: 13, fontWeight: "700", textDecorationLine: "underline" },
});
