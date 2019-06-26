// package: claros.common.recurrence
// file: claros_common_recurrence_pattern_yearly.proto

import * as jspb from "google-protobuf";
import * as claros_common_enum_day_type_pb from "./claros_common_enum_day_type_pb";
import * as claros_common_enum_month_type_pb from "./claros_common_enum_month_type_pb";
import * as claros_common_enum_ordinal_type_pb from "./claros_common_enum_ordinal_type_pb";

export class PatternYearly extends jspb.Message {
  getYearlyinterval(): number;
  setYearlyinterval(value: number): void;

  hasMonthday(): boolean;
  clearMonthday(): void;
  getMonthday(): PatternYearly.MonthDay | undefined;
  setMonthday(value?: PatternYearly.MonthDay): void;

  hasOrdinaldayofmonth(): boolean;
  clearOrdinaldayofmonth(): void;
  getOrdinaldayofmonth(): PatternYearly.OrdinalDayOfMonth | undefined;
  setOrdinaldayofmonth(value?: PatternYearly.OrdinalDayOfMonth): void;

  getPatternyearlyCase(): PatternYearly.PatternyearlyCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatternYearly.AsObject;
  static toObject(includeInstance: boolean, msg: PatternYearly): PatternYearly.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PatternYearly, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatternYearly;
  static deserializeBinaryFromReader(message: PatternYearly, reader: jspb.BinaryReader): PatternYearly;
}

export namespace PatternYearly {
  export type AsObject = {
    yearlyinterval: number,
    monthday?: PatternYearly.MonthDay.AsObject,
    ordinaldayofmonth?: PatternYearly.OrdinalDayOfMonth.AsObject,
  }

  export class MonthDay extends jspb.Message {
    getMonthtype(): claros_common_enum_month_type_pb.MonthTypeMap[keyof claros_common_enum_month_type_pb.MonthTypeMap];
    setMonthtype(value: claros_common_enum_month_type_pb.MonthTypeMap[keyof claros_common_enum_month_type_pb.MonthTypeMap]): void;

    getDayofmonth(): number;
    setDayofmonth(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MonthDay.AsObject;
    static toObject(includeInstance: boolean, msg: MonthDay): MonthDay.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MonthDay, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MonthDay;
    static deserializeBinaryFromReader(message: MonthDay, reader: jspb.BinaryReader): MonthDay;
  }

  export namespace MonthDay {
    export type AsObject = {
      monthtype: claros_common_enum_month_type_pb.MonthTypeMap[keyof claros_common_enum_month_type_pb.MonthTypeMap],
      dayofmonth: number,
    }
  }

  export class OrdinalDayOfMonth extends jspb.Message {
    getOrdinaltype(): claros_common_enum_ordinal_type_pb.OrdinalTypeMap[keyof claros_common_enum_ordinal_type_pb.OrdinalTypeMap];
    setOrdinaltype(value: claros_common_enum_ordinal_type_pb.OrdinalTypeMap[keyof claros_common_enum_ordinal_type_pb.OrdinalTypeMap]): void;

    getDaytype(): claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap];
    setDaytype(value: claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap]): void;

    getMonthtype(): claros_common_enum_month_type_pb.MonthTypeMap[keyof claros_common_enum_month_type_pb.MonthTypeMap];
    setMonthtype(value: claros_common_enum_month_type_pb.MonthTypeMap[keyof claros_common_enum_month_type_pb.MonthTypeMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrdinalDayOfMonth.AsObject;
    static toObject(includeInstance: boolean, msg: OrdinalDayOfMonth): OrdinalDayOfMonth.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrdinalDayOfMonth, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrdinalDayOfMonth;
    static deserializeBinaryFromReader(message: OrdinalDayOfMonth, reader: jspb.BinaryReader): OrdinalDayOfMonth;
  }

  export namespace OrdinalDayOfMonth {
    export type AsObject = {
      ordinaltype: claros_common_enum_ordinal_type_pb.OrdinalTypeMap[keyof claros_common_enum_ordinal_type_pb.OrdinalTypeMap],
      daytype: claros_common_enum_day_type_pb.DayTypeMap[keyof claros_common_enum_day_type_pb.DayTypeMap],
      monthtype: claros_common_enum_month_type_pb.MonthTypeMap[keyof claros_common_enum_month_type_pb.MonthTypeMap],
    }
  }

  export enum PatternyearlyCase {
    PATTERNYEARLY_NOT_SET = 0,
    MONTHDAY = 2,
    ORDINALDAYOFMONTH = 3,
  }
}

