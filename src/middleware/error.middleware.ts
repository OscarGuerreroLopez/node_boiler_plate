import { NextFunction, Request, Response } from "express";

import HttpException from "../exceptions/HttpException";
import { WinstonLoggerWrapper } from "../utils/logger";

export const errorMiddleware = (
  error: HttpException,
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";

  WinstonLoggerWrapper({
    level: "error",
    message,
    status,
    identifier: "ErrorMiddleware",
    stack: JSON.stringify(error),
  });

  response.status(status).send({
    status,
    message,
  });
};
export default errorMiddleware;
