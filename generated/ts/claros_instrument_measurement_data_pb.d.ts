// package: claros.instrument.measurement
// file: claros_instrument_measurement_data.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_measurement_pb from "./claros_common_core_measurement_pb";
import * as claros_instrument_event_data_pb from "./claros_instrument_event_data_pb";
import * as claros_common_gis_gis_pb from "./claros_common_gis_gis_pb";

export class InstrumentMeasurementData extends jspb.Message {
  getInstrumentmeasurementid(): string;
  setInstrumentmeasurementid(value: string): void;

  getChannel(): number;
  setChannel(value: number): void;

  getFusionid(): string;
  setFusionid(value: string): void;

  hasMeasurement(): boolean;
  clearMeasurement(): void;
  getMeasurement(): claros_common_core_measurement_pb.Measurement | undefined;
  setMeasurement(value?: claros_common_core_measurement_pb.Measurement): void;

  hasSupportingmeasurements(): boolean;
  clearSupportingmeasurements(): void;
  getSupportingmeasurements(): InstrumentMeasurementData | undefined;
  setSupportingmeasurements(value?: InstrumentMeasurementData): void;

  hasGis(): boolean;
  clearGis(): void;
  getGis(): claros_common_gis_gis_pb.GIS | undefined;
  setGis(value?: claros_common_gis_gis_pb.GIS): void;

  getMeasurementdataextended(): string;
  setMeasurementdataextended(value: string): void;

  hasMeasurementevent(): boolean;
  clearMeasurementevent(): void;
  getMeasurementevent(): claros_instrument_event_data_pb.InstrumentEventData | undefined;
  setMeasurementevent(value?: claros_instrument_event_data_pb.InstrumentEventData): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentMeasurementData.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentMeasurementData): InstrumentMeasurementData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentMeasurementData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentMeasurementData;
  static deserializeBinaryFromReader(message: InstrumentMeasurementData, reader: jspb.BinaryReader): InstrumentMeasurementData;
}

export namespace InstrumentMeasurementData {
  export type AsObject = {
    instrumentmeasurementid: string,
    channel: number,
    fusionid: string,
    measurement?: claros_common_core_measurement_pb.Measurement.AsObject,
    supportingmeasurements?: InstrumentMeasurementData.AsObject,
    gis?: claros_common_gis_gis_pb.GIS.AsObject,
    measurementdataextended: string,
    measurementevent?: claros_instrument_event_data_pb.InstrumentEventData.AsObject,
  }
}

