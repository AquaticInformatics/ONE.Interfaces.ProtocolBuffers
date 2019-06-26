// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_definition.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_worksheet_column_pb from "./claros_operations_spreadsheet_worksheet_column_pb";
import * as claros_common_core_auditevent_pb from "./claros_common_core_auditevent_pb";

export class WorksheetDefinition extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): void;

  getStartrow(): number;
  setStartrow(value: number): void;

  getEndrow(): number;
  setEndrow(value: number): void;

  clearColumnsList(): void;
  getColumnsList(): Array<claros_operations_spreadsheet_worksheet_column_pb.Column>;
  setColumnsList(value: Array<claros_operations_spreadsheet_worksheet_column_pb.Column>): void;
  addColumns(value?: claros_operations_spreadsheet_worksheet_column_pb.Column, index?: number): claros_operations_spreadsheet_worksheet_column_pb.Column;

  hasAuditevent(): boolean;
  clearAuditevent(): void;
  getAuditevent(): claros_common_core_auditevent_pb.AuditEvent | undefined;
  setAuditevent(value?: claros_common_core_auditevent_pb.AuditEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorksheetDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: WorksheetDefinition): WorksheetDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorksheetDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorksheetDefinition;
  static deserializeBinaryFromReader(message: WorksheetDefinition, reader: jspb.BinaryReader): WorksheetDefinition;
}

export namespace WorksheetDefinition {
  export type AsObject = {
    version: number,
    startrow: number,
    endrow: number,
    columnsList: Array<claros_operations_spreadsheet_worksheet_column_pb.Column.AsObject>,
    auditevent?: claros_common_core_auditevent_pb.AuditEvent.AsObject,
  }
}

