import React, { useState } from "react";
import { CustomView } from "../ui/CustomView";
import { Switch } from "react-native";
import Card from "../ui/Card";
import { CustomSwitch } from "../ui/CustomSwitch";
import { Separator } from "../ui/Separator";

export const SwitchScreen = () => {
  //   const [isEnabled, setIsEnabled] = useState(false);
  //   const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
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
