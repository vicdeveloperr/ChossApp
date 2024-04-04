import type { Camera } from "expo-camera";
import { useRecordedStore } from "../stateManagement";

type recordVideo = (camera: Camera) => Promise<void | string>;

const recordVideo: recordVideo = async (camera) => {
  const recorded = await camera
    .recordAsync({
      maxDuration: 10,
    })
    .then(({ uri }: { uri: string }) => {
      console.log("Video grabado:", uri);
      return uri;
    })
    .catch((error) => {
      const errorMesage = `Error al iniciar la grabación: ${error}`;
      console.log(errorMesage);
      return errorMesage;
    });

  return recorded;
};

export default recordVideo;
