import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import {
  bodyValidator,
  paramsValidator,
} from "../../middlewares/analyzeVideo/validators";
import { responseGenerator } from "../../analyzeVideo/infractructure/responseGenerator";
import { cleaner } from "../../analyzeVideo/infractructure/cleaner";
import path from "path";

const analyzeVideo = new Hono();

analyzeVideo.post("/", async (_, next) => {
  await next();
  const pathToClean = path.resolve(__dirname, "../../../data");
  await cleaner(pathToClean);
});

analyzeVideo.post("/", paramsValidator, bodyValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const form = await c.req.valid("form");

  if (!(form instanceof Response)) {
    const result = await useAnalyzeVideo(
      responseGenerator,
      form.video,
      movement
    );

    if (typeof result === "string") {
      return c.text(result);
    }

    return c.text(result.filename);
  }
});

export default analyzeVideo;
