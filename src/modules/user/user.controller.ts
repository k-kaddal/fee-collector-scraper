import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import { DatabaseError } from '../../errors/database.error';

export class UserController {
  static async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.createUser();
      res.status(200).json({ user, message: 'user has been created' });
    } catch (error) {
      next(new DatabaseError());
    }
  }
}
