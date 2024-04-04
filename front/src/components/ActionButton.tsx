import { TouchableOpacity, Text, StyleSheet } from "react-native";
import FormattedIcon from "./FormattedIcon";
import { darkColor, whiteColor, primaryColor } from "../utils/colors";

interface ActionButtonProps {
  name: "continue" | "tryAgaint";
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ name, onPress }) => {
  const isNameContinue = name === "continue";
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.actionButton,
        isNameContinue ? { marginBottom: 15 } : undefined,
      ]}
    >
      {isNameContinue ? (
        <FormattedIcon
          name="check"
          size="small"
        />
      ) : (
        <FormattedIcon
          name="reload"
          size="small"
          color={whiteColor}
        />
      )}
      <Text
        style={[
          styles.actionButtonText,
          { color: isNameContinue ? primaryColor : whiteColor },
        ]}
      >
        {isNameContinue ? "Continuar" : "Volver a intentarlo"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: darkColor,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 13,
  },
  actionButtonText: {
    fontSize: 19,
    marginLeft: 3,
  },
});

export default ActionButton;
