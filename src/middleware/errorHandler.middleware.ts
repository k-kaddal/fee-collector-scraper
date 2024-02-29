import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { CustomError } from '../utils/CustomError';

export const errorHandler: ErrorRequestHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof CustomError) {
    return res.status(error.statusCode).json(error.serialize());
  }
};
