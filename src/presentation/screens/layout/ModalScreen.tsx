import { View, Text, Modal } from "react-native";
import React from "react";
import { CustomView } from "../../components/ui/CustomView";
import { Title } from "../../components/ui/Title";
import { Link, router } from "expo-router";

export const ModalScreen = () => {
  const isPresented = router.canGoBack();
  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <View>
        {isPresented && (
          <Link href="../" style={{ padding: 10, backgroundColor: "red" }}>
            Go Back
          </Link>
        )}
        <Title text="Modal Content" safe />
      </View>
    </CustomView>
  );
};
