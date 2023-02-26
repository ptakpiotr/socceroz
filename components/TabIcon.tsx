import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";
import { TabStyles } from "../GlobalStyles";

export interface IProps<T> {
  name: string;
  focused: boolean;
  style: object;
}

function TabIcon<T>({ name, focused, style }: IProps<T>) {
  return (
    <Icon
      style={{
        ...style,
        ...{
          fontSize: (focused ? 26 : 16),
        },
      }}
      name={name}
    />
  );
}

export default TabIcon;
