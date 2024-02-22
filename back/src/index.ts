import { Elysia } from "elysia";
import { extractFrames } from "./extractVideoFrames";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(extractFrames)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
