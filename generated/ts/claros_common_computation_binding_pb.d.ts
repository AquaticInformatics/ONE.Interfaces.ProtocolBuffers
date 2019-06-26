// package: claros.common.computation
// file: claros_common_computation_binding.proto

import * as jspb from "google-protobuf";

export class ComputationBinding extends jspb.Message {
  getComputationid(): string;
  setComputationid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComputationBinding.AsObject;
  static toObject(includeInstance: boolean, msg: ComputationBinding): ComputationBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ComputationBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComputationBinding;
  static deserializeBinaryFromReader(message: ComputationBinding, reader: jspb.BinaryReader): ComputationBinding;
}

export namespace ComputationBinding {
  export type AsObject = {
    computationid: string,
  }
}

