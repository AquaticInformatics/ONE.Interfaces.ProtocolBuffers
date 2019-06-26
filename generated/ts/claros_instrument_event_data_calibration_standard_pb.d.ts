// package: claros.instrument.event
// file: claros_instrument_event_data_calibration_standard.proto

import * as jspb from "google-protobuf";
import * as claros_instrument_event_data_calibration_value_pb from "./claros_instrument_event_data_calibration_value_pb";

export class EventDataCalibrationStandard extends jspb.Message {
  hasKnownvalue(): boolean;
  clearKnownvalue(): void;
  getKnownvalue(): claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue | undefined;
  setKnownvalue(value?: claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue): void;

  hasMeasuredvalue(): boolean;
  clearMeasuredvalue(): void;
  getMeasuredvalue(): claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue | undefined;
  setMeasuredvalue(value?: claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue): void;

  clearSecondaryvaluesList(): void;
  getSecondaryvaluesList(): Array<claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue>;
  setSecondaryvaluesList(value: Array<claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue>): void;
  addSecondaryvalues(value?: claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue, index?: number): claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDataCalibrationStandard.AsObject;
  static toObject(includeInstance: boolean, msg: EventDataCalibrationStandard): EventDataCalibrationStandard.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDataCalibrationStandard, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDataCalibrationStandard;
  static deserializeBinaryFromReader(message: EventDataCalibrationStandard, reader: jspb.BinaryReader): EventDataCalibrationStandard;
}

export namespace EventDataCalibrationStandard {
  export type AsObject = {
    knownvalue?: claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue.AsObject,
    measuredvalue?: claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue.AsObject,
    secondaryvaluesList: Array<claros_instrument_event_data_calibration_value_pb.EventDataCalibrationValue.AsObject>,
  }
}

