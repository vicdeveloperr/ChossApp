import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { StyleSheet, Text, View } from "react-native";
import { questions } from "../utils/recomendedQuestions";
import { Gradient } from "../components/Gradient";
import { paragraph } from "../utils/genericStyles";
import Loader from "../components/Loader";
import useLoaderVisibilityStore from "../stateManagement/useLoaderVisibilityStore";
import { useEffect, useState } from "react";
import { useSpeechStore } from "../stateManagement";
import { playSound } from "../utils/playSound";

const Title: React.FC = () => (
  <Text style={[paragraph, styles.title]}>Análisis generado...</Text>
);

export const AnalysisScreen: React.FC = () => {
  const { isLoading } = useLoaderVisibilityStore((state) => state);
  const { speech } = useSpeechStore();
  const [isPlayingSpeech, setIsPlayingSpeech] = useState(false);

  useEffect(() => {
    void (async () => {
      if (speech != null && isPlayingSpeech) {
        setIsPlayingSpeech(true);
        await playSound(speech);
      }
    })();
  });

  return (
    <>
      <UserMovementVideo />
      <View style={styles.container}>
        <Gradient
          type="littleBlack"
          colors={[]} // Prop obligatoria innecesaria
        >
          <Title />
          <RecomendedQuestions questions={questions} />
        </Gradient>
        <Nav />
      </View>
      <Loader isLoading={isLoading} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    textAlign: "center",
  },
});
