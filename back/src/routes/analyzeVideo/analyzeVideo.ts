import { Hono } from "hono";
import { useAnalyzeVideo } from "../../analyzeVideo/application/useAnalyzeVideo";
import {
  bodyValidator,
  paramsValidator,
} from "../../middlewares/analyzeVideo/validators";
import { serveStatic } from "hono/bun";
import { responseGenerator } from "../../analyzeVideo/infractructure/responseGenerator";

const analyzeVideo = new Hono();

// Middleware para servir archivo estáticos
analyzeVideo.post(
  "/",
  serveStatic({
    root: "../../data",
  })
);
analyzeVideo.post("/", paramsValidator, bodyValidator, async (c) => {
  const { movement } = await c.req.valid("param");
  const form = await c.req.valid("form");

  if (!(form instanceof Response)) {
    const { audioUrl } = await useAnalyzeVideo(
      responseGenerator,
      form.video,
      movement
    );

    return c.redirect(audioUrl);
  }
});

export default analyzeVideo;
