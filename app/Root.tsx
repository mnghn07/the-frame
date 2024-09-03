import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AuthStack from "./stacks/AuthNavigator";
import UnAuthStack from "./stacks/UnauthNavigator";

export type RootStackParamsList = {
  Auth: undefined;
  UnAuth: undefined;
};

const Stack = createStackNavigator();

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        options={{ headerShown: false }}
        component={AuthStack}
      />
      <Stack.Screen
        name="UnAuth"
        options={{ headerShown: false }}
        component={UnAuthStack}
      />
    </Stack.Navigator>
  );
};

export default Root;
