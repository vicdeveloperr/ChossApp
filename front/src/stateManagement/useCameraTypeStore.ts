import { create } from "zustand";
import { CameraType as CameraOrientation } from "expo-camera";
import type { CameraType } from "expo-camera";

export interface cameraTypeStore {
  cameraType: CameraType;
  setCameraType: (newCameraType: CameraType) => void;
}

const useCameraTypeStore = create<cameraTypeStore>((set) => ({
  cameraType: CameraOrientation.front,
  setCameraType: (newCameraType: CameraType) => {
    set({ cameraType: newCameraType });
  },
}));

export default useCameraTypeStore;
