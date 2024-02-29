import { UserModel } from './user.model'

export class UserService {
  static async createUser() {
    const user = await UserModel.create({ username: 'khaled1' })
    return user
  }
}
