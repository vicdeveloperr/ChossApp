import { create } from "zustand";

export interface CancelAlertVisibility {
  isCancelAlertVisible: boolean;
  setIsCancelAlertVisible: (newValue: boolean) => void;
}

const useCancelAlertVisibility = create<CancelAlertVisibility>((set) => ({
  isCancelAlertVisible: false,
  setIsCancelAlertVisible: (newValue) => {
    set((state) => ({ isCancelAlertVisible: newValue }));
  },
}));

export default useCancelAlertVisibility;
