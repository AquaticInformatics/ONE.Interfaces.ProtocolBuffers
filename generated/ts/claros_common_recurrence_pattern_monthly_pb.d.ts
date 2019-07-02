// package: claros.common.recurrence
// file: claros_common_recurrence_pattern_monthly.proto

import * as jspb from "google-protobuf";
import * as claros_common_enum_day_type_pb from "./claros_common_enum_day_type_pb";
import * as claros_common_enum_ordinal_type_pb from "./claros_common_enum_ordinal_type_pb";

export class PatternMonthly extends jspb.Message {
  hasDayofmonthinterval(): boolean;
  clearDayofmonthinterval(): void;
  getDayofmonthinterval(): PatternMonthly.DayOfMonthInterval | undefined;
  setDayofmonthinterval(value?: PatternMonthly.DayOfMonthInterval): void;

  hasOrdinaldayofweekinterval(): boolean;
  clearOrdinaldayofweekinterval(): void;
  getOrdinaldayofweekinterval(): PatternMonthly.OrdinalDayOfWeekInterval | undefined;
  setOrdinaldayofweekinterval(value?: PatternMonthly.OrdinalDayOfWeekInterval): void;

  getPatternmonthlyCase(): PatternMonthly.PatternmonthlyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatternMonthly.AsObject;
  static toObject(includeInstance: boolean, msg: PatternMonthly): PatternMonthly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatternMonthly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatternMonthly;
  static deserializeBinaryFromReader(message: PatternMonthly, reader: jspb.BinaryReader): PatternMonthly;
}

export namespace PatternMonthly {
  export type AsObject = {
    dayofmonthinterval?: PatternMonthly.DayOfMonthInterval.AsObject,
    ordinaldayofweekinterval?: PatternMonthly.OrdinalDayOfWeekInterval.AsObject,
  }

  export class DayOfMonthInterval extends jspb.Message {
    getDayofmonth(): number;
    setDayofmonth(value: number): void;

    getMonthlyinterval(): number;
    setMonthlyinterval(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DayOfMonthInterval.AsObject;
    static toObject(includeInstance: boolean, msg: DayOfMonthInterval): DayOfMonthInterval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DayOfMonthInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DayOfMonthInterval;
    static deserializeBinaryFromReader(message: DayOfMonthInterval, reader: jspb.BinaryReader): DayOfMonthInterval;
  }

  export namespace DayOfMonthInterval {
    export type AsObject = {
      dayofmonth: number,
      monthlyinterval: number,
    }
  }

  export class OrdinalDayOfWeekInterval extends jspb.Message {
    getOrdinaltype(): claros_common_enum_ordinal_type_pb.OrdinalTypeMap[keyof claros_common_enum_ordinal_type_pb.OrdinalTypeMap];
    setOrdinaltype(value: claros_common_enum_ordinal_type_pb.OrdinalTypeMap[keyof claros_common_enum_ordinal_type_pb.OrdinalTypeMap]): void;

    getDaytype(): claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap];
    setDaytype(value: claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap]): void;

    getMonthlyinterval(): number;
    setMonthlyinterval(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdinalDayOfWeekInterval.AsObject;
    static toObject(includeInstance: boolean, msg: OrdinalDayOfWeekInterval): OrdinalDayOfWeekInterval.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdinalDayOfWeekInterval, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdinalDayOfWeekInterval;
    static deserializeBinaryFromReader(message: OrdinalDayOfWeekInterval, reader: jspb.BinaryReader): OrdinalDayOfWeekInterval;
  }

  export namespace OrdinalDayOfWeekInterval {
    export type AsObject = {
      ordinaltype: claros_common_enum_ordinal_type_pb.OrdinalTypeMap[keyof claros_common_enum_ordinal_type_pb.OrdinalTypeMap],
      daytype: claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap],
      monthlyinterval: number,
    }
  }

  export enum PatternmonthlyCase {
    PATTERNMONTHLY_NOT_SET = 0,
    DAYOFMONTHINTERVAL = 1,
    ORDINALDAYOFWEEKINTERVAL = 2,
  }
}

