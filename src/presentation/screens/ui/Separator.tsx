import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { colors } from "../../../config/theme/theme";

interface Props {
  style?: StyleProp<ViewStyle>;
}

export const Separator = ({ style }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.text,
          height: 1,
          alignSelf: "center",
          opacity: 0.05,
          width: "90%",
        },
        style,
      ]}
    />
  );
};
