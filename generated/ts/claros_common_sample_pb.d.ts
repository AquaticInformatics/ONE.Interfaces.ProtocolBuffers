// package: 
// file: claros_common_sample.proto

import * as jspb from "google-protobuf";

export class sample extends jspb.Message {
  hasSamplestring(): boolean;
  clearSamplestring(): void;
  getSamplestring(): string;
  setSamplestring(value: string): void;

  hasSampleuint32(): boolean;
  clearSampleuint32(): void;
  getSampleuint32(): number;
  setSampleuint32(value: number): void;

  getSamplemapMap(): jspb.Map<string, string>;
  clearSamplemapMap(): void;
  clearSamplerepeatedstringList(): void;
  getSamplerepeatedstringList(): Array<string>;
  setSamplerepeatedstringList(value: Array<string>): void;
  addSamplerepeatedstring(value: string, index?: number): string;

  getSampleenumtype(): sample.enumTypeMap[keyof sample.enumTypeMap];
  setSampleenumtype(value: sample.enumTypeMap[keyof sample.enumTypeMap]): void;

  clearRepeatableoneofList(): void;
  getRepeatableoneofList(): Array<sample.RepeatableOneOf>;
  setRepeatableoneofList(value: Array<sample.RepeatableOneOf>): void;
  addRepeatableoneof(value?: sample.RepeatableOneOf, index?: number): sample.RepeatableOneOf;

  getOneofCase(): sample.OneofCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): sample.AsObject;
  static toObject(includeInstance: boolean, msg: sample): sample.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: sample, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): sample;
  static deserializeBinaryFromReader(message: sample, reader: jspb.BinaryReader): sample;
}

export namespace sample {
  export type AsObject = {
    samplestring: string,
    sampleuint32: number,
    samplemapMap: Array<[string, string]>,
    samplerepeatedstringList: Array<string>,
    sampleenumtype: sample.enumTypeMap[keyof sample.enumTypeMap],
    repeatableoneofList: Array<sample.RepeatableOneOf.AsObject>,
  }

  export class customMessage extends jspb.Message {
    getMessagebody(): string;
    setMessagebody(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): customMessage.AsObject;
    static toObject(includeInstance: boolean, msg: customMessage): customMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: customMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): customMessage;
    static deserializeBinaryFromReader(message: customMessage, reader: jspb.BinaryReader): customMessage;
  }

  export namespace customMessage {
    export type AsObject = {
      messagebody: string,
    }
  }

  export class RepeatableOneOf extends jspb.Message {
    hasRepeatableoneofstring(): boolean;
    clearRepeatableoneofstring(): void;
    getRepeatableoneofstring(): string;
    setRepeatableoneofstring(value: string): void;

    hasRepeatableoneofuint32(): boolean;
    clearRepeatableoneofuint32(): void;
    getRepeatableoneofuint32(): number;
    setRepeatableoneofuint32(value: number): void;

    hasRepeatablecustommessage(): boolean;
    clearRepeatablecustommessage(): void;
    getRepeatablecustommessage(): sample.customMessage | undefined;
    setRepeatablecustommessage(value?: sample.customMessage): void;

    getRepeatableoneofCase(): RepeatableOneOf.RepeatableoneofCase;
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RepeatableOneOf.AsObject;
    static toObject(includeInstance: boolean, msg: RepeatableOneOf): RepeatableOneOf.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RepeatableOneOf, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RepeatableOneOf;
    static deserializeBinaryFromReader(message: RepeatableOneOf, reader: jspb.BinaryReader): RepeatableOneOf;
  }

  export namespace RepeatableOneOf {
    export type AsObject = {
      repeatableoneofstring: string,
      repeatableoneofuint32: number,
      repeatablecustommessage?: sample.customMessage.AsObject,
    }

    export enum RepeatableoneofCase {
      REPEATABLEONEOF_NOT_SET = 0,
      REPEATABLEONEOFSTRING = 10,
      REPEATABLEONEOFUINT32 = 11,
      REPEATABLECUSTOMMESSAGE = 12,
    }
  }

  export interface enumTypeMap {
    ENUM_UNKNOWN: 0;
    ENUM_ONE: 1;
  }

  export const enumType: enumTypeMap;

  export enum OneofCase {
    ONEOF_NOT_SET = 0,
    SAMPLESTRING = 1,
    SAMPLEUINT32 = 2,
  }
}

