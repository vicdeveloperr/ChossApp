import {
  useCameraRecordingStore,
  useCountdownStore,
  useTimerVisibilityStore,
  useCancelAlertVisibility,
} from "../../../stateManagement/";
import type { TimerVisibilityStore } from "../../../stateManagement/useTimerVisibilyStore";
import type { CancelAlertVisibility } from "../../../stateManagement/useCancelAlertVisibility";

type typeUseHandlerStates = () => {
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
  isTimerVisible: boolean;
  setIsTimerVisible: TimerVisibilityStore["setIsTimerVisible"];
  startCountdown: (onFinish: () => void) => void;
  resetCountdown: () => void;
  isCancelAlertVisible: boolean;
  setIsCancelAlertVisible: CancelAlertVisibility["setIsCancelAlertVisible"];
};

const useHandlerStates: typeUseHandlerStates = () => {
  const { isTimerVisible, setIsTimerVisible } = useTimerVisibilityStore(
    (state) => state
  );
  const { setIsRecording, isRecording } = useCameraRecordingStore(
    (state) => state
  );
  const { startCountdown, resetCountdown } = useCountdownStore(
    (state) => state
  );
  const { isCancelAlertVisible, setIsCancelAlertVisible } =
    useCancelAlertVisibility((state) => state);

  return {
    isRecording,
    setIsRecording,
    isTimerVisible,
    setIsTimerVisible,
    startCountdown,
    resetCountdown,
    isCancelAlertVisible,
    setIsCancelAlertVisible,
  };
};

export default useHandlerStates;
