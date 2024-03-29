import "react-native-get-random-values";
import type { movementsAvailable } from "../types/movementsAvailable";
import { v4 as uuidv4 } from "uuid";
import getErrorMessage from "./getErrorMessage";

export async function getVideoAnalysis(
  uri: string,
  movementWantImprove: movementsAvailable
): Promise<string> {
  const videoData = new FormData();
  const id = uuidv4();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  videoData.append("video", {
    uri,
    name: `${id}.mp4`,
    type: "video/mp4",
  } as any); // FormData.append espera un Blob como segundo argumento. Pero, igualmente pasarle un objeto con la estructura {uri, name y type} funciona para almacenar datos de vídeo. Por ello, utilizamos el tipo any.

  try {
    const response = await fetch(
      `${process.env.EXPO_PUBLIC_API_URL}/analyzeVideo/${movementWantImprove}`,
      {
        method: "POST",
        body: videoData,
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud a la API: ${response.status}`);
    }

    const data = await response.blob();
    const uri = URL.createObjectURL(data);

    return uri;
  } catch (error) {
    const msg = getErrorMessage(error);
    console.error(msg);
    return msg;
  }
}

export default getVideoAnalysis;
