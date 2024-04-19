import { useVideoPickerErrorDialogVisibilityStore } from "../../stateManagement";
import AlertDialog from "../AlertDialog";
import AlertDialogButton from "../AlertDialogButton";

export const VideoDurationAlert: React.FC = () => {
  const {
    setVideoPickerErrorDialogVisibility,
    isVideoPickerErrorDialogVisible,
  } = useVideoPickerErrorDialogVisibilityStore();

  return (
    <AlertDialog
      title="Vídeo demasiado largo"
      description="Seleccione un vídeo de menos de 10 segundos."
      visible={isVideoPickerErrorDialogVisible}
      DialogActions={
        <AlertDialogButton
          action={() => {
            setVideoPickerErrorDialogVisibility(false);
          }}
          text="Continuar"
        />
      }
    />
  );
};
