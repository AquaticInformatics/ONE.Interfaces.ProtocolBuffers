// package: claros.common.form
// file: claros_common_form_formtemplateconfiguration.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_formtemplate_type_pb from "./claros_common_form_formtemplate_type_pb";
import * as claros_common_recurrence_recurrence_pb from "./claros_common_recurrence_recurrence_pb";
import * as claros_common_form_formlayout_pb from "./claros_common_form_formlayout_pb";
import * as claros_common_form_formfield_definition_pb from "./claros_common_form_formfield_definition_pb";

export class FormTemplateConfiguration extends jspb.Message {
  getFormtemplatetype(): claros_common_form_formtemplate_type_pb.FormTemplateTypeMap[keyof claros_common_form_formtemplate_type_pb.FormTemplateTypeMap];
  setFormtemplatetype(value: claros_common_form_formtemplate_type_pb.FormTemplateTypeMap[keyof claros_common_form_formtemplate_type_pb.FormTemplateTypeMap]): void;

  hasRecurrence(): boolean;
  clearRecurrence(): void;
  getRecurrence(): claros_common_recurrence_recurrence_pb.Recurrence | undefined;
  setRecurrence(value?: claros_common_recurrence_recurrence_pb.Recurrence): void;

  hasFormlayout(): boolean;
  clearFormlayout(): void;
  getFormlayout(): claros_common_form_formlayout_pb.FormLayout | undefined;
  setFormlayout(value?: claros_common_form_formlayout_pb.FormLayout): void;

  clearFormfielddefinitionsList(): void;
  getFormfielddefinitionsList(): Array<claros_common_form_formfield_definition_pb.FormFieldDefinition>;
  setFormfielddefinitionsList(value: Array<claros_common_form_formfield_definition_pb.FormFieldDefinition>): void;
  addFormfielddefinitions(value?: claros_common_form_formfield_definition_pb.FormFieldDefinition, index?: number): claros_common_form_formfield_definition_pb.FormFieldDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormTemplateConfiguration.AsObject;
  static toObject(includeInstance: boolean, msg: FormTemplateConfiguration): FormTemplateConfiguration.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormTemplateConfiguration, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormTemplateConfiguration;
  static deserializeBinaryFromReader(message: FormTemplateConfiguration, reader: jspb.BinaryReader): FormTemplateConfiguration;
}

export namespace FormTemplateConfiguration {
  export type AsObject = {
    formtemplatetype: claros_common_form_formtemplate_type_pb.FormTemplateTypeMap[keyof claros_common_form_formtemplate_type_pb.FormTemplateTypeMap],
    recurrence?: claros_common_recurrence_recurrence_pb.Recurrence.AsObject,
    formlayout?: claros_common_form_formlayout_pb.FormLayout.AsObject,
    formfielddefinitionsList: Array<claros_common_form_formfield_definition_pb.FormFieldDefinition.AsObject>,
  }
}

