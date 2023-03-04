import { View, Text, StyleSheet } from "react-native";
import React from "react";
import type { Props as ScoreItemProps } from "./ScoreItem";
import MyText from "./MyText";

type Props = ScoreItemProps["homeTeam"];

function GameInfoTeamSummary(props: Props) {
  return (
    <View style={styles.gameInfo}>
      <MyText>Club: {props.name}</MyText>
      <MyText>Rank: {props.leagueRank}</MyText>
      <MyText></MyText>
    </View>
  );
}

const styles = StyleSheet.create({
  gameInfo: {
    margin: 5,
    maxWidth: 200,
  },
});

export default GameInfoTeamSummary;
