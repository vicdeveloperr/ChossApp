import { create } from "zustand";

interface LoaderVisibilityStore {
  isLoading: boolean;
  setIsLoading: (statusLoading: boolean) => void;
}

const useLoaderVisibilityStore = create<LoaderVisibilityStore>((set) => ({
  isLoading: true,
  setIsLoading: (statusLoading) => {
    set({ isLoading: statusLoading });
  },
}));

export default useLoaderVisibilityStore;