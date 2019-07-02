// package: claros.common.core
// file: claros_common_core_timewindow.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_clarosdatetime_pb from "./claros_common_core_clarosdatetime_pb";

export class TimeWindow extends jspb.Message {
  hasStarttime(): boolean;
  clearStarttime(): void;
  getStarttime(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setStarttime(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  hasEndtime(): boolean;
  clearEndtime(): void;
  getEndtime(): claros_common_core_clarosdatetime_pb.ClarosDateTime | undefined;
  setEndtime(value?: claros_common_core_clarosdatetime_pb.ClarosDateTime): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeWindow.AsObject;
  static toObject(includeInstance: boolean, msg: TimeWindow): TimeWindow.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TimeWindow, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeWindow;
  static deserializeBinaryFromReader(message: TimeWindow, reader: jspb.BinaryReader): TimeWindow;
}

export namespace TimeWindow {
  export type AsObject = {
    starttime?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
    endtime?: claros_common_core_clarosdatetime_pb.ClarosDateTime.AsObject,
  }
}

