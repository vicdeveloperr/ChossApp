import type { tResponseGenerator } from "../domain/types";
import { modelConsultor } from "./modelConsultor";
import { speechGenerator } from "./speechGenerator";

export const responseGenerator: tResponseGenerator = async (
  video,
  movementToImprove
) => {
  const modelResponse = await modelConsultor(video, movementToImprove);
  const filename = await speechGenerator(modelResponse.message.content);
  if (typeof filename === "string") {
    return {
      filename,
    };
  }
};
