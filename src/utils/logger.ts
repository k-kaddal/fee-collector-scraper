import pino from 'pino';

let logger: any;

if (process.env.NODE_ENV === 'production') {
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
