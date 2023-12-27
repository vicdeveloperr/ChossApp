import { useEffect, useState } from "react";
import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "./ScreenContainer";
import ScreenDarkModal from "./ScreenDarkModal";
import { useInterval } from "usehooks-ts";
import { primaryColor, darkColor, whiteColor } from "../utils/colors";
import { paragraph } from "../utils/genericStyles";

interface LoaderProps {
  complete: boolean;
}

const Loader: React.FC<LoaderProps> = ({ complete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(1);
  }, [complete]);

  useInterval(() => {
    if (progress < 0.85) {
      setProgress((state) => state + 0.1);
    }
  }, 300);

  return (
    <ScreenDarkModal stylesView={styles.ScreenDark}>
      <ScreenContainer styles={styles.ScreenContainer}>
        <Text style={[styles.text, paragraph]}>Cargando...</Text>
        <View style={styles.progressBarContainer}>
          <ProgressBar
            indeterminate={true}
            width={null}
            height={10}
            color={primaryColor}
            animationType="timing"
          />
        </View>
      </ScreenContainer>
    </ScreenDarkModal>
  );
};

const styles = StyleSheet.create({
  ScreenDark: {
    alignItems: "stretch",
    backgroundColor: darkColor,
  },
  ScreenContainer: {
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginBottom: 9,
  },
  progressBarContainer: {
    backgroundColor: whiteColor,
  },
});

export default Loader;
