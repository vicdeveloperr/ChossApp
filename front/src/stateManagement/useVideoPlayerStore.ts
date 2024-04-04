import { create } from "zustand";

interface VideoPlayerStore {
  isPlaying: boolean;
  setPlaying: (playing: boolean) => void;
}

const useVideoPlayerStore = create<VideoPlayerStore>((set) => ({
  isPlaying: true,
  setPlaying: (playing) => {
    set({ isPlaying: playing });
  },
}));

export default useVideoPlayerStore;
