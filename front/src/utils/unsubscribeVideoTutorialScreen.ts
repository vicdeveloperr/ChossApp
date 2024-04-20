import type { Video as VideoType } from "expo-av";
import type { VideoTutorialNavigator } from "../types/VideoTutorialScreenNavigator";

export const unsubscribeVideoTutorialScreen: (
  video: VideoType | null,
  addListener: VideoTutorialNavigator["addListener"]
) => (() => void) | undefined = (video, addListener) => {
  if (video !== null) {
    void video.playAsync();

    const unsubscribe = addListener("blur", () => {
      void video.pauseAsync();
    });
    return unsubscribe;
  }
};
