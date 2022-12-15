import log4js from "log4js";

const LEVELS = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  warn: log4js.levels.WARN,
  error: log4js.levels.ERROR,
  fatal: log4js.levels.FATAL,
};

log4js.configure({
  appenders: {
    console: { type: "console" },
    info: {
      type: "file",
      filename: "logs/info.log",
    },
    error: {
      type: "dateFile",
      filename: "logs/error",
      pattern: "yyyy-MM-dd.log",
      alwaysIncludePattern: true,
    },
  },
  categories: {
    default: { appenders: ["console"], level: "debug" },
    info: { appenders: ["info", "console"], level: "info" },
    error: {
      appenders: ["error", "console"],
      level: "error",
    },
  },
});

export const debug = (content: string) => {
  const logger = log4js.getLogger();
  logger.level = LEVELS.debug;
  logger.debug(content);
};

export const error = (content: string) => {
  const logger = log4js.getLogger("error");
  logger.level = LEVELS.error;
  logger.error(content);
};

exports.info = (content: string) => {
  let logger = log4js.getLogger("info");
  logger.level = LEVELS.info;
  logger.info(content);
};
