// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_celldata_binding.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_binding_pb from "./claros_common_form_binding_pb";
import * as claros_common_computation_binding_pb from "./claros_common_computation_binding_pb";
import * as claros_instrument_measurement_binding_pb from "./claros_instrument_measurement_binding_pb";
import * as claros_instrument_measurement_field_binding_pb from "./claros_instrument_measurement_field_binding_pb";
import * as claros_operations_spreadsheet_binding_pb from "./claros_operations_spreadsheet_binding_pb";

export class CellDataBinding extends jspb.Message {
  hasInstrumentmeasurementbinding(): boolean;
  clearInstrumentmeasurementbinding(): void;
  getInstrumentmeasurementbinding(): claros_instrument_measurement_binding_pb.InstrumentMeasurementBinding | undefined;
  setInstrumentmeasurementbinding(value?: claros_instrument_measurement_binding_pb.InstrumentMeasurementBinding): void;

  hasComputationbinding(): boolean;
  clearComputationbinding(): void;
  getComputationbinding(): claros_common_computation_binding_pb.ComputationBinding | undefined;
  setComputationbinding(value?: claros_common_computation_binding_pb.ComputationBinding): void;

  hasFormbinding(): boolean;
  clearFormbinding(): void;
  getFormbinding(): claros_common_form_binding_pb.FormBinding | undefined;
  setFormbinding(value?: claros_common_form_binding_pb.FormBinding): void;

  hasSpreadsheetbinding(): boolean;
  clearSpreadsheetbinding(): void;
  getSpreadsheetbinding(): claros_operations_spreadsheet_binding_pb.SpreadsheetBinding | undefined;
  setSpreadsheetbinding(value?: claros_operations_spreadsheet_binding_pb.SpreadsheetBinding): void;

  hasFieldinstrumentmeasurementbinding(): boolean;
  clearFieldinstrumentmeasurementbinding(): void;
  getFieldinstrumentmeasurementbinding(): claros_instrument_measurement_field_binding_pb.InstrumentMeasurementFieldBinding | undefined;
  setFieldinstrumentmeasurementbinding(value?: claros_instrument_measurement_field_binding_pb.InstrumentMeasurementFieldBinding): void;

  getBindingCase(): CellDataBinding.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CellDataBinding.AsObject;
  static toObject(includeInstance: boolean, msg: CellDataBinding): CellDataBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CellDataBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CellDataBinding;
  static deserializeBinaryFromReader(message: CellDataBinding, reader: jspb.BinaryReader): CellDataBinding;
}

export namespace CellDataBinding {
  export type AsObject = {
    instrumentmeasurementbinding?: claros_instrument_measurement_binding_pb.InstrumentMeasurementBinding.AsObject,
    computationbinding?: claros_common_computation_binding_pb.ComputationBinding.AsObject,
    formbinding?: claros_common_form_binding_pb.FormBinding.AsObject,
    spreadsheetbinding?: claros_operations_spreadsheet_binding_pb.SpreadsheetBinding.AsObject,
    fieldinstrumentmeasurementbinding?: claros_instrument_measurement_field_binding_pb.InstrumentMeasurementFieldBinding.AsObject,
  }

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    INSTRUMENTMEASUREMENTBINDING = 1,
    COMPUTATIONBINDING = 2,
    FORMBINDING = 3,
    SPREADSHEETBINDING = 4,
    FIELDINSTRUMENTMEASUREMENTBINDING = 5,
  }
}

