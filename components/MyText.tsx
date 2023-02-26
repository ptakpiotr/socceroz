import { Text, TextProps } from "react-native";
import { ViewStyles } from "../GlobalStyles";

export type Props = TextProps;

function MyText({ ...rest }: Props) {
  return <Text {...rest} style={[ViewStyles.text, rest.style]}></Text>;
}

export default MyText;
