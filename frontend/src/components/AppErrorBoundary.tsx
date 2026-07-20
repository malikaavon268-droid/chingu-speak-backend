import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

type Props = { children: React.ReactNode };
type State = { error: Error | null; componentStack: string };

export default class AppErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null, componentStack: "" };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[startup] Unhandled render error", error, info.componentStack);
    this.setState({ componentStack: info.componentStack || "No component stack available" });
    SplashScreen.hideAsync().catch(() => undefined);
  }

  render() {
    if (!this.state.error) {
      return this.props.children;
    }

    return (
      <View testID="startup-error-boundary" style={styles.safe} onLayout={() => SplashScreen.hideAsync().catch(() => undefined)}>
        <Text testID="startup-error-title" style={styles.title}>ROOT RENDER ERROR</Text>
        <ScrollView style={styles.panel} contentContainerStyle={styles.panelContent}>
          <Text selectable style={styles.errorName}>{this.state.error.name}: {this.state.error.message}</Text>
          <Text selectable style={styles.errorText}>{this.state.error.stack || "No JavaScript stack available"}</Text>
          <Text selectable style={styles.errorText}>{this.state.componentStack}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#FFF4F4", paddingTop: 48, paddingHorizontal: 16, paddingBottom: 24, gap: 12 },
  title: { color: "#B00020", fontSize: 24, fontWeight: "800", textAlign: "center" },
  panel: { flex: 1, borderRadius: 12, backgroundColor: "#1B1111" },
  panelContent: { padding: 14, gap: 14 },
  errorName: { color: "#FF9B9B", fontSize: 15, lineHeight: 22, fontWeight: "700" },
  errorText: { color: "#FFE1E1", fontSize: 11, lineHeight: 17, fontFamily: "monospace" },
});