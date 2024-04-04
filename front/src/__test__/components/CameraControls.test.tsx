import React from "react";
import { render, screen, waitFor } from "@testing-library/react-native";
import CameraControls from "../../components/camerascreen/CameraControls";
import useCameraRecordingStore from "../../stateManagement/useCameraRecordingStore";

jest.mock("../../stateManagement/useCameraRecordingStore", () => jest.fn());

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

describe("CameraControls", () => {
  it("Renderiza correctamente todos los botones", async () => {
    useCameraRecordingStore.mockReturnValue({
      isRecording: false,
      setIsRecording: jest.fn(),
    });
    render(<CameraControls />);

    await waitFor(() => {
      expect(screen.getByTestId("backButton")).toBeTruthy();
      expect(screen.getByTestId("cameraSwitchButton")).toBeTruthy();
      expect(screen.getByTestId("recordButton")).toBeTruthy();
    });
  });
});
