import { TextToSpeechClient } from "@google-cloud/text-to-speech";
import type { google } from "@google-cloud/text-to-speech/build/protos/protos";
import { saveFile } from "./saveFile";
import { join as pathJoin } from "path";
import uniqid from "uniqid";

type tSpeechGenerator = (text: string) => Promise<string | void>;

export const speechGenerator: tSpeechGenerator = async (text) => {
  const client = new TextToSpeechClient();

  const request: google.cloud.texttospeech.v1.ISynthesizeSpeechRequest = {
    input: { text: text },
    voice: { languageCode: "es-ES", ssmlGender: "MALE" },
    audioConfig: { audioEncoding: "MP3" },
  };

  try {
    const [response] = await client.synthesizeSpeech(request);
    if (response.audioContent) {
      const id = uniqid("speech-");
      const filename = `${id}.mp3`;
      const path = pathJoin(__dirname, "../../../speechsStorage", filename);

      await saveFile(response.audioContent, path);
      console.log(`Audio guardado como ${filename}`);

      return filename;
    }
  } catch (err) {
    console.log(err);
  }
};
