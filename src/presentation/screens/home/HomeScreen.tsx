import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { globalStyles } from "../../../config/theme/theme";
import { Title } from "../../components/ui/Title";
import {
  animationMenuItems,
  menuItems,
  uiMenuItems,
} from "../../../config/constants/menu-items";
import { MenuItem } from "../../components/ui/MenuItem";
import { CustomView } from "../../components/ui/CustomView";

export default function HomeScreen() {
  return (
    <CustomView margin>
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
        </ScrollView>
      </View>
    </CustomView>
  );
}

const styles = StyleSheet.create({});
