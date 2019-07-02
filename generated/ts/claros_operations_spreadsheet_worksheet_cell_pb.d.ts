// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_cell.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_note_pb from "./claros_common_core_note_pb";
import * as claros_operations_spreadsheet_worksheet_celldata_pb from "./claros_operations_spreadsheet_worksheet_celldata_pb";

export class Cell extends jspb.Message {
  getColumnid(): number;
  setColumnid(value: number): void;

  clearNotesList(): void;
  getNotesList(): Array<claros_common_core_note_pb.Note>;
  setNotesList(value: Array<claros_common_core_note_pb.Note>): void;
  addNotes(value?: claros_common_core_note_pb.Note, index?: number): claros_common_core_note_pb.Note;

  clearCelldataList(): void;
  getCelldataList(): Array<claros_operations_spreadsheet_worksheet_celldata_pb.CellData>;
  setCelldataList(value: Array<claros_operations_spreadsheet_worksheet_celldata_pb.CellData>): void;
  addCelldata(value?: claros_operations_spreadsheet_worksheet_celldata_pb.CellData, index?: number): claros_operations_spreadsheet_worksheet_celldata_pb.CellData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cell.AsObject;
  static toObject(includeInstance: boolean, msg: Cell): Cell.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Cell, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cell;
  static deserializeBinaryFromReader(message: Cell, reader: jspb.BinaryReader): Cell;
}

export namespace Cell {
  export type AsObject = {
    columnid: number,
    notesList: Array<claros_common_core_note_pb.Note.AsObject>,
    celldataList: Array<claros_operations_spreadsheet_worksheet_celldata_pb.CellData.AsObject>,
  }
}

