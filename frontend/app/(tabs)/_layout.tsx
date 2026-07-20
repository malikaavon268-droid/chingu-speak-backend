import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import { Tabs, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";

import { theme } from "@/src/theme";
import BouncePress from "@/src/components/BouncePress";
import { useAppLocale } from "@/src/i18n";

function FloatingMic() {
  const router = useRouter();
  const pulse = useSharedValue(1);
  React.useEffect(() => {
    pulse.value = withRepeat(
      withTiming(1.04, { duration: 1400, easing: Easing.inOut(Easing.ease) }),
      -1,
      true,
    );
    return () => cancelAnimation(pulse);
  }, [pulse]);
  const pulseStyle = useAnimatedStyle(() => ({ transform: [{ scale: pulse.value }] }));
  return (
    <BouncePress
      testID="floating-mic-button"
      onPress={() => {
        if (Platform.OS !== "web") Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        router.push("/(tabs)/voice");
      }}
      style={styles.micWrap}
      pressScale={0.88}
      damping={10}
      stiffness={260}
    >
      <Animated.View style={pulseStyle}>
        <LinearGradient colors={theme.gradient.primaryHot as any} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={styles.mic}>
          <Ionicons name="mic" size={24} color="#fff" />
        </LinearGradient>
      </Animated.View>
    </BouncePress>
  );
}

export default function TabsLayout() {
  const insets = useSafeAreaInsets();
  const { t } = useAppLocale();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: "#A39AB8",
        tabBarStyle: {
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 64 + Math.max(insets.bottom, 8),
          paddingBottom: Math.max(insets.bottom, 8),
          paddingTop: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderColor: theme.border,
          shadowColor: theme.primary,
          shadowOpacity: 0.18,
          shadowRadius: 22,
          shadowOffset: { width: 0, height: 10 },
          elevation: 14,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "700" },
      }}
    >
      <Tabs.Screen name="index"     options={{ title: t("home"),      tabBarIcon: ({ color }) => <Ionicons name="home"   size={22} color={color} /> }} />
      <Tabs.Screen name="translate" options={{ title: t("translate"), tabBarIcon: ({ color }) => <Feather  name="globe"  size={22} color={color} /> }} />
      <Tabs.Screen name="voice"     options={{ title: "", tabBarIcon: () => <View style={{ width: 1, height: 1 }} />, tabBarButton: () => <FloatingMic />, tabBarStyle: { display: "none" } }} />
      <Tabs.Screen name="saved"     options={{ title: t("saved"),     tabBarIcon: ({ color }) => <Ionicons name="bookmark" size={22} color={color} /> }} />
      <Tabs.Screen name="profile"   options={{ title: t("profile"),   tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={24} color={color} /> }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  micWrap: { alignItems: "center", justifyContent: "center", flex: 1 },
  mic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    shadowColor: theme.accent,
    shadowOpacity: 0.55,
    shadowRadius: 18,
    elevation: 12,
  },
});
