import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "../styles/ScoreItemStyles";
import MyText from "./MyText";
import { ScoreType } from "../Validation";
import { SvgUri } from "react-native-svg";
import ScoreResult from "./ScoreResult";

export type Props = ScoreType["matches"][0] & {
  onPress: () => void;
};

function ScoreItem(props: Props) {
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={props.onPress}>
      <View style={styles.view}>
        <View style={styles.crest}>
          {props.homeTeam.crest.includes("svg") ? (
            <SvgUri width={100} height={100} uri={props.homeTeam.crest} />
          ) : (
            <Image
              source={{
                uri: props.homeTeam.crest,
              }}
              style={{
                width: 100,
                height: 100,
              }}
            />
          )}
        </View>
        <View style={styles.score}>
          <ScoreResult
            res={props.score.fullTime.home}
            borderColor={
              props.score.winner === "HOME_TEAM"
                ? "green"
                : props.score.winner === "DRAW"
                ? "gray"
                : "tomato"
            }
          />
          <ScoreResult
            res={props.score.fullTime.away}
            borderColor={
              props.score.winner === "HOME_TEAM"
                ? "tomato"
                : props.score.winner === "DRAW"
                ? "gray"
                : "green"
            }
          />
        </View>
        <View style={[styles.crest, styles.lastCrest]}>
          {props.awayTeam.crest.includes("svg") ? (
            <SvgUri width={100} height={100} uri={props.awayTeam.crest} />
          ) : (
            <Image
              source={{
                uri: props.awayTeam.crest,
              }}
              style={{
                width: 100,
                height: 100,
              }}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ScoreItem;
