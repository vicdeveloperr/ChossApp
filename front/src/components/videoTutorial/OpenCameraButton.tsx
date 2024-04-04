import { View, TouchableOpacity, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";

interface OpenCameraButtonProps {
  onPressAction: () => void;
}

const OpenCameraButton: React.FC<OpenCameraButtonProps> = ({
  onPressAction,
}) => {
  return (
    <View style={styles.buttonOpenCameraContainer}>
      <TouchableOpacity onPress={onPressAction} testID="OpenCameraButton">
        <FormattedIcon
          size="big"
          name="camera"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOpenCameraContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
});

export default OpenCameraButton;
