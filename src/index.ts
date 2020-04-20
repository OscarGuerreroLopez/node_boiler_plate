import express from "express";
import requestIp from "request-ip";

import { EnvVars } from "./utils/validateEnv";
import errorHandler from "./middleware/error.middleware";

import Router from "./router";
import { LoggerMiddleware } from "./middleware";

const app = express();
app.use(requestIp.mw());
app.use(LoggerMiddleware);
app.use("/", Router);

app.use(errorHandler);

process.on("uncaughtException", (e: any) => {
  console.log(
    "@@@@@@@@@@uncaughtException better to log error before exiting",
    e,
  );
  process.exit(1);
});
process.on("unhandledRejection", (e: any) => {
  console.log(
    "@@@@@@@@@@unhandledRejection better to log error before exiting",
    e,
  );
  process.exit(1);
});

app.listen(EnvVars.PORT, () => {
  console.log(`Server is running http://localhost:${EnvVars.PORT}...`);
});
