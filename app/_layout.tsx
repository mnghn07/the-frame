import { ThemeProvider } from "@shopify/restyle";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as Updates from "expo-updates";
import React, { useCallback, useEffect } from "react";
import { Alert, useColorScheme } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import themes from "themes";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    MontserratRegular: require("@/assets/fonts/Montserrat-Regular.ttf"),
    MontserratSemiBold: require("@/assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
    MontserratItalic: require("@/assets/fonts/Montserrat-Italic.ttf"),
    MontserratMedium: require("@/assets/fonts/Montserrat-Medium.ttf"),
    MontserratLight: require("@/assets/fonts/Montserrat-Light.ttf")
  });

  const onFetchUpdateAsync = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (err: any) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      Alert.alert(`Error fetching latest Expo update: ${err}`);
    }
  };
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const onLayoutRootView = useCallback(async () => {
    await onFetchUpdateAsync();
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={colorScheme === "dark" ? themes.dark : themes.light}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen name="(home)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
