import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../config/theme/theme";
import { Title } from "../ui/Title";
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from "../../../config/constants/menu-items";
import { MenuItem } from "../ui/MenuItem";

export default function HomeScreen() {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={[globalStyles.globalMargin]}>
        <ScrollView>
          <Title text="Opciones del menu" safe />

          {animationMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              icon={item.icon}
              component={item.component}
              isFirst={index === 0}
              isLast={index === animationMenuItems.length - 1}
            />
          ))}
          <View style={{ marginTop: 30 }} />

          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              icon={item.icon}
              component={item.component}
              isFirst={index === 0}
              isLast={index === menuItems.length - 1}
            />
          ))}
          <View style={{ marginTop: 30 }} />
          {uiMenuItems.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              icon={item.icon}
              component={item.component}
              isFirst={index === 0}
              isLast={index === uiMenuItems.length - 1}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
