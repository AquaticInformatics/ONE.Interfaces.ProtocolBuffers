// package: claros.common.core
// file: claros_common_core_mobiletime.proto

import * as jspb from "google-protobuf";

export class MobileTime extends jspb.Message {
  getHours(): number;
  setHours(value: number): void;

  getMinutes(): number;
  setMinutes(value: number): void;

  getSeconds(): number;
  setSeconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileTime.AsObject;
  static toObject(includeInstance: boolean, msg: MobileTime): MobileTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileTime;
  static deserializeBinaryFromReader(message: MobileTime, reader: jspb.BinaryReader): MobileTime;
}

export namespace MobileTime {
  export type AsObject = {
    hours: number,
    minutes: number,
    seconds: number,
  }
}

