export interface Video extends FormData {
  uri: string;
  name: string;
  type: string;
}
export type tFramesExtractor = (uri: string) => Promise<string[] | void>;