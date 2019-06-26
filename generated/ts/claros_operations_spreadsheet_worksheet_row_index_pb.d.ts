// package: claros.common.form
// file: claros_operations_spreadsheet_worksheet_row_index.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_timewindow_pb from "./claros_common_core_timewindow_pb";

export class WorksheetIndex extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getWorksheetversion(): number;
  setWorksheetversion(value: number): void;

  hasTimewindow(): boolean;
  clearTimewindow(): void;
  getTimewindow(): claros_common_core_timewindow_pb.TimeWindow | undefined;
  setTimewindow(value?: claros_common_core_timewindow_pb.TimeWindow): void;

  hasUtctimewindows(): boolean;
  clearUtctimewindows(): void;
  getUtctimewindows(): claros_common_core_timewindow_pb.TimeWindow | undefined;
  setUtctimewindows(value?: claros_common_core_timewindow_pb.TimeWindow): void;

  getIsinspeed(): boolean;
  setIsinspeed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorksheetIndex.AsObject;
  static toObject(includeInstance: boolean, msg: WorksheetIndex): WorksheetIndex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WorksheetIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorksheetIndex;
  static deserializeBinaryFromReader(message: WorksheetIndex, reader: jspb.BinaryReader): WorksheetIndex;
}

export namespace WorksheetIndex {
  export type AsObject = {
    id: string,
    worksheetversion: number,
    timewindow?: claros_common_core_timewindow_pb.TimeWindow.AsObject,
    utctimewindows?: claros_common_core_timewindow_pb.TimeWindow.AsObject,
    isinspeed: boolean,
  }
}

