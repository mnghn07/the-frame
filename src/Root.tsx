import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./Navigator";

const Root = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default Root;
