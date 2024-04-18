import recordVideo from "../../../utils/recordVideo";
import { useNavigation } from "@react-navigation/native";
import useHandlerStates from "./useHandlerStates";
import { camRef } from "../CameraView";
import type { CameraScreenNavigator } from "../../../screens/CameraScreen";
import { useProcessVideo } from "../../../utils/useProcessVideo";

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
  const { resetCountdown, setIsRecording } = useHandlerStates();
  const processVideo = useProcessVideo();

  const onStartRecording: () => Promise<void> = async () => {
    beforeStart();

    if (camRef.current != null) {
      await recordVideo(camRef.current)
        .then(async (data) => {
          setIsRecording(false);
          resetCountdown();

          await processVideo(data as string, navigate, "allen iverson cross");
        })
        .catch((err: string) => {
          console.log(err);
        });
    }
  };

  return onStartRecording;
};
