import { Theme } from "@/themes";
import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps
} from "@shopify/restyle";
import React from "react";

type Props = SpacingProps<Theme> & VariantProps<Theme, "cardVariants">;
const Card = createRestyleComponent<Props, Theme>([
  spacing,
  createVariant({ themeKey: "cardVariants" })
]);

export default Card;
