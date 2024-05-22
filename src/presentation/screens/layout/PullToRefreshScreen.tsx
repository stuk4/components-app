import React, { useContext, useState } from "react";
import { Title } from "../../components/ui/Title";
import { CustomView } from "../../components/ui/CustomView";
import { RefreshControl, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { globalStyles } from "../../../config/theme/theme";
import { ThemeContext } from "../../context/ThemeContext";

export const PullToRefreshScreen = () => {
  const { top } = useSafeAreaInsets();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { colors } = useContext(ThemeContext);
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          progressViewOffset={top}
          colors={[colors.primary, "red", "orange", "green"]}
          progressBackgroundColor={colors.cardBackground}
          tintColor={colors.primary}
          onRefresh={onRefresh}
        />
      }
      style={[globalStyles.mainContainer, globalStyles.globalMargin]}
    >
      {/* <CustomView margin> */}
      <Title text="Pull to refresh" safe />
      {/* </CustomView> */}
    </ScrollView>
  );
};
