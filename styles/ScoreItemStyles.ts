import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  view: {
    display: "flex",
    flexDirection: "row",
    padding: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "rgb(10,20,28)",
  },
  crest: {
    flex: 4.5,
  },
  lastCrest: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-end"
  },
  score: {
    display: "flex",
    flexDirection: "row",
    flex: 6,
  },
  scoreResult: {
    backgroundColor: "whitesmoke",
    margin: 10,
    padding: 20,
    borderWidth:1
  },
  scoreResultText: {
    fontSize: 36,
    fontWeight:"bold"
  },
});
