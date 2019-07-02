// package: claros.common.core
// file: claros_common_core_note.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class Note extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setTimestamp(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getUserid(): string;
  setUserid(value: string): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    id: string,
    timestamp?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    userid: string,
    text: string,
  }
}

