// package: claros.instrument.measurement
// file: claros_instrument_measurement_milliamp_binding.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class MilliAmpBinding extends jspb.Message {
  getCardname(): string;
  setCardname(value: string): void;

  getChannel(): number;
  setChannel(value: number): void;

  hasValidfrom(): boolean;
  clearValidfrom(): void;
  getValidfrom(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setValidfrom(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  hasValidto(): boolean;
  clearValidto(): void;
  getValidto(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setValidto(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MilliAmpBinding.AsObject;
  static toObject(includeInstance: boolean, msg: MilliAmpBinding): MilliAmpBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MilliAmpBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MilliAmpBinding;
  static deserializeBinaryFromReader(message: MilliAmpBinding, reader: jspb.BinaryReader): MilliAmpBinding;
}

export namespace MilliAmpBinding {
  export type AsObject = {
    cardname: string,
    channel: number,
    validfrom?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    validto?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

