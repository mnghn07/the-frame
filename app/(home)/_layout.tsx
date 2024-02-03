import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home"
        }}
      />
      <Stack.Screen name="detail" options={{ headerShown: false }} />
    </Stack>
  );
}
