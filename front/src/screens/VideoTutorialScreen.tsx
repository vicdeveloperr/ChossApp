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
            sourceUri="https://player.vimeo.com/external/454804335.hd.mp4?s=3b45d2b6dcad98317fab4904f4645710a8f9a3cc&profile_id=174&oauth2_token_id=57447761"
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
