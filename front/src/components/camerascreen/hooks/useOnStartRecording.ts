import recordVideo from "../../../utils/recordVideo";
import getVideoAnalysis from "../../../utils/getVideoAnalysis";
import { useNavigation } from "@react-navigation/native";
import { useRecordedStore, useSpeechStore } from "../../../stateManagement";
import useHandlerStates from "./useHandlerStates";
import { camRef } from "../CameraView";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";

type onStartRecordingType = () => () => Promise<void>;

function useBeforeStart(): () => void {
  const { setIsTimerVisible, startCountdown, setIsRecording } =
    useHandlerStates();

  const beforeStart: () => void = () => {
    setIsTimerVisible(true);
    startCountdown(onFinishCountdown);

    function onFinishCountdown(): void {
      setIsTimerVisible(false);
      setIsRecording(true);
    }
  };

  return beforeStart;
}

export const useOnStartRecording: onStartRecordingType = () => {
  const beforeStart = useBeforeStart();

  const { navigate } = useNavigation<CameraScreenNavigator>();
  const { setRecorded } = useRecordedStore((state) => state);
  const { resetCountdown, setIsRecording } = useHandlerStates();
  const { setSpeech } = useSpeechStore();

  const onStartRecording: () => Promise<void> = async () => {
    beforeStart();

    if (camRef.current != null) {
      await recordVideo(camRef.current)
        .then(async (data) => {
          setIsRecording(false);
          resetCountdown();

          if (typeof data === "string") {
            setRecorded(data);
            const path = await getVideoAnalysis(data, "allen iverson cross");
            setSpeech(path);
            navigate("analysis");
          }
        })
        .catch((err: string) => {
          console.log(err);
        });
    }
  };

  return onStartRecording;
};
