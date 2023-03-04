export interface IModal {
  embed: string;
  title: string;
}

export interface IDropdownItem {
  label: string;
  value: string;
}

export interface ILeagues {
  leagues: IDropdownItem[];
  chosenLeague?: IDropdownItem;
  changeLeague?: React.Dispatch<
    React.SetStateAction<IDropdownItem | undefined>
  >;
}
