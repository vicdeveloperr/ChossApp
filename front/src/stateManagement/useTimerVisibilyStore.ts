import { create } from "zustand";

export interface TimerVisibilityStore {
  isTimerVisible: boolean;
  setIsTimerVisible: (timerVisibility: boolean) => void;
}

const useTimerVisibilityStore = create<TimerVisibilityStore>((set) => ({
  isTimerVisible: false,
  setIsTimerVisible: (timerVisibility) => {
    set(() => ({ isTimerVisible: timerVisibility }));
  },
}));

export default useTimerVisibilityStore;