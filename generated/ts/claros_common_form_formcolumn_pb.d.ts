// package: claros.common.form
// file: claros_common_form_formcolumn.proto

import * as jspb from "google-protobuf";

export class FormColumn extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  clearFormfieldidsList(): void;
  getFormfieldidsList(): Array<string>;
  setFormfieldidsList(value: Array<string>): void;
  addFormfieldids(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormColumn.AsObject;
  static toObject(includeInstance: boolean, msg: FormColumn): FormColumn.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormColumn, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormColumn;
  static deserializeBinaryFromReader(message: FormColumn, reader: jspb.BinaryReader): FormColumn;
}

export namespace FormColumn {
  export type AsObject = {
    number: number,
    formfieldidsList: Array<string>,
  }
}

