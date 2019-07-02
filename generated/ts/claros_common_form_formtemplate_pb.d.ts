// package: claros.common.form
// file: claros_common_form_formtemplate.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_formtemplateconfiguration_pb from "./claros_common_form_formtemplateconfiguration_pb";
import * as claros_common_configuration_rights_pb from "./claros_common_configuration_rights_pb";

export class FormTemplate extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getOwnerid(): string;
  setOwnerid(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  getVersion(): number;
  setVersion(value: number): void;

  getPrivilegesMap(): jspb.Map<string, claros_common_configuration_rights_pb.Rights>;
  clearPrivilegesMap(): void;
  hasFormtemplateconfiguration(): boolean;
  clearFormtemplateconfiguration(): void;
  getFormtemplateconfiguration(): claros_common_form_formtemplateconfiguration_pb.FormTemplateConfiguration | undefined;
  setFormtemplateconfiguration(value?: claros_common_form_formtemplateconfiguration_pb.FormTemplateConfiguration): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormTemplate.AsObject;
  static toObject(includeInstance: boolean, msg: FormTemplate): FormTemplate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormTemplate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormTemplate;
  static deserializeBinaryFromReader(message: FormTemplate, reader: jspb.BinaryReader): FormTemplate;
}

export namespace FormTemplate {
  export type AsObject = {
    id: string,
    ownerid: string,
    pb_public: boolean,
    version: number,
    privilegesMap: Array<[string, claros_common_configuration_rights_pb.Rights.AsObject]>,
    formtemplateconfiguration?: claros_common_form_formtemplateconfiguration_pb.FormTemplateConfiguration.AsObject,
    name: string,
  }
}

