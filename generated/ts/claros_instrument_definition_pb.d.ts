// package: claros.instrument
// file: claros_instrument_definition.proto

import * as jspb from "google-protobuf";

export class InstrumentDefnition extends jspb.Message {
  getFusionid(): string;
  setFusionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentDefnition.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentDefnition): InstrumentDefnition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentDefnition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentDefnition;
  static deserializeBinaryFromReader(message: InstrumentDefnition, reader: jspb.BinaryReader): InstrumentDefnition;
}

export namespace InstrumentDefnition {
  export type AsObject = {
    fusionid: string,
  }
}

