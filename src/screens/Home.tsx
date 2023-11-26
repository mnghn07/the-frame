import { HomeProps } from "@/Models";
import React from "react";
import { Text, View } from "react-native";

const Home: React.FC<HomeProps> = props => {
  const { navigation } = props;
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
