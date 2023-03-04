import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "./MyText";
import { TeamType } from "../Validation";

type Props = TeamType["squad"][0];

function SquadPlayer(props: Props) {
  return (
    <View style={styles.squadPlayerView}>
      <MyText>
        {props.name} | {props.position}
      </MyText>
      <View style={styles.number}>
        <MyText style={styles.numberText}>{0}</MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  squadPlayerView: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  number: {
    alignSelf:"flex-end",
    backgroundColor: "black",
    padding: 8,
    margin: 5,
    borderRadius: 5
  },
  numberText: {
    fontWeight: "bold",
    letterSpacing: 2,
  },
});

export default SquadPlayer;
