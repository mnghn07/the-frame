import { Theme } from "@/themes";
import { createBox } from "@shopify/restyle";
import React from "react";

const Box = createBox<Theme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export default Box;
