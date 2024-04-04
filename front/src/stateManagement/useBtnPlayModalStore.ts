import { create } from "zustand";

interface BtnPlayModalStore {
  isBtnPlayVisible: boolean;
  toggleBtnPlay: () => void;
}

const useBtnPlayModalStore = create<BtnPlayModalStore>((set) => ({
  isBtnPlayVisible: false,
  toggleBtnPlay: () => {
    set((state) => ({ isBtnPlayVisible: !state.isBtnPlayVisible }));
  },
}));

export default useBtnPlayModalStore;
