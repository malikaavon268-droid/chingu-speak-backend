/**
 * DraggableSheet — bottom-sheet container with Framer-Motion-style drag.
 *
 * Wraps the live-chat result panel on the voice screen. Users can drag the
 * sheet up to peek/expand or down to dismiss; on release it snaps to its
 * peek or expanded position with a spring (Framer Motion "drag" + dragSnap
 * pattern, implemented with react-native-gesture-handler + reanimated).
 *
 * NOTE: We deliberately use reanimated for the gesture itself because moti's
 * gesture story isn't fluid for drag; moti is used everywhere the requested
 * concept is "Framer Motion `animate` / `whileTap`".
 */
import React from "react";
import { StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";

type Props = {
  /** Peek height (visible when collapsed). */
  peekHeight?: number;
  /** Max height (when expanded). */
  expandedHeight?: number;
  /** Whether the sheet is mounted at all (visible). */
  visible: boolean;
  /** Called when the user drags far enough down to dismiss. */
  onDismiss?: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};

export default function DraggableSheet({
  peekHeight = 260,
  expandedHeight = 440,
  visible,
  onDismiss,
  children,
  style,
  testID,
}: Props) {
  // y = 0 means "peek". Negative = expanded. Positive = dismissed.
  const translateY = useSharedValue(0);
  const dragStart = useSharedValue(0);

  React.useEffect(() => {
    translateY.value = withSpring(visible ? 0 : peekHeight, { damping: 18, stiffness: 180 });
  }, [visible, peekHeight, translateY]);

  const expandedDelta = -(expandedHeight - peekHeight);

  const pan = Gesture.Pan()
    .onStart(() => {
      dragStart.value = translateY.value;
    })
    .onUpdate((e) => {
      const next = dragStart.value + e.translationY;
      // Clamp between fully-expanded and dismissed-below-peek.
      translateY.value = Math.max(expandedDelta - 30, Math.min(peekHeight + 80, next));
    })
    .onEnd((e) => {
      const v = e.velocityY;
      const pos = translateY.value;
      // Decide snap target by velocity + position.
      if (pos > peekHeight * 0.55 || v > 1200) {
        translateY.value = withSpring(peekHeight, { damping: 18, stiffness: 180 });
        if (onDismiss) runOnJS(onDismiss)();
      } else if (pos < expandedDelta * 0.5 || v < -800) {
        translateY.value = withSpring(expandedDelta, { damping: 18, stiffness: 180 });
      } else {
        translateY.value = withSpring(0, { damping: 18, stiffness: 180 });
      }
    });

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View
        testID={testID}
        style={[styles.sheet, { height: expandedHeight }, style, sheetStyle]}
      >
        <View style={styles.handleWrap}>
          <View style={styles.handle} />
        </View>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  sheet: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(250, 246, 255, 0.94)",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 18,
    paddingTop: 8,
    paddingBottom: 28,
    borderWidth: 1,
    borderColor: "#EFE8FC",
    shadowColor: "#7C3AED",
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: -8 },
    elevation: 12,
  },
  handleWrap: { alignItems: "center", marginBottom: 6 },
  handle: { width: 64, height: 5, borderRadius: 3, backgroundColor: "#E6DFFC" },
});
