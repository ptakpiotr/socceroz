import { View, Image } from "react-native";
import React from "react";
import { CompetitonType } from "../Validation";
import { styles } from "../styles/ListItemStyles";
import ListText from "./ListText";
import { SvgUri } from "react-native-svg";

type Props = CompetitonType["standings"][0]["table"][0];

function ListItem(props: Props) {
  return (
    <View style={styles.view}>
      <ListText style={{ width: 36 }}>{props.position}.</ListText>
      {props.team?.crest?.includes("svg") ? (
        <SvgUri uri={props.team?.crest} width={26} height={26} />
      ) : (
        <Image
          source={{ uri: props.team?.crest }}
          style={{
            width: 26,
            height: 26,
          }}
        />
      )}

      <ListText style={{ width: 140 }}>{props.team?.shortName}</ListText>
      <ListText>{props.points}</ListText>
      <ListText
        style={{
          letterSpacing: 2,
        }}
      >
        {props.form}
      </ListText>
    </View>
  );
}

export default ListItem;
