import "@testing-library/react-native/extend-expect";
import { render, screen } from "@testing-library/react-native";
import AlertDialog from "../../components/AlertDialog";
import { PaperProvider } from "react-native-paper";
import { Button } from "react-native";

describe("<AlertDialog />", () => {
  it("AlertDialog se renderiza correctamente", () => {
    const title = "Grabación en curso";
    const content = "Finalice la grabación, antes de abandonar";
    const alertDialogActions = (
      <>
        <Button title="Continuar" />
        <Button title="Finalizar" />
      </>
    );
    render(
      <PaperProvider>
        <AlertDialog
          title={title}
          description={content}
          DialogActions={alertDialogActions}
        />
      </PaperProvider>
    );

    const AlertDialogContent = screen.getByText(title);
    const AlertDialogTitle = screen.getByText(content);
    const AlertDialogContinueRecordButton = screen.getByText("Continuar");
    const AlertDialogFinishRecordButton = screen.getByText("Finalizar");

    expect(AlertDialogContent).toBeDefined();
    expect(AlertDialogTitle).toBeDefined();
    expect(AlertDialogFinishRecordButton).toBeDefined();
    expect(AlertDialogContinueRecordButton).toBeDefined();
  });
});
