import { StyleSheet, Text, View } from "react-native";
import Spinner, {
  SpinnerPropTypes,
} from "react-native-loading-spinner-overlay";
import React from "react";

type Props = SpinnerPropTypes;

function MySpinner(props: Props) {
  return (
    <Spinner
      visible={true}
      textContent={"Loading..."}
      textStyle={{ ...styles.spinnerTextStyle, ...props.textStyle }}
    />
  );
}

export default MySpinner;

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#fff",
  },
});
