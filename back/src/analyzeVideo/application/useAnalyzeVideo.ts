import type {
  movements,
  AnalyzeVideoResult,
  tResponseGenerator,
} from "../domain/types";

type tUseAnalyzeVideo = (
  responseGenerator: tResponseGenerator,
  video: File,
  movementToImprove: movements
) => Promise<AnalyzeVideoResult | string>;

export const useAnalyzeVideo: tUseAnalyzeVideo = async (
  responseGenerator,
  video,
  movementToImprove
) => {
  const result = await responseGenerator(video, movementToImprove);
  return result ? result : "Ha ocurrido un error al generar la respueta";
};
