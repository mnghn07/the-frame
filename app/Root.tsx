import HomeScreen from "@/screens/Home/HomeScreen";
import SettingsScreen from "@/screens/Settings/SettingsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { useColorScheme } from "react-native";

export type RootStackParamsList = {
  Home: undefined;
  modal: undefined;
};

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

export default Root;
