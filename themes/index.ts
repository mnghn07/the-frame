import { useColorScheme } from "react-native";
import dark, { DarkTheme } from "./dark";
import light, { LightTheme } from "./light";

const themes = {
  light,
  dark
};

export const getTheme: () => LightTheme | DarkTheme = () => {
  const currentTheme = useColorScheme();
  if (!currentTheme) return themes["light"];
  return themes[currentTheme];
};

export type Theme = LightTheme | DarkTheme;

export default themes;
