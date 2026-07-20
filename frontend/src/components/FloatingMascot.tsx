/**
 * FloatingMascot — continuous idle float for Chingu mascot.
 *
 * Pure react-native-reanimated 4 implementation (no moti) to avoid the
 * known moti + reanimated 4 + newArchEnabled Android release crash.
 */
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  ViewStyle,
  Platform,
  ImageStyle,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withSpring,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import * as Haptics from "expo-haptics";

type Props = {
  source: ImageSourcePropType;
  size?: number;
  amplitude?: number;
  duration?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  testID?: string;
  pulsing?: boolean;
};

export default function FloatingMascot({
  source,
  size = 220,
  amplitude = 8,
  duration = 3000,
  onPress,
  style,
  imageStyle,
  testID,
  pulsing = false,
}: Props) {
  const translateY = useSharedValue(0);
  const rotate = useSharedValue(0);
  const scale = useSharedValue(1);

  React.useEffect(() => {
    translateY.value = withRepeat(
      withTiming(-amplitude, { duration: duration / 2, easing: Easing.inOut(Easing.ease) }),
      -1,
      true,
    );
    rotate.value = withRepeat(
      withTiming(1.5, { duration, easing: Easing.inOut(Easing.ease) }),
      -1,
      true,
    );
    return () => {
      cancelAnimation(translateY);
      cancelAnimation(rotate);
      cancelAnimation(scale);
    };
  }, [amplitude, duration, translateY, rotate, scale]);

  React.useEffect(() => {
    scale.value = withSpring(pulsing ? 1.06 : 1, { damping: 10, stiffness: 200 });
  }, [pulsing, scale]);

  const floatStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: translateY.value },
      { rotate: `${rotate.value}deg` },
      { scale: scale.value },
    ],
  }));

  const inner = (
    <Animated.View style={[style, floatStyle]}>
      <Image
        source={source}
        style={[{ width: size, height: size }, imageStyle]}
        resizeMode="contain"
      />
    </Animated.View>
  );

  if (!onPress) return <>{inner}</>;

  return (
    <Pressable
      testID={testID}
      onPressIn={() => {
        scale.value = withSpring(0.92, { damping: 10, stiffness: 240 });
      }}
      onPressOut={() => {
        scale.value = withSpring(pulsing ? 1.06 : 1, { damping: 10, stiffness: 220 });
      }}
      onPress={() => {
        if (Platform.OS !== "web") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium).catch(() => {});
        }
        onPress();
      }}
      accessibilityRole="button"
    >
      {inner}
    </Pressable>
  );
}
