import type { StyleProp, ViewStyle, GestureResponderEvent } from "react-native";
import { TouchableOpacity } from "react-native";

interface ButtonProps {
  children: React.ReactNode;
  action?: (event: GestureResponderEvent) => void;
  styles?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({ children, action, styles }) => {
  return (
    <TouchableOpacity
      onPress={(e) => {
        action ? action(e) : undefined;
      }}
      style={styles}
    >
      {children}
    </TouchableOpacity>
  );
};
