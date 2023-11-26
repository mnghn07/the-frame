import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type IHomeStackParamsList = {
  Home: undefined;
  Detail: undefined;
};

export type HomeProps = NativeStackScreenProps<IHomeStackParamsList, "Home">;
export type DetailProps = NativeStackScreenProps<
  IHomeStackParamsList,
  "Detail"
>;
