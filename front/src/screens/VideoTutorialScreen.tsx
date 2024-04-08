import Buttons from "../components/videoTutorial/Buttons";
import { useVideoTutorialLoadingState } from "../stateManagement";
import ScreenContainer from "../components/ScreenContainer";
import Loader from "../components/Loader";
import { StyleSheet } from "react-native";
import { VideoTutorialController } from "../components/VideoTutorialController";
import { VideoFullScreen } from "../components/videoTutorial/VideoFullScreen";
import { useVideoTutorialActions } from "../components/videoTutorial/hooks/useVideoTutorialActions";

const VideoTutorialScreen: React.FC = () => {
  const { isLoading } = useVideoTutorialLoadingState();
  const { togglePlay, onVideoLoadComplete } = useVideoTutorialActions();

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialController onPressAction={togglePlay}>
          <VideoFullScreen
            onLoadComplete={onVideoLoadComplete}
            sourceUri="https://videos.pexels.com/video-files/5274575/5274575-hd_1080_2048_25fps.mp4"
          />
        </VideoTutorialController>
        <Buttons />
      </ScreenContainer>
      <Loader isLoading={isLoading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingTop: 0,
    display: "flex",
    justifyContent: "flex-end",
  },
});

export default VideoTutorialScreen;
