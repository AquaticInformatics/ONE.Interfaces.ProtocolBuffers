// package: claros.common.core
// file: claros_common_core_clarosdatetime.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_mobiledatetime_pb from "./claros_common_core_mobiledatetime_pb";

export class ClarosDateTime extends jspb.Message {
  hasMobiledatetime(): boolean;
  clearMobiledatetime(): void;
  getMobiledatetime(): claros_common_core_mobiledatetime_pb.MobileDateTime | undefined;
  setMobiledatetime(value?: claros_common_core_mobiledatetime_pb.MobileDateTime): void;

  hasJsondatetime(): boolean;
  clearJsondatetime(): void;
  getJsondatetime(): string;
  setJsondatetime(value: string): void;

  hasTicks(): boolean;
  clearTicks(): void;
  getTicks(): number;
  setTicks(value: number): void;

  getClarosdatetimeCase(): ClarosDateTime.ClarosdatetimeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClarosDateTime.AsObject;
  static toObject(includeInstance: boolean, msg: ClarosDateTime): ClarosDateTime.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClarosDateTime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClarosDateTime;
  static deserializeBinaryFromReader(message: ClarosDateTime, reader: jspb.BinaryReader): ClarosDateTime;
}

export namespace ClarosDateTime {
  export type AsObject = {
    mobiledatetime?: claros_common_core_mobiledatetime_pb.MobileDateTime.AsObject,
    jsondatetime: string,
    ticks: number,
  }

  export enum ClarosdatetimeCase {
    CLAROSDATETIME_NOT_SET = 0,
    MOBILEDATETIME = 1,
    JSONDATETIME = 2,
    TICKS = 3,
  }
}

