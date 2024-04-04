import { create } from "zustand";

interface countdownStore {
  countdown: number;
  startCountdown: (onFinish: () => void) => void;
  resetCountdown: () => void;
  intervalId?: NodeJS.Timeout;
}

const useCountdownStore = create<countdownStore>((set) => ({
  countdown: 3,
  startCountdown: (onFinish) => {
    const intervalId = setInterval(() => {
      set((state) => {
        let newValue;
        if (state.countdown > 1) {
          newValue = state.countdown - 1;
        } else {
          onFinish();
          newValue = 3;
        }

        return { countdown: newValue };
      });
    }, 1000);

    set({ intervalId });
  },
  resetCountdown: () => {
    set((state) => {
      if (state.intervalId != null) {
        clearInterval(state.intervalId);
      }
      return { countdown: 3, intervalId: undefined };
    });
  },
}));

export default useCountdownStore;
