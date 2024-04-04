import { render, screen, waitFor } from "@testing-library/react-native";
import CameraScreen from "../../screens/CameraScreen";
import { View } from "react-native";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn(), addListener: jest.fn() }),
}));

describe("<CameraScreen />", () => {
  it("Renderiza todos sus componentes cuando los permisos están concedidos", async () => {
    render(<CameraScreen />);
    await waitFor(() => {
      const cameraView = screen.getByTestId("CameraView");
      const cameraControls = screen.getByTestId("CameraControls");

      expect(cameraView).toBeTruthy();
      expect(cameraControls).toBeTruthy();
    });
  });

  it("Renderiza componente pasado por children", () => {
    const Children: React.FC = () => <View testID="Children"></View>;
    render(<CameraScreen children={<Children />} />);

    const childrenComponent = screen.getByTestId("Children");

    expect(childrenComponent).toBeTruthy();
  });
});
