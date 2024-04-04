import { create } from "zustand";

interface SpeechStore {
  speech: string | null;
  setSpeech: (status: SpeechStore["speech"]) => void;
}

const useSpeechStore = create<SpeechStore>((set) => ({
  speech: null,
  setSpeech: (status) => {
    set({
      speech: status,
    });
  },
}));

export default useSpeechStore;
