import {
  View,
  Text,
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Button,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { ValidateVideo, VideoType } from "../Validation";
import { REACT_APP_API_KEY } from "@env";
import VideoView from "../components/VideoView";
import { ViewStyles } from "../GlobalStyles";
import WebView from "react-native-webview";
import CloseButton from "../components/CloseButton";

import { styles } from "../styles/VideosStyles";
import { useQuery } from "@tanstack/react-query";
import { IModal } from "../Types";


const Videos = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [videoInfo, setVideoInfo] = useState<IModal>();

  const { data: videoData, isLoading } = useQuery<unknown, unknown, VideoType>({
    queryKey: ["videos"],
    queryFn: () => {
      return axios
        .get(
          `https://www.scorebat.com/video-api/v3/feed/?token=${REACT_APP_API_KEY}`
        )
        .then((dt) => {
          try {
            const parsedData = ValidateVideo.parse(dt.data);
            console.log("TEST");
            return parsedData;
          } catch (ex) {
            Alert.alert(
              "Couldn't fetch videos",
              "Unexpected error while fetching video highlights occured"
            );
          }
        })
        .catch((err) => console.error(err));
    },
  });

  const handlePress = (source: string, info: string) => {
    setShowModal((prev) => !prev);
    setVideoInfo({
      embed: source,
      title: info,
    });
  };

  return (
    <View style={ViewStyles.view}>
      <Modal
        visible={showModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          setShowModal(false);
        }}
      >
        <View style={styles.modal}>
          <View style={styles.matchInfo}>
            <Text style={[ViewStyles.text, styles.matchHighlightsTitle]}>
              Match highlights
            </Text>
            <CloseButton
              action={() => {
                setShowModal(false);
              }}
            />
          </View>
          <View
            style={{
              flex: 11,
            }}
          >
            <WebView
              style={styles.webView}
              originWhitelist={["*"]}
              source={{ html: videoInfo?.embed ?? "" }}
            />
            <Text style={[ViewStyles.text, styles.highlightsTitle]}>
              {videoInfo?.title}
            </Text>
          </View>
        </View>
      </Modal>
      <FlatList
        data={videoData?.response}
        renderItem={(item) => {
          return <VideoView {...item.item} setModalOptions={handlePress} />;
        }}
      />
    </View>
  );
};

export default Videos;
