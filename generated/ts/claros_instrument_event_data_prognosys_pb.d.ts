// package: claros.instrument.event
// file: claros_instrument_event_data_prognosys.proto

import * as jspb from "google-protobuf";

export class EventDataPrognosys extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getPercent(): number;
  setPercent(value: number): void;

  getDays(): number;
  setDays(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDataPrognosys.AsObject;
  static toObject(includeInstance: boolean, msg: EventDataPrognosys): EventDataPrognosys.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDataPrognosys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDataPrognosys;
  static deserializeBinaryFromReader(message: EventDataPrognosys, reader: jspb.BinaryReader): EventDataPrognosys;
}

export namespace EventDataPrognosys {
  export type AsObject = {
    id: number,
    percent: number,
    days: number,
  }
}

