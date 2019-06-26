// package: claros.common.form
// file: claros_common_form_field_text.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_auditevent_pb from "./claros_common_core_auditevent_pb";
import * as claros_common_core_note_pb from "./claros_common_core_note_pb";

export class FormFieldText extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  hasNote(): boolean;
  clearNote(): void;
  getNote(): claros_common_core_note_pb.Note | undefined;
  setNote(value?: claros_common_core_note_pb.Note): void;

  hasAuditevent(): boolean;
  clearAuditevent(): void;
  getAuditevent(): claros_common_core_auditevent_pb.AuditEvent | undefined;
  setAuditevent(value?: claros_common_core_auditevent_pb.AuditEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormFieldText.AsObject;
  static toObject(includeInstance: boolean, msg: FormFieldText): FormFieldText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormFieldText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormFieldText;
  static deserializeBinaryFromReader(message: FormFieldText, reader: jspb.BinaryReader): FormFieldText;
}

export namespace FormFieldText {
  export type AsObject = {
    id: string,
    value: string,
    note?: claros_common_core_note_pb.Note.AsObject,
    auditevent?: claros_common_core_auditevent_pb.AuditEvent.AsObject,
  }
}

