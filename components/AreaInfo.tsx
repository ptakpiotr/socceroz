import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { SvgUri } from "react-native-svg";

import type { TeamType } from "../Validation";
import MyText from "./MyText";

type Props = TeamType["area"];

function AreaInfo(props: Props) {
  return (
    <View style={styles.areaView}>
      {props.flag.includes("svg") ? (
        <SvgUri uri={props.flag} style={styles.image} />
      ) : (
        <Image
          source={{
            uri: props.flag,
          }}
          style={styles.image}
        />
      )}
      <MyText>{props.code}</MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  areaView: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default AreaInfo;
