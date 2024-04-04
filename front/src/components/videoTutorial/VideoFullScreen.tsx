import { Video, ResizeMode } from "expo-av";
import type { Video as VideoType } from "expo-av";
import { StyleSheet } from "react-native";
import { useRef, useEffect } from "react";
import { useVideoPlayerStore } from "../../stateManagement";

interface VideoTutorialProps {
  onLoadComplete?: () => void;
  onLoadInit?: () => void;
  videoParameters?: Record<string, any>;
  sourceUri: string;
}

export let videoRef: React.RefObject<VideoType>;

function videoAutoInit(isPlaying: boolean): void {
  if (!isPlaying && videoRef.current !== null) {
    void videoRef.current.playAsync();
  }
}

export const VideoFullScreen: React.FC<VideoTutorialProps> = ({
  onLoadComplete,
  onLoadInit,
  sourceUri,
  videoParameters,
}) => {
  const { isPlaying } = useVideoPlayerStore((state) => state);
  videoRef = useRef<VideoType>(null);

  useEffect(() => {
    videoAutoInit(isPlaying);
  }, [isPlaying, videoRef.current]);

  return (
    <Video
      {...videoParameters}
      resizeMode={ResizeMode.STRETCH}
      ref={videoRef}
      onLoadStart={onLoadInit}
      onLoad={onLoadComplete}
      source={{
        uri: sourceUri,
      }}
      style={styles.video}
      isLooping
      shouldPlay
    />
  );
};

const styles = StyleSheet.create({
  video: {
    ...StyleSheet.absoluteFillObject,
  },
});
