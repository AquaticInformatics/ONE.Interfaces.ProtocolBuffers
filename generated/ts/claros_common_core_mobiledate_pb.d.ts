// package: claros.common.core
// file: claros_common_core_mobiledate.proto

import * as jspb from "google-protobuf";

export class MobileDate extends jspb.Message {
  getYear(): number;
  setYear(value: number): void;

  getMonth(): number;
  setMonth(value: number): void;

  getDay(): number;
  setDay(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDate.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDate): MobileDate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileDate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDate;
  static deserializeBinaryFromReader(message: MobileDate, reader: jspb.BinaryReader): MobileDate;
}

export namespace MobileDate {
  export type AsObject = {
    year: number,
    month: number,
    day: number,
  }
}

