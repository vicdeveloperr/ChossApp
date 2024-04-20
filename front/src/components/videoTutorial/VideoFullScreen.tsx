import { Video, ResizeMode } from "expo-av";
import type { Video as VideoType, VideoProps } from "expo-av";
import { StyleSheet } from "react-native";
import { useRef, useEffect } from "react";
import { useVideoPlayerStore } from "../../stateManagement";

interface VideoTutorialProps extends VideoProps {
  onLoadComplete?: () => void;
  onLoadInit?: () => void;
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
  isMuted,
  isLooping,
  shouldPlay,
}) => {
  const { isPlaying } = useVideoPlayerStore((state) => state);
  videoRef = useRef<VideoType>(null);

  useEffect(() => {
    videoAutoInit(isPlaying);
  }, [isPlaying, videoRef.current]);

  return (
    <Video
      isMuted={isMuted}
      resizeMode={ResizeMode.STRETCH}
      ref={videoRef}
      onLoadStart={onLoadInit}
      onLoad={onLoadComplete}
      source={{
        uri: sourceUri,
      }}
      style={styles.video}
      isLooping={isLooping ?? true}
      shouldPlay={isMuted ?? true}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    ...StyleSheet.absoluteFillObject,
  },
});
