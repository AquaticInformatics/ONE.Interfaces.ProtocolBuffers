// package: claros.common.form
// file: claros_common_form_binding.proto

import * as jspb from "google-protobuf";

export class FormBinding extends jspb.Message {
  getFormid(): string;
  setFormid(value: string): void;

  getFormfieldid(): string;
  setFormfieldid(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormBinding.AsObject;
  static toObject(includeInstance: boolean, msg: FormBinding): FormBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormBinding;
  static deserializeBinaryFromReader(message: FormBinding, reader: jspb.BinaryReader): FormBinding;
}

export namespace FormBinding {
  export type AsObject = {
    formid: string,
    formfieldid: string,
    userid: string,
  }
}

