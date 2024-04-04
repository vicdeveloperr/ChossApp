import { render, fireEvent, screen } from "@testing-library/react-native";
import OpenCameraButton from "../../../components/videoTutorial/OpenCameraButton";

const OpenCameraButtonTestId = "OpenCameraButton";
let mockOnPress: jest.Mock<any, any, any>;

describe("<OpenCameraButton />", () => {
  beforeEach(() => {
    mockOnPress = jest.fn();
    render(<OpenCameraButton onPressAction={mockOnPress} />);
  });

  it("Renderiza botón correctamente", () => {
    const button = screen.getByTestId(OpenCameraButtonTestId);
    expect(button).toBeTruthy();
  });

  it("Dispara función asignada a través de las props", () => {
    const button = screen.getByTestId(OpenCameraButtonTestId);
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalled();
  });
});
