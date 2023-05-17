import express, { Response } from "express";

const port = 3000; // TODO: Use environment variable

const app = express();

app.get("/", (_, res: Response) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
