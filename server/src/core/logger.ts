import winston from "winston";
const { combine, prettyPrint, timestamp } = winston.format;

export const logger = winston.createLogger({
  format: combine(timestamp(), prettyPrint()),
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
