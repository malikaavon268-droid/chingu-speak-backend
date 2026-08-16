import React from "react";
import { Pressable, Animated, ViewStyle, StyleProp, Platform, GestureResponderEvent } from "react-native";
import * as Haptics from "expo-haptics";

type Props = {
  children: React.ReactNode;
  onPress?: (e: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  scaleTo?: number;
  haptic?: boolean;
  disabled?: boolean;
  testID?: string;
};

/**
 * Drop-in pressable that adds a premium spring "squish" on press.
 * Reusable across the app for consistent, tactile press feedback.
 */
export default function PressableScale({
  children,
  onPress,
  style,
  scaleTo = 0.95,
  haptic = true,
  disabled,
  testID,
}: Props) {
  const scale = React.useRef(new Animated.Value(1)).current;

  const animate = (to: number) =>
    Animated.spring(scale, {
      toValue: to,
      useNativeDriver: true,
      friction: 6,
      tension: 220,
    }).start();

  return (
    <Pressable
      testID={testID}
      disabled={disabled}
      onPressIn={() => animate(scaleTo)}
      onPressOut={() => animate(1)}
      onPress={(e) => {
        if (haptic && Platform.OS !== "web") {
          try { Haptics.selectionAsync(); } catch { /* noop */ }
        }
        onPress?.(e);
      }}
    >
      <Animated.View style={[{ transform: [{ scale }] }, style]}>{children}</Animated.View>
    </Pressable>
  );
}
