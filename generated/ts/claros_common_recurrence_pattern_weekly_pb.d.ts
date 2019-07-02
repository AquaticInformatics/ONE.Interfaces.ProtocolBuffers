// package: claros.common.recurrence
// file: claros_common_recurrence_pattern_weekly.proto

import * as jspb from "google-protobuf";
import * as claros_common_enum_day_type_pb from "./claros_common_enum_day_type_pb";

export class PatternWeekly extends jspb.Message {
  getWeeklyinterval(): number;
  setWeeklyinterval(value: number): void;

  clearDaysofweekList(): void;
  getDaysofweekList(): Array<claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap]>;
  setDaysofweekList(value: Array<claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap]>): void;
  addDaysofweek(value: claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap], index?: number): claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatternWeekly.AsObject;
  static toObject(includeInstance: boolean, msg: PatternWeekly): PatternWeekly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatternWeekly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatternWeekly;
  static deserializeBinaryFromReader(message: PatternWeekly, reader: jspb.BinaryReader): PatternWeekly;
}

export namespace PatternWeekly {
  export type AsObject = {
    weeklyinterval: number,
    daysofweekList: Array<claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap]>,
  }
}

