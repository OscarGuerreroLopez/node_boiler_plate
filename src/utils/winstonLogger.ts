import * as winston from "winston";

const { combine, timestamp, printf, label } = winston.format;

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

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const winstonLogger = winston.createLogger({
  level: "info",
  format: combine(label({ label: "boiler plate" }), timestamp(), myFormat),
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
