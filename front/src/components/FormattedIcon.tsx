import { Entypo } from "@expo/vector-icons";
import { primaryColor } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

interface FormattedIconProps {
  name:
    | "controller-stop"
    | "controller-record"
    | "folder-video"
    | "camera"
    | "back"
    | "pause"
    | "play"
    | "camera-reverse-outline"
    | "reload"
    | "check";
  size?: "big" | "medium" | "small";
  color?: string;
}
const FormattedIcon: React.FC<FormattedIconProps> = ({ name, size, color }) => {
  const iconSize = size === "medium" ? 57 : size === "small" ? 34 : 74;
  const iconColor = color ? color : primaryColor;
  if (name === "camera") {
    return (
      <MaterialIcons
        name="camera"
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (name === "back") {
    return (
      <AntDesign
        name="back"
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (name === "play" || name === "pause") {
    return (
      <Feather
        name={name}
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (name === "camera-reverse-outline") {
    return (
      <Ionicons
        name="camera-reverse-outline"
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (name === "reload") {
    return (
      <Ionicons
        name="reload"
        size={iconSize}
        color={iconColor}
      />
    );
  } else if (name === "check") {
    return (
      <AntDesign
        name="check"
        size={iconSize}
        color={iconColor}
      />
    );
  } else {
    return (
      <Entypo
        name={name}
        size={iconSize}
        color={iconColor}
      />
    );
  }
};

export default FormattedIcon;
