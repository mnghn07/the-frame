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
  textVariants: {
    defaults: {
      fontSize: 14,
      fontFamily: "MontserratRegular",
      color: "primaryText"
    },
    header: {
      fontSize: 14,
      fontFamily: "MontserratBold"
    },
    body: {
      fontSize: 16,
      lineHeight: 24
    }
  },
  buttonVariants: {
    primary: {
      backgroundColor: "buttonBackground",
      color: "buttonText"
    },
    secondary: {
      backgroundColor: "secondaryBackground",
      color: "secondaryText"
    }
  },
  cardVariants: {
    primary: {
      backgroundColor: "cardBackground",
      color: "cardText"
    }
  }
});

export type LightTheme = typeof theme;
export default theme;
