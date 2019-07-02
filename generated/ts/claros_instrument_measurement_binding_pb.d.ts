// package: claros.instrument.measurement
// file: claros_instrument_measurement_binding.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_aggregate_type_pb from "./claros_common_core_aggregate_type_pb";

export class InstrumentMeasurementBinding extends jspb.Message {
  getInstrumentmeasurementid(): string;
  setInstrumentmeasurementid(value: string): void;

  getAggregatetype(): claros_common_core_aggregate_type_pb.AggregateTypeMap[keyof claros_common_core_aggregate_type_pb.AggregateTypeMap];
  setAggregatetype(value: claros_common_core_aggregate_type_pb.AggregateTypeMap[keyof claros_common_core_aggregate_type_pb.AggregateTypeMap]): void;

  getUnitid(): number;
  setUnitid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentMeasurementBinding.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentMeasurementBinding): InstrumentMeasurementBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentMeasurementBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentMeasurementBinding;
  static deserializeBinaryFromReader(message: InstrumentMeasurementBinding, reader: jspb.BinaryReader): InstrumentMeasurementBinding;
}

export namespace InstrumentMeasurementBinding {
  export type AsObject = {
    instrumentmeasurementid: string,
    aggregatetype: claros_common_core_aggregate_type_pb.AggregateTypeMap[keyof claros_common_core_aggregate_type_pb.AggregateTypeMap],
    unitid: number,
  }
}

