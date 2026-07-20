import React from "react";
import { I18nManager, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = { testID: string; fallback?: string; color?: string };

export default function AppBackButton({ testID, fallback = "/(tabs)", color = "#1F1A2E" }: Props) {
  const router = useRouter();
  const icon = I18nManager.isRTL ? "chevron-forward" : "chevron-back";
  return (
    <TouchableOpacity
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel="Go back"
      onPress={() => router.canGoBack() ? router.back() : router.replace(fallback as any)}
      style={styles.button}
      activeOpacity={0.75}
    >
      <Ionicons name={icon} size={22} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#E5E7EB" },
});