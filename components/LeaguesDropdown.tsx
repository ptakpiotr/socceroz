import { Dropdown } from "react-native-element-dropdown";
import { IDropdownItem } from "../Types";
import { styles } from "../styles/TablesStyles";
import { useContext } from "react";
import { LeagueContext } from "../App";
import { View,Text } from "react-native";

function LeaguesDropdown() {
  const { chosenLeague, leagues, changeLeague } = useContext(LeagueContext);

  return (
    <View>
    <Dropdown
      data={leagues}
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
        if (changeLeague) {
          changeLeague(item);
        }
      }}
    />
    </View>
  );
}

export default LeaguesDropdown;
