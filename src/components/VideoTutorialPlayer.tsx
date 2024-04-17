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
