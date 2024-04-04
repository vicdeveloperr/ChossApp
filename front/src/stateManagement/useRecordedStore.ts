import { create } from "zustand";

interface RecordedStore {
  recorded: string;
  setRecorded: (newRecorded: string) => void;
}

const useRecordedStore = create<RecordedStore>((set) => ({
  recorded: "",
  setRecorded: (newRecorded) => {
    set({ recorded: newRecorded });
  },
}));

export default useRecordedStore;
