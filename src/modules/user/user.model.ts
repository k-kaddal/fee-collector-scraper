import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose'

@modelOptions({ schemaOptions: { collection: 'users' } })
export class UserClass {
  @prop({ required: true })
  username: string
}

export const UserModel = getModelForClass(UserClass)
