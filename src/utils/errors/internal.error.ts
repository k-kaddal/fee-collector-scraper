import { CustomError } from "./CustomError";

export class InternalError extends CustomError {
  errorCode: number = 500;
  errorType: string = 'INTERNAL_ERROR';

  constructor(message?: string) {
    super(message || 'Internal error');
    Object.setPrototypeOf(this, InternalError.prototype);
  }

  serialize(): { errorCode: number; errorType: string; message: string } {
    return {
      errorCode: this.errorCode,
      errorType: this.errorType,
      message: this.message,
    };
  }
}
