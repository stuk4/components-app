import FontAwesome from "@expo/vector-icons/FontAwesome";

import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { PropsWithChildren, useContext, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/presentation/hooks/useColorScheme";
import { StatusBar } from "expo-status-bar";
import {
  ThemeContext,
  ThemeProvider,
} from "../presentation/context/ThemeContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <RootLayoutNav />
    </ThemeProvider>
  );
}

function RootLayoutNav() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: isDark ? "#000" : "#fff",
          },
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="(animations)/animations-101"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(animations)/animations-102"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(ui)/switches" options={{ headerShown: false }} />
        <Stack.Screen name="(ui)/alerts" options={{ headerShown: false }} />
        <Stack.Screen name="(ui)/textinputs" options={{ headerShown: false }} />
        <Stack.Screen
          name="(layout)/pull-to-refresh"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(layout)/custom-section-list"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="(layout)/modal"
          options={{
            presentation: "modal",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(layout)/infinite-scroll"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="(layout)/slides" options={{ headerShown: false }} />
        <Stack.Screen
          name="(layout)/change-theme"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style={isDark ? "light" : "dark"} />
    </>
  );
}
