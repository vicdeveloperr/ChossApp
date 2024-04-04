import { AntDesign } from "@expo/vector-icons";
import { small } from "../../utils/iconSizes";
import { whiteColor } from "../../utils/colors";
import { StyleSheet, View } from "react-native";
import { SpeechAnimation } from "./SpeechAnimation";
import { useStatusBarHeightStore } from "../../stateManagement";
import { Button } from "../Button";
import type { AnalysisScreenNavigator } from "../../types/AnalysisScreenNavigator";
import { useNavigation } from "@react-navigation/native";

type NavType = () => React.ReactNode;

export const Nav: NavType = () => {
  const { height } = useStatusBarHeightStore((state) => state);
  const { navigate, goBack } = useNavigation<AnalysisScreenNavigator>();

  return (
    <View
      testID="nav"
      style={styles.bg}
    >
      <View
        style={[
          styles.contentContainer,
          { paddingBottom: height },
        ]}
      >
        <Button
          action={() => {
            navigate("videoTutorial");
          }}
        >
          <AntDesign
            name="home"
            size={small}
            color={whiteColor}
          />
        </Button>
        <SpeechAnimation />
        <Button
          action={() => {
            goBack();
          }}
        >
          <AntDesign
            name="back"
            size={small}
            color={whiteColor}
          />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#000",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
