import { Hono } from "hono";
import analyzeVideo from "./routes/analyzeVideo/analyzeVideo";
import { mainEnpointUrl } from "./utils/mainEnpointUrl";
import speechs from "./routes/speechs/speechs";

const app = new Hono();

app.route("/speechs", speechs);
app.route(`${mainEnpointUrl}:movement`, analyzeVideo);

export default app;
