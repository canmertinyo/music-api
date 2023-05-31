import winston, { format } from 'winston';
const { combine, label, prettyPrint, timestamp } = format;

export const logger = winston.createLogger({
  level: 'info',
  format: combine(label({ label: 'Log' }), timestamp(), prettyPrint()),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});
