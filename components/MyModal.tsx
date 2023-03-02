import { View, Text, Modal, ModalProps } from "react-native";
import React, { useState } from "react";
import { styles } from "../styles/VideosStyles";

type Props = ModalProps & {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  transparent?: boolean;
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
      <View
        style={[
          styles.modal,
          props.transparent
            ? {
                backgroundColor: "transparent",
              }
            : {},
        ]}
      >
        {props.children}
      </View>
    </Modal>
  );
}

export default MyModal;
