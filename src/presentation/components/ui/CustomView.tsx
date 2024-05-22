import { View, Text, StyleProp, ViewStyle } from "react-native";
import React, { useContext } from "react";
import { globalStyles } from "../../../config/theme/theme";
import { ThemeContext } from "../../context/ThemeContext";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode | React.ReactNode[];
  margin?: boolean;
}

export const CustomView = ({ style, children, margin = false }: Props) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style,
      ]}
    >
      {children}
    </View>
  );
};