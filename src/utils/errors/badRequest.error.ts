import { CustomError } from "./CustomError";

export class BadRequestError extends CustomError {
  errorCode: number = 400;
  errorType: string = 'BAD_REQUEST';

  constructor(public message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialize(): { errorCode: number; errorType: string; message: string } {
    return {
      errorCode: this.errorCode,
      errorType: this.errorType,
      message: this.message,
    };
  }
}
