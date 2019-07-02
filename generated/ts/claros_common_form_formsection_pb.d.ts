// package: claros.common.form
// file: claros_common_form_formsection.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_formcolumn_pb from "./claros_common_form_formcolumn_pb";

export class FormSection extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): void;

  clearColumnList(): void;
  getColumnList(): Array<claros_common_form_formcolumn_pb.FormColumn>;
  setColumnList(value: Array<claros_common_form_formcolumn_pb.FormColumn>): void;
  addColumn(value?: claros_common_form_formcolumn_pb.FormColumn, index?: number): claros_common_form_formcolumn_pb.FormColumn;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormSection.AsObject;
  static toObject(includeInstance: boolean, msg: FormSection): FormSection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormSection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormSection;
  static deserializeBinaryFromReader(message: FormSection, reader: jspb.BinaryReader): FormSection;
}

export namespace FormSection {
  export type AsObject = {
    number: number,
    columnList: Array<claros_common_form_formcolumn_pb.FormColumn.AsObject>,
  }
}

