import { renderHook } from "@testing-library/react-hooks";
import useRecordingEffects from "../../components/camerascreen/hooks/useRecordingEffects";
import recordVideo from "../../utils/recordVideo";
import type { RenderHookResult, Renderer } from "@testing-library/react-hooks";
import type { CameraType } from "expo-camera";
import stopVideoRecording from "../../utils/stopVideoRecording";

jest.mock("../../utils/recordVideo", () =>
  jest.fn(async (camera: CameraType) => {
    return await new Promise((resolve) => {
      resolve("resolve.mp4");
    });
  })
);

jest.mock("../../components/camerascreen/CameraView", () => ({
  camRef: {
    current: {},
  },
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

jest.mock("../../components/camerascreen/hooks/useHandlerStates", () => () => {
  return {
    setIsTimerVisible: jest.fn(),
    startCountdown: jest.fn(),
    setIsRecording: jest.fn(),
    resetCountdown: jest.fn(),
  };
});
jest.mock("../../utils/stopVideoRecording", () => jest.fn());

type RecordingEffectsRenderResult = RenderHookResult<
  unknown,
  {
    onStartRecording: () => Promise<void>;
    onStopRecording: () => void;
  },
  Renderer<unknown>
>;

describe("useRecordingEffects()", () => {
  let useRecordingEffectsRenderResult: RecordingEffectsRenderResult;
  beforeEach(() => {
    useRecordingEffectsRenderResult = renderHook(() => useRecordingEffects());
  });

  it("Devuelve onStartRecording y onStopRecording correctamente", async () => {
    const { onStartRecording, onStopRecording } =
      useRecordingEffectsRenderResult.result.current;

    expect(onStartRecording).toBeTruthy();
    expect(onStopRecording).toBeTruthy();
  });

  it("Inicia grabación de vídeo al llamar a onStartRecording()", async () => {
    const { onStartRecording } = useRecordingEffectsRenderResult.result.current;

    await onStartRecording();

    expect(recordVideo).toHaveBeenCalled();
  });

  it("Termina grabación del vídeo al ejecutar onStopRecording()", async () => {
    const { onStopRecording } = useRecordingEffectsRenderResult.result.current;

    onStopRecording();

    expect(stopVideoRecording).toHaveBeenCalled();
  });
});
