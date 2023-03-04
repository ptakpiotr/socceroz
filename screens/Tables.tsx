import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import { ViewStyles } from "../GlobalStyles";
import { styles } from "../styles/TablesStyles";
import { CompetitonType, ValidateCompetition } from "../Validation";
import ListItem from "../components/ListItem";
import ListText from "../components/ListText";
import LeaguesDropdown from "../components/LeaguesDropdown";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { REACT_APP_SCORES_KEY } from "@env";

import { LeagueContext } from "../App";
import MySpinner from "../components/MySpinner";

const Tables = () => {
  const { chosenLeague } = useContext(LeagueContext);

  const { data, isLoading } = useQuery<unknown, unknown, CompetitonType>({
    queryKey: ["Standings", "table", chosenLeague],
    queryFn: () => {
      return axios
        .get(
          `http://api.football-data.org/v4/competitions/${chosenLeague?.value}/standings`,
          {
            headers: {
              "X-Auth-Token": REACT_APP_SCORES_KEY,
            },
          }
        )
        .then((dt) => {
          const parsedData = ValidateCompetition.parse(dt.data);
          return parsedData;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });


  return (
    <View style={ViewStyles.view}>
      <LeaguesDropdown />
      {isLoading ? (
        <MySpinner />
      ) : (
        <FlatList
          data={data?.standings[0].table}
          style={styles.list}
          ListHeaderComponent={
            <View style={styles.listHeader}>
              <ListText
                style={[
                  styles.listHeaderText,
                  {
                    flex: 1,
                  },
                ]}
              >
                Pos.
              </ListText>
              <ListText
                style={[
                  styles.listHeaderText,
                  {
                    flex: 3,
                  },
                ]}
              >
                Team
              </ListText>
              <ListText
                style={[
                  styles.listHeaderText,
                  {
                    flex: 1,
                  },
                ]}
              >
                Pts.
              </ListText>
              <ListText
                style={[
                  styles.listHeaderText,
                  {
                    flex: 2,
                  },
                ]}
              >
                Form
              </ListText>
            </View>
          }
          renderItem={({ item }) => {
            return <ListItem {...item} />;
          }}
        />
      )}
    </View>
  );
};

export default Tables;
