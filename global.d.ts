export {};

declare global {
  interface EnvObject {
    PORT: number;
    REDIS_PORT: number;
    REDIS_HOST: string;
    NODE_ENV: string;
    ES_INDEX: string;
    ES_NODE: string;
    LOG_LEVEL: string;
    APM_URL: string;
    APM_ENABLE?: boolean;
  }

  type LoggerLevel = "info" | "warn" | "error";
}
