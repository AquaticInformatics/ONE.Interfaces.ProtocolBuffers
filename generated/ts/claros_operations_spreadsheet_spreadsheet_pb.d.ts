// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_spreadsheet.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_spreadsheet_definition_pb from "./claros_operations_spreadsheet_spreadsheet_definition_pb";
import * as claros_operations_spreadsheet_worksheet_pb from "./claros_operations_spreadsheet_worksheet_pb";

export class Spreadsheet extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocationid(): string;
  setLocationid(value: string): void;

  clearTimedefinitionList(): void;
  getTimedefinitionList(): Array<claros_operations_spreadsheet_spreadsheet_definition_pb.SpreadsheetDefinition>;
  setTimedefinitionList(value: Array<claros_operations_spreadsheet_spreadsheet_definition_pb.SpreadsheetDefinition>): void;
  addTimedefinition(value?: claros_operations_spreadsheet_spreadsheet_definition_pb.SpreadsheetDefinition, index?: number): claros_operations_spreadsheet_spreadsheet_definition_pb.SpreadsheetDefinition;

  clearWorksheetList(): void;
  getWorksheetList(): Array<claros_operations_spreadsheet_worksheet_pb.Worksheet>;
  setWorksheetList(value: Array<claros_operations_spreadsheet_worksheet_pb.Worksheet>): void;
  addWorksheet(value?: claros_operations_spreadsheet_worksheet_pb.Worksheet, index?: number): claros_operations_spreadsheet_worksheet_pb.Worksheet;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spreadsheet.AsObject;
  static toObject(includeInstance: boolean, msg: Spreadsheet): Spreadsheet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Spreadsheet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spreadsheet;
  static deserializeBinaryFromReader(message: Spreadsheet, reader: jspb.BinaryReader): Spreadsheet;
}

export namespace Spreadsheet {
  export type AsObject = {
    name: string,
    locationid: string,
    timedefinitionList: Array<claros_operations_spreadsheet_spreadsheet_definition_pb.SpreadsheetDefinition.AsObject>,
    worksheetList: Array<claros_operations_spreadsheet_worksheet_pb.Worksheet.AsObject>,
  }
}

