// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_celldata.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_reportablequalifier_pb from "./claros_common_core_reportablequalifier_pb";
import * as claros_operations_spreadsheet_worksheet_celldata_binding_pb from "./claros_operations_spreadsheet_worksheet_celldata_binding_pb";
import * as claros_common_core_auditevent_pb from "./claros_common_core_auditevent_pb";

export class CellData extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getStringvalue(): string;
  setStringvalue(value: string): void;

  getIslocked(): boolean;
  setIslocked(value: boolean): void;

  getUnitid(): number;
  setUnitid(value: number): void;

  getJustification(): string;
  setJustification(value: string): void;

  hasReportablequalifier(): boolean;
  clearReportablequalifier(): void;
  getReportablequalifier(): claros_common_core_reportablequalifier_pb.ReportableQualifier | undefined;
  setReportablequalifier(value?: claros_common_core_reportablequalifier_pb.ReportableQualifier): void;

  clearCelldatabindingsList(): void;
  getCelldatabindingsList(): Array<claros_operations_spreadsheet_worksheet_celldata_binding_pb.CellDataBinding>;
  setCelldatabindingsList(value: Array<claros_operations_spreadsheet_worksheet_celldata_binding_pb.CellDataBinding>): void;
  addCelldatabindings(value?: claros_operations_spreadsheet_worksheet_celldata_binding_pb.CellDataBinding, index?: number): claros_operations_spreadsheet_worksheet_celldata_binding_pb.CellDataBinding;

  hasAuditevent(): boolean;
  clearAuditevent(): void;
  getAuditevent(): claros_common_core_auditevent_pb.AuditEvent | undefined;
  setAuditevent(value?: claros_common_core_auditevent_pb.AuditEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellData.AsObject;
  static toObject(includeInstance: boolean, msg: CellData): CellData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellData;
  static deserializeBinaryFromReader(message: CellData, reader: jspb.BinaryReader): CellData;
}

export namespace CellData {
  export type AsObject = {
    value: number,
    stringvalue: string,
    islocked: boolean,
    unitid: number,
    justification: string,
    reportablequalifier?: claros_common_core_reportablequalifier_pb.ReportableQualifier.AsObject,
    celldatabindingsList: Array<claros_operations_spreadsheet_worksheet_celldata_binding_pb.CellDataBinding.AsObject>,
    auditevent?: claros_common_core_auditevent_pb.AuditEvent.AsObject,
  }
}

