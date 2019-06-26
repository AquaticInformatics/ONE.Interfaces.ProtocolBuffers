// package: claros.common.form
// file: claros_common_form_formindex.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_timewindow_pb from "./claros_common_core_timewindow_pb";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class FormIndex extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTemplateid(): string;
  setTemplateid(value: string): void;

  getTemplateversion(): number;
  setTemplateversion(value: number): void;

  hasTimewindow(): boolean;
  clearTimewindow(): void;
  getTimewindow(): claros_common_core_timewindow_pb.TimeWindow | undefined;
  setTimewindow(value?: claros_common_core_timewindow_pb.TimeWindow): void;

  hasLastmodified(): boolean;
  clearLastmodified(): void;
  getLastmodified(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setLastmodified(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getName(): string;
  setName(value: string): void;

  getCreatorid(): string;
  setCreatorid(value: string): void;

  getIsinspeed(): boolean;
  setIsinspeed(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FormIndex.AsObject;
  static toObject(includeInstance: boolean, msg: FormIndex): FormIndex.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FormIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FormIndex;
  static deserializeBinaryFromReader(message: FormIndex, reader: jspb.BinaryReader): FormIndex;
}

export namespace FormIndex {
  export type AsObject = {
    id: string,
    templateid: string,
    templateversion: number,
    timewindow?: claros_common_core_timewindow_pb.TimeWindow.AsObject,
    lastmodified?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    name: string,
    creatorid: string,
    isinspeed: boolean,
  }
}

