import type { EventArg } from "@react-navigation/native";

export type navigationEvent = EventArg<
  "beforeRemove",
  true,
  {
    action: Readonly<{
      type: string;
      payload?: object | undefined;
      source?: string | undefined;
      target?: string | undefined;
    }>;
  }
>;
