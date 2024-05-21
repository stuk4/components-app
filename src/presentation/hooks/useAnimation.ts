import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;
  const fadeIn = ({ duration = 300, toValue = 1, callback = () => {} }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   easing: Easing.bounce,
    //   useNativeDriver: true,
    // }).start(() => console.log("Animation finished"));
  };
  const fadeOut = ({ duration = 300, toValue = 0, callback = () => {} }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callback);
    // () => animatedTop.resetAnimation()
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    duration = 300,
    toValue = 0,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      easing: easing,
      useNativeDriver: true,
    }).start(callback);
  };

  return {
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    animatedOpacity,
    animatedTop,
  };
};
