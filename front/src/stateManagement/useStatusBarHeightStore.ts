import { create } from "zustand";

interface StatusBarHeightStore {
  height: number | null;
  setHeight: (height: number) => void;
}

const useStatusBarHeightStore = create<StatusBarHeightStore>((set) => ({
  height: null,
  setHeight: (height) => {
    set({ height });
  },
}));

export default useStatusBarHeightStore;
