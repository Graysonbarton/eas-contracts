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
} from "../../../common";

export interface IndexerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getEAS"
      | "getReceivedAttestationUIDCount"
      | "getReceivedAttestationUIDs"
      | "getSchemaAttestationUIDCount"
      | "getSchemaAttestationUIDs"
      | "getSchemaAttesterRecipientAttestationUIDCount"
      | "getSchemaAttesterRecipientAttestationUIDs"
      | "getSentAttestationUIDCount"
      | "getSentAttestationUIDs"
      | "indexAttestation"
      | "indexAttestations"
      | "isAttestationIndexed"
      | "version"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Indexed"): EventFragment;

  encodeFunctionData(functionFragment: "getEAS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getReceivedAttestationUIDCount",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedAttestationUIDs",
    values: [AddressLike, BytesLike, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchemaAttestationUIDCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchemaAttestationUIDs",
    values: [BytesLike, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchemaAttesterRecipientAttestationUIDCount",
    values: [BytesLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSchemaAttesterRecipientAttestationUIDs",
    values: [
      BytesLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSentAttestationUIDCount",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSentAttestationUIDs",
    values: [AddressLike, BytesLike, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "indexAttestation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "indexAttestations",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "isAttestationIndexed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getEAS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedAttestationUIDCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedAttestationUIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchemaAttestationUIDCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchemaAttestationUIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchemaAttesterRecipientAttestationUIDCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSchemaAttesterRecipientAttestationUIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSentAttestationUIDCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSentAttestationUIDs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexAttestation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "indexAttestations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isAttestationIndexed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
}

export namespace IndexedEvent {
  export type InputTuple = [uid: BytesLike];
  export type OutputTuple = [uid: string];
  export interface OutputObject {
    uid: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Indexer extends BaseContract {
  connect(runner?: ContractRunner | null): Indexer;
  waitForDeployment(): Promise<this>;

  interface: IndexerInterface;

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

  getEAS: TypedContractMethod<[], [string], "view">;

  getReceivedAttestationUIDCount: TypedContractMethod<
    [recipient: AddressLike, schemaUID: BytesLike],
    [bigint],
    "view"
  >;

  getReceivedAttestationUIDs: TypedContractMethod<
    [
      recipient: AddressLike,
      schemaUID: BytesLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;

  getSchemaAttestationUIDCount: TypedContractMethod<
    [schemaUID: BytesLike],
    [bigint],
    "view"
  >;

  getSchemaAttestationUIDs: TypedContractMethod<
    [
      schemaUID: BytesLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;

  getSchemaAttesterRecipientAttestationUIDCount: TypedContractMethod<
    [schemaUID: BytesLike, attester: AddressLike, recipient: AddressLike],
    [bigint],
    "view"
  >;

  getSchemaAttesterRecipientAttestationUIDs: TypedContractMethod<
    [
      schemaUID: BytesLike,
      attester: AddressLike,
      recipient: AddressLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;

  getSentAttestationUIDCount: TypedContractMethod<
    [attester: AddressLike, schemaUID: BytesLike],
    [bigint],
    "view"
  >;

  getSentAttestationUIDs: TypedContractMethod<
    [
      attester: AddressLike,
      schemaUID: BytesLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;

  indexAttestation: TypedContractMethod<
    [attestationUID: BytesLike],
    [void],
    "nonpayable"
  >;

  indexAttestations: TypedContractMethod<
    [attestationUIDs: BytesLike[]],
    [void],
    "nonpayable"
  >;

  isAttestationIndexed: TypedContractMethod<
    [attestationUID: BytesLike],
    [boolean],
    "view"
  >;

  version: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getEAS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getReceivedAttestationUIDCount"
  ): TypedContractMethod<
    [recipient: AddressLike, schemaUID: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceivedAttestationUIDs"
  ): TypedContractMethod<
    [
      recipient: AddressLike,
      schemaUID: BytesLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSchemaAttestationUIDCount"
  ): TypedContractMethod<[schemaUID: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSchemaAttestationUIDs"
  ): TypedContractMethod<
    [
      schemaUID: BytesLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSchemaAttesterRecipientAttestationUIDCount"
  ): TypedContractMethod<
    [schemaUID: BytesLike, attester: AddressLike, recipient: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSchemaAttesterRecipientAttestationUIDs"
  ): TypedContractMethod<
    [
      schemaUID: BytesLike,
      attester: AddressLike,
      recipient: AddressLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSentAttestationUIDCount"
  ): TypedContractMethod<
    [attester: AddressLike, schemaUID: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSentAttestationUIDs"
  ): TypedContractMethod<
    [
      attester: AddressLike,
      schemaUID: BytesLike,
      start: BigNumberish,
      length: BigNumberish,
      reverseOrder: boolean
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "indexAttestation"
  ): TypedContractMethod<[attestationUID: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "indexAttestations"
  ): TypedContractMethod<[attestationUIDs: BytesLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isAttestationIndexed"
  ): TypedContractMethod<[attestationUID: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "version"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Indexed"
  ): TypedContractEvent<
    IndexedEvent.InputTuple,
    IndexedEvent.OutputTuple,
    IndexedEvent.OutputObject
  >;

  filters: {
    "Indexed(bytes32)": TypedContractEvent<
      IndexedEvent.InputTuple,
      IndexedEvent.OutputTuple,
      IndexedEvent.OutputObject
    >;
    Indexed: TypedContractEvent<
      IndexedEvent.InputTuple,
      IndexedEvent.OutputTuple,
      IndexedEvent.OutputObject
    >;
  };
}
