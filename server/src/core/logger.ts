import winston from "winston";

export const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      dirname: "log",
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({
      dirname: "log",
      filename: "info.log",
      level: "info",
    }),
  ],
});
