import { ChatResponse } from "ollama";

export interface Video extends FormData {
  uri: string;
  name: string;
  type: string;
}

export type tFramesExtractor = (uri: string) => Promise<string[] | void>;

export interface AnalyzeVideoResult {
  filename: string;
}

export type tResponseGenerator = (
  video: File,
  movementToImprove: string
) => Promise<AnalyzeVideoResult | undefined>;

export type tModelConsultor = (
  video: File,
  movementToImprove: string
) => Promise<ChatResponse>;

export type movements = "allen iverson cross" | "ind and out";
