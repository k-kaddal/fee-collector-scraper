import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';

@modelOptions({ schemaOptions: { collection: 'FeesCollectedEvents' } })
export class FeesCollectedEventClass {
  @prop({ required: true, unique: true })
  _id: ObjectId;

  @prop({ required: true })
  token: string;

  @prop({ required: true })
  integrator: string;

  @prop({ required: true })
  integratorFee: string;

  @prop({ required: true })
  lifiFee: string;

  @prop({ required: true })
  blockNumber: number;
}

export const EventModel = getModelForClass(FeesCollectedEventClass);
