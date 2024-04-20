import { StyleSheet } from "react-native";
import { Image } from "expo-image";
import image from "../../../assets/ai-voice-choss.gif";

export const SpeechAnimation: React.FC = () => {
  return (
    <Image
      source={image}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    aspectRatio: "1/1",
  },
});
