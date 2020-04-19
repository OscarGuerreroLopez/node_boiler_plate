import express, { Request, Response } from "express";

import Router from "./src/router";
import { LoggerMiddleware } from "./src/middleware";

const app = express();

app.use(LoggerMiddleware);
app.use("/", Router);

app.listen(5000, () => {
  console.log(`Server is running http://localhost:5000...`);
});
