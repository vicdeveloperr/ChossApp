import AlertDialog from "../AlertDialog";
import AlertDialogButton from "../AlertDialogButton";

const VideoDurationAlert: React.FC = () => {
  return (
    <AlertDialog
      title="Vídeo demasiado largo"
      description="El vídeo es demasiado largo para ser procesado. Seleccione un vídeo de menos de 10 segundos"
    >
      <AlertDialogButton text="Continuar" />
    </AlertDialog>
  );
};
