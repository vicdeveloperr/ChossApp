import { useNavigation } from "@react-navigation/native";
import {
  useBtnPlayModalStore,
  useVideoPickerErrorDialogVisibilityStore,
  useVideoPlayerStore,
} from "../../../stateManagement";
import type { VideoTutorialNavigationObject } from "../VideoFullScreen";
import pickVideoFromGallery from "../../../utils/pickVideoFromGallery";
import type { video } from "../../../utils/pickVideoFromGallery";

type ButtonsActions = () => {
  openCamera: () => void;
  playVideo: () => void;
  pickVideo: () => Promise<void>;
};

export const useButtonsActions: ButtonsActions = () => {
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
  const { setPlaying } = useVideoPlayerStore((state) => state);
  const { navigate } = useNavigation<VideoTutorialNavigationObject>();
  const { setVideoPickerErrorDialogVisibility } =
    useVideoPickerErrorDialogVisibilityStore((state) => state);

  function openCamera(): void {
    navigate("camera");
  }

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }

  async function pickVideo(): Promise<void> {
    await pickVideoFromGallery()
      .then((video: video) => {
        navigate("loadVideo");
      })
      .catch(() => {
        console.log("Mostró cuadro de diálogo");
        setVideoPickerErrorDialogVisibility(true);
      });
  }

  return { playVideo, openCamera, pickVideo };
};
