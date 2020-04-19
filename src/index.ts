import express from "express";

import { EnvVars } from "./utils/validateEnv";
import errorHandler from "./middleware/error.middleware";

import Router from "./router";
import { LoggerMiddleware } from "./middleware";

const app = express();
app.use(LoggerMiddleware);
app.use("/", Router);

app.use(errorHandler);

app.listen(EnvVars.PORT, () => {
  console.log(`Server is running http://localhost:${EnvVars.PORT}...`);
});
