import { Handler, Response, Request, NextFunction } from "express";
import HttpException from "../exceptions/HttpException";
import UserNotFoundException from "../exceptions/UserNotFoundException";
import { WinstonLoggerWrapper } from "../utils/winstonLogger";

import { TimerBomb } from "../utils/timerBomb";

export const getErrorOne: Handler = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  next("I am an error");
};

export const getErrorTwo: Handler = (
  _request: Request,
  _response: Response,
  _next: NextFunction,
) => {
  throw "Oh shit";
};

export const getErrorThree: Handler = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  next(new HttpException(403, "Can't do this dude"));
};

export const getErrorFour: Handler = (
  _request: Request,
  _response: Response,
  next: NextFunction,
) => {
  next(new UserNotFoundException("hh573hsheHGshxytt"));
};

export const getErrorFive: Handler = (
  _request: Request,
  _response: Response,
  _next: NextFunction,
) => {
  throw new Error("I am a new Error");
};

export const getErrorSix: Handler = async (
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  const result = await TimerBomb();
  response.send(result);
};

export const getErrorSeven: Handler = async (
  _request: Request,
  response: Response,
  _next: NextFunction,
) => {
  try {
    const result = await TimerBomb();
    response.send(result);
  } catch (error) {
    WinstonLoggerWrapper({
      level: "warn",
      message: error.message || error,
      identifier: "ErrorTest",
      status: 401,
      stack: error.stack,
    });
    response.status(401).json({
      message: "Sorry but something went wrong, real error should be logged",
    });
  }
};
