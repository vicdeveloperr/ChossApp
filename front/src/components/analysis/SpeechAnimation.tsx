import { Image, StyleSheet, View } from "react-native";
import { AnimatedSpeech } from "./AnimatedSpeech";
import { Shadow } from "react-native-shadow-2";

export const SpeechAnimation: React.FC = () => {
  return (
    <Image
      source={{
        uri: "https://i.pinimg.com/564x/7b/07/b3/7b07b3ed967d66066ab27904f9ef0944.jpg",
      }}
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
