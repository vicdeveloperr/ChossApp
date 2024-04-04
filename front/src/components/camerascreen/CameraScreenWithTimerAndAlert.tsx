import CameraScreen from "../../screens/CameraScreen";
import useHandlerStates from "./hooks/useHandlerStates";
import CameraCountdownModal from "./CameraCountdownModal";
import CancelAlertRecording from "./CancelAlertRecording";
import type { CameraScreenProps } from "../../screens/CameraScreen";

export const CameraScreenWithTimerAndAlert: React.FC<CameraScreenProps> = ({
  children,
}) => {
  const { isTimerVisible, isCancelAlertVisible } = useHandlerStates();

  return (
    <CameraScreen>
      {isTimerVisible && <CameraCountdownModal />}
      {isCancelAlertVisible && <CancelAlertRecording />}
      {children}
    </CameraScreen>
  );
};
