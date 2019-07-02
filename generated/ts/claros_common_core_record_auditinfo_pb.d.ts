// package: claros.common.core
// file: claros_common_core_record_auditinfo.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class RecordAuditInfo extends jspb.Message {
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
  toObject(includeInstance?: boolean): RecordAuditInfo.AsObject;
  static toObject(includeInstance: boolean, msg: RecordAuditInfo): RecordAuditInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RecordAuditInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordAuditInfo;
  static deserializeBinaryFromReader(message: RecordAuditInfo, reader: jspb.BinaryReader): RecordAuditInfo;
}

export namespace RecordAuditInfo {
  export type AsObject = {
    createdbyid: string,
    createdon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    modifiedbyid: string,
    modifiedon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

