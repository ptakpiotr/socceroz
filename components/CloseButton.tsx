import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import React from "react";

interface IProps<T> {
  action: (args?: T) => void;
  args?: T;
}

function CloseButton<T>({
  action,
  args,
  ...rest
}: IProps<T> & Omit<TouchableOpacityProps, "onPress">) {
  return (
    <TouchableOpacity
      onPress={() => {
        action(args);
      }}
      {...rest}
    >
      <Icon
        name="close"
        style={{
          color: "tomato",
          fontSize: 36,
          fontWeight: "bold",
        }}
      />
    </TouchableOpacity>
  );
}

export default CloseButton;
