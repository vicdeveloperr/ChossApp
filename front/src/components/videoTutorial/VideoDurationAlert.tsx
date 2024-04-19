import { useVideoPickerErrorDialogVisibilityStore } from "../../stateManagement";
import AlertDialog from "../AlertDialog";
import AlertDialogButton from "../AlertDialogButton";

export const VideoDurationAlert: React.FC = () => {
  const { setVideoPickerErrorDialogVisibility } =
    useVideoPickerErrorDialogVisibilityStore();

  return (
    <AlertDialog
      title="Vídeo demasiado largo"
      description="El vídeo es demasiado largo para ser procesado. Seleccione un vídeo de menos de 10 segundos"
      DialogActions={
        <AlertDialogButton
          action={() => {
            setVideoPickerErrorDialogVisibility(false);
          }}
          text="Continuar"
        />
      }
    ></AlertDialog>
  );
};
