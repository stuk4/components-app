import { View, Text, StyleProp, ViewStyle } from "react-native";
import React from "react";
import { globalStyles } from "../../../config/theme/theme";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode | React.ReactNode[];
}

export const CustomView = ({ style, children }: Props) => {
  return <View style={[globalStyles.mainContainer, style]}>{children}</View>;
};
