import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { CustomError } from '../utils/errors/CustomError';

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CustomError) {
    logger.error(`${error.errorType} (${error.errorCode}) : ${error.message}`);
    return res.status(error.errorCode).json(error.serialize());
  }
};
