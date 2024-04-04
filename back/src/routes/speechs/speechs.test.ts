import { it, expect } from "bun:test";
import app from "../../";

it("Sirve audios desde el enpoint /speechs/*", async () => {
  const req = new Request(
    "https://special-giggle-r4wgrqw5p69hwppq-3000.app.github.dev/speechs/speech-3aa7bxg34mlubmwl0c.mp3"
  );
  const res = await app.fetch(req);

  expect(res.status).toBe(200);
});
