import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { VideoType } from "../Validation";
import { ViewStyles } from "../GlobalStyles";

type Props = VideoType["response"][0] & {
  setModalOptions: (source: string, title: string) => void;
};

const VideoView = (props: Props) => {
  const handlePress = () => {
    props.setModalOptions(props.videos[0].embed, props.title);
  };
  return (
    <TouchableOpacity activeOpacity={0.75} onPress={handlePress}>
      <View style={styles.view}>
        <Text style={[ViewStyles.text, styles.competition]}>
          {props.competition}
        </Text>
        <Image source={{ uri: props.thumbnail }} style={styles.image} />
        <Text style={[ViewStyles.text, styles.title]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
    padding: 5,
    backgroundColor: "rgba(10,20,28,0.5)",
    borderRadius: 5,
  },
  competition: {
    fontWeight: "bold",
    textAlign: "center",
    padding: 5,
    margin: 5,
  },
  title: {
    textAlign: "center",
    padding: 5,
    margin: 5,
  },
  image: {
    width: "100%",
    height: 100,
    borderWidth: 0.5,
    borderColor: "whitesmoke",
  },
});

export default VideoView;
