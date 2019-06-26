// package: claros.instrument.event
// file: claros_instrument_event_data_calibration.proto

import * as jspb from "google-protobuf";
import * as claros_instrument_event_data_calibration_standard_pb from "./claros_instrument_event_data_calibration_standard_pb";

export class EventDataCalibration extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getTime(): number;
  setTime(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getOffsetunits(): number;
  setOffsetunits(value: number): void;

  getSlopeunits(): number;
  setSlopeunits(value: number): void;

  getSlope(): number;
  setSlope(value: number): void;

  getSlopeaux(): number;
  setSlopeaux(value: number): void;

  getOffset(): number;
  setOffset(value: number): void;

  getR2(): number;
  setR2(value: number): void;

  clearCalibrationstandardsList(): void;
  getCalibrationstandardsList(): Array<claros_instrument_event_data_calibration_standard_pb.EventDataCalibrationStandard>;
  setCalibrationstandardsList(value: Array<claros_instrument_event_data_calibration_standard_pb.EventDataCalibrationStandard>): void;
  addCalibrationstandards(value?: claros_instrument_event_data_calibration_standard_pb.EventDataCalibrationStandard, index?: number): claros_instrument_event_data_calibration_standard_pb.EventDataCalibrationStandard;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDataCalibration.AsObject;
  static toObject(includeInstance: boolean, msg: EventDataCalibration): EventDataCalibration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDataCalibration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDataCalibration;
  static deserializeBinaryFromReader(message: EventDataCalibration, reader: jspb.BinaryReader): EventDataCalibration;
}

export namespace EventDataCalibration {
  export type AsObject = {
    id: string,
    userid: string,
    time: number,
    status: number,
    offsetunits: number,
    slopeunits: number,
    slope: number,
    slopeaux: number,
    offset: number,
    r2: number,
    calibrationstandardsList: Array<claros_instrument_event_data_calibration_standard_pb.EventDataCalibrationStandard.AsObject>,
  }
}

