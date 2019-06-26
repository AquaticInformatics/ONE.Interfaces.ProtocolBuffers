// package: claros.common.form
// file: claros_common_form_formfield_definition.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_formdataentry_type_pb from "./claros_common_form_formdataentry_type_pb";
import * as claros_common_form_field_worksheet_column_UTC_pb from "./claros_common_form_field_worksheet_column_UTC_pb";
import * as claros_common_form_field_text_repeated_pb from "./claros_common_form_field_text_repeated_pb";

export class FormFieldDefinition extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): void;

  getFormdataentrytype(): claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap[keyof claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap];
  setFormdataentrytype(value: claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap[keyof claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap]): void;

  getIsdataentrytypelocked(): boolean;
  setIsdataentrytypelocked(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  hasColumn(): boolean;
  clearColumn(): void;
  getColumn(): claros_common_form_field_worksheet_column_UTC_pb.FormFieldWorksheetColumnUTC | undefined;
  setColumn(value?: claros_common_form_field_worksheet_column_UTC_pb.FormFieldWorksheetColumnUTC): void;

  hasTextrepeated(): boolean;
  clearTextrepeated(): void;
  getTextrepeated(): claros_common_form_field_text_repeated_pb.FormFieldTextRepeated | undefined;
  setTextrepeated(value?: claros_common_form_field_text_repeated_pb.FormFieldTextRepeated): void;

  getFielddefinitionCase(): FormFieldDefinition.FielddefinitionCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormFieldDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: FormFieldDefinition): FormFieldDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormFieldDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormFieldDefinition;
  static deserializeBinaryFromReader(message: FormFieldDefinition, reader: jspb.BinaryReader): FormFieldDefinition;
}

export namespace FormFieldDefinition {
  export type AsObject = {
    guid: string,
    formdataentrytype: claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap[keyof claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap],
    isdataentrytypelocked: boolean,
    name: string,
    column?: claros_common_form_field_worksheet_column_UTC_pb.FormFieldWorksheetColumnUTC.AsObject,
    textrepeated?: claros_common_form_field_text_repeated_pb.FormFieldTextRepeated.AsObject,
  }

  export enum FielddefinitionCase {
    FIELDDEFINITION_NOT_SET = 0,
    COLUMN = 5,
    TEXTREPEATED = 6,
  }
}

