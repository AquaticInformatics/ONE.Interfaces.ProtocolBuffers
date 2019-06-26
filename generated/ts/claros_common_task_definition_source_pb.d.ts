// package: claros.common.task
// file: claros_common_task_definition_source.proto

import * as jspb from "google-protobuf";
import * as claros_common_task_definition_source_instrument_maintenance_pb from "./claros_common_task_definition_source_instrument_maintenance_pb";

export class TaskDefinitionSource extends jspb.Message {
  hasTaskdefinitionsourceinstrumentmaintenance(): boolean;
  clearTaskdefinitionsourceinstrumentmaintenance(): void;
  getTaskdefinitionsourceinstrumentmaintenance(): claros_common_task_definition_source_instrument_maintenance_pb.TaskDefinitionSourceInstrumentMaintenance | undefined;
  setTaskdefinitionsourceinstrumentmaintenance(value?: claros_common_task_definition_source_instrument_maintenance_pb.TaskDefinitionSourceInstrumentMaintenance): void;

  getTasksourceCase(): TaskDefinitionSource.TasksourceCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskDefinitionSource.AsObject;
  static toObject(includeInstance: boolean, msg: TaskDefinitionSource): TaskDefinitionSource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskDefinitionSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskDefinitionSource;
  static deserializeBinaryFromReader(message: TaskDefinitionSource, reader: jspb.BinaryReader): TaskDefinitionSource;
}

export namespace TaskDefinitionSource {
  export type AsObject = {
    taskdefinitionsourceinstrumentmaintenance?: claros_common_task_definition_source_instrument_maintenance_pb.TaskDefinitionSourceInstrumentMaintenance.AsObject,
  }

  export enum TasksourceCase {
    TASKSOURCE_NOT_SET = 0,
    TASKDEFINITIONSOURCEINSTRUMENTMAINTENANCE = 1,
  }
}

