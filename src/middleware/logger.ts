import { Request, Response, NextFunction } from "express";
import { WinstonLoggerWrapper } from "../utils/winstonLogger";

export const LoggerMiddleware = (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  WinstonLoggerWrapper({
    level: "info",
    message: `${request.method} ${request.path} ${request.hostname}`,
    identifier: "LoggerMiddleware",
  });
  console.log(`${request.method} ${request.path} ${request.hostname}`);
  next();
};
