// package: claros.common.core
// file: claros_common_core_measurement.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class Measurement extends jspb.Message {
  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setTimestamp(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getParameterid(): number;
  setParameterid(value: number): void;

  getParameterguid(): string;
  setParameterguid(value: string): void;

  getUnitid(): number;
  setUnitid(value: number): void;

  getUnitguid(): string;
  setUnitguid(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Measurement.AsObject;
  static toObject(includeInstance: boolean, msg: Measurement): Measurement.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Measurement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Measurement;
  static deserializeBinaryFromReader(message: Measurement, reader: jspb.BinaryReader): Measurement;
}

export namespace Measurement {
  export type AsObject = {
    timestamp?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    parameterid: number,
    parameterguid: string,
    unitid: number,
    unitguid: string,
    value: number,
  }
}

