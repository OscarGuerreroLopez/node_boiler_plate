export {};

declare global {
  interface EnvObject {
    PORT: number;
    REDIS_PORT: number;
    REDIS_HOST: string;
  }

  interface IObjectLiteral {
    [key: string]: string;
  }

  type LoggerLevel = "info" | "warn" | "error";
  type LoggerIdentifier =
    | "LoggerMiddleware"
    | "ErrorMiddleware"
    | "RateLimiter"
    | "ErrorTest";

  interface Logger {
    level: LoggerLevel;
    message: string;
    status?: number;
    stack?: IObjectLiteral;
    identifier: LoggerIdentifier;
  }
}
