import { View } from "react-native";
import { render, fireEvent, screen } from "@testing-library/react-native";
import { VideoTutorialController } from "../../../components/VideoTutorialController";

let children: React.ReactElement;
let onPress: () => void;

describe("<VideoTutorialController />", () => {
  beforeEach(() => {
    children = <View testID="children"></View>;
    onPress = jest.fn();

    render(
      <VideoTutorialController onPressAction={onPress}>
        {children}
      </VideoTutorialController>
    );
  });

  it("Renderiza correctamente su children", () => {
    const videoTutorialControllerChildren = screen.getByTestId("children");
    expect(videoTutorialControllerChildren).toBeDefined();
  });

  it("Invoca a función pasada por prop, al presionarlo", () => {
    const videoTutorialControllerChildren = screen.getByTestId("children");

    fireEvent(videoTutorialControllerChildren, "press");

    expect(onPress).toHaveBeenCalled();
  });
});
