import winston from 'winston';
const { format, transports, createLogger } = winston;
const { combine, prettyPrint, timestamp, simple, splat, colorize, json } = format;

export const logger = winston.createLogger({
  format: combine(timestamp(), prettyPrint(), splat(), simple(), colorize(), json()),
  transports: [
    new transports.Console(),
    new transports.File({
      dirname: 'log',
      filename: 'error.log',
      level: 'error',
    }),
    new transports.File({
      dirname: 'log',
      filename: 'info.log',
      level: 'info',
    }),
  ],
});
