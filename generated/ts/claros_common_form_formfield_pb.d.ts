// package: claros.common.form
// file: claros_common_form_formfield.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_formdataentry_type_pb from "./claros_common_form_formdataentry_type_pb";
import * as claros_operations_spreadsheet_worksheet_cell_pb from "./claros_operations_spreadsheet_worksheet_cell_pb";
import * as claros_instrument_data_pb from "./claros_instrument_data_pb";

export class FormField extends jspb.Message {
  getGuid(): string;
  setGuid(value: string): void;

  getFormfielddefinitionid(): string;
  setFormfielddefinitionid(value: string): void;

  getFormdataentrytype(): claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap[keyof claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap];
  setFormdataentrytype(value: claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap[keyof claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap]): void;

  getIsdataentrytypelocked(): boolean;
  setIsdataentrytypelocked(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  hasCell(): boolean;
  clearCell(): void;
  getCell(): claros_operations_spreadsheet_worksheet_cell_pb.Cell | undefined;
  setCell(value?: claros_operations_spreadsheet_worksheet_cell_pb.Cell): void;

  clearInstrumentdataList(): void;
  getInstrumentdataList(): Array<claros_instrument_data_pb.InstrumentData>;
  setInstrumentdataList(value: Array<claros_instrument_data_pb.InstrumentData>): void;
  addInstrumentdata(value?: claros_instrument_data_pb.InstrumentData, index?: number): claros_instrument_data_pb.InstrumentData;

  getFormfielddataCase(): FormField.FormfielddataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormField.AsObject;
  static toObject(includeInstance: boolean, msg: FormField): FormField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormField;
  static deserializeBinaryFromReader(message: FormField, reader: jspb.BinaryReader): FormField;
}

export namespace FormField {
  export type AsObject = {
    guid: string,
    formfielddefinitionid: string,
    formdataentrytype: claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap[keyof claros_common_form_formdataentry_type_pb.FormDataEntryTypeMap],
    isdataentrytypelocked: boolean,
    name: string,
    cell?: claros_operations_spreadsheet_worksheet_cell_pb.Cell.AsObject,
    instrumentdataList: Array<claros_instrument_data_pb.InstrumentData.AsObject>,
  }

  export enum FormfielddataCase {
    FORMFIELDDATA_NOT_SET = 0,
    CELL = 6,
  }
}

