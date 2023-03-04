import { View, Text, FlatList } from "react-native";
import React, { useContext, useState } from "react";
import { ViewStyles } from "../GlobalStyles";
import LeaguesDropdown from "../components/LeaguesDropdown";
import { ScoreType, ValidateScore } from "../Validation";
import ScoreItem, { Props as ScoreItemProps } from "../components/ScoreItem";
import MyModal from "../components/MyModal";
import MyModalHeader from "../components/MyModalHeader";
import GameInfo from "../components/GameInfo";
import { useQuery } from "@tanstack/react-query";
import { LeagueContext } from "../App";
import axios from "axios";
import Enumerable from "linq";
import { REACT_APP_SCORES_KEY } from "@env";
import MySpinner from "../components/MySpinner";

function Scores() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [chosenGameInfo, setChosenGameInfo] = useState<
    ScoreItemProps | undefined
  >();
  const { chosenLeague } = useContext(LeagueContext);

  const { data, isLoading } = useQuery<unknown, unknown, ScoreType>({
    queryKey: ["Competition", "scores", chosenLeague],
    queryFn: () => {
      const date = new Date();
      const dateToday = date.toISOString().split("T")[0];

      const datePast = new Date(date);
      datePast.setMonth(date.getMonth() == 1 ? 12 : date.getMonth() - 1);

      const datePastStr = datePast.toISOString().split("T")[0];

      return axios
        .get(
          `http://api.football-data.org/v4/competitions/${chosenLeague?.value}/matches?dateFrom=${datePastStr}&dateTo=${dateToday}`,
          {
            headers: {
              "X-Auth-Token": REACT_APP_SCORES_KEY,
            },
          }
        )
        .then((dt) => {
          return dt.data["matches"];
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return (
    <View style={ViewStyles.view}>
      <MyModal showModal={showModal} setShowModal={setShowModal}>
        <MyModalHeader text={"Match description"} setShowModal={setShowModal} />
        {chosenGameInfo ? <GameInfo {...chosenGameInfo} /> : <></>}
      </MyModal>
      <LeaguesDropdown />
      {data ? (
        <FlatList
          data={Enumerable.from(data).take(20).toArray()}
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
      ) : (
        <MySpinner />
      )}
    </View>
  );
}

export default Scores;
