import ProgressBar from "react-native-progress/Bar";
import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "./ScreenContainer";
import ScreenDarkModal from "./ScreenDarkModal";
import { primaryColor, darkColor, whiteColor } from "../utils/colors";
import { paragraph } from "../utils/genericStyles";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  if (isLoading) {
    return (
      <ScreenDarkModal stylesView={styles.ScreenDark}>
        <ScreenContainer styles={styles.ScreenContainer}>
          <Text style={[styles.text, paragraph]}>Cargando...</Text>
          <View style={styles.progressBarContainer}>
            <ProgressBar
              testID="progressBar"
              indeterminate={true}
              width={null}
              height={10}
              borderRadius={0}
              borderWidth={0}
              color={primaryColor}
              animationType="timing"
            />
          </View>
        </ScreenContainer>
      </ScreenDarkModal>
    );
  }
};

const styles = StyleSheet.create({
  ScreenDark: {
    alignItems: "stretch",
    backgroundColor: darkColor,
    zIndex: 2,
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
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default Loader;
