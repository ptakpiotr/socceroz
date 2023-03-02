import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  ScrollView,
} from "react-native";
import { ViewStyles } from "../GlobalStyles";

import React from "react";
import MyText from "../components/MyText";
import MainTile from "../components/MainTile";
import Scores from "./Scores";
import Tables from "./Tables";
import Videos from "./Videos";
import Teams from "./Teams";

const Main = () => {
  return (
    <ScrollView style={[ViewStyles.view, styles.container]}>
      <MainTile
        image={
          "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=993&q=80"
        }
        component={<Scores />}
        text={"Scores"}
      />
      <MainTile
        image={
          "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        component={<Tables />}
        text={"Tables"}
        marginLeft={"50%"}
      />
      <MainTile
        image={
          "https://images.unsplash.com/photo-1613125479732-14543c793349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        component={<Videos />}
        text={"Videos"}
      />
      <MainTile
        image={
          "https://images.unsplash.com/photo-1468259275383-c4f1b88d5772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        }
        component={<Teams />}
        text={"Team info"}
        marginLeft={"50%"}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
});

export default Main;
