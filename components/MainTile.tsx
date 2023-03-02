import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MyText from "./MyText";
import MyModal from "./MyModal";
import MyModalHeader from "./MyModalHeader";

interface IProps {
  image: string;
  text: string;
  component: JSX.Element;
  marginLeft?: string;
}

function MainTile({ image, text, component, marginLeft }: IProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <TouchableOpacity
      style={[styles.mainTile, { marginLeft }]}
      activeOpacity={0.7}
      onPress={() => {
        setShowModal(true);
      }}
    >
      <MyModal showModal={showModal} setShowModal={setShowModal} transparent={true}>
        {component}
      </MyModal>
      <MyText style={styles.textStyle}>{text}</MyText>
      <ImageBackground
        source={{ uri: image }}
        style={{
          width: 120,
          height: 150,
          opacity: 0.3,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainTile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "rgb(10,20,28)",
    margin: 10,
    borderRadius: 15,
    width: 200,
    height: 200,
  },
  textStyle: {
    width: 8,
    marginRight: 30,
  },
});

export default MainTile;
