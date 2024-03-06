import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/customError';
import logger from '../utils/logger';

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
