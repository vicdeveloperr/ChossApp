import { Nav } from "../components/analysis/Nav";
import { RecomendedQuestions } from "../components/analysis/RecomendedQuestions";
import { UserMovementVideo } from "../components/analysis/UserMovementVideo";
import { StyleSheet, Text, View } from "react-native";
import { questions } from "../utils/recomendedQuestions";
import { LinearGradient } from "expo-linear-gradient";
import { Gradient } from "../components/Gradient";

const Title = () => <Text>Análisis generado...</Text>;

export const AnalysisScreen = () => {
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
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
});
