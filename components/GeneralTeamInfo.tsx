import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MyText from "./MyText";

interface IProps {
  shortName: string;
  venue: string;
}

function GeneralTeamInfo({ shortName, venue }: IProps) {
  return (
    <View>
      <View style={styles.generalTeamInfo}>
        <MyText style={styles.centeredTeamName}>{shortName}</MyText>
      </View>
      <View style={styles.generalTeamInfo}>
        <MyText>Stadium: {venue}</MyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  generalTeamInfo: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 20,
    margin: 5,
    borderRadius: 5,
  },
  centeredTeamName: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});

export default GeneralTeamInfo;
