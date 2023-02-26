import { View, Image } from "react-native";
import React from "react";
import { CompetitonType } from "../Validation";
import { styles } from "../styles/ListItemStyles";
import ListText from "./ListText";

type Props = CompetitonType["standings"][0]["table"][0];

function ListItem(props: Props) {
  return (
    <View style={styles.view}>
      <ListText style={{ width: 36 }}>{props.position}.</ListText>
      <Image
        source={{ uri: props.team?.crest }}
        style={{
          width: 26,
          height: 26,
        }}
      />
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
