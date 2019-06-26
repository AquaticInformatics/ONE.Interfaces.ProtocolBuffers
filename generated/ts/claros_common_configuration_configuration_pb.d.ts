// package: claros.common.configuration
// file: claros_common_configuration_configuration.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";
import * as claros_common_configuration_entity_type_pb from "./claros_common_configuration_entity_type_pb";
import * as claros_common_configuration_rights_pb from "./claros_common_configuration_rights_pb";

export class Configuration extends jspb.Message {
  getId(): string;
  setId(value: string): void;

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

  getConfigurationdata(): string;
  setConfigurationdata(value: string): void;

  getEntitytypeid(): claros_common_configuration_entity_type_pb.EntityTypeMap[keyof claros_common_configuration_entity_type_pb.EntityTypeMap];
  setEntitytypeid(value: claros_common_configuration_entity_type_pb.EntityTypeMap[keyof claros_common_configuration_entity_type_pb.EntityTypeMap]): void;

  getFilterbyid(): string;
  setFilterbyid(value: string): void;

  getTenantid(): string;
  setTenantid(value: string): void;

  getOwnerid(): string;
  setOwnerid(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  getVersion(): number;
  setVersion(value: number): void;

  getPrivilegeMap(): jspb.Map<string, claros_common_configuration_rights_pb.Rights>;
  clearPrivilegeMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Configuration.AsObject;
  static toObject(includeInstance: boolean, msg: Configuration): Configuration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Configuration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Configuration;
  static deserializeBinaryFromReader(message: Configuration, reader: jspb.BinaryReader): Configuration;
}

export namespace Configuration {
  export type AsObject = {
    id: string,
    createdbyid: string,
    createdon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    modifiedbyid: string,
    modifiedon?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    configurationdata: string,
    entitytypeid: claros_common_configuration_entity_type_pb.EntityTypeMap[keyof claros_common_configuration_entity_type_pb.EntityTypeMap],
    filterbyid: string,
    tenantid: string,
    ownerid: string,
    pb_public: boolean,
    version: number,
    privilegeMap: Array<[string, claros_common_configuration_rights_pb.Rights.AsObject]>,
  }
}

