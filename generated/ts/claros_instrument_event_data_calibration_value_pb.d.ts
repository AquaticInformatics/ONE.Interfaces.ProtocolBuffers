// package: claros.instrument.event
// file: claros_instrument_event_data_calibration_value.proto

import * as jspb from "google-protobuf";

export class EventDataCalibrationValue extends jspb.Message {
  getValue(): number;
  setValue(value: number): void;

  getUnit(): number;
  setUnit(value: number): void;

  getChemicalform(): number;
  setChemicalform(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDataCalibrationValue.AsObject;
  static toObject(includeInstance: boolean, msg: EventDataCalibrationValue): EventDataCalibrationValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDataCalibrationValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDataCalibrationValue;
  static deserializeBinaryFromReader(message: EventDataCalibrationValue, reader: jspb.BinaryReader): EventDataCalibrationValue;
}

export namespace EventDataCalibrationValue {
  export type AsObject = {
    value: number,
    unit: number,
    chemicalform: number,
  }
}

