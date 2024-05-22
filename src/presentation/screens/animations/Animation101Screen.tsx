import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from "react-native";
import React, { useContext } from "react";

import { useAnimation } from "../../hooks/useAnimation";
import { ThemeContext } from "../../context/ThemeContext";

export const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
  } = useAnimation();
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            backgroundColor: colors.primary,
          },
          {
            opacity: animatedOpacity,
            transform: [{ translateY: animatedTop }],
          },
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            duration: 750,
            easing: Easing.elastic(1),
          });
        }}
        style={{ marginTop: 20 }}
      >
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 20 }}>
        <Text>FadeOut</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});
