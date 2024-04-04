import { render, screen, fireEvent } from "@testing-library/react-native";
import VideoPicker from "../../../components/VideoPicker";

const onPressAction = jest.fn();
describe("<VideoPicker />", () => {
  beforeEach(() => {
    render(<VideoPicker onPressAction={onPressAction} />);
  });

  it("Renderiza botón correctamente", () => {
    const btn = screen.getByTestId("VideoPicker");
    expect(btn).toBeTruthy();
  });

  it("Invoca callback pasado como argumento, al pulsar botón", () => {
    const btn = screen.getByTestId("VideoPicker");

    fireEvent(btn, "press");
    expect(onPressAction).toHaveBeenCalled();
  });
});
