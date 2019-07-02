// package: claros.common.form
// file: claros_common_form_form.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_timewindow_pb from "./claros_common_core_timewindow_pb";
import * as claros_common_core_note_pb from "./claros_common_core_note_pb";
import * as claros_common_core_auditevent_pb from "./claros_common_core_auditevent_pb";
import * as claros_common_form_formfield_pb from "./claros_common_form_formfield_pb";
import * as claros_common_form_formtemplate_pb from "./claros_common_form_formtemplate_pb";
import * as claros_common_form_formfield_definition_pb from "./claros_common_form_formfield_definition_pb";

export class Form extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasTimewindow(): boolean;
  clearTimewindow(): void;
  getTimewindow(): claros_common_core_timewindow_pb.TimeWindow | undefined;
  setTimewindow(value?: claros_common_core_timewindow_pb.TimeWindow): void;

  hasFormtemplate(): boolean;
  clearFormtemplate(): void;
  getFormtemplate(): claros_common_form_formtemplate_pb.FormTemplate | undefined;
  setFormtemplate(value?: claros_common_form_formtemplate_pb.FormTemplate): void;

  clearAdhocformfielddefinitionsList(): void;
  getAdhocformfielddefinitionsList(): Array<claros_common_form_formfield_definition_pb.FormFieldDefinition>;
  setAdhocformfielddefinitionsList(value: Array<claros_common_form_formfield_definition_pb.FormFieldDefinition>): void;
  addAdhocformfielddefinitions(value?: claros_common_form_formfield_definition_pb.FormFieldDefinition, index?: number): claros_common_form_formfield_definition_pb.FormFieldDefinition;

  clearTemplateformfieldsList(): void;
  getTemplateformfieldsList(): Array<claros_common_form_formfield_pb.FormField>;
  setTemplateformfieldsList(value: Array<claros_common_form_formfield_pb.FormField>): void;
  addTemplateformfields(value?: claros_common_form_formfield_pb.FormField, index?: number): claros_common_form_formfield_pb.FormField;

  clearAdhocformfieldsList(): void;
  getAdhocformfieldsList(): Array<claros_common_form_formfield_pb.FormField>;
  setAdhocformfieldsList(value: Array<claros_common_form_formfield_pb.FormField>): void;
  addAdhocformfields(value?: claros_common_form_formfield_pb.FormField, index?: number): claros_common_form_formfield_pb.FormField;

  clearNotesList(): void;
  getNotesList(): Array<claros_common_core_note_pb.Note>;
  setNotesList(value: Array<claros_common_core_note_pb.Note>): void;
  addNotes(value?: claros_common_core_note_pb.Note, index?: number): claros_common_core_note_pb.Note;

  clearAuditeventsList(): void;
  getAuditeventsList(): Array<claros_common_core_auditevent_pb.AuditEvent>;
  setAuditeventsList(value: Array<claros_common_core_auditevent_pb.AuditEvent>): void;
  addAuditevents(value?: claros_common_core_auditevent_pb.AuditEvent, index?: number): claros_common_core_auditevent_pb.AuditEvent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Form.AsObject;
  static toObject(includeInstance: boolean, msg: Form): Form.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Form, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Form;
  static deserializeBinaryFromReader(message: Form, reader: jspb.BinaryReader): Form;
}

export namespace Form {
  export type AsObject = {
    id: string,
    name: string,
    timewindow?: claros_common_core_timewindow_pb.TimeWindow.AsObject,
    formtemplate?: claros_common_form_formtemplate_pb.FormTemplate.AsObject,
    adhocformfielddefinitionsList: Array<claros_common_form_formfield_definition_pb.FormFieldDefinition.AsObject>,
    templateformfieldsList: Array<claros_common_form_formfield_pb.FormField.AsObject>,
    adhocformfieldsList: Array<claros_common_form_formfield_pb.FormField.AsObject>,
    notesList: Array<claros_common_core_note_pb.Note.AsObject>,
    auditeventsList: Array<claros_common_core_auditevent_pb.AuditEvent.AsObject>,
  }
}

