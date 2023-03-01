import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ViewStyles } from "../GlobalStyles";
import MyButton from "../components/MyButton";
import { TeamType } from "../Validation";
import { SvgUri } from "react-native-svg";
import AreaInfo from "../components/AreaInfo";
import MyText from "../components/MyText";
import SquadPlayer from "../components/SquadPlayer";
import GeneralTeamInfo from "../components/GeneralTeamInfo";

const file = require("../data_3.json");

function Teams() {
  const [data, setData] = useState<TeamType>(file);

  return (
    <View style={ViewStyles.view}>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} />
        <MyButton iconName="search" bgColor="rgb(90,180,35)">
          <Text>Search</Text>
        </MyButton>
      </View>
      <View style={styles.teamView}>
        <View style={styles.teamGeneral}>
          <View
            style={{
              flex: 5,
            }}
          >
            {data.crest.includes("svg") ? (
              <SvgUri uri={data.crest} style={styles.image} />
            ) : (
              <Image
                source={{
                  uri: data.crest,
                }}
                style={styles.image}
              />
            )}
          </View>
          <AreaInfo {...data.area} />
        </View>
        <View>
          <GeneralTeamInfo
            shortName={data.shortName}
            coachName={data.coach.name}
            venue={data.venue}
          />
          <ScrollView
            style={{
              maxHeight: "80%",
            }}
          >
            <FlatList
              data={data.squad}
              ListHeaderComponent={<MyText>Squad:</MyText>}
              renderItem={({ item }) => {
                return <SquadPlayer {...item} />;
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "rgb(10,20,28)",
    color: "whitesmoke",
    letterSpacing: 2,
    flex: 6,
  },
  searchBar: {
    display: "flex",
    flexDirection: "row",
  },
  teamView: {
    backgroundColor: "rgb(10,20,28)",
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  teamGeneral: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Teams;
