import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const speechs = new Hono();

speechs.get(
  "/*",
  serveStatic({
    root: "./",
    rewriteRequestPath: (path) => path.replace(/^\/speechs/, "/speechsStorage"),
  })
);

export default speechs;
