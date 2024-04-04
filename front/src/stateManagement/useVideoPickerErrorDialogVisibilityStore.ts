import { create } from "zustand";

interface VideoPickerErrorDialogVisibilityStore {
  isVideoPickerErrorDialogVisible: boolean;
  setVideoPickerErrorDialogVisibility: (isVisible: boolean) => void;
}

const useVideoPickerErrorDialogVisibilityStore =
  create<VideoPickerErrorDialogVisibilityStore>()((set) => ({
    isVideoPickerErrorDialogVisible: false,
    setVideoPickerErrorDialogVisibility: (isVisible: boolean) => {
      set(() => ({ isVideoPickerErrorDialogVisible: isVisible }));
    },
  }));

export default useVideoPickerErrorDialogVisibilityStore;
