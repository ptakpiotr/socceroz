import { Dropdown } from "react-native-element-dropdown";
import { IDropdownItem } from "../Types";
import { styles } from "../styles/TablesStyles";

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

function LeaguesDropdown() {
  return (
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
  );
}

export default LeaguesDropdown;
