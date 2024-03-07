import {
  Severity,
  getModelForClass,
  modelOptions,
  mongoose,
  prop,
} from '@typegoose/typegoose';
import { IFeesCollectedEvent } from './feesCollected.interface';

@modelOptions({
  options: { allowMixed: Severity.ALLOW },
  schemaOptions: { collection: 'FeesCollectedEvents' },
})
export class FeesCollectedEventClass implements IFeesCollectedEvent {
  @prop({ required: true, unique: true })
  _id: string;

  @prop({ required: true })
  token: string;

  @prop({ required: true })
  integrator: string;

  @prop({ required: true })
  integratorFee: BigInt;

  @prop({ required: true })
  lifiFee: BigInt;

  @prop({ required: true })
  blockNumber: number;
}

export const EventModel = getModelForClass(FeesCollectedEventClass);
