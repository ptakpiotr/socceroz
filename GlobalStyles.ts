import { StyleSheet } from "react-native";

export const TabStyles = StyleSheet.create({
  tab: {
    backgroundColor: "rgb(10,20,28)",
    color: "whitesmoke",
    borderTopColor: "rgb(15,30,38)",
  },
  icon: {
    color: "whitesmoke",
  },
  activeTab: {
    backgroundColor: "rgb(15,30,38)",
  },
  inactiveColor: {
    color: "rgb(70,130,15)",
  },
  activeColor: {
    color: "rgb(90,180,35)",
  },
});

export const ViewStyles = StyleSheet.create({
  view: {
    backgroundColor: "rgb(40,98,58)",
    width: "100%",
  },
  text: {
    color: "whitesmoke",
  },
});

export const HeaderStyles = StyleSheet.create({
  header: {
    backgroundColor: "rgb(15,30,38)"
  },
  title: {
    color: "rgb(90,180,35)",
    letterSpacing:3
  },
});
