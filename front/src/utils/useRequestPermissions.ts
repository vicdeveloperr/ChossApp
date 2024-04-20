import { Camera } from "expo-camera";
import { useEffect } from "react";

export const useRequestPermissions: () => void = () => {
  const [statusCameraPermissions, requestCameraPermissions] =
    Camera.useCameraPermissions();

  const [statusMicrophonePermissions, requestMicrophonePermissions] =
    Camera.useMicrophonePermissions();

  useEffect(() => {
    if (statusCameraPermissions === null) {
      void requestCameraPermissions();
    }
    if (statusMicrophonePermissions === null) {
      void requestMicrophonePermissions();
    }
  }, []);
};
