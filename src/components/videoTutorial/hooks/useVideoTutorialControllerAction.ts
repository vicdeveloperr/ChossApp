import { videoRef } from "../VideoTutorial";
import {
  useVideoPlayerStore,
  useBtnPlayModalStore,
  useVideoTutorialLoadingState,
} from "../../../stateManagement";

type action = () => void;
type videoTutorialControllerAction = () => {
  togglePlay: action;
};

export const useVideoTutorialControllerAction: videoTutorialControllerAction =
  () => {
    const { isPlaying, setPlaying } = useVideoPlayerStore((state) => state);
    const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
    const { setIsLoading } = useVideoTutorialLoadingState((state) => state);

    const togglePlay: action = () => {
      if (videoRef.current != null) {
        if (isPlaying) {
          void videoRef.current.pauseAsync();
        } else {
          void videoRef.current.playAsync();
        }
        setPlaying(!isPlaying);
        toggleBtnPlay();
      }
    };

    const onVideoLoadComplete: action = () => {
      setIsLoading(false);
    };

    return { togglePlay, onVideoLoadComplete };
  };
