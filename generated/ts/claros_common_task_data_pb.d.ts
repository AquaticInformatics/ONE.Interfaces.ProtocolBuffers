// package: claros.common.task
// file: claros_common_task_data.proto

import * as jspb from "google-protobuf";
import * as claros_common_task_definition_binding_instrument_maintenance_pb from "./claros_common_task_definition_binding_instrument_maintenance_pb";

export class TaskData extends jspb.Message {
  hasBindinginstrumentmaintenance(): boolean;
  clearBindinginstrumentmaintenance(): void;
  getBindinginstrumentmaintenance(): claros_common_task_definition_binding_instrument_maintenance_pb.BindingInstrumentMaintenance | undefined;
  setBindinginstrumentmaintenance(value?: claros_common_task_definition_binding_instrument_maintenance_pb.BindingInstrumentMaintenance): void;

  getBindingCase(): TaskData.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskData.AsObject;
  static toObject(includeInstance: boolean, msg: TaskData): TaskData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskData;
  static deserializeBinaryFromReader(message: TaskData, reader: jspb.BinaryReader): TaskData;
}

export namespace TaskData {
  export type AsObject = {
    bindinginstrumentmaintenance?: claros_common_task_definition_binding_instrument_maintenance_pb.BindingInstrumentMaintenance.AsObject,
  }

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    BINDINGINSTRUMENTMAINTENANCE = 1,
  }
}

