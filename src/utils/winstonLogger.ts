import * as winston from "winston";

const { combine, timestamp, prettyPrint } = winston.format;

export const WinstonLoggerWrapper = (data: Logger) => {
  const message = JSON.stringify({
    message: data.message,
    status: data.status || undefined,
    stack: data.stack,
    identifier: data.identifier,
  });

  winstonLogger.log({
    level: data.level,
    message,
  });
};

const winstonLogger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), prettyPrint()),
  defaultMeta: { service: "boilerplate" },
  transports: [
    new winston.transports.File({
      filename: "./logs/info.log",
      level: "info",
    }),
    new winston.transports.File({
      filename: "./logs/warn.log",
      level: "warn",
    }),
    new winston.transports.File({
      filename: "./logs/error.log",
      level: "error",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  winstonLogger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
