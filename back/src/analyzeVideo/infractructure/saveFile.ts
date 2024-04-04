import { join as pathJoin } from "path";

type tSaveFile = (
  file: string | Blob | NodeJS.TypedArray | ArrayBufferLike | Bun.BlobPart[],
  path: string
) => Promise<void>;

import { storageDataPath } from "./storageDataPath";

export const saveFile: tSaveFile = async (file, path) => {
  try {
    await Bun.write(path, file);
  } catch (err) {
    console.log(err);
  }
};
