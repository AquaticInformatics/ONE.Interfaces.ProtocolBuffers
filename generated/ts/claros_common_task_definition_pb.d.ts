// package: claros.common.task
// file: claros_common_task_definition.proto

import * as jspb from "google-protobuf";
import * as claros_common_task_definition_binding_instrument_maintenance_pb from "./claros_common_task_definition_binding_instrument_maintenance_pb";
import * as claros_common_task_definition_source_pb from "./claros_common_task_definition_source_pb";

export class TaskDefinition extends jspb.Message {
  clearTasksourceList(): void;
  getTasksourceList(): Array<claros_common_task_definition_source_pb.TaskDefinitionSource>;
  setTasksourceList(value: Array<claros_common_task_definition_source_pb.TaskDefinitionSource>): void;
  addTasksource(value?: claros_common_task_definition_source_pb.TaskDefinitionSource, index?: number): claros_common_task_definition_source_pb.TaskDefinitionSource;

  getTriggertype(): TaskDefinition.MaintenanceTriggerTypeMap[keyof TaskDefinition.MaintenanceTriggerTypeMap];
  setTriggertype(value: TaskDefinition.MaintenanceTriggerTypeMap[keyof TaskDefinition.MaintenanceTriggerTypeMap]): void;

  hasBindinginstrumentmaintenance(): boolean;
  clearBindinginstrumentmaintenance(): void;
  getBindinginstrumentmaintenance(): claros_common_task_definition_binding_instrument_maintenance_pb.BindingInstrumentMaintenance | undefined;
  setBindinginstrumentmaintenance(value?: claros_common_task_definition_binding_instrument_maintenance_pb.BindingInstrumentMaintenance): void;

  getBindingCase(): TaskDefinition.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: TaskDefinition): TaskDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskDefinition;
  static deserializeBinaryFromReader(message: TaskDefinition, reader: jspb.BinaryReader): TaskDefinition;
}

export namespace TaskDefinition {
  export type AsObject = {
    tasksourceList: Array<claros_common_task_definition_source_pb.TaskDefinitionSource.AsObject>,
    triggertype: TaskDefinition.MaintenanceTriggerTypeMap[keyof TaskDefinition.MaintenanceTriggerTypeMap],
    bindinginstrumentmaintenance?: claros_common_task_definition_binding_instrument_maintenance_pb.BindingInstrumentMaintenance.AsObject,
  }

  export interface MaintenanceTriggerTypeMap {
    MAINTENANCE_TRIGGER_UNKNOWN: 0;
    MAINTENANCE_TRIGGER_SCHEDULED: 1;
    MAINTENANCE_TRIGGER_PROGNOSYS: 2;
    MAINTENANCE_TRIGGER_MANUAL: 3;
  }

  export const MaintenanceTriggerType: MaintenanceTriggerTypeMap;

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    BINDINGINSTRUMENTMAINTENANCE = 3,
  }
}

