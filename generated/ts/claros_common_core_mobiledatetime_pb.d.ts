// package: claros.common.core
// file: claros_common_core_mobiledatetime.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_mobiletime_pb from "./claros_common_core_mobiletime_pb";
import * as claros_common_core_mobiledate_pb from "./claros_common_core_mobiledate_pb";

export class MobileDateTime extends jspb.Message {
  hasMobiledate(): boolean;
  clearMobiledate(): void;
  getMobiledate(): claros_common_core_mobiledate_pb.MobileDate | undefined;
  setMobiledate(value?: claros_common_core_mobiledate_pb.MobileDate): void;

  hasMobiletime(): boolean;
  clearMobiletime(): void;
  getMobiletime(): claros_common_core_mobiletime_pb.MobileTime | undefined;
  setMobiletime(value?: claros_common_core_mobiletime_pb.MobileTime): void;

  getTimezone(): number;
  setTimezone(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MobileDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: MobileDateTime): MobileDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MobileDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MobileDateTime;
  static deserializeBinaryFromReader(message: MobileDateTime, reader: jspb.BinaryReader): MobileDateTime;
}

export namespace MobileDateTime {
  export type AsObject = {
    mobiledate?: claros_common_core_mobiledate_pb.MobileDate.AsObject,
    mobiletime?: claros_common_core_mobiletime_pb.MobileTime.AsObject,
    timezone: number,
  }
}

