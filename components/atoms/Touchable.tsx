import { createBox } from "@shopify/restyle";
import React from "react";
import {
  Pressable as NativePressable,
  PressableProps as NativePressableProps,
  TouchableOpacity
} from "react-native";
import { Theme } from "themes";

const Pressable = createBox<Theme, NativePressableProps>(NativePressable);
type PressableProps = React.ComponentProps<typeof Pressable>;

interface Props {}

const Touchable: React.FC<Props> = props => {
  return <TouchableOpacity {...props} />;
};

export default Touchable;
