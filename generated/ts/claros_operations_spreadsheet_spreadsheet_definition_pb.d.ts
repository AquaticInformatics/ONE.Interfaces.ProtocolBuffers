// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_spreadsheet_definition.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_timewindow_pb from "./claros_common_core_timewindow_pb";
import * as claros_common_core_timezone_pb from "./claros_common_core_timezone_pb";

export class SpreadsheetDefinition extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  hasTimewindow(): boolean;
  clearTimewindow(): void;
  getTimewindow(): claros_common_core_timewindow_pb.TimeWindow | undefined;
  setTimewindow(value?: claros_common_core_timewindow_pb.TimeWindow): void;

  getTimezone(): claros_common_core_timezone_pb.TimeZoneMap[keyof claros_common_core_timezone_pb.TimeZoneMap];
  setTimezone(value: claros_common_core_timezone_pb.TimeZoneMap[keyof claros_common_core_timezone_pb.TimeZoneMap]): void;

  getTimewindowoffset(): number;
  setTimewindowoffset(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpreadsheetDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: SpreadsheetDefinition): SpreadsheetDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SpreadsheetDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpreadsheetDefinition;
  static deserializeBinaryFromReader(message: SpreadsheetDefinition, reader: jspb.BinaryReader): SpreadsheetDefinition;
}

export namespace SpreadsheetDefinition {
  export type AsObject = {
    version: string,
    timewindow?: claros_common_core_timewindow_pb.TimeWindow.AsObject,
    timezone: claros_common_core_timezone_pb.TimeZoneMap[keyof claros_common_core_timezone_pb.TimeZoneMap],
    timewindowoffset: number,
  }
}

