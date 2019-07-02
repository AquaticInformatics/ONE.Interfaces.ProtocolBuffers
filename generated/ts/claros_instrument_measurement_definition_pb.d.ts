// package: claros.instrument.measurement
// file: claros_instrument_measurement_definition.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";
import * as claros_instrument_measurement_milliamp_binding_pb from "./claros_instrument_measurement_milliamp_binding_pb";
import * as claros_instrument_measurement_scsensor_binding_pb from "./claros_instrument_measurement_scsensor_binding_pb";
import * as claros_common_core_limit_pb from "./claros_common_core_limit_pb";

export class InstrumentMeasurementDefinition extends jspb.Message {
  getInstrumentmeasurementid(): string;
  setInstrumentmeasurementid(value: string): void;

  getName(): string;
  setName(value: string): void;

  getFusionid(): string;
  setFusionid(value: string): void;

  getLocationid(): string;
  setLocationid(value: string): void;

  getParameterid(): number;
  setParameterid(value: number): void;

  getDisplayunitid(): number;
  setDisplayunitid(value: number): void;

  getIsvisible(): boolean;
  setIsvisible(value: boolean): void;

  hasScsensorbinding(): boolean;
  clearScsensorbinding(): void;
  getScsensorbinding(): claros_instrument_measurement_scsensor_binding_pb.SCSensorBinding | undefined;
  setScsensorbinding(value?: claros_instrument_measurement_scsensor_binding_pb.SCSensorBinding): void;

  hasMilliampbinding(): boolean;
  clearMilliampbinding(): void;
  getMilliampbinding(): claros_instrument_measurement_milliamp_binding_pb.MilliAmpBinding | undefined;
  setMilliampbinding(value?: claros_instrument_measurement_milliamp_binding_pb.MilliAmpBinding): void;

  clearLimitsList(): void;
  getLimitsList(): Array<claros_common_core_limit_pb.Limit>;
  setLimitsList(value: Array<claros_common_core_limit_pb.Limit>): void;
  addLimits(value?: claros_common_core_limit_pb.Limit, index?: number): claros_common_core_limit_pb.Limit;

  getCreatedbyid(): string;
  setCreatedbyid(value: string): void;

  hasCreatedon(): boolean;
  clearCreatedon(): void;
  getCreatedon(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setCreatedon(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getModifiedbyid(): string;
  setModifiedbyid(value: string): void;

  hasModifiedon(): boolean;
  clearModifiedon(): void;
  getModifiedon(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setModifiedon(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getBindingCase(): InstrumentMeasurementDefinition.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentMeasurementDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentMeasurementDefinition): InstrumentMeasurementDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentMeasurementDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentMeasurementDefinition;
  static deserializeBinaryFromReader(message: InstrumentMeasurementDefinition, reader: jspb.BinaryReader): InstrumentMeasurementDefinition;
}

export namespace InstrumentMeasurementDefinition {
  export type AsObject = {
    instrumentmeasurementid: string,
    name: string,
    fusionid: string,
    locationid: string,
    parameterid: number,
    displayunitid: number,
    isvisible: boolean,
    scsensorbinding?: claros_instrument_measurement_scsensor_binding_pb.SCSensorBinding.AsObject,
    milliampbinding?: claros_instrument_measurement_milliamp_binding_pb.MilliAmpBinding.AsObject,
    limitsList: Array<claros_common_core_limit_pb.Limit.AsObject>,
    createdbyid: string,
    createdon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    modifiedbyid: string,
    modifiedon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    SCSENSORBINDING = 8,
    MILLIAMPBINDING = 9,
  }
}

