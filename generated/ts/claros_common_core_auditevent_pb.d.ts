// package: claros.common.core
// file: claros_common_core_auditevent.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_auditevent_type_pb from "./claros_common_core_auditevent_type_pb";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";
import * as claros_common_core_datasource_type_pb from "./claros_common_core_datasource_type_pb";

export class AuditEvent extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserid(): string;
  setUserid(value: string): void;

  getDatasourcetype(): claros_common_core_datasource_type_pb.DataSourceTypeMap[keyof claros_common_core_datasource_type_pb.DataSourceTypeMap];
  setDatasourcetype(value: claros_common_core_datasource_type_pb.DataSourceTypeMap[keyof claros_common_core_datasource_type_pb.DataSourceTypeMap]): void;

  getEventtype(): claros_common_core_auditevent_type_pb.AuditEventTypeMap[keyof claros_common_core_auditevent_type_pb.AuditEventTypeMap];
  setEventtype(value: claros_common_core_auditevent_type_pb.AuditEventTypeMap[keyof claros_common_core_auditevent_type_pb.AuditEventTypeMap]): void;

  hasTimestamp(): boolean;
  clearTimestamp(): void;
  getTimestamp(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setTimestamp(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getDetails(): string;
  setDetails(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditEvent.AsObject;
  static toObject(includeInstance: boolean, msg: AuditEvent): AuditEvent.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuditEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditEvent;
  static deserializeBinaryFromReader(message: AuditEvent, reader: jspb.BinaryReader): AuditEvent;
}

export namespace AuditEvent {
  export type AsObject = {
    id: string,
    userid: string,
    datasourcetype: claros_common_core_datasource_type_pb.DataSourceTypeMap[keyof claros_common_core_datasource_type_pb.DataSourceTypeMap],
    eventtype: claros_common_core_auditevent_type_pb.AuditEventTypeMap[keyof claros_common_core_auditevent_type_pb.AuditEventTypeMap],
    timestamp?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    details: string,
  }
}

