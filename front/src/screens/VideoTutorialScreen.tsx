import Buttons from "../components/videoTutorial/Buttons";
import { useVideoTutorialLoadingState } from "../stateManagement";
import ScreenContainer from "../components/ScreenContainer";
import Loader from "../components/Loader";
import { StyleSheet } from "react-native";
import { VideoTutorialController } from "../components/VideoTutorialController";
import { useVideoTutorialActions } from "../components/videoTutorial/hooks/useVideoTutorialActions";
import VideoTutorialPlayer from "../components/videoTutorial/VideoTutorialPlayer";
import { VideoDurationAlert } from "../components/videoTutorial/VideoDurationAlert";

const VideoTutorialScreen: React.FC = () => {
  const { isLoading } = useVideoTutorialLoadingState();
  const { togglePlay, onVideoLoadComplete } = useVideoTutorialActions();

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialController onPressAction={togglePlay}>
          <VideoTutorialPlayer onLoadComplete={onVideoLoadComplete} />
        </VideoTutorialController>
        <Buttons />
      </ScreenContainer>
      <VideoDurationAlert />
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
