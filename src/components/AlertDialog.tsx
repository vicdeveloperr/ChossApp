import { Dialog, Portal } from "react-native-paper";
import { darkColor, whiteColor } from "../utils/colors";
import ScreenDarkModal from "./ScreenDarkModal";
import { StyleSheet, Text } from "react-native";

interface AlertDialogProps {
  DialogActions: React.ReactNode;
  description: string;
  title: string;
}

const AlertDialog: React.FC<AlertDialogProps> = ({
  DialogActions,
  description,
  title,
}) => {
  return (
    <Portal>
      <ScreenDarkModal>
        <Dialog
          style={styles.dialog}
          dismissable={false}
          visible
        >
          <Dialog.Title style={styles.dialogTitle}>{title}</Dialog.Title>
          <Dialog.Content>
            <Text>{description}</Text>
          </Dialog.Content>
          <Dialog.Actions>{DialogActions}</Dialog.Actions>
        </Dialog>
      </ScreenDarkModal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  dialog: { backgroundColor: darkColor },
  dialogTitle: { color: whiteColor },
});

export default AlertDialog;
