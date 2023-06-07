import winston, { format } from "winston";
const { combine, prettyPrint, timestamp } = format;

export const logger = winston.createLogger({
  format: combine(timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({
      dirname: "log",
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({
      filename: "info.log",
      dirname: "log",
      level: "info",
    }),
  ],
});
