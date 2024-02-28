import { Button, Text } from "components";
import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native";
import { useAppStore } from "stores/client";

const Home = () => {
  const { offline, setOffline } = useAppStore();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Home</Text>
      <Link href={"/detail"}>
        <Text>Go to Detail</Text>
      </Link>
      <Button label="set" onPress={() => setOffline()} />
      {offline && <Text>Offline</Text>}
      {!offline && <Text>Online</Text>}
    </SafeAreaView>
  );
};

export default Home;
