import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

import { useAppLocale } from "@/src/i18n";
import { TIER_KEYS } from "@/src/state/progress";

type Props = {
  visible: boolean;
  newLevel: number;
  onClose: () => void;
};

export default function LevelUpModal({ visible, newLevel, onClose }: Props) {
  const { t } = useAppLocale();
  const tierKey = TIER_KEYS[Math.min(newLevel, TIER_KEYS.length) - 1];
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={styles.card} testID="level-up-modal">
          <LinearGradient colors={["#8B5CF6", "#EC4899"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.badge}>
            <Ionicons name="trophy" size={34} color="#fff" />
          </LinearGradient>
          <Text style={styles.title}>{t("levelUp" as any)}</Text>
          <Text style={styles.levelLine}>
            {t("levelWord" as any)} {newLevel} · {t(tierKey as any)}
          </Text>
          <Text style={styles.msg}>{t("levelUpMsg" as any)}</Text>
          <TouchableOpacity testID="level-up-continue" onPress={onClose} activeOpacity={0.9} style={{ alignSelf: "stretch" }}>
            <LinearGradient colors={["#A78BFA", "#EC4899"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.cta}>
              <Text style={styles.ctaText}>{t("keepGoing" as any)}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: "rgba(31,26,46,0.55)", alignItems: "center", justifyContent: "center", padding: 32 },
  card: { width: "100%", maxWidth: 340, backgroundColor: "#fff", borderRadius: 24, padding: 24, alignItems: "center" },
  badge: { width: 72, height: 72, borderRadius: 36, alignItems: "center", justifyContent: "center", marginBottom: 14 },
  title: { fontSize: 22, fontWeight: "900", color: "#1F1A2E" },
  levelLine: { fontSize: 14, fontWeight: "800", color: "#8B5CF6", marginTop: 6 },
  msg: { fontSize: 13, color: "#6B6585", textAlign: "center", marginTop: 8, marginBottom: 18, lineHeight: 19 },
  cta: { paddingVertical: 14, borderRadius: 999, alignItems: "center" },
  ctaText: { color: "#fff", fontSize: 15, fontWeight: "800" },
});
