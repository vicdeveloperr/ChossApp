import { render, screen, waitFor } from "@testing-library/react-native";
import CameraView from "../../components/camerascreen/CameraView";
import { View } from "react-native";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

describe("<CameraView />", () => {
  beforeEach(() => {
    render(
      <CameraView>
        <View testID="camera">Camera</View>
      </CameraView>
    );
  });

  it("CameraView se renderiza correctamente", async () => {
    await waitFor(() => {
      const camera = screen.getByTestId("camera");
      expect(camera).toBeDefined();
    });
  });
});
