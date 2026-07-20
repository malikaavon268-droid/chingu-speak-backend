/**
 * BouncePress — Framer-Motion-style `whileTap={{ scale: 0.95 }}` for React Native.
 *
 * Uses react-native-reanimated v4 directly (not moti) to avoid known
 * moti + reanimated 4 + newArchEnabled crash on Android release builds.
 */
import React from "react";
import { Pressable, Platform, ViewStyle, StyleProp, GestureResponderEvent } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withRepeat, withTiming, Easing, cancelAnimation } from "react-native-reanimated";
import * as Haptics from "expo-haptics";

type Props = {
  onPress?: (e: GestureResponderEvent) => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  innerStyle?: StyleProp<ViewStyle>;
  testID?: string;
  disabled?: boolean;
  pressScale?: number;
  damping?: number;
  stiffness?: number;
  floatY?: number;
  haptic?: boolean;
  accessibilityLabel?: string;
  accessibilityRole?: "button" | "link";
};

export default function BouncePress({
  onPress,
  children,
  style,
  innerStyle,
  testID,
  disabled,
  pressScale = 0.95,
  damping = 12,
  stiffness = 240,
  floatY = 0,
  haptic = true,
  accessibilityLabel,
  accessibilityRole = "button",
}: Props) {
  const scale = useSharedValue(1);
  const translateY = useSharedValue(0);

  React.useEffect(() => {
    if (floatY > 0) {
      translateY.value = withRepeat(
        withTiming(-floatY, { duration: 1600, easing: Easing.inOut(Easing.ease) }),
        -1,
        true,
      );
    }
    return () => {
      cancelAnimation(scale);
      cancelAnimation(translateY);
    };
  }, [floatY, scale, translateY]);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
  }));

  return (
    <Pressable
      testID={testID}
      onPressIn={() => {
        scale.value = withSpring(pressScale, { damping, stiffness });
      }}
      onPressOut={() => {
        scale.value = withSpring(1, { damping, stiffness });
      }}
      onPress={(e) => {
        if (disabled) return;
        if (haptic && Platform.OS !== "web") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
        }
        onPress?.(e);
      }}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      style={style}
    >
      <Animated.View style={[innerStyle, animStyle]}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
