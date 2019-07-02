// package: claros.common.form
// file: claros_common_form_formfield_data.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_worksheet_cell_pb from "./claros_operations_spreadsheet_worksheet_cell_pb";
import * as claros_instrument_data_pb from "./claros_instrument_data_pb";
import * as claros_common_core_auditevent_pb from "./claros_common_core_auditevent_pb";

export class FormFieldData extends jspb.Message {
  hasCell(): boolean;
  clearCell(): void;
  getCell(): claros_operations_spreadsheet_worksheet_cell_pb.Cell | undefined;
  setCell(value?: claros_operations_spreadsheet_worksheet_cell_pb.Cell): void;

  hasInstrumentdata(): boolean;
  clearInstrumentdata(): void;
  getInstrumentdata(): claros_instrument_data_pb.InstrumentData | undefined;
  setInstrumentdata(value?: claros_instrument_data_pb.InstrumentData): void;

  hasAuditevent(): boolean;
  clearAuditevent(): void;
  getAuditevent(): claros_common_core_auditevent_pb.AuditEvent | undefined;
  setAuditevent(value?: claros_common_core_auditevent_pb.AuditEvent): void;

  getFielddatabindingCase(): FormFieldData.FielddatabindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormFieldData.AsObject;
  static toObject(includeInstance: boolean, msg: FormFieldData): FormFieldData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormFieldData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormFieldData;
  static deserializeBinaryFromReader(message: FormFieldData, reader: jspb.BinaryReader): FormFieldData;
}

export namespace FormFieldData {
  export type AsObject = {
    cell?: claros_operations_spreadsheet_worksheet_cell_pb.Cell.AsObject,
    instrumentdata?: claros_instrument_data_pb.InstrumentData.AsObject,
    auditevent?: claros_common_core_auditevent_pb.AuditEvent.AsObject,
  }

  export enum FielddatabindingCase {
    FIELDDATABINDING_NOT_SET = 0,
    CELL = 1,
  }
}

