import express from "express";
import requestIp from "request-ip";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";

import { EnvVars } from "./utils/validateEnv";
import * as middleware from "./middleware";
import Router from "./router";

import { WinstonLoggerWrapper } from "./utils/winstonLogger";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(requestIp.mw());
app.use(middleware.RateLimiterMiddleware);
app.use(cors({ credentials: true, origin: true }));
app.use(helmet());

app.use(middleware.LoggerMiddleware);
app.use("/", Router);

app.use(middleware.errorMiddleware);

process.on("uncaughtException", (e: any) => {
  WinstonLoggerWrapper({
    level: "error",
    message: "@@@@@@@@@@unhandledRejection better to log error before exiting",
    status: 500,
    identifier: "UncaughtException",
    stack: e,
  });

  process.exit(1);
});

process.on("unhandledRejection", (e: any) => {
  WinstonLoggerWrapper({
    level: "error",
    message: "@@@@@@@@@@unhandledRejection better to log error before exiting",
    status: 500,
    identifier: "UnhandledRejection",
    stack: e,
  });
  process.exit(1);
});

app.listen(EnvVars.PORT, () => {
  console.log(`Server is running http://localhost:${EnvVars.PORT}...`);
});
