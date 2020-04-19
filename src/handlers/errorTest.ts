import { Handler, Response, Request, NextFunction } from "express";

export const getError: Handler = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  next("I am an error");
};
