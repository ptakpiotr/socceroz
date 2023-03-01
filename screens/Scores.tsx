import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { ViewStyles } from "../GlobalStyles";
import LeaguesDropdown from "../components/LeaguesDropdown";
import { ScoreType } from "../Validation";
import ScoreItem, { Props as ScoreItemProps} from "../components/ScoreItem";
import MyModal from "../components/MyModal";
import MyModalHeader from "../components/MyModalHeader";
import GameInfo from "../components/GameInfo";

const file = require("../data_2.json");

function Scores() {
  const [data, setDate] = useState<ScoreType>(file);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [chosenGameInfo,setChosenGameInfo] = useState<ScoreItemProps | undefined>();

  return (
    <View style={ViewStyles.view}>
      <MyModal showModal={showModal} setShowModal={setShowModal}>
        <MyModalHeader text={"Match description"} setShowModal={setShowModal} />
        {chosenGameInfo?<GameInfo {...chosenGameInfo} />:<></>}
      </MyModal>
      <LeaguesDropdown />
      <FlatList
        data={data.matches}
        renderItem={({ item }) => (
          <ScoreItem
            {...item}
            onPress={() => {
              setShowModal((prev) => !prev);
              setChosenGameInfo(item as ScoreItemProps);
            }}
          />
        )}
      />
    </View>
  );
}

export default Scores;
