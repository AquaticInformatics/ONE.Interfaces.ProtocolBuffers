// package: claros.instrument
// file: claros_instrument_data.proto

import * as jspb from "google-protobuf";
import * as claros_instrument_event_data_pb from "./claros_instrument_event_data_pb";
import * as claros_instrument_measurement_data_pb from "./claros_instrument_measurement_data_pb";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class InstrumentData extends jspb.Message {
  getTenantid(): string;
  setTenantid(value: string): void;

  getFusionid(): string;
  setFusionid(value: string): void;

  hasEvents(): boolean;
  clearEvents(): void;
  getEvents(): claros_instrument_event_data_pb.InstrumentEventData | undefined;
  setEvents(value?: claros_instrument_event_data_pb.InstrumentEventData): void;

  clearMeasurementsList(): void;
  getMeasurementsList(): Array<claros_instrument_measurement_data_pb.InstrumentMeasurementData>;
  setMeasurementsList(value: Array<claros_instrument_measurement_data_pb.InstrumentMeasurementData>): void;
  addMeasurements(value?: claros_instrument_measurement_data_pb.InstrumentMeasurementData, index?: number): claros_instrument_measurement_data_pb.InstrumentMeasurementData;

  getSettingsMap(): jspb.Map<string, string>;
  clearSettingsMap(): void;
  getStatesMap(): jspb.Map<string, string>;
  clearStatesMap(): void;
  hasInstrumentdatadatetime(): boolean;
  clearInstrumentdatadatetime(): void;
  getInstrumentdatadatetime(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setInstrumentdatadatetime(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentData.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentData): InstrumentData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentData;
  static deserializeBinaryFromReader(message: InstrumentData, reader: jspb.BinaryReader): InstrumentData;
}

export namespace InstrumentData {
  export type AsObject = {
    tenantid: string,
    fusionid: string,
    events?: claros_instrument_event_data_pb.InstrumentEventData.AsObject,
    measurementsList: Array<claros_instrument_measurement_data_pb.InstrumentMeasurementData.AsObject>,
    settingsMap: Array<[string, string]>,
    statesMap: Array<[string, string]>,
    instrumentdatadatetime?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

