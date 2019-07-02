// package: claros.common.form
// file: claros_common_form_formlayout.proto

import * as jspb from "google-protobuf";
import * as claros_common_form_formsection_pb from "./claros_common_form_formsection_pb";

export class FormLayout extends jspb.Message {
  clearSectionsList(): void;
  getSectionsList(): Array<claros_common_form_formsection_pb.FormSection>;
  setSectionsList(value: Array<claros_common_form_formsection_pb.FormSection>): void;
  addSections(value?: claros_common_form_formsection_pb.FormSection, index?: number): claros_common_form_formsection_pb.FormSection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormLayout.AsObject;
  static toObject(includeInstance: boolean, msg: FormLayout): FormLayout.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormLayout, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormLayout;
  static deserializeBinaryFromReader(message: FormLayout, reader: jspb.BinaryReader): FormLayout;
}

export namespace FormLayout {
  export type AsObject = {
    sectionsList: Array<claros_common_form_formsection_pb.FormSection.AsObject>,
  }
}

