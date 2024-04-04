import { TouchableOpacity, View, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";
import ScreenContainer from "../ScreenContainer";
import { useNavigation } from "@react-navigation/native";
import { CameraType } from "expo-camera";
import type { GestureResponderEvent } from "react-native";
import useCameraControlsHandlerStates from "./hooks/useCameraControlsHandlerStates";
import CameraRecordControllers from "./CameraRecordControllers";

const CameraControls: React.FC = () => {
  const { isRecording, setIsCancelAlertVisible, cameraType, setCameraType } =
    useCameraControlsHandlerStates();

  const navigation = useNavigation();

  type typeHandlerBackButton = (event: GestureResponderEvent) => void;
  const handlerBackButton: typeHandlerBackButton = (event) => {
    if (isRecording) {
      event.preventDefault();
      setIsCancelAlertVisible(true);
    } else {
      navigation.goBack();
    }
  };

  return (
    <ScreenContainer styles={styles.cameraContentContainer}>
      <View
        testID="CameraControls"
        style={styles.topButtonsContainer}
      >
        <TouchableOpacity
          onPress={handlerBackButton}
          testID="backButton"
        >
          <FormattedIcon
            name="back"
            size="small"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const newCameraType =
              cameraType === "front" ? CameraType.back : CameraType.front;
            setCameraType(newCameraType);
          }}
          testID="cameraSwitchButton"
          disabled={isRecording}
        >
          <FormattedIcon
            name="camera-reverse-outline"
            size="small"
          />
        </TouchableOpacity>
      </View>
      <CameraRecordControllers />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  buttonGoBack: {
    alignSelf: "flex-start",
  },
  cameraContentContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topButtonsContainer: {
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default CameraControls;
