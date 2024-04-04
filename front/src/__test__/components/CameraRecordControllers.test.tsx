import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import CameraRecordControllers from "../../components/camerascreen/CameraRecordControllers";
import useHandlerStates from "../../components/camerascreen/hooks/useHandlerStates";

jest.mock(
  "../../components/camerascreen/hooks/useRecordingEffects",
  () => () => ({ onStopRecording: jest.fn(), onStartRecording: jest.fn() })
);

jest.mock("../../components/camerascreen/hooks/useHandlerStates.ts", () =>
  jest.fn()
);

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

function renderCameraControlsAndIsRecording(isRecording: boolean): void {
  useHandlerStates.mockReturnValueOnce({
    isRecording,
    setIsRecording: jest.fn(),
  });
  render(<CameraRecordControllers />);
}

describe("<CameraRecordControllers />", () => {
  it("Renderiza botón para iniciar grabación", async () => {
    renderCameraControlsAndIsRecording(false);
    await waitFor(() => {
      expect(screen.getByTestId("recordButton")).toBeTruthy();
    });
  });

  it("En el momento de la grabación, se muestra botón para detener grabación", async () => {
    renderCameraControlsAndIsRecording(true);
    await waitFor(() => {
      expect(screen.getByTestId("stopRecordButton")).toBeDefined();
    });
  });
});
