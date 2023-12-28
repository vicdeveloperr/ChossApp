import { View, TouchableOpacity, StyleSheet } from "react-native";
import { type StackNavigationProp } from "@react-navigation/stack";
import { type RootStackParamList } from "../navigation/StackNavigator";
import FormattedIcon from "../components/FormattedIcon";
import VideoPicker from "../components/VideoPicker";
import ScreenContainer from "../components/ScreenContainer";
import VideoTutorialPlayer from "../components/VideoTutorialPlayer";
import { centerViewContentStyle } from "../utils/genericStyles";
import {
  useBtnPlayModalStore,
  useVideoPlayerStore,
} from "../stateManagement/stores";
import ScreenDark from "../components/ScreenDarkModal";
import Loader from "../components/Loader";

export interface VideoTutorialScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "videoTutorial">;
}

const VideoTutorialScreen: React.FC<VideoTutorialScreenProps> = ({
  navigation,
}) => {
  const { isBtnPlayVisible, toggleBtnPlay } = useBtnPlayModalStore(
    (state) => state
  );
  const { setPlaying } = useVideoPlayerStore((state) => state);
  
  function openCamera(): void {
    navigation.navigate("camera");
  }

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }

  return (
    <>
      <ScreenContainer styles={styles.container}>
        <VideoTutorialPlayer />
        <View style={styles.buttonsContainer}>
          <VideoPicker navigation={navigation} />
          <View style={styles.buttonOpenCameraContainer}>
            <TouchableOpacity onPress={openCamera}>
              <FormattedIcon
                size="big"
                name="camera"
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Botón de play */}
        {isBtnPlayVisible && (
          <ScreenDark>
            <TouchableOpacity
              style={[styles.buttonPlayVideo, centerViewContentStyle]}
              onPress={playVideo}
            >
              <FormattedIcon name="play" />
            </TouchableOpacity>
          </ScreenDark>
        )}
      </ScreenContainer>
      <Loader></Loader>
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
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonOpenCameraContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  buttonPlayVideo: {
    width: "100%",
    height: "100%",
  },
});

export default VideoTutorialScreen;
