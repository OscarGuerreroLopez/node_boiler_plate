/* eslint-disable @typescript-eslint/no-var-requires */
// tslint:disable-next-line:no-var-requires
const { RateLimiterRedis } = require("rate-limiter-flexible");
import { Request, Response, NextFunction } from "express";
import { Logger } from "../utils/logger";
import { RedisClient } from "../utils/redis";
import HttpException from "../exceptions/HttpException";

const rateLimiter = new RateLimiterRedis({
  redis: RedisClient,
  keyPrefix: "middleware",
  points: 10, // 10 requests
  duration: 20, // per 20 seconds by IP, also user gets out for 20 seconds
});

export const RateLimiterMiddleware = (
  req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  rateLimiter
    .consume(req.clientIp)
    .then(() => {
      next();
    })
    .catch((error: any) => {
      Logger.error(`Too many requests from ${req.clientIp} orch`, {
        identifier: "RateLimiter",
        error: {
          message: error.message || "no error message",
          stack: error.stack || "no stack",
        },
      });

      next(new HttpException(429, "Way too many requests sorry orch"));
    });
};
