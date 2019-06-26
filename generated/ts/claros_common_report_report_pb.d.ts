// package: claros.common.report
// file: claros_common_report_report.proto

import * as jspb from "google-protobuf";
import * as claros_common_report_report_data_pb from "./claros_common_report_report_data_pb";

export class Report extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  clearReportdataList(): void;
  getReportdataList(): Array<claros_common_report_report_data_pb.ReportData>;
  setReportdataList(value: Array<claros_common_report_report_data_pb.ReportData>): void;
  addReportdata(value?: claros_common_report_report_data_pb.ReportData, index?: number): claros_common_report_report_data_pb.ReportData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Report.AsObject;
  static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Report;
  static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
  export type AsObject = {
    id: string,
    name: string,
    reportdataList: Array<claros_common_report_report_data_pb.ReportData.AsObject>,
  }
}

