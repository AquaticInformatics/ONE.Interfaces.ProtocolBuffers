// package: claros.common.report
// file: claros_common_report_report_data.proto

import * as jspb from "google-protobuf";
import * as claros_operations_spreadsheet_spreadsheet_pb from "./claros_operations_spreadsheet_spreadsheet_pb";

export class ReportData extends jspb.Message {
  hasSpreadsheet(): boolean;
  clearSpreadsheet(): void;
  getSpreadsheet(): claros_operations_spreadsheet_spreadsheet_pb.Spreadsheet | undefined;
  setSpreadsheet(value?: claros_operations_spreadsheet_spreadsheet_pb.Spreadsheet): void;

  getReportdatasetCase(): ReportData.ReportdatasetCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportData.AsObject;
  static toObject(includeInstance: boolean, msg: ReportData): ReportData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportData;
  static deserializeBinaryFromReader(message: ReportData, reader: jspb.BinaryReader): ReportData;
}

export namespace ReportData {
  export type AsObject = {
    spreadsheet?: claros_operations_spreadsheet_spreadsheet_pb.Spreadsheet.AsObject,
  }

  export enum ReportdatasetCase {
    REPORTDATASET_NOT_SET = 0,
    SPREADSHEET = 1,
  }
}

