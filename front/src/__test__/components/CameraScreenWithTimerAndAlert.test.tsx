import { render, screen } from "@testing-library/react-native";
import { View } from "react-native";
import { CameraScreenWithTimerAndAlert } from "../../components/camerascreen/CameraScreenWithTimerAndAlert";
import useHandlerStates from "../../components/camerascreen/hooks/useHandlerStates";
import { PaperProvider } from "react-native-paper";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn(), addListener: jest.fn() }),
}));

jest.mock("../../components/camerascreen/hooks/useHandlerStates", () =>
  jest.fn().mockReturnValue({
    isTimerVisible: false,
    isCancelAlertVisible: false,
  })
);

jest.mock("../../stateManagement/useCountdownStore", () => () => ({
  countdown: 3,
}));

describe("<CameraScreenWithTimerAndAlert />", () => {
  beforeEach(() => {
    const props = {
      children: (
        <View testID="children">Este es el contenido del children</View>
      ),
    };
    render(<CameraScreenWithTimerAndAlert {...props} />);
  });

  it("Renderiza componente del children correctamente", () => {
    const children = screen.getByTestId("children");
    expect(children).toBeTruthy();
  });

  it("Renderiza CameraCountdownModal, cuando el estado isTimerVisible es verdadero", () => {
    const CameraCountdownModal = screen.queryByTestId("CameraCountdownModal");
    expect(CameraCountdownModal).toBeFalsy();

    // Simulamos que isTimerVisible es true
    useHandlerStates.mockReturnValueOnce({
      isTimerVisible: true,
      isCancelAlertVisible: false,
    });

    const { getByTestId } = render(<CameraScreenWithTimerAndAlert />);
    expect(getByTestId("CameraCountdownModal")).toBeTruthy();
  });

  it("Renderiza CancelAlertRecording, cuando el estado isCancelAlertVisible es verdadero", () => {
    const CancelAlertRecording = screen.queryByText("Grabación en curso");
    expect(CancelAlertRecording).toBeFalsy();

    // Simulamos que isCancelAlertVisible es true
    useHandlerStates.mockReturnValueOnce({
      isTimerVisible: false,
      isCancelAlertVisible: true,
    });

    const { getByText } = render(
      <PaperProvider>
        <CameraScreenWithTimerAndAlert />
      </PaperProvider>
    );
    expect(getByText("Grabación en curso")).toBeTruthy();
  });
});
