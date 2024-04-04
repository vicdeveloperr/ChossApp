import type { Video } from "expo-av";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import type { GestureResponderEvent } from "react-native";

interface VideoTutorialControllerProps {
  children: React.ReactElement<Video>;
  onPressAction: (e: GestureResponderEvent) => void;
}

export const VideoTutorialController: React.FC<
  VideoTutorialControllerProps
> = ({ onPressAction, children }) => {

  return (
    <TouchableWithoutFeedback
      style={styles.buttonTogglerPlay}
      onPress={onPressAction}
    >
      {children}
    </TouchableWithoutFeedback>
  );
  
};

const styles = StyleSheet.create({
  buttonTogglerPlay: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    ...StyleSheet.absoluteFillObject,
  },
});