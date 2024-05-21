import { View, Text } from "react-native";
import React from "react";
import { colors, globalStyles } from "../../../config/theme/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

export const Title = ({ text, safe, white = false }: Props) => {
  const { top } = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? "white" : colors.text,
      }}
    >
      {text}
    </Text>
  );
};
