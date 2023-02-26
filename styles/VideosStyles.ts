import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "rgb(10,20,28)",
    height: "60%",
    padding: 10,
    margin: 10,
    marginTop: 100,
    borderRadius: 15,
  },
  matchInfo: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  webView: {
    width: "100%",
    height: 250,
    backgroundColor: "transparent",
  },
  matchHighlightsTitle: {
    fontWeight: "bold",
    fontSize: 26,
  },
  highlightsTitle: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 15,
    padding: 10,
  },
});
