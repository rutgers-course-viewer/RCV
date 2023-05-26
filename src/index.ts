import express, { Response } from "express";
import api from "./api/api";
import { logger } from "./logger";

const port = 3000; // TODO: Use environment variable

const app = express();

app.get("/", (_, res: Response) => {
  res.send("Hello, World!");
});

app.use("/api", api);

app.listen(port, () => {
  logger.info(`Server listening on http://localhost:${port}`);
});
