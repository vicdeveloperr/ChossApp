import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet } from "react-native";

export const AnimatedSpeech = () => {
  const fadeValue = useRef(new Animated.Value(1)).current;
  const [isAnimationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    if (!isAnimationActive) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(fadeValue, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(fadeValue, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      setAnimationActive(false);
    }
  });
  return (
    <Animated.View
      style={[styles.content, { opacity: fadeValue }]}
    ></Animated.View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
  },
});
