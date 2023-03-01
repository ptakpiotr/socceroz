import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = TouchableOpacityProps & {
  iconName?: string;
  bgColor?: string;
};

function MyButton(props: Props) {
  return (
    <TouchableOpacity style={[styles.button,{
        backgroundColor:props.bgColor
    }]} {...props}>
      <View style={{
        display:"flex",
        flexDirection:"row"
      }}>
        {props.iconName ? <Icon name={props.iconName} style={{
            fontSize:22
        }}/> : <></>}
        <View>{props.children}</View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "silver",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default MyButton;
