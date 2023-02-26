import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { ViewStyles } from "../GlobalStyles";
import { styles } from "../styles/TablesStyles";
import { CompetitonType } from "../Validation";
import ListItem from "../components/ListItem";
import ListText from "../components/ListText";
import LeaguesDropdown from "../components/LeaguesDropdown";
const file = require("../data.json");

const Tables = () => {
  // tutaj bedzie useQueries ale to pozniej
  const [data, setData] = useState<CompetitonType>(file);

  return (
    <View style={ViewStyles.view}>
      <LeaguesDropdown />
      <FlatList
        data={data.standings[0].table}
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
    </View>
  );
};

export default Tables;
