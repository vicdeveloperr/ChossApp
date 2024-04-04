import { Audio } from "expo-av";

type playSoundType = (uri: string) => Promise<void>;
export const playSound: playSoundType = async (uri) => {
  const sound = new Audio.Sound();

  try {
    await sound.loadAsync({ uri });
    await sound.playAsync();
    // await sound.unloadAsync();
  } catch (err) {
    console.log(err);
  }
};
