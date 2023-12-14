import { Theme } from "@/themes";
import { createText } from "@shopify/restyle";
import React from "react";

const Text = createText<Theme>();

export type TextProps = React.ComponentProps<typeof Text>;
export default Text;
