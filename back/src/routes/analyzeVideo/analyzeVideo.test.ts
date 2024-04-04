import { describe, expect, it, mock } from "bun:test";
import { getApiUrl } from "../../utils/getApiUrl.js";
import app from "../../index";
import { mainEnpointUrl } from "../../utils/mainEnpointUrl.js";

const apiUrl = getApiUrl();

mock.module("../../analyzeVideo/application/useAnalyzeVideo.ts", () => mock());

function request(body: FormData, param?: string) {
  const movementParam = param ? param : "allen iverson cross";
  const req = new Request(apiUrl + mainEnpointUrl + movementParam, {
    body: body,
    method: "POST",
  });

  return req;
}

describe("POST /analyzeVideo", () => {
  it("Retorna status 400 y mensaje de error, si no se envía vídeo correctamente en el cuerpo de la solicitud", async () => {
    const videoToAnalyze = new FormData();
    const req = request(videoToAnalyze);

    const res = await app.fetch(req);
    expect(await res.text()).toBe(
      "El vídeo no ha podido ser analizado. Por favor, vuelva a intentarlo"
    );
    expect(res.status).toBe(400);
  });

  it("Retorna status 400 y mensaje de error, si el movimiento pasado por parámetro no es correcto", async () => {
    const videoToAnalyze = new FormData();
    const req = request(videoToAnalyze, "gambeteo messi");

    const res = await app.fetch(req);
    expect(await res.text()).toBe("Movimiento especificado incorrecto");
    expect(res.status).toBe(400);
  });

  it("Retorna status 200 y path, si la solicitud es correcta", async () => {
    const videoToAnalyze = new FormData();
    videoToAnalyze.append("video", new Blob());
    const req = request(videoToAnalyze);

    const res = await app.fetch(req);
    expect(res.status).toBe(200);
    expect(res.text()).toBeInstanceOf(String);
  });
});
