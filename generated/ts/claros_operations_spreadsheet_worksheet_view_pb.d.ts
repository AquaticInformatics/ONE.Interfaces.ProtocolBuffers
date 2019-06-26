// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_view.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_worksheet_type_pb from "./claros_operations_spreadsheet_worksheet_type_pb";

export class WorksheetView extends jspb.Message {
  getWorksheettype(): claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap];
  setWorksheettype(value: claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap]): void;

  getColumnmasksMap(): jspb.Map<number, string>;
  clearColumnmasksMap(): void;
  getLayout(): string;
  setLayout(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorksheetView.AsObject;
  static toObject(includeInstance: boolean, msg: WorksheetView): WorksheetView.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorksheetView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorksheetView;
  static deserializeBinaryFromReader(message: WorksheetView, reader: jspb.BinaryReader): WorksheetView;
}

export namespace WorksheetView {
  export type AsObject = {
    worksheettype: claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap[keyof claros_operations_spreadsheet_worksheet_type_pb.WorksheetTypeMap],
    columnmasksMap: Array<[number, string]>,
    layout: string,
  }
}

