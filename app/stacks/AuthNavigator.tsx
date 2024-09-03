import HomeScreen from "@/screens/auth/Home/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export type AuthStackParams = {
  Home: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParams>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
