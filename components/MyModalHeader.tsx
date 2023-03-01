import { View, Text } from "react-native";
import React from "react";
import { styles } from "../styles/VideosStyles";
import { ViewStyles } from "../GlobalStyles";
import CloseButton from "./CloseButton";

interface IProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
}

function MyModalHeader({ text, setShowModal }: IProps) {
  return (
    <View style={styles.matchInfo}>
      <Text style={[ViewStyles.text, styles.matchHighlightsTitle]}>{text}</Text>
      <CloseButton
        action={() => {
          setShowModal(false);
        }}
      />
    </View>
  );
}

export default MyModalHeader;
