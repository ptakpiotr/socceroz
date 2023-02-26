import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { ViewStyles } from "../GlobalStyles";
import LeaguesDropdown from "../components/LeaguesDropdown";
import { ScoreType } from "../Validation";
import ScoreItem from "../components/ScoreItem";

const file = require("../data_2.json");

function Scores() {
  const [data, setDate] = useState<ScoreType>(file);

  return (
    <View style={ViewStyles.view}>
      <LeaguesDropdown />
      <FlatList
        data={data.matches}
        renderItem={({ item }) => <ScoreItem {...item}/>}
      />
    </View>
  );
}

export default Scores;
