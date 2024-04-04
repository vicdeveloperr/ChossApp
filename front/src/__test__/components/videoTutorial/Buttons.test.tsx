import renderer from "react-test-renderer";
import Buttons from "../../../components/videoTutorial/Buttons";
import { View } from "react-native";
import { render } from "@testing-library/react-native";
import { useButtonsActions } from "../../../components/videoTutorial/hooks/useButtonsActions";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn(), addListener: jest.fn() }),
}));
jest.mock("../../../components/videoTutorial/hooks/useButtonsActions", () => ({
  useButtonsActions: jest.fn(() => ({
    openCamera: jest.fn(),
    playVideo: jest.fn(),
  })),
}));

describe("<Buttons />", () => {
  it("Renderiza todo correctamente", () => {
    const tree = renderer.create(<Buttons />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Renderiza childrens correctamente", () => {
    const children = <View testID="children"></View>;
    const { getByTestId } = render(<Buttons>{children}</Buttons>);

    expect(getByTestId("children")).toBeTruthy();
  });

  it("Define los valores de playVideo y openCamera", () => {
    render(<Buttons />);

    expect(useButtonsActions).toHaveBeenCalled();
  });
});
