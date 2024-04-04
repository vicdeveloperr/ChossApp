import { validator as honoValidator } from "hono/validator";
import { movements } from "../../analyzeVideo/domain/types";

type tParamValidatorReturn = {
  movement: movements;
};

export const bodyValidator = honoValidator("form", async (value, c) => {
  const video = value["video"];

  if (!video || !(video instanceof File)) {
    const message =
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo";
    return c.text(message, 400);
  }
  return {
    video,
  };
});

export const paramsValidator = honoValidator("param", (value, c) => {
  const param: string = value["movement"];
  if (param !== "allen iverson cross" && param !== "ind and out") {
    return c.text("Movimiento especificado incorrecto", 400);
  }
  return {
    movement: param,
  } as tParamValidatorReturn;
});
