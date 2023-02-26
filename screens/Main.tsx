import { View, Text, StyleSheet,Alert,Button } from "react-native";
import {ViewStyles} from "../GlobalStyles";

import React from "react";
import MyText from "../components/MyText";

const Main = () => {
  return (
    <View style={[ViewStyles.view,styles.container]}>
      <MyText>Test</MyText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:"100%"
  },
});

export default Main;
