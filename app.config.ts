import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: config.slug || "the-frame",
  name: config.name || "The Frame",
  plugins: ["expo-font", "expo-router"]
});
