import { SanitiseBody } from "auth-ogl";
import { NextFunction, Request, Response } from "express";

import HttpException from "../exceptions/HttpException";
import { Logger } from "../utils/logger";

export const errorMiddleware = (
  error: HttpException,
  request: Request,
  response: Response,
  _next: NextFunction,
): void => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";

  Logger.error(message, {
    identifier: "ErrorMiddleware",
    error: {
      message: error.message || "no error message",
      stack: error.stack || "no stack",
    },
    code: request.code,
    body: SanitiseBody(request.body),
    headers: request.headers,
  });

  response.status(status).send({
    status,
    message,
  });
};
export default errorMiddleware;
