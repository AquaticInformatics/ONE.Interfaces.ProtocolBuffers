// package: claros.common.recurrence
// file: claros_common_recurrence_recurrence.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";
import * as claros_common_recurrence_pattern_daily_pb from "./claros_common_recurrence_pattern_daily_pb";
import * as claros_common_recurrence_pattern_weekly_pb from "./claros_common_recurrence_pattern_weekly_pb";
import * as claros_common_recurrence_pattern_monthly_pb from "./claros_common_recurrence_pattern_monthly_pb";
import * as claros_common_recurrence_pattern_yearly_pb from "./claros_common_recurrence_pattern_yearly_pb";

export class Recurrence extends jspb.Message {
  hasDaily(): boolean;
  clearDaily(): void;
  getDaily(): claros_common_recurrence_pattern_daily_pb.PatternDaily | undefined;
  setDaily(value?: claros_common_recurrence_pattern_daily_pb.PatternDaily): void;

  hasWeekly(): boolean;
  clearWeekly(): void;
  getWeekly(): claros_common_recurrence_pattern_weekly_pb.PatternWeekly | undefined;
  setWeekly(value?: claros_common_recurrence_pattern_weekly_pb.PatternWeekly): void;

  hasMonthly(): boolean;
  clearMonthly(): void;
  getMonthly(): claros_common_recurrence_pattern_monthly_pb.PatternMonthly | undefined;
  setMonthly(value?: claros_common_recurrence_pattern_monthly_pb.PatternMonthly): void;

  hasYearly(): boolean;
  clearYearly(): void;
  getYearly(): claros_common_recurrence_pattern_yearly_pb.PatternYearly | undefined;
  setYearly(value?: claros_common_recurrence_pattern_yearly_pb.PatternYearly): void;

  hasRecurrencestartdate(): boolean;
  clearRecurrencestartdate(): void;
  getRecurrencestartdate(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setRecurrencestartdate(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  hasNoend(): boolean;
  clearNoend(): void;
  getNoend(): boolean;
  setNoend(value: boolean): void;

  hasNumberofoccurances(): boolean;
  clearNumberofoccurances(): void;
  getNumberofoccurances(): number;
  setNumberofoccurances(value: number): void;

  hasEnddate(): boolean;
  clearEnddate(): void;
  getEnddate(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setEnddate(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  getRecurrencepatternCase(): Recurrence.RecurrencepatternCase;
  getRecurrenceendCase(): Recurrence.RecurrenceendCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Recurrence.AsObject;
  static toObject(includeInstance: boolean, msg: Recurrence): Recurrence.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Recurrence, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Recurrence;
  static deserializeBinaryFromReader(message: Recurrence, reader: jspb.BinaryReader): Recurrence;
}

export namespace Recurrence {
  export type AsObject = {
    daily?: claros_common_recurrence_pattern_daily_pb.PatternDaily.AsObject,
    weekly?: claros_common_recurrence_pattern_weekly_pb.PatternWeekly.AsObject,
    monthly?: claros_common_recurrence_pattern_monthly_pb.PatternMonthly.AsObject,
    yearly?: claros_common_recurrence_pattern_yearly_pb.PatternYearly.AsObject,
    recurrencestartdate?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    noend: boolean,
    numberofoccurances: number,
    enddate?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }

  export enum RecurrencepatternCase {
    RECURRENCEPATTERN_NOT_SET = 0,
    DAILY = 1,
    WEEKLY = 2,
    MONTHLY = 3,
    YEARLY = 4,
  }

  export enum RecurrenceendCase {
    RECURRENCEEND_NOT_SET = 0,
    NOEND = 6,
    NUMBEROFOCCURANCES = 7,
    ENDDATE = 8,
  }
}

