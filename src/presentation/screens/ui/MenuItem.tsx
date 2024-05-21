import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../config/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Separator } from "./Separator";
interface Props {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({ name, icon, component, isFirst, isLast }: Props) => {
  return (
    <>
      <Pressable
        onPress={() => {
          router.push(component);
        }}
      >
        <View
          style={{
            ...styles.container,
            backgroundColor: colors.cardBackground,
            ...(isFirst && {
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              paddingTop: 10,
            }),
            ...(isLast && {
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              paddingBottom: 10,
            }),
          }}
        >
          <Ionicons
            name={icon}
            size={25}
            color={colors.primary}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: colors.text }}>{name}</Text>
          <Ionicons
            name="chevron-forward-outline"
            size={25}
            adjustsFontSizeToFit
            style={{ marginLeft: "auto" }}
            color={colors.primary}
          />
        </View>
      </Pressable>
      {!isLast && <Separator />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
