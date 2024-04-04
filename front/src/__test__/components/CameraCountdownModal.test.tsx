import renderer from "react-test-renderer";
import CameraCountdownModal from "../../components/camerascreen/CameraCountdownModal";
import { render } from "@testing-library/react-native";

jest.mock("../../stateManagement/", () => ({
  useCountdownStore: jest.fn().mockReturnValue({ countdown: 3 }),
}));

describe("<CameraCountdownModal />", () => {
  it("Renderiza correctamente", () => {
    const tree = renderer.create(<CameraCountdownModal />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Al renderizar, muestra el número 3 en el primer instante", () => {
    const { getByText } = render(<CameraCountdownModal />);

    expect(getByText("3")).toBeTruthy();
  });
});
