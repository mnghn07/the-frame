import { createTheme } from "@shopify/restyle";
import { palette } from "./palette";

const theme = createTheme({
  colors: {
    primaryBackground: palette.white,
    primaryText: palette.black,
    secondaryBackground: palette.black,
    secondaryText: palette.white,
    cardBackground: palette.white,
    cardText: palette.black,
    buttonBackground: palette.black,
    buttonText: palette.white
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
    largeTablet: 1024
  },
  textVariants: {
    defaults: {
      fontSize: 16,
      color: "primaryText"
    },
    header: {
      fontSize: 34
    },
    body: {
      fontSize: 16,
      lineHeight: 24
    }
  },
  buttonVariants: {
    primary: {
      backgroundColor: "buttonBackground",
      color: "buttonText",
      padding: "m",
      borderRadius: "m"
    },
    secondary: {
      backgroundColor: "secondaryBackground",
      color: "secondaryText",
      padding: "m",
      borderRadius: "m"
    }
  },
  cardVariants: {
    primary: {
      backgroundColor: "cardBackground",
      color: "cardText"
    }
  }
});

export type DarkTheme = typeof theme;
export default theme;
