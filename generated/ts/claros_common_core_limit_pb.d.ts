// package: claros.common.core
// file: claros_common_core_limit.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_limit_type_pb from "./claros_common_core_limit_type_pb";
import * as claros_common_recurrence_recurrence_pb from "./claros_common_recurrence_recurrence_pb";

export class Limit extends jspb.Message {
  getI18nkey(): string;
  setI18nkey(value: string): void;

  getLimittype(): claros_common_core_limit_type_pb.LimitTypeMap[keyof claros_common_core_limit_type_pb.LimitTypeMap];
  setLimittype(value: claros_common_core_limit_type_pb.LimitTypeMap[keyof claros_common_core_limit_type_pb.LimitTypeMap]): void;

  getValue(): number;
  setValue(value: number): void;

  getUnitid(): number;
  setUnitid(value: number): void;

  hasRecurrence(): boolean;
  clearRecurrence(): void;
  getRecurrence(): claros_common_recurrence_recurrence_pb.Recurrence | undefined;
  setRecurrence(value?: claros_common_recurrence_recurrence_pb.Recurrence): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Limit.AsObject;
  static toObject(includeInstance: boolean, msg: Limit): Limit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Limit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Limit;
  static deserializeBinaryFromReader(message: Limit, reader: jspb.BinaryReader): Limit;
}

export namespace Limit {
  export type AsObject = {
    i18nkey: string,
    limittype: claros_common_core_limit_type_pb.LimitTypeMap[keyof claros_common_core_limit_type_pb.LimitTypeMap],
    value: number,
    unitid: number,
    recurrence?: claros_common_recurrence_recurrence_pb.Recurrence.AsObject,
  }
}

