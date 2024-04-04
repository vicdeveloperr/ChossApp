import { rmdir, exists } from "node:fs/promises";

export const cleaner = async (path: string) => {
  try {
    if (await exists(path)) {
      await rmdir(path, { recursive: true });
      console.log("Ruta borrada");
    } else {
      console.log("Ruta inexcistente:", path);
    }
  } catch (err) {
    console.log(err);
  }
};
