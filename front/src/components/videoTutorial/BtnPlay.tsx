import ScreenDarkModal from "../ScreenDarkModal";
import { TouchableOpacity, StyleSheet } from "react-native";
import FormattedIcon from "../FormattedIcon";
import { centerViewContentStyle } from "../../utils/genericStyles";
import type { GestureResponderEvent } from "react-native";
import { useBtnPlayModalStore } from "../../stateManagement";

interface BtnPlayProps {
  onPressAction: (event?: GestureResponderEvent) => void;
}

const BtnPlay: React.FC<BtnPlayProps> = ({ onPressAction }) => {
  const { isBtnPlayVisible } = useBtnPlayModalStore((state) => state);
  
  if (isBtnPlayVisible) {
    return (
      <ScreenDarkModal>
        <TouchableOpacity
          style={[styles.buttonPlayVideo, centerViewContentStyle]}
          onPress={onPressAction}
          testID="BtnPlay"
        >
          <FormattedIcon name="play" />
        </TouchableOpacity>
      </ScreenDarkModal>
    );
  }
};

const styles = StyleSheet.create({
  buttonPlayVideo: {
    width: "100%",
    height: "100%",
  },
});

export default BtnPlay;
