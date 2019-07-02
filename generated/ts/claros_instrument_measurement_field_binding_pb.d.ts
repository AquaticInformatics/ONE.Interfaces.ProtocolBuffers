// package: claros.instrument.measurement
// file: claros_instrument_measurement_field_binding.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class InstrumentMeasurementFieldBinding extends jspb.Message {
  getInstrumentmeasurementid(): string;
  setInstrumentmeasurementid(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setTimestamp(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getUnitid(): number;
  setUnitid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentMeasurementFieldBinding.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentMeasurementFieldBinding): InstrumentMeasurementFieldBinding.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentMeasurementFieldBinding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentMeasurementFieldBinding;
  static deserializeBinaryFromReader(message: InstrumentMeasurementFieldBinding, reader: jspb.BinaryReader): InstrumentMeasurementFieldBinding;
}

export namespace InstrumentMeasurementFieldBinding {
  export type AsObject = {
    instrumentmeasurementid: string,
    timestamp?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    unitid: number,
  }
}

