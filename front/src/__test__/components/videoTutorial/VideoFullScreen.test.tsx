import {
  VideoFullScreen,
  videoRef,
} from "../../../components/videoTutorial/VideoFullScreen";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react-native";

jest.mock("../../../stateManagement/useVideoPlayerStore", () => () => ({
  isPlaying: false,
}));

describe("<VideoTutorial />", () => {
  it("Renderiza el componente VideoTutorial con la estructura esperada", () => {
    const tree = renderer.create(<VideoFullScreen sourceUri="" />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("Define valor de videoRef correctamente", () => {
    render(<VideoFullScreen sourceUri="" />);

    expect(videoRef).toBeDefined();
  });
});
