// package: claros.common.form
// file: claros_common_form_field_text_repeated.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_field_text_pb from "./claros_common_form_field_text_pb";

export class FormFieldTextRepeated extends jspb.Message {
  clearFormfieldtextrepeatedList(): void;
  getFormfieldtextrepeatedList(): Array<claros_common_form_field_text_pb.FormFieldText>;
  setFormfieldtextrepeatedList(value: Array<claros_common_form_field_text_pb.FormFieldText>): void;
  addFormfieldtextrepeated(value?: claros_common_form_field_text_pb.FormFieldText, index?: number): claros_common_form_field_text_pb.FormFieldText;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormFieldTextRepeated.AsObject;
  static toObject(includeInstance: boolean, msg: FormFieldTextRepeated): FormFieldTextRepeated.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormFieldTextRepeated, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormFieldTextRepeated;
  static deserializeBinaryFromReader(message: FormFieldTextRepeated, reader: jspb.BinaryReader): FormFieldTextRepeated;
}

export namespace FormFieldTextRepeated {
  export type AsObject = {
    formfieldtextrepeatedList: Array<claros_common_form_field_text_pb.FormFieldText.AsObject>,
  }
}

