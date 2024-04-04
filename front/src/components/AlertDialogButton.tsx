import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { primaryColor } from "../utils/colors";
import type { StyleProp, TextStyle } from "react-native";

interface ActionButtonProps {
  text: string;
  containerStyles?: StyleProp<TextStyle>;
  action?: () => void;
}

const AlertDialogButton: React.FC<ActionButtonProps> = ({
  text,
  containerStyles,
  action
}) => {
  return (
    <TouchableOpacity onPress={action} style={containerStyles}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: primaryColor,
  },
});

export default AlertDialogButton;
