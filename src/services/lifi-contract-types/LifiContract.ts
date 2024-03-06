/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface LifiContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "batchWithdrawIntegratorFees"
      | "batchWithdrawLifiFees"
      | "cancelOnwershipTransfer"
      | "collectNativeFees"
      | "collectTokenFees"
      | "confirmOwnershipTransfer"
      | "getLifiTokenBalance"
      | "getTokenBalance"
      | "owner"
      | "pendingOwner"
      | "transferOwnership"
      | "withdrawIntegratorFees"
      | "withdrawLifiFees"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "FeesCollected"
      | "FeesWithdrawn"
      | "LiFiFeesWithdrawn"
      | "OwnershipTransferRequested"
      | "OwnershipTransferred"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "batchWithdrawIntegratorFees",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "batchWithdrawLifiFees",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOnwershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collectNativeFees",
    values: [BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collectTokenFees",
    values: [AddressLike, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLifiTokenBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawIntegratorFees",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLifiFees",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "batchWithdrawIntegratorFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchWithdrawLifiFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOnwershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectNativeFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectTokenFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLifiTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawIntegratorFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLifiFees",
    data: BytesLike
  ): Result;
}

export namespace FeesCollectedEvent {
  export type InputTuple = [
    _token: AddressLike,
    _integrator: AddressLike,
    _integratorFee: BigNumberish,
    _lifiFee: BigNumberish
  ];
  export type OutputTuple = [
    _token: string,
    _integrator: string,
    _integratorFee: bigint,
    _lifiFee: bigint
  ];
  export interface OutputObject {
    _token: string;
    _integrator: string;
    _integratorFee: bigint;
    _lifiFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesWithdrawnEvent {
  export type InputTuple = [
    _token: AddressLike,
    _to: AddressLike,
    _amount: BigNumberish
  ];
  export type OutputTuple = [_token: string, _to: string, _amount: bigint];
  export interface OutputObject {
    _token: string;
    _to: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LiFiFeesWithdrawnEvent {
  export type InputTuple = [
    _token: AddressLike,
    _to: AddressLike,
    _amount: BigNumberish
  ];
  export type OutputTuple = [_token: string, _to: string, _amount: bigint];
  export interface OutputObject {
    _token: string;
    _to: string;
    _amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferRequestedEvent {
  export type InputTuple = [_from: AddressLike, _to: AddressLike];
  export type OutputTuple = [_from: string, _to: string];
  export interface OutputObject {
    _from: string;
    _to: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface LifiContract extends BaseContract {
  connect(runner?: ContractRunner | null): LifiContract;
  waitForDeployment(): Promise<this>;

  interface: LifiContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  batchWithdrawIntegratorFees: TypedContractMethod<
    [tokenAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  batchWithdrawLifiFees: TypedContractMethod<
    [tokenAddresses: AddressLike[]],
    [void],
    "nonpayable"
  >;

  cancelOnwershipTransfer: TypedContractMethod<[], [void], "nonpayable">;

  collectNativeFees: TypedContractMethod<
    [
      integratorFee: BigNumberish,
      lifiFee: BigNumberish,
      integratorAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  collectTokenFees: TypedContractMethod<
    [
      tokenAddress: AddressLike,
      integratorFee: BigNumberish,
      lifiFee: BigNumberish,
      integratorAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  confirmOwnershipTransfer: TypedContractMethod<[], [void], "nonpayable">;

  getLifiTokenBalance: TypedContractMethod<
    [tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  getTokenBalance: TypedContractMethod<
    [integratorAddress: AddressLike, tokenAddress: AddressLike],
    [bigint],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  transferOwnership: TypedContractMethod<
    [_newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawIntegratorFees: TypedContractMethod<
    [tokenAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  withdrawLifiFees: TypedContractMethod<
    [tokenAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "batchWithdrawIntegratorFees"
  ): TypedContractMethod<[tokenAddresses: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "batchWithdrawLifiFees"
  ): TypedContractMethod<[tokenAddresses: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cancelOnwershipTransfer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "collectNativeFees"
  ): TypedContractMethod<
    [
      integratorFee: BigNumberish,
      lifiFee: BigNumberish,
      integratorAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "collectTokenFees"
  ): TypedContractMethod<
    [
      tokenAddress: AddressLike,
      integratorFee: BigNumberish,
      lifiFee: BigNumberish,
      integratorAddress: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "confirmOwnershipTransfer"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getLifiTokenBalance"
  ): TypedContractMethod<[tokenAddress: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getTokenBalance"
  ): TypedContractMethod<
    [integratorAddress: AddressLike, tokenAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[_newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawIntegratorFees"
  ): TypedContractMethod<[tokenAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawLifiFees"
  ): TypedContractMethod<[tokenAddress: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "FeesCollected"
  ): TypedContractEvent<
    FeesCollectedEvent.InputTuple,
    FeesCollectedEvent.OutputTuple,
    FeesCollectedEvent.OutputObject
  >;
  getEvent(
    key: "FeesWithdrawn"
  ): TypedContractEvent<
    FeesWithdrawnEvent.InputTuple,
    FeesWithdrawnEvent.OutputTuple,
    FeesWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "LiFiFeesWithdrawn"
  ): TypedContractEvent<
    LiFiFeesWithdrawnEvent.InputTuple,
    LiFiFeesWithdrawnEvent.OutputTuple,
    LiFiFeesWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferRequested"
  ): TypedContractEvent<
    OwnershipTransferRequestedEvent.InputTuple,
    OwnershipTransferRequestedEvent.OutputTuple,
    OwnershipTransferRequestedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "FeesCollected(address,address,uint256,uint256)": TypedContractEvent<
      FeesCollectedEvent.InputTuple,
      FeesCollectedEvent.OutputTuple,
      FeesCollectedEvent.OutputObject
    >;
    FeesCollected: TypedContractEvent<
      FeesCollectedEvent.InputTuple,
      FeesCollectedEvent.OutputTuple,
      FeesCollectedEvent.OutputObject
    >;

    "FeesWithdrawn(address,address,uint256)": TypedContractEvent<
      FeesWithdrawnEvent.InputTuple,
      FeesWithdrawnEvent.OutputTuple,
      FeesWithdrawnEvent.OutputObject
    >;
    FeesWithdrawn: TypedContractEvent<
      FeesWithdrawnEvent.InputTuple,
      FeesWithdrawnEvent.OutputTuple,
      FeesWithdrawnEvent.OutputObject
    >;

    "LiFiFeesWithdrawn(address,address,uint256)": TypedContractEvent<
      LiFiFeesWithdrawnEvent.InputTuple,
      LiFiFeesWithdrawnEvent.OutputTuple,
      LiFiFeesWithdrawnEvent.OutputObject
    >;
    LiFiFeesWithdrawn: TypedContractEvent<
      LiFiFeesWithdrawnEvent.InputTuple,
      LiFiFeesWithdrawnEvent.OutputTuple,
      LiFiFeesWithdrawnEvent.OutputObject
    >;

    "OwnershipTransferRequested(address,address)": TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;
    OwnershipTransferRequested: TypedContractEvent<
      OwnershipTransferRequestedEvent.InputTuple,
      OwnershipTransferRequestedEvent.OutputTuple,
      OwnershipTransferRequestedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
