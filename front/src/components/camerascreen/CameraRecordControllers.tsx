import useHandlerStates from "./hooks/useHandlerStates";
import { TouchableOpacity } from "react-native";
import FormattedIcon from "../FormattedIcon";
import useRecordingEffects from "./hooks/useRecordingEffects";
import { useOnStartRecording } from "./hooks/useOnStartRecording";

const CameraRecordControllers: React.FC = () => {
  const { isRecording } = useHandlerStates();
  const { onStopRecording } = useRecordingEffects();
  const onStartRecording = useOnStartRecording();

  const testIdValue = isRecording ? "stopRecordButton" : "recordButton";
  type typeNameValue = "controller-stop" | "controller-record";
  const nameValue: typeNameValue = isRecording
    ? "controller-stop"
    : "controller-record";
  const togglerRecording = isRecording ? onStopRecording : onStartRecording;

  return (
    <TouchableOpacity
      onPress={togglerRecording}
      testID={testIdValue}
    >
      <FormattedIcon name={nameValue} />
    </TouchableOpacity>
  );
};

export default CameraRecordControllers;
