// package: claros.instrument.measurement
// file: claros_instrument_measurement_scsensor_binding.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class SCSensorBinding extends jspb.Message {
  getChannel(): number;
  setChannel(value: number): void;

  getTag(): string;
  setTag(value: string): void;

  hasValidfrom(): boolean;
  clearValidfrom(): void;
  getValidfrom(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setValidfrom(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  hasValidto(): boolean;
  clearValidto(): void;
  getValidto(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setValidto(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SCSensorBinding.AsObject;
  static toObject(includeInstance: boolean, msg: SCSensorBinding): SCSensorBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SCSensorBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SCSensorBinding;
  static deserializeBinaryFromReader(message: SCSensorBinding, reader: jspb.BinaryReader): SCSensorBinding;
}

export namespace SCSensorBinding {
  export type AsObject = {
    channel: number,
    tag: string,
    validfrom?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    validto?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

