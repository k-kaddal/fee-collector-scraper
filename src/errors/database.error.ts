import { CustomError } from '../utils/CustomError';

export class DatabaseError extends CustomError {
  statusCode: number = 500;

  constructor() {
    super('Database crashed');
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }

  serialize(): { message: string } {
    return { message: 'Database crashed' };
  }
}
