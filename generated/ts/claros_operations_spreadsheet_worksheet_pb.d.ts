// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_worksheet_type_pb from "./claros_operations_spreadsheet_worksheet_type_pb";
import * as claros_operations_spreadsheet_worksheet_definition_pb from "./claros_operations_spreadsheet_worksheet_definition_pb";
import * as claros_operations_spreadsheet_worksheet_row_pb from "./claros_operations_spreadsheet_worksheet_row_pb";

export class Worksheet extends jspb.Message {
  getWorksheettype(): claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap];
  setWorksheettype(value: claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap]): void;

  clearWorksheetdefinitionsList(): void;
  getWorksheetdefinitionsList(): Array<claros_operations_spreadsheet_worksheet_definition_pb.WorksheetDefinition>;
  setWorksheetdefinitionsList(value: Array<claros_operations_spreadsheet_worksheet_definition_pb.WorksheetDefinition>): void;
  addWorksheetdefinitions(value?: claros_operations_spreadsheet_worksheet_definition_pb.WorksheetDefinition, index?: number): claros_operations_spreadsheet_worksheet_definition_pb.WorksheetDefinition;

  clearRowsList(): void;
  getRowsList(): Array<claros_operations_spreadsheet_worksheet_row_pb.Row>;
  setRowsList(value: Array<claros_operations_spreadsheet_worksheet_row_pb.Row>): void;
  addRows(value?: claros_operations_spreadsheet_worksheet_row_pb.Row, index?: number): claros_operations_spreadsheet_worksheet_row_pb.Row;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Worksheet.AsObject;
  static toObject(includeInstance: boolean, msg: Worksheet): Worksheet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Worksheet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Worksheet;
  static deserializeBinaryFromReader(message: Worksheet, reader: jspb.BinaryReader): Worksheet;
}

export namespace Worksheet {
  export type AsObject = {
    worksheettype: claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap],
    worksheetdefinitionsList: Array<claros_operations_spreadsheet_worksheet_definition_pb.WorksheetDefinition.AsObject>,
    rowsList: Array<claros_operations_spreadsheet_worksheet_row_pb.Row.AsObject>,
  }
}

