import { useAnalyzeVideo } from "./useAnalyzeVideo";
import { describe, it, mock, expect } from "bun:test";
import { AnalyzeVideoResult } from "../domain/types";

const promise: Promise<AnalyzeVideoResult> = new Promise((resolve) => {
  resolve({
    audioUrl: "audio.mp3",
  });
});
const dependencie = mock((videoUrl, movement) => promise);

async function callUseAnalyzeVideo() {
  const result = await useAnalyzeVideo(
    dependencie,
    new File([], ""),
    "allen iverson cross"
  );
  return result;
}

describe("useAnalyzeVideo()", () => {
  it("Retorna análisis del vídeo en forma de audio", async () => {
    const result = await callUseAnalyzeVideo();
    expect(result).toEqual({
      audioUrl: "audio.mp3",
    });
  });

  it("Ejecuta función pasada como argumento", async () => {
    await callUseAnalyzeVideo();
    expect(dependencie).toHaveBeenCalled();
  });
});
