import type { Camera } from "expo-camera";

export default function stopVideoRecording(
  camRef: React.RefObject<Camera>
): void {
  const camera = camRef.current;
  if (camera != null) {
    camera.stopRecording();
  }
}
