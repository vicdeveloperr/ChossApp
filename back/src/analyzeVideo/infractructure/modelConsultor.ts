import ollama from "ollama";
import { tModelConsultor } from "../domain/types";
import { framesExtractor } from "./framesExtractor";
import path from "path";
import { saveFile } from "./saveFile";
import { storageDataPath } from "./storageDataPath";
import uniqid from "uniqid";

export const modelConsultor: tModelConsultor = async (
  video,
  movementToImprove
) => {
  const filename = uniqid("", `-${video.name}`);
  const videoPath = path.join(storageDataPath, filename);
  await saveFile(video, videoPath);
  const frames = await framesExtractor(videoPath);
  const imagesToProcess = frames ? frames : undefined;

  const response = await ollama.chat({
    model: "choss",
    messages: [
      {
        role: "user",
        content: `I want to improve the next movement: ${movementToImprove}.
        
        Let's go step by step, and analyze each of the images in the video.`,
        images: imagesToProcess,
      },
    ],
  });

  return response;
};
