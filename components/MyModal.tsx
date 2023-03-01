import { View, Text, Modal, ModalProps } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/VideosStyles";
import { ViewStyles } from "../GlobalStyles";
import CloseButton from "./CloseButton";

type Props = ModalProps & {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

function MyModal(props: Props) {
  const { showModal, setShowModal } = props;

  return (
    <Modal
      {...props}
      visible={showModal}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setShowModal(false);
      }}
    >
      <View style={styles.modal}>
        {props.children}
      </View>
    </Modal>
  );
}

export default MyModal;
