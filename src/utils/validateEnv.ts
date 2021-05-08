import { cleanEnv, str, num, bool } from "envalid";

const getEnvVars = (): EnvObject => {
  const EnvVars = cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: num({ default: 5000 }),
    REDIS_PORT: num({ default: 6379 }),
    REDIS_HOST: str({ default: "localhost" }),
    ES_INDEX: str(),
    ES_NODE: str(),
    LOG_LEVEL: str(),
    APM_URL: str(),
    APM_ENABLE: bool({ default: false }),
  });

  return EnvVars as EnvObject;
};

export const EnvVars = getEnvVars();
