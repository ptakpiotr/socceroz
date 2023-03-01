import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import type { Props } from "./ScoreItem";
import MyText from "./MyText";
import { SvgUri } from "react-native-svg";
import GameInfoTeamSummary from "./GameInfoTeamSummary";

function GameInfo(props: Props) {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.wrapper, styles.matchDesc]}>
        <GameInfoTeamSummary {...props.homeTeam} />
        <GameInfoTeamSummary {...props.awayTeam} />
      </View>
      <View style={styles.container}>
        {props.homeTeam.crest.includes("svg") ? (
          <SvgUri uri={props.homeTeam.crest} style={styles.gameImage} />
        ) : (
          <ImageBackground
            source={{
              uri: props.homeTeam.crest,
            }}
            style={styles.gameImage}
          />
        )}

        {props.awayTeam.crest.includes("svg") ? (
          <SvgUri
            uri={props.awayTeam.crest}
            style={[styles.gameImage, styles.positiveRotate]}
          />
        ) : (
          <ImageBackground
            source={{
              uri: props.awayTeam.crest,
            }}
            style={[styles.gameImage, styles.positiveRotate]}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    flexDirection: "row",
  },
  gameImage: {
    width: 150,
    height: 150,
    zIndex: -1,
    transform: [
      {
        rotate: "-30deg",
      },
    ],
    opacity: 0.6,
  },
  positiveRotate: {
    transform: [
      {
        rotate: "30deg",
      },
    ],
  },
  matchDesc: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 10,
  }
});
export default GameInfo;
