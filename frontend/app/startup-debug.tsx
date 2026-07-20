import { Redirect, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { Platform, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getStartupTraceLines, scheduleStartupTraceUpload, STARTUP_BYPASS, startupTrace } from "@/src/utils/startup-trace";

export default function StartupDebugScreen() {
  startupTrace("DebugNavigation: startup-debug render started");
  const router = useRouter();
  const [lines, setLines] = React.useState(getStartupTraceLines());

  const openHome = React.useCallback(() => {
    startupTrace("DebugNavigation: redirecting directly to Home");
    router.replace("/(tabs)");
  }, [router]);

  React.useEffect(() => {
    startupTrace("DebugNavigation: startup-debug effect started");
    SplashScreen.hideAsync().catch(() => undefined);
    scheduleStartupTraceUpload();
    const refresh = setInterval(() => setLines(getStartupTraceLines()), 200);
    const redirect = setTimeout(openHome, 3_500);
    return () => {
      clearInterval(refresh);
      clearTimeout(redirect);
    };
  }, [openHome]);

  if (!STARTUP_BYPASS) return <Redirect href="/" />;

  return (
    <SafeAreaView testID="startup-debug-screen" style={styles.safe} edges={["top", "bottom"]}>
      <View style={styles.header}>
        <Text style={styles.eyebrow}>STARTUP ISOLATION</Text>
        <Text testID="startup-debug-title" style={styles.title}>JavaScript and Router started</Text>
        <Text style={styles.body}>Authentication, storage hydration, fonts, and API initialization are bypassed.</Text>
      </View>
      <ScrollView style={styles.logPanel} contentContainerStyle={styles.logContent}>
        {lines.map((line, index) => <Text key={`${index}-${line}`} style={styles.logLine}>{line}</Text>)}
      </ScrollView>
      <Pressable testID="startup-debug-home-button" accessibilityRole="button" onPress={openHome} style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.buttonText}>Open Home now</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F5F1FF", paddingHorizontal: 20, paddingVertical: 16, gap: 16 },
  header: { gap: 8 },
  eyebrow: { color: "#7C3AED", fontSize: 12, fontWeight: "800", letterSpacing: 1.2 },
  title: { color: "#241A3A", fontSize: 26, fontWeight: "800" },
  body: { color: "#6B6585", fontSize: 15, lineHeight: 22 },
  logPanel: { flex: 1, borderRadius: 18, backgroundColor: "#211A30" },
  logContent: { padding: 16, gap: 8 },
  logLine: { color: "#D8CBFF", fontSize: 11, lineHeight: 16, fontFamily: Platform.select({ ios: "Menlo", android: "monospace", default: "monospace" }) },
  button: { minHeight: 48, borderRadius: 24, alignItems: "center", justifyContent: "center", backgroundColor: "#7C3AED" },
  buttonPressed: { opacity: 0.82 },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "800" },
});