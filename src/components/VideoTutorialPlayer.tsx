import React, { useEffect, useRef, useState } from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { useBtnPlayModalStore } from "../stateManagement/stores";
import { useVideoPlayerStore } from "../stateManagement/stores";

const VideoTutorialPlayer: React.FC = () => {
  const videoRef = useRef<Video>(null);
  const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.playAsync();
    }
  }, [isPlaying, videoRef.current]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pauseAsync();
      } else {
        videoRef.current.playAsync();
      }
      setPlaying(!isPlaying);
      toggleBtnPlay();
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.buttonTogglerPlay}
      onPress={togglePlay}
    >
      <Video
        resizeMode={ResizeMode.STRETCH}
        ref={videoRef}
        source={{
          uri: "https://player.vimeo.com/external/467436330.sd.mp4?s=76304706368278640ac086aa2232c50327b2491e&profile_id=165&oauth2_token_id=57447761",
        }}
        style={styles.video}
        isLooping
        shouldPlay
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonTogglerPlay: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});

export default VideoTutorialPlayer;
