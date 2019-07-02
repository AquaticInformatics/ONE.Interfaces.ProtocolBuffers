// package: claros.common.core
// file: claros_common_core_unit.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class Unit extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getIntid(): number;
  setIntid(value: number): void;

  getI18nkey(): string;
  setI18nkey(value: string): void;

  getUnitname(): string;
  setUnitname(value: string): void;

  getQuantitytypeid(): string;
  setQuantitytypeid(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreatedbyid(): string;
  setCreatedbyid(value: string): void;

  hasCreatedon(): boolean;
  clearCreatedon(): void;
  getCreatedon(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setCreatedon(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getModifiedbyid(): string;
  setModifiedbyid(value: string): void;

  hasModifiedon(): boolean;
  clearModifiedon(): void;
  getModifiedon(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setModifiedon(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Unit.AsObject;
  static toObject(includeInstance: boolean, msg: Unit): Unit.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Unit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Unit;
  static deserializeBinaryFromReader(message: Unit, reader: jspb.BinaryReader): Unit;
}

export namespace Unit {
  export type AsObject = {
    id: string,
    intid: number,
    i18nkey: string,
    unitname: string,
    quantitytypeid: string,
    description: string,
    createdbyid: string,
    createdon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    modifiedbyid: string,
    modifiedon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

