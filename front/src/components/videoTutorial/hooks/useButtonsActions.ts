import { useNavigation } from "@react-navigation/native";
import {
  useBtnPlayModalStore,
  useVideoPickerErrorDialogVisibilityStore,
  useVideoPlayerStore,
} from "../../../stateManagement";
import pickVideoFromGallery from "../../../utils/pickVideoFromGallery";
import type { video } from "../../../utils/pickVideoFromGallery";
import { useProcessVideo } from "../../../utils/useProcessVideo";
import type { VideoTutorialNavigator } from "../../../types/VideoTutorialScreenNavigator";
import useLoaderVisibilityStore from "../../../stateManagement/useLoaderVisibilityStore";

type ButtonsActions = () => {
  openCamera: () => void;
  playVideo: () => void;
  pickVideo: () => Promise<void>;
};

export const useButtonsActions: ButtonsActions = () => {
  const { toggleBtnPlay } = useBtnPlayModalStore((state) => state);
  const { setPlaying } = useVideoPlayerStore((state) => state);
  const { navigate } = useNavigation<VideoTutorialNavigator>();
  const { setVideoPickerErrorDialogVisibility } =
    useVideoPickerErrorDialogVisibilityStore((state) => state);
  const processVideo = useProcessVideo();
  const { setIsLoading } = useLoaderVisibilityStore();

  function openCamera(): void {
    navigate("camera");
  }

  function playVideo(): void {
    toggleBtnPlay();
    setPlaying(true);
  }

  async function pickVideo(): Promise<void> {
    await pickVideoFromGallery()
      .then(async (video: video) => {
        await processVideo(video.uri, navigate, "ind and out");
        setIsLoading(false);
      })
      .catch(() => {
        console.log("Mostró cuadro de diálogo");
        setVideoPickerErrorDialogVisibility(true);
      });
  }

  return { playVideo, openCamera, pickVideo };
};
