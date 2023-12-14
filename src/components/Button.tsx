import Text from "@/components/atoms/Text";
import { Theme } from "@/themes";
import {
  BackgroundColorProps,
  BorderProps,
  SpacingProps,
  VariantProps,
  backgroundColor,
  border,
  composeRestyleFunctions,
  spacing,
  useRestyle
} from "@shopify/restyle";
import React from "react";
import { TouchableOpacity } from "react-native";

type RestyleProps = SpacingProps<Theme> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> &
  VariantProps<Theme, "buttonVariants">;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  border
]);

type Props = RestyleProps & {
  onPress: () => void;
  label?: string;
};

const Button: React.FC<Props> = ({ onPress, label, ...rest }) => {
  const props = useRestyle(restyleFunctions, rest);
  return (
    <TouchableOpacity {...props} onPress={onPress}>
      <Text variant="body">{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
