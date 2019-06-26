// package: claros.instrument.event
// file: claros_instrument_event_data_metadata.proto

import * as jspb from "google-protobuf";

export class EventDataMetaData extends jspb.Message {
  getI18ndatabasename(): string;
  setI18ndatabasename(value: string): void;

  getTranslationindex(): number;
  setTranslationindex(value: number): void;

  getI18nkey(): string;
  setI18nkey(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EventDataMetaData.AsObject;
  static toObject(includeInstance: boolean, msg: EventDataMetaData): EventDataMetaData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: EventDataMetaData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EventDataMetaData;
  static deserializeBinaryFromReader(message: EventDataMetaData, reader: jspb.BinaryReader): EventDataMetaData;
}

export namespace EventDataMetaData {
  export type AsObject = {
    i18ndatabasename: string,
    translationindex: number,
    i18nkey: string,
    status: number,
  }
}

