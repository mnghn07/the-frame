import { Text } from "components";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Home</Text>
      <Link href={"/detail"}>
        <Text>Go to Detail</Text>
      </Link>
    </SafeAreaView>
  );
};

export default Home;
