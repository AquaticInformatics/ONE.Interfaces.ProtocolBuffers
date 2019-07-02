// package: claros.common.recurrence
// file: claros_common_recurrence_pattern_daily.proto

import * as jspb from "google-protobuf";

export class PatternDaily extends jspb.Message {
  hasDailyinterval(): boolean;
  clearDailyinterval(): void;
  getDailyinterval(): number;
  setDailyinterval(value: number): void;

  hasEveryweekday(): boolean;
  clearEveryweekday(): void;
  getEveryweekday(): boolean;
  setEveryweekday(value: boolean): void;

  getPatterndailyCase(): PatternDaily.PatterndailyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatternDaily.AsObject;
  static toObject(includeInstance: boolean, msg: PatternDaily): PatternDaily.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatternDaily, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatternDaily;
  static deserializeBinaryFromReader(message: PatternDaily, reader: jspb.BinaryReader): PatternDaily;
}

export namespace PatternDaily {
  export type AsObject = {
    dailyinterval: number,
    everyweekday: boolean,
  }

  export enum PatterndailyCase {
    PATTERNDAILY_NOT_SET = 0,
    DAILYINTERVAL = 1,
    EVERYWEEKDAY = 2,
  }
}

