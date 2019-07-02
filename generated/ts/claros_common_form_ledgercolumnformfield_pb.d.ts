// package: claros.common.form
// file: claros_common_form_ledgercolumnformfield.proto

import * as jspb from "google-protobuf";
import * as claros_common_recurrence_recurrence_pb from "./claros_common_recurrence_recurrence_pb";

export class LedgerColumnFormField extends jspb.Message {
  getLedgercolumnguid(): string;
  setLedgercolumnguid(value: string): void;

  getUnit(): string;
  setUnit(value: string): void;

  getUplimit(): string;
  setUplimit(value: string): void;

  getLowlimit(): string;
  setLowlimit(value: string): void;

  hasTimewindow(): boolean;
  clearTimewindow(): void;
  getTimewindow(): claros_common_recurrence_recurrence_pb.Recurrence | undefined;
  setTimewindow(value?: claros_common_recurrence_recurrence_pb.Recurrence): void;

  getParameter(): string;
  setParameter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerColumnFormField.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerColumnFormField): LedgerColumnFormField.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LedgerColumnFormField, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerColumnFormField;
  static deserializeBinaryFromReader(message: LedgerColumnFormField, reader: jspb.BinaryReader): LedgerColumnFormField;
}

export namespace LedgerColumnFormField {
  export type AsObject = {
    ledgercolumnguid: string,
    unit: string,
    uplimit: string,
    lowlimit: string,
    timewindow?: claros_common_recurrence_recurrence_pb.Recurrence.AsObject,
    parameter: string,
  }
}

