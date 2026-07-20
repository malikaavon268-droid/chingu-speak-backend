import React from "react";
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";

import { getStartupTraceLines, STARTUP_DIAGNOSTICS } from "@/src/utils/startup-trace";

export default function StartupConsoleOverlay() {
  const [expanded, setExpanded] = React.useState(false);
  const [lines, setLines] = React.useState(getStartupTraceLines());
  const scrollRef = React.useRef<ScrollView>(null);

  React.useEffect(() => {
    if (!STARTUP_DIAGNOSTICS) return;
    const timer = setInterval(() => setLines(getStartupTraceLines()), 250);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    scrollRef.current?.scrollToEnd({ animated: false });
  }, [lines, expanded]);

  if (!STARTUP_DIAGNOSTICS) return null;
  const visibleLines = expanded ? lines : lines.slice(-3);

  return (
    <View
      testID="startup-console-overlay"
      pointerEvents="box-none"
      style={[styles.shell, { top: (StatusBar.currentHeight || 0) + 8 }]}
    >
      <Pressable testID="startup-console-toggle" accessibilityRole="button" onPress={() => setExpanded((value) => !value)} style={styles.header}>
        <Text style={styles.headerText}>RUNTIME CONSOLE · {expanded ? "COLLAPSE" : "EXPAND"}</Text>
      </Pressable>
      {/* Auto-scrolled to the latest line and non-interactive so it never
          intercepts taps on real UI controls rendered underneath it. */}
      <ScrollView
        ref={scrollRef}
        pointerEvents="none"
        style={expanded ? styles.expanded : styles.compact}
        contentContainerStyle={styles.content}
      >
        {visibleLines.map((line, index) => <Text key={`${index}-${line}`} style={styles.line}>{line}</Text>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  shell: { position: "absolute", left: 10, right: 10, borderRadius: 12, overflow: "hidden", backgroundColor: "rgba(20,16,30,0.94)", zIndex: 100 },
  header: { minHeight: 34, justifyContent: "center", paddingHorizontal: 12, backgroundColor: "#5B21B6" },
  headerText: { color: "#FFFFFF", fontSize: 11, fontWeight: "800", letterSpacing: 0.8 },
  compact: { maxHeight: 70 },
  expanded: { maxHeight: 360 },
  content: { paddingHorizontal: 10, paddingVertical: 8, gap: 4 },
  line: { color: "#D8CBFF", fontSize: 10, lineHeight: 14, fontFamily: "monospace" },
});