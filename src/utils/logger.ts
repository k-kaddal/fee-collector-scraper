import pino from 'pino';
import { config } from '../config';

let logger: any;

if (config.nodeEnv === 'production') {
  logger = pino({
    level: 'info',
  });
} else {
  logger = pino({
    level: 'debug',
    transport: {
      target: 'pino-pretty',
    },
  });
}

export default logger;
