import FormattedIcon from "./FormattedIcon";
import { TouchableOpacity, StyleSheet } from "react-native";

interface VideoPickerProps {
  onPressAction: () => Promise<void>;
}
const VideoPicker: React.FC<VideoPickerProps> = ({ onPressAction }) => {

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        void onPressAction();
      }}
      testID="VideoPicker"
    >
      <FormattedIcon
        size="small"
        name="folder-video"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    marginLeft: 9,
    zIndex: 1,
  },
});

export default VideoPicker;
