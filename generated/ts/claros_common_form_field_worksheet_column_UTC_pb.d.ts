// package: claros.common.form
// file: claros_common_form_field_worksheet_column_UTC.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_worksheet_column_pb from "./claros_operations_spreadsheet_worksheet_column_pb";
import * as claros_operations_spreadsheet_worksheet_type_pb from "./claros_operations_spreadsheet_worksheet_type_pb";

export class FormFieldWorksheetColumnUTC extends jspb.Message {
  getPlantid(): string;
  setPlantid(value: string): void;

  getWorksheettype(): claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap];
  setWorksheettype(value: claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap]): void;

  hasColumn(): boolean;
  clearColumn(): void;
  getColumn(): claros_operations_spreadsheet_worksheet_column_pb.Column | undefined;
  setColumn(value?: claros_operations_spreadsheet_worksheet_column_pb.Column): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormFieldWorksheetColumnUTC.AsObject;
  static toObject(includeInstance: boolean, msg: FormFieldWorksheetColumnUTC): FormFieldWorksheetColumnUTC.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormFieldWorksheetColumnUTC, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormFieldWorksheetColumnUTC;
  static deserializeBinaryFromReader(message: FormFieldWorksheetColumnUTC, reader: jspb.BinaryReader): FormFieldWorksheetColumnUTC;
}

export namespace FormFieldWorksheetColumnUTC {
  export type AsObject = {
    plantid: string,
    worksheettype: claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap],
    column?: claros_operations_spreadsheet_worksheet_column_pb.Column.AsObject,
  }
}

