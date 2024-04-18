import { ScrollView, StyleSheet, Text } from "react-native";
import { paragraph } from "../../utils/genericStyles";
import { Button } from "../Button";
import { v4 as uuidv4 } from "uuid";

type RecomendedQuestionsType = (
  props: RecomendedQuestionsProps
) => React.ReactNode;

interface ContainerProps {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <ScrollView
      horizontal
      style={[styles.container]}
      testID="RecomendedQuestions"
      showsHorizontalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );
};

interface RecomendedQuestionsProps {
  questions: string[];
}
export const RecomendedQuestions: RecomendedQuestionsType = ({ questions }) => {
  const elements = questions.map((question) => {
    return (
      <Button
        key={uuidv4()}
        styles={styles.questionContainer}
      >
        <Text style={[paragraph, styles.questionText]}>{question}</Text>
      </Button>
    );
  });

  return <Container>{elements}</Container>;
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    maxHeight: 33,
    marginVertical: 10,
  },
  questionContainer: {
    borderRadius: 50,
    paddingHorizontal: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 250, 250, 0.4)",
    marginLeft: 10,
  },
  questionText: {
    fontWeight: "bold",
  },
});
