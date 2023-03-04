import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { ViewStyles } from "../GlobalStyles";
import MyButton from "../components/MyButton";
import { TeamType, ValidateTeam } from "../Validation";
import { parse, SvgUri } from "react-native-svg";
import AreaInfo from "../components/AreaInfo";
import MyText from "../components/MyText";
import SquadPlayer from "../components/SquadPlayer";
import GeneralTeamInfo from "../components/GeneralTeamInfo";
import { useQuery } from "@tanstack/react-query";
import { REACT_APP_SCORES_KEY } from "@env";
import axios from "axios";
import { useLinkTo } from "@react-navigation/native";
import MySpinner from "../components/MySpinner";

function Teams() {
  const [id, setId] = useState<number>(81);
  const [idSearch, setIdSearch] = useState<number>(id);
  const linkTo = useLinkTo();
  const { data, isLoading } = useQuery<unknown, unknown, TeamType>({
    queryKey: ["Team", "scores", idSearch],
    queryFn: () => {
      return axios
        .get(`http://api.football-data.org/v4/teams/${idSearch}`, {
          headers: {
            "X-Auth-Token": REACT_APP_SCORES_KEY,
          },
        })
        .then((dt) => {
          const parsedData = ValidateTeam.parse(dt.data);
          return parsedData;
        })
        .catch((err) => {
          Alert.alert(
            "An error occured",
            "An error occured when processing your request. The requested doesn't exist or you excedeed your free permissons"
          );

          setId(81);
          setIdSearch(81);
          linkTo("/Home");
        });
    },
  });

  return (
    <ScrollView style={ViewStyles.view}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          keyboardType={"number-pad"}
          onChangeText={(txt) => {
            if (txt.match(/\d+/gi)) {
              setId(parseInt(txt));
            } else {
              Alert.alert("Invalid team ID", "Provided team ID wasn't correct");
            }
          }}
        />
        <MyButton
          iconName="search"
          bgColor="rgb(90,180,35)"
          onPress={() => {
            setIdSearch(id);
          }}
        >
          <Text>Search</Text>
        </MyButton>
      </View>
      {data ? (
        <View style={styles.teamView}>
          <View style={styles.teamGeneral}>
            <View
              style={{
                flex: 5,
              }}
            >
              {data.crest.includes("svg") ? (
                <SvgUri
                  uri={data.crest}
                  style={styles.image}
                  width={100}
                  height={100}
                />
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
            <GeneralTeamInfo shortName={data.shortName} venue={data.venue} />
            <View>
              <MyText>Squad:</MyText>
              {data.squad.map((item) => (
                <SquadPlayer key={`${item.name}`} {...item} />
              ))}
            </View>
          </View>
        </View>
      ) : (
        <MySpinner />
      )}
    </ScrollView>
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
