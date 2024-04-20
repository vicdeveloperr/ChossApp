import { useEffect, useRef, useCallback } from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
} from "../../stateManagement/";
// @ts-expect-error - Esta url existe
import videoTutorial from "../../../assets/allen-iverson-cross-tutorial.mp4";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { unsubscribeVideoTutorialScreen } from "../../utils/unsubscribeVideoTutorialScreen";

interface VideoTutorialPlayerProps {
  onLoadComplete: () => void;
}

const VideoTutorialPlayer: React.FC<VideoTutorialPlayerProps> = ({
  onLoadComplete,
}) => {
  const videoRef = useRef<Video>(null);
  const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
  const { addListener } = useNavigation();

  useEffect(() => {
    if (isPlaying && videoRef.current !== null) {
      void videoRef.current.playAsync();
    }
  }, [isPlaying, videoRef.current]);

  useFocusEffect(
    useCallback(() => {
      return unsubscribeVideoTutorialScreen(videoRef.current, addListener);
    }, [])
  );

  const pause: () => void = () => {
    if (videoRef.current != null) {
      void videoRef.current.pauseAsync();
      setPlaying(false);
      toggleBtnPlay();
    }
  };

  return (
    <TouchableWithoutFeedback
      style={styles.buttonTogglerPlay}
      onPress={pause}
    >
      <Video
        resizeMode={ResizeMode.STRETCH}
        ref={videoRef}
        onLoad={onLoadComplete}
        source={videoTutorial}
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
