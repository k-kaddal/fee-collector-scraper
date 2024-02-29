import { CustomError } from '../utils/CustomError';

export class AuthenticationError extends CustomError {
  statusCode: number = 401;

  constructor() {
    super('user unauthenticated');
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }

  serialize(): { message: string } {
    return { message: 'user unauthenticated' };
  }
}
