import { SanitiseBody } from "auth-ogl";
import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

import { Logger } from "../utils";

export const LoggerMiddleware = (
  request: Request,
  _response: Response,
  next: NextFunction,
): void => {
  try {
    request.originalHost =
      (request.headers.originalhost as string) || request.hostname;
    request.originalIp =
      (request.headers.originalip as string) || request.clientIp || request.ip;
    request.originalUserAgent =
      (request.headers.originaluseragent as string) ||
      request.headers["user-agent"] ||
      "no user agent";
    request.originalMethod =
      (request.headers.originalmethod as string) || request.method;
    request.originalPath =
      (request.headers.originalpath as string) || request.path;
    request.originalToken =
      (request.headers.originaltoken as string) ||
      (request.headers.authorization as string);

    const message = `${request.originalIp}/${request.originalMethod}${request.originalPath}/${request.originalHost}`;

    request.code = uuidv4();

    Logger.info(message, {
      identifier: "LoggerMiddleware",
      code: request.code,
      body: SanitiseBody(request.body),
      headers: request.headers,
      path: message,
    });
    next();
  } catch (error) {
    const status = 500;
    const message = error.message || error;

    Logger.warn(message, {
      identifier: "LoggerMiddleware",
      status,
      error: {
        message: error.message || "no error message",
        stack: error.stack || "no stack",
      },
      code: request.code,
    });

    next();
  }
};
