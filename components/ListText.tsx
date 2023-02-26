import MyText, { Props } from "./MyText";

function ListText({ ...rest }: Props) {
  return (
    <MyText
      {...rest}
      style={[
        rest.style,
        {
          padding: 5,
          margin: 2
        },
      ]}
    ></MyText>
  );
}

export default ListText;
