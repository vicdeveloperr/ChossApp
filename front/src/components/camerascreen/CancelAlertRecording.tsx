import AlertDialog from "../AlertDialog";
import AlertDialogButton from "../AlertDialogButton";
import useHandlerStates from "./hooks/useHandlerStates";
import useRecordingEffects from "./hooks/useRecordingEffects";

const ActionButtons: React.FC = () => {
  const { onStopRecording } = useRecordingEffects();
  const { setIsCancelAlertVisible } = useHandlerStates();

  function handlerStopButton(): void {
    setIsCancelAlertVisible(false);
    onStopRecording();
  }

  function handlerContinueButton(): void {
    setIsCancelAlertVisible(false);
  }

  return (
    <>
      <AlertDialogButton
        containerStyles={{ marginRight: 10 }}
        text="Continuar"
        action={handlerContinueButton}
      />
      <AlertDialogButton
        action={handlerStopButton}
        text="Detener"
      />
    </>
  );
};

const CancelAlertRecording: React.FC = () => {
  return (
    <AlertDialog
      title="Grabación en curso"
      description="Detenga la grabación, antes de abandonar."
      DialogActions={<ActionButtons />}
    />
  );
};

export default CancelAlertRecording;
