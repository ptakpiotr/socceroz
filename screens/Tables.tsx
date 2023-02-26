import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { ViewStyles } from "../GlobalStyles";
import { IDropdownItem } from "../Types";
import { styles } from "../styles/TablesStyles";
import { CompetitonType } from "../Validation";
import ListItem from "../components/ListItem";
import ListText from "../components/ListText";

const file = require("../data.json");

const dropdownItems: IDropdownItem[] = [
  { label: "La Liga", value: "LL" },
  { label: "Serie A", value: "SA" },
  { label: "Bundesliga", value: "BS" },
  { label: "Ligue 1", value: "L1" },
  { label: "Eredivisie", value: "ES" },
  { label: "Liga NOS", value: "NOS" },
  { label: "Premier League", value: "PL" },
  { label: "Championship", value: "CS" },
];

const Tables = () => {
  // tutaj bedzie useQueries ale to pozniej
  const [data, setData] = useState<CompetitonType>(file);

  return (
    <View style={ViewStyles.view}>
      <Dropdown
        data={dropdownItems}
        style={styles.dropdown}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.placeholder}
        itemContainerStyle={styles.item}
        itemTextStyle={styles.itemText}
        containerStyle={styles.container}
        activeColor={"rgb(90,180,35)"}
        placeholder="Choose competition"
        labelField="label"
        valueField="value"
        onChange={(item) => {
          console.log(item);
        }}
      />
      <FlatList
        data={data.standings[0].table}
        style={styles.list}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <ListText style={[styles.listHeaderText,{
              flex:1
            }]}>Pos.</ListText>
            <ListText style={[styles.listHeaderText,{
              flex:3
            }]}>Team</ListText>
            <ListText style={[styles.listHeaderText,{
              flex:1
            }]}>Pts.</ListText>
            <ListText style={[styles.listHeaderText,{
              flex:2
            }]}>Form</ListText>
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
