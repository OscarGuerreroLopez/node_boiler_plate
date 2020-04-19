import { Request, Response, NextFunction } from "express";

export const LoggerMiddleware = (
  request: Request,
  _response: Response,
  next: NextFunction
) => {
  console.log(`${request.method} ${request.path} ${request.hostname}`);
  next();
};
