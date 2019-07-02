// package: claros.common.configuration
// file: claros_common_configuration_privileges.proto

import * as jspb from "google-protobuf";
import * as claros_common_configuration_rights_pb from "./claros_common_configuration_rights_pb";

export class Privileges extends jspb.Message {
  getPrivilegeMap(): jspb.Map<string, claros_common_configuration_rights_pb.Rights>;
  clearPrivilegeMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Privileges.AsObject;
  static toObject(includeInstance: boolean, msg: Privileges): Privileges.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Privileges, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Privileges;
  static deserializeBinaryFromReader(message: Privileges, reader: jspb.BinaryReader): Privileges;
}

export namespace Privileges {
  export type AsObject = {
    privilegeMap: Array<[string, claros_common_configuration_rights_pb.Rights.AsObject]>,
  }
}

