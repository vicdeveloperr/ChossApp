import type { CameraType } from "expo-camera";
import type { cameraTypeStore } from "../../../stateManagement/useCameraTypeStore";
import type { CancelAlertVisibility } from "../../../stateManagement/useCancelAlertVisibility";
import useCameraRecordingStore from "../../../stateManagement/useCameraRecordingStore";
import useCancelAlertVisibility from "../../../stateManagement/useCancelAlertVisibility";
import useCameraTypeStore from "../../../stateManagement/useCameraTypeStore";

type CameraControlsHandlerStates = () => {
  isRecording: boolean;
  cameraType: CameraType;
  setCameraType: cameraTypeStore["setCameraType"];
  setIsCancelAlertVisible: CancelAlertVisibility["setIsCancelAlertVisible"];
};

const useCameraControlsHandlerStates: CameraControlsHandlerStates = () => {
  const { isRecording } = useCameraRecordingStore((state) => state);
  const { cameraType, setCameraType } = useCameraTypeStore((state) => state);
  const { setIsCancelAlertVisible } = useCancelAlertVisibility(
    (state) => state
  );

  return { isRecording, cameraType, setCameraType, setIsCancelAlertVisible };
};

export default useCameraControlsHandlerStates;
