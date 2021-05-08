import {
  WinstonLogger as WinstonLoggerlib,
  Logger as loggerInterface,
  ServicesEnum,
} from "auth-ogl";
import { EnvVars } from "./validateEnv";

const loggerData: loggerInterface = {
  level: EnvVars.LOG_LEVEL,
  index: EnvVars.ES_INDEX,
  esNode: EnvVars.ES_NODE,
  apmEnabled: EnvVars.APM_ENABLE!,
  service: ServicesEnum.API_ORCH,
};

const getLogger = () => {
  return WinstonLoggerlib(loggerData, EnvVars.NODE_ENV).logger;
};

export const Logger = getLogger();
