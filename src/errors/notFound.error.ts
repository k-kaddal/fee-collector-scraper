import { CustomError } from '../utils/customError';

export class NotFoundError extends CustomError {
  errorCode: number = 404;
  errorType: string = 'NOT_FOUND';

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize(): { errorCode: number; errorType: string; message: string } {
    return {
      errorCode: this.errorCode,
      errorType: this.errorType,
      message: this.message,
    };
  }
}
