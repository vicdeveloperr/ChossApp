import { useRef } from "react";
import { ResizeMode, Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useBtnPlayModalStore, useVideoPlayerStore } from "../stateManagement/";

interface VideoTutorialPlayerProps {
  onLoadComplete: () => void;
}

const VideoTutorialPlayer: React.FC<VideoTutorialPlayerProps> = ({
  onLoadComplete,
}) => {
  const videoRef = useRef<Video>(null);
  const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);

  const togglePlay: () => void = () => {
    if (videoRef.current != null) {
      if (isPlaying) {
        void videoRef.current.pauseAsync();
      } else {
        void videoRef.current.playAsync();
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
        onLoad={onLoadComplete}
        source={{
          uri: "https://videos.pexels.com/video-files/5274562/5274562-hd_720_1366_25fps.mp4",
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
