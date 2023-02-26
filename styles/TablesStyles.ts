import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  dropdown: {
    margin: 10,
    padding: 10,
    height: 50,
    borderColor: "whitesmoke",
    backgroundColor: "rgb(10,20,28)",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholder: {
    color: "rgb(90,180,35)",
  },
  item: {
    backgroundColor: "rgb(10,20,28)",
    borderRadius: 15,
    margin: 5,
  },
  itemText: {
    color: "whitesmoke",
  },
  container: {
    borderWidth: 0,
    borderRadius: 15,
    backgroundColor: "transparent",
  },
  list: {
    padding: 10,
    margin: 10,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: "rgb(10,20,28)",
  },
  listHeader: {
    display: "flex",
    flexDirection:"row",
    borderBottomColor:"whitesmoke",
    borderBottomWidth:0.5
  },
  listHeaderText:{
    fontWeight:"bold"
  }
});
