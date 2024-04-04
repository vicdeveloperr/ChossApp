import { renderHook } from "@testing-library/react-hooks";
import { useVideoTutorialActions } from "../../components/videoTutorial/hooks/useVideoTutorialActions";

jest.mock("../../stateManagement/useBtnPlayModalStore", () =>
  jest.fn(() => ({
    isPlaying: true,
    setIsPlaying: jest.fn(),
  }))
);
jest.mock("../../stateManagement/useVideoPlayerStore", () => () => ({
  toggleBtnPlay: jest.fn(),
}));

const mockedVideoRef = {
  current: {
    pauseAsync: jest.fn(),
    playAsync: jest.fn(),
  },
};
jest.mock("../../components/videoTutorial/VideoFullScreen", () => ({
  videoRef: mockedVideoRef,
}));

describe("useVideoTutorialControllerAction()", () => {
  it("Retorna la función togglePlay()", () => {
    const { result } = renderHook(() => useVideoTutorialActions());
    const togglePlay = result.current.togglePlay;

    expect(togglePlay).toBeInstanceOf(Function);
  });

  it("Retorna la función onVideoLoadComplete()", () => {
    const { result } = renderHook(() => useVideoTutorialActions());
    const onVideoLoadComplete = result.current.onVideoLoadComplete;

    expect(onVideoLoadComplete).toBeInstanceOf(Function);
  });

  // it('togglePlay invoca playAsync(), cuando isPlaying == false', () => {
  //   act(() => {
  //     togglePlay();
  //   });

  //   expect(mockedVideoRef.current.playAsync).toHaveBeenCalledTimes(1);
  // });

  // it('togglePlay invoca pauseAsync(), cuando isPlaying == true', () => {
  //   renderUseVideoTutorialControllerActionWithIsPlayingIn(true);

  //   act(() => {
  //     togglePlay();
  //   });

  //   expect(mockedVideoRef.current.pauseAsync).toHaveBeenCalled()
  // });
});
