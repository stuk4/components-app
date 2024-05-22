import React, { useContext, useState } from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Switch } from "react-native";
import Card from "../../components/ui/Card";
import { CustomSwitch } from "../../components/ui/CustomSwitch";
import { Separator } from "../../components/ui/Separator";
import { ThemeContext } from "../../context/ThemeContext";
import { StatusBar } from "expo-status-bar";

export const SwitchScreen = () => {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const { currentTheme } = useContext(ThemeContext);
  return (
    <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
      <Card>
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
          text="Encendido"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
          text="Hambriento"
        />
        <Separator />
        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
          text="Feliz"
        />
      </Card>
    </CustomView>
  );
};
