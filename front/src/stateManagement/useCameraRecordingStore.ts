import { create } from "zustand";

interface CameraStoreState {
  isRecording: boolean;
  setIsRecording: (isRecording: boolean) => void;
}

const useCameraRecordingStore = create<CameraStoreState>((set) => ({
  isRecording: false,
  setIsRecording: (isRecording: boolean) => {
    set({
      isRecording,
    });
  },
}));

export default useCameraRecordingStore;
