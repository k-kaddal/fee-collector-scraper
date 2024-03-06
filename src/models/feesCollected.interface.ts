export interface IFeesCollectedEvent {
  _id: string;
  token: string;
  integrator: string;
  integratorFee: BigInt;
  lifiFee: BigInt;
  blockNumber: number;
}
