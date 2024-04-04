import { View, Text, StyleSheet } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { styles as ScreenDarkModalStyles } from "../components/ScreenDarkModal";
import ScreenContainer from "../components/ScreenContainer";
import ActionButton from "../components/ActionButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import { useState } from "react";
import Loader from "../components/Loader";

interface LoadVideoScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "loadVideo">;
}
const LoadVideoScreen: React.FC<LoadVideoScreenProps> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <Video
          source={{
            uri: "https://player.vimeo.com/external/467436330.sd.mp4?s=76304706368278640ac086aa2232c50327b2491e&profile_id=165&oauth2_token_id=57447761",
          }}
          style={styles.video}
          resizeMode={ResizeMode.STRETCH}
          isLooping
          onLoad={() => setIsLoading(false)}
          shouldPlay
        />
        <View style={[ScreenDarkModalStyles.bgDark, { alignItems: "stretch" }]}
         >
          <ScreenContainer styles={{ justifyContent: "space-around" }}>
            <View>
              <Text style={styles.text}>Video Grabado</Text>
              <Text style={[styles.text, styles.subtext]}>
                Desea procesarlo?
              </Text>
            </View>
            <View>
              <ActionButton
                name="continue"
                onPress={() => undefined}
              />
              <ActionButton
                name="tryAgaint"
                onPress={() => navigation.goBack()}
              />
            </View>
          </ScreenContainer>
        </View>
      </View>
      {isLoading && <Loader />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center",
  },
  subtext: {
    color: "#ffffff",
    fontWeight: "100",
  },
});

export default LoadVideoScreen;
