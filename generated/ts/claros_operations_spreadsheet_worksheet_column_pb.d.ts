// package: claros.operations.spreadsheet
// file: claros_operations_spreadsheet_worksheet_column.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_datasource_type_pb from "./claros_common_core_datasource_type_pb";
import * as claros_common_core_limit_pb from "./claros_common_core_limit_pb";
import * as claros_instrument_measurement_binding_pb from "./claros_instrument_measurement_binding_pb";
import * as claros_common_computation_binding_pb from "./claros_common_computation_binding_pb";
import * as claros_common_core_reportablequalifierdefinition_pb from "./claros_common_core_reportablequalifierdefinition_pb";

export class Column extends jspb.Message {
  getColumnnumber(): number;
  setColumnnumber(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getParameterid(): number;
  setParameterid(value: number): void;

  getDisplayunitid(): number;
  setDisplayunitid(value: number): void;

  getLocationid(): string;
  setLocationid(value: string): void;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  clearLimitsList(): void;
  getLimitsList(): Array<claros_common_core_limit_pb.Limit>;
  setLimitsList(value: Array<claros_common_core_limit_pb.Limit>): void;
  addLimits(value?: claros_common_core_limit_pb.Limit, index?: number): claros_common_core_limit_pb.Limit;

  getDatasourcetype(): claros_common_core_datasource_type_pb.DataSourceTypeMap[keyof claros_common_core_datasource_type_pb.DataSourceTypeMap];
  setDatasourcetype(value: claros_common_core_datasource_type_pb.DataSourceTypeMap[keyof claros_common_core_datasource_type_pb.DataSourceTypeMap]): void;

  hasInstrumentmeasurementbinding(): boolean;
  clearInstrumentmeasurementbinding(): void;
  getInstrumentmeasurementbinding(): claros_instrument_measurement_binding_pb.InstrumentMeasurementBinding | undefined;
  setInstrumentmeasurementbinding(value?: claros_instrument_measurement_binding_pb.InstrumentMeasurementBinding): void;

  hasComputationbinding(): boolean;
  clearComputationbinding(): void;
  getComputationbinding(): claros_common_computation_binding_pb.ComputationBinding | undefined;
  setComputationbinding(value?: claros_common_computation_binding_pb.ComputationBinding): void;

  clearReportablequaliferdefinitionList(): void;
  getReportablequaliferdefinitionList(): Array<claros_common_core_reportablequalifierdefinition_pb.ReportableQualifierDefinition>;
  setReportablequaliferdefinitionList(value: Array<claros_common_core_reportablequalifierdefinition_pb.ReportableQualifierDefinition>): void;
  addReportablequaliferdefinition(value?: claros_common_core_reportablequalifierdefinition_pb.ReportableQualifierDefinition, index?: number): claros_common_core_reportablequalifierdefinition_pb.ReportableQualifierDefinition;

  getBindingCase(): Column.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    columnnumber: number,
    name: string,
    description: string,
    parameterid: number,
    displayunitid: number,
    locationid: string,
    isactive: boolean,
    limitsList: Array<claros_common_core_limit_pb.Limit.AsObject>,
    datasourcetype: claros_common_core_datasource_type_pb.DataSourceTypeMap[keyof claros_common_core_datasource_type_pb.DataSourceTypeMap],
    instrumentmeasurementbinding?: claros_instrument_measurement_binding_pb.InstrumentMeasurementBinding.AsObject,
    computationbinding?: claros_common_computation_binding_pb.ComputationBinding.AsObject,
    reportablequaliferdefinitionList: Array<claros_common_core_reportablequalifierdefinition_pb.ReportableQualifierDefinition.AsObject>,
  }

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    INSTRUMENTMEASUREMENTBINDING = 10,
    COMPUTATIONBINDING = 11,
  }
}

