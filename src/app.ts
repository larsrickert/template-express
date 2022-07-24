import express from "express";
import { config } from "./config";
import errorMiddleware from "./middleware/error.middleware";
import * as helloWorld from "./routes/index.routes";

const app = express();

// app routes
app.get("/", helloWorld.find);

app.listen(config.app.port, () =>
  console.log(`Running on http://localhost:${config.app.port}`)
);

// error middleware must be registered at the end
app.use(errorMiddleware);
