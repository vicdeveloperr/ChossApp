import { create } from "zustand";

interface VideoProcessingStore {
  isVideoProcessing: boolean;
  setIsVideoProcessing: (status: boolean) => void;
}

const useVideoProcessingStore = create<VideoProcessingStore>((set) => ({
  isVideoProcessing: false,
  setIsVideoProcessing: (status) => {
    set({ isVideoProcessing: status });
  },
}));

export default useVideoProcessingStore;
