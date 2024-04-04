import FFmpeg from "ffmpeg";
import { tFramesExtractor } from "../domain/types";
import path from "path";

export const framesExtractor: tFramesExtractor = async (uri) => {
  try {
    const storageData = path.resolve(__dirname, "../../../data");
    var process = new FFmpeg(uri);
    await process
      .then((video) => {
        video.fnExtractFrameToJPG(
          storageData,
          {
            frame_rate: 1,
            number: 3,
            file_name: "frame_%t_%s",
          },
          (error, files) => {
            if (!error) {
              console.log("Frames: " + files);
              return files;
            }
            console.log(error);
          }
        );
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  } catch (e) {
    console.log(e);
  }
};
