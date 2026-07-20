import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, usePathname } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { api } from "@/src/api/client";
import { usePrefs } from "@/src/state/prefs";
import { theme } from "@/src/theme";
import { useAppLocale } from "@/src/i18n";
import { CATEGORIES, SCENARIOS } from "@/src/data/categories";
import { useProgress, completeModule } from "@/src/state/progress";

export default function ChooseScenario() {
  const router = useRouter();
  const pathname = usePathname();
  const prefs = usePrefs();
  const progress = useProgress();
  const { t } = useAppLocale();
  const [query, setQuery] = React.useState("");
  const scoped = React.useCallback(
    (p: string) => (pathname?.startsWith("/mobile") ? `/mobile${p}` : p),
    [pathname],
  );
  const [loading, setLoading] = React.useState(false);
  const [generatedIntro, setGeneratedIntro] = React.useState<string | null>(null);

  React.useEffect(() => {
    let active = true;
    const run = async () => {
      try {
        setLoading(true);
        const res = await api.moduleContent({
          module: "roleplay",
          app_locale: prefs.appLang,
          target_lang: prefs.to,
          topic: "travel and social situations",
          level: String(prefs.level),
        });
        if (!active) return;
        setGeneratedIntro(res.content?.intro || null);
      } catch {
        if (!active) return;
        setGeneratedIntro(null);
      } finally {
        if (active) setLoading(false);
      }
    };
    run();
    return () => {
      active = false;
    };
  }, [prefs.appLang, prefs.to, prefs.level]);

  const filtered = SCENARIOS.filter(
    (s) => query.trim() === "" || t(s.titleKey as any).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <View style={styles.root}>
      <LinearGradient colors={["#F4EDFF", "#FFFFFF"]} style={StyleSheet.absoluteFill} />
      <SafeAreaView edges={["top"]} style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity testID="scenarios-back" onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="chevron-back" size={22} color={theme.text} />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{t("scenarios")}</Text>
            <Text style={styles.subtitle}>{t("practiceRealLife" as any)}</Text>
          </View>
        </View>

        <View style={styles.searchWrap}>
          <Ionicons name="search" size={16} color={theme.textMuted} />
          <TextInput
            testID="scenario-search"
            placeholder={t("searchScenarios" as any)}
            placeholderTextColor={theme.textMuted}
            value={query}
            onChangeText={setQuery}
            style={styles.searchInput}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabsScroller}
          contentContainerStyle={styles.tabsRow}
        >
          <View testID="scenario-tab-All" style={[styles.tabChip, styles.tabChipActive]}>
            <Text style={[styles.tabChipText, styles.tabChipTextActive]}>{t("all")}</Text>
          </View>
          {CATEGORIES.map((c) => (
            <TouchableOpacity
              key={c.key}
              testID={`scenario-tab-${c.key}`}
              onPress={() => router.push(scoped(`/category/${c.key}`) as any)}
              style={styles.tabChip}
            >
              <Ionicons name={c.icon as any} size={13} color={c.color} />
              <Text style={styles.tabChipText}>{t(c.nameKey as any)}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <ScrollView contentContainerStyle={{ padding: 20, paddingTop: 4, paddingBottom: 160 }} showsVerticalScrollIndicator={false}>
          <View style={styles.generatedBox} testID="roleplay-generated-preview">
            <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
              <Ionicons name="sparkles" size={14} color="#8B5CF6" />
              <Text style={styles.generatedTitle}>{t("roleplayBooster" as any)}</Text>
            </View>
            {loading ? (
              <ActivityIndicator color="#8B5CF6" size="small" style={{ marginTop: 8 }} />
            ) : (
              <Text style={styles.generatedText}>{generatedIntro || t("generateFirstRoleplay" as any)}</Text>
            )}
          </View>

          {filtered.map((s) => {
            const locked = s.level > progress.level;
            return (
              <TouchableOpacity
                key={s.key}
                testID={`scenario-${s.key}`}
                style={[styles.card, locked && { opacity: 0.55 }]}
                activeOpacity={0.85}
                onPress={() => {
                  if (locked) return;
                  completeModule(`scn-${s.key}`, 10).catch(() => {});
                  router.push({ pathname: scoped("/chat") as any, params: { mode: "roleplay", scenario: s.key, title: t(s.titleKey as any) } });
                }}
              >
                <View style={[styles.iconCircle, { backgroundColor: s.color + "22" }]}>
                  <Ionicons name={s.icon as any} size={22} color={s.color} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.cardTitle}>{t(s.titleKey as any)}</Text>
                  <Text style={styles.cardBlurb}>{t(s.blurbKey as any)}</Text>
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
          {filtered.length === 0 && (
            <Text style={styles.empty}>{t("noScenariosMatch" as any)}</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: theme.bg },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 8, gap: 8 },
  iconBtn: { width: 38, height: 38, borderRadius: 19, backgroundColor: "#fff", alignItems: "center", justifyContent: "center", ...theme.shadow.sm },
  title: { color: theme.text, fontSize: 17, fontWeight: "800", textAlign: "center", marginLeft: -38 },
  subtitle: { color: theme.textMuted, fontSize: 12, textAlign: "center", marginLeft: -38, marginTop: 2 },

  searchWrap: { flexDirection: "row", alignItems: "center", gap: 8, marginHorizontal: 20, marginTop: 16, backgroundColor: "#fff", paddingHorizontal: 14, borderRadius: 18, ...theme.shadow.sm },
  searchInput: { flex: 1, color: theme.text, fontSize: 13, paddingVertical: 12 },

  tabsScroller: { flexGrow: 0, flexShrink: 0, height: 56 },
  tabsRow: { paddingHorizontal: 20, gap: 8, alignItems: "center" },
  tabChip: { height: 36, paddingHorizontal: 14, borderRadius: 999, backgroundColor: "#fff", borderWidth: 1, borderColor: theme.border, alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 6, flexShrink: 0 },
  tabChipActive: { backgroundColor: theme.primary, borderColor: theme.primary },
  tabChipText: { color: theme.text, fontSize: 12, fontWeight: "700" },
  tabChipTextActive: { color: "#fff" },

  card: { flexDirection: "row", alignItems: "center", gap: 12, padding: 16, backgroundColor: "#fff", borderRadius: 18, marginBottom: 10, ...theme.shadow.sm },
  iconCircle: { width: 46, height: 46, borderRadius: 14, alignItems: "center", justifyContent: "center" },
  cardTitle: { color: theme.text, fontSize: 14, fontWeight: "800" },
  cardBlurb: { color: theme.textMuted, fontSize: 11, marginTop: 2 },
  empty: { color: theme.textMuted, textAlign: "center", marginTop: 30 },
  levelBadge: { paddingHorizontal: 8, height: 22, borderRadius: 999, backgroundColor: "#EDE4FF", alignItems: "center", justifyContent: "center" },
  levelBadgeLocked: { backgroundColor: "#F3F4F6" },
  levelBadgeText: { color: "#8B5CF6", fontSize: 10, fontWeight: "800" },
  generatedBox: {
    marginBottom: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E9DDFC",
    padding: 12,
    backgroundColor: "#fff",
  },
  generatedTitle: { color: "#1F1A2E", fontSize: 12, fontWeight: "800" },
  generatedText: { color: "#6B6585", fontSize: 12, marginTop: 7, lineHeight: 18 },
});
