import React, { useRef, useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Entypo } from "@expo/vector-icons";
import FormattedIcon from "../components/FormattedIcon";
import ScreenContainer from "../components/ScreenContainer";
import { useNavigation } from "@react-navigation/native";
import CameraCountdownModal from "../components/CameraCountdownModal";

const CameraScreen = () => {
  const cameraRef = useRef<Camera>(null);
  const [isRecording, setRecording] = useState(false);
  const [isScreenDark, setScreenDark] = useState(false);
  const [statusCameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [statusMicrophonePermission, requestMicrophonePermission] =
    Camera.useMicrophonePermissions();
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    requestCameraPermission();
    requestMicrophonePermission();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      try {
        setIsTimerVisible(true);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setIsTimerVisible(false);
        setRecording(true);
        const { uri } = await cameraRef.current.recordAsync();
        console.log("Video grabado:", uri);
      } catch (error) {
        console.error("Error al iniciar la grabación:", error);
      }
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current) {
      try {
        await cameraRef.current.stopRecording();
        setRecording(false);
        setScreenDark(true);
      } catch (error) {
        console.error("Error al detener la grabación:", error);
      }
    }
  };

  if (statusCameraPermission && statusMicrophonePermission) {
    return (
      <>
        <Camera
          style={{ flex: 1 }}
          ref={cameraRef}
          type={CameraType.front}
        >
          <ScreenContainer styles={styles.cameraContentContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonGoBack}
            >
              <FormattedIcon
                name="back"
                size="small"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={isRecording ? stopRecording : startRecording}
            >
              {isRecording ? (
                <FormattedIcon name="controller-stop" />
              ) : (
                <FormattedIcon name="controller-record" />
              )}
            </TouchableOpacity>
          </ScreenContainer>
        </Camera>
        {isTimerVisible && (
          <View style={styles.modal}>
            <CameraCountdownModal
              isVisible={isTimerVisible}
              onClose={() => console.log("Cerró")}
            />
          </View>
        )}
      </>
    );
  } else {
    return <View></View>;
  }
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
  modal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    justifyContent: "center",
  },
});

export default CameraScreen;
