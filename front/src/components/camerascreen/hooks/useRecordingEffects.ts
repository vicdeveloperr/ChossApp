import useHandlerStates from "./useHandlerStates";
import { camRef } from "../CameraView";
import stopVideoRecording from "../../../utils/stopVideoRecording";

type typeUseRecordingEffects = () => {
  onStopRecording: () => void;
};

const useRecordingEffects: typeUseRecordingEffects = () => {
  const { setIsRecording, resetCountdown } = useHandlerStates();

  const onStopRecording: () => void = () => {
    stopVideoRecording(camRef);
    resetCountdown();
    setIsRecording(false);
  };

  return { onStopRecording };
};

export default useRecordingEffects;
