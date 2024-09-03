import SignIn from "@/screens/unauth/Signin/SignIn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

export type UnAuthStackParams = {
  SignIn: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<UnAuthStackParams>();

const UnAuthStack = () => {
  return (
    <Stack.Navigator initialRouteName={"SignIn"}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
