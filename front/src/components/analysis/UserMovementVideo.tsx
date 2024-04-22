import React from "react";
import { useRecordedStore } from "../../stateManagement";
import useLoaderVisibilityStore from "../../stateManagement/useLoaderVisibilityStore";
import { VideoFullScreen } from "../videoTutorial/VideoFullScreen";
import { View } from "react-native";

export const UserMovementVideo: React.FC = () => {
  const { setIsLoading } = useLoaderVisibilityStore((state) => state);
  const { recorded } = useRecordedStore((state) => state);

  return (
    <>
      <VideoFullScreen
        onLoadInit={() => {
          setIsLoading(true);
        }}
        sourceUri={recorded}
        // onLoadComplete={() => {
        //   setIsLoading(false);
        // }}
        isMuted={true}
      />
      <View testID="UserMovementVideo"></View>
    </>
  );
};
