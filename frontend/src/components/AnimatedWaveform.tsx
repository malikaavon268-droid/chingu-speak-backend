/**
 * AnimatedWaveform — live pulsing color-gradient mic visualizer.
 *
 * Pure react-native-reanimated 4 implementation (no moti).
 */
import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  withDelay,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  count?: number;
  height?: number;
  minRatio?: number;
  active?: boolean;
  testID?: string;
};

const BAR_PRESETS: { duration: number; delay: number; peak: number }[] = [
  { duration: 520, delay:   0, peak: 0.55 },
  { duration: 680, delay:  90, peak: 0.85 },
  { duration: 460, delay: 180, peak: 0.95 },
  { duration: 720, delay:  40, peak: 0.65 },
  { duration: 540, delay: 220, peak: 1.00 },
  { duration: 640, delay: 130, peak: 0.80 },
  { duration: 500, delay:  60, peak: 0.92 },
  { duration: 700, delay: 200, peak: 0.55 },
  { duration: 580, delay: 110, peak: 0.78 },
  { duration: 620, delay: 150, peak: 0.66 },
  { duration: 480, delay:  30, peak: 0.88 },
  { duration: 660, delay: 250, peak: 0.50 },
];

function Bar({ preset, height, minHeight, active }: {
  preset: { duration: number; delay: number; peak: number };
  height: number;
  minHeight: number;
  active: boolean;
}) {
  const h = useSharedValue(minHeight);

  React.useEffect(() => {
    if (active) {
      h.value = withDelay(
        preset.delay,
        withRepeat(
          withTiming(height * preset.peak, {
            duration: preset.duration,
            easing: Easing.inOut(Easing.ease),
          }),
          -1,
          true,
        ),
      );
    } else {
      h.value = withTiming(minHeight, { duration: 200 });
    }
    return () => cancelAnimation(h);
  }, [active, preset, height, minHeight, h]);

  const style = useAnimatedStyle(() => ({ height: h.value }));

  return (
    <Animated.View style={[styles.bar, { width: 6, borderRadius: 4, overflow: "hidden" }, style]}>
      <LinearGradient
        colors={["#F472B6", "#EC4899", "#A78BFA", "#8B5CF6"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
}

export default function AnimatedWaveform({
  count = 9,
  height = 56,
  minRatio = 0.18,
  active = true,
  testID,
}: Props) {
  const bars = Array.from({ length: count }, (_, i) => BAR_PRESETS[i % BAR_PRESETS.length]);
  const minHeight = Math.max(6, height * minRatio);

  return (
    <View style={[styles.row, { height }]} testID={testID}>
      {bars.map((preset, i) => (
        <Bar key={i} preset={preset} height={height} minHeight={minHeight} active={active} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  bar: {
    backgroundColor: "#EC4899",
  },
});
