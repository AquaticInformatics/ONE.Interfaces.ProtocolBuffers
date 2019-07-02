// package: claros.instrument.event
// file: claros_instrument_event_data.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";
import * as claros_instrument_event_data_metadata_pb from "./claros_instrument_event_data_metadata_pb";
import * as claros_instrument_event_data_calibration_pb from "./claros_instrument_event_data_calibration_pb";
import * as claros_instrument_event_data_prognosys_pb from "./claros_instrument_event_data_prognosys_pb";

export class InstrumentEventData extends jspb.Message {
  clearCalibrationsList(): void;
  getCalibrationsList(): Array<claros_instrument_event_data_calibration_pb.EventDataCalibration>;
  setCalibrationsList(value: Array<claros_instrument_event_data_calibration_pb.EventDataCalibration>): void;
  addCalibrations(value?: claros_instrument_event_data_calibration_pb.EventDataCalibration, index?: number): claros_instrument_event_data_calibration_pb.EventDataCalibration;

  clearErrorsList(): void;
  getErrorsList(): Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>;
  setErrorsList(value: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>): void;
  addErrors(value?: claros_instrument_event_data_metadata_pb.EventDataMetaData, index?: number): claros_instrument_event_data_metadata_pb.EventDataMetaData;

  clearInfoList(): void;
  getInfoList(): Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>;
  setInfoList(value: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>): void;
  addInfo(value?: claros_instrument_event_data_metadata_pb.EventDataMetaData, index?: number): claros_instrument_event_data_metadata_pb.EventDataMetaData;

  clearLimitsList(): void;
  getLimitsList(): Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>;
  setLimitsList(value: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>): void;
  addLimits(value?: claros_instrument_event_data_metadata_pb.EventDataMetaData, index?: number): claros_instrument_event_data_metadata_pb.EventDataMetaData;

  clearRemindersList(): void;
  getRemindersList(): Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>;
  setRemindersList(value: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>): void;
  addReminders(value?: claros_instrument_event_data_metadata_pb.EventDataMetaData, index?: number): claros_instrument_event_data_metadata_pb.EventDataMetaData;

  clearWarningsList(): void;
  getWarningsList(): Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>;
  setWarningsList(value: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData>): void;
  addWarnings(value?: claros_instrument_event_data_metadata_pb.EventDataMetaData, index?: number): claros_instrument_event_data_metadata_pb.EventDataMetaData;

  clearPrognosysList(): void;
  getPrognosysList(): Array<claros_instrument_event_data_prognosys_pb.EventDataPrognosys>;
  setPrognosysList(value: Array<claros_instrument_event_data_prognosys_pb.EventDataPrognosys>): void;
  addPrognosys(value?: claros_instrument_event_data_prognosys_pb.EventDataPrognosys, index?: number): claros_instrument_event_data_prognosys_pb.EventDataPrognosys;

  hasEventdatetime(): boolean;
  clearEventdatetime(): void;
  getEventdatetime(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setEventdatetime(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentEventData.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentEventData): InstrumentEventData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentEventData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentEventData;
  static deserializeBinaryFromReader(message: InstrumentEventData, reader: jspb.BinaryReader): InstrumentEventData;
}

export namespace InstrumentEventData {
  export type AsObject = {
    calibrationsList: Array<claros_instrument_event_data_calibration_pb.EventDataCalibration.AsObject>,
    errorsList: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData.AsObject>,
    infoList: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData.AsObject>,
    limitsList: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData.AsObject>,
    remindersList: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData.AsObject>,
    warningsList: Array<claros_instrument_event_data_metadata_pb.EventDataMetaData.AsObject>,
    prognosysList: Array<claros_instrument_event_data_prognosys_pb.EventDataPrognosys.AsObject>,
    eventdatetime?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

