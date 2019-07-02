// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_row.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_timewindow_pb from "./claros_common_core_timewindow_pb";
import * as claros_operations_spreadsheet_worksheet_cell_pb from "./claros_operations_spreadsheet_worksheet_cell_pb";

export class Row extends jspb.Message {
  getRownumber(): number;
  setRownumber(value: number): void;

  hasUtctimewindow(): boolean;
  clearUtctimewindow(): void;
  getUtctimewindow(): claros_common_core_timewindow_pb.TimeWindow | undefined;
  setUtctimewindow(value?: claros_common_core_timewindow_pb.TimeWindow): void;

  clearCellsList(): void;
  getCellsList(): Array<claros_operations_spreadsheet_worksheet_cell_pb.Cell>;
  setCellsList(value: Array<claros_operations_spreadsheet_worksheet_cell_pb.Cell>): void;
  addCells(value?: claros_operations_spreadsheet_worksheet_cell_pb.Cell, index?: number): claros_operations_spreadsheet_worksheet_cell_pb.Cell;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Row.AsObject;
  static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Row;
  static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
  export type AsObject = {
    rownumber: number,
    utctimewindow?: claros_common_core_timewindow_pb.TimeWindow.AsObject,
    cellsList: Array<claros_operations_spreadsheet_worksheet_cell_pb.Cell.AsObject>,
  }
}

