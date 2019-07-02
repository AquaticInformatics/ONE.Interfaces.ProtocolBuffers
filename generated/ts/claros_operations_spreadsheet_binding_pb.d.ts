// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_binding.proto

import * as jspb from "google-protobuf";

export class SpreadsheetBinding extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpreadsheetBinding.AsObject;
  static toObject(includeInstance: boolean, msg: SpreadsheetBinding): SpreadsheetBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpreadsheetBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpreadsheetBinding;
  static deserializeBinaryFromReader(message: SpreadsheetBinding, reader: jspb.BinaryReader): SpreadsheetBinding;
}

export namespace SpreadsheetBinding {
  export type AsObject = {
    userid: string,
  }
}

