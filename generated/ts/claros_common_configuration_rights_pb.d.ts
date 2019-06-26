// package: claros.common.configuration
// file: claros_common_configuration_rights.proto

import * as jspb from "google-protobuf";

export class Rights extends jspb.Message {
  getView(): boolean;
  setView(value: boolean): void;

  getEdit(): boolean;
  setEdit(value: boolean): void;

  getDelete(): boolean;
  setDelete(value: boolean): void;

  getCreate(): boolean;
  setCreate(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Rights.AsObject;
  static toObject(includeInstance: boolean, msg: Rights): Rights.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Rights, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Rights;
  static deserializeBinaryFromReader(message: Rights, reader: jspb.BinaryReader): Rights;
}

export namespace Rights {
  export type AsObject = {
    view: boolean,
    edit: boolean,
    pb_delete: boolean,
    create: boolean,
  }
}

