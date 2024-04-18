import getVideoAnalysis from "./getVideoAnalysis";
import { useRecordedStore, useSpeechStore } from "../stateManagement";
import type { movementsAvailable } from "../types/movementsAvailable";

type processVideo = () => (
  uri: string,
  navigate: (route: string) => void,
  movementToImprove: movementsAvailable
) => Promise<void>;

export const useProcessVideo: processVideo = () => {
  const { setRecorded } = useRecordedStore((state) => state);
  const { setSpeech } = useSpeechStore();

  return async (uri, navigate, movementToImprove) => {
    setRecorded(uri);
    const path = await getVideoAnalysis(uri, movementToImprove);
    setSpeech(path);
    navigate("analysis");
  };
};
