// package: claros.common.task
// file: claros_common_task_task.proto

import * as jspb from "google-protobuf";
import * as claros_common_task_definition_pb from "./claros_common_task_definition_pb";
import * as claros_common_task_data_pb from "./claros_common_task_data_pb";
import * as claros_common_core_auditevent_pb from "./claros_common_core_auditevent_pb";

export class Task extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getAssignee(): string;
  setAssignee(value: string): void;

  getReporter(): string;
  setReporter(value: string): void;

  getPriority(): number;
  setPriority(value: number): void;

  getInstrumentid(): string;
  setInstrumentid(value: string): void;

  hasTaskdefinition(): boolean;
  clearTaskdefinition(): void;
  getTaskdefinition(): claros_common_task_definition_pb.TaskDefinition | undefined;
  setTaskdefinition(value?: claros_common_task_definition_pb.TaskDefinition): void;

  hasTaskdata(): boolean;
  clearTaskdata(): void;
  getTaskdata(): claros_common_task_data_pb.TaskData | undefined;
  setTaskdata(value?: claros_common_task_data_pb.TaskData): void;

  hasAuditevent(): boolean;
  clearAuditevent(): void;
  getAuditevent(): claros_common_core_auditevent_pb.AuditEvent | undefined;
  setAuditevent(value?: claros_common_core_auditevent_pb.AuditEvent): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Task.AsObject;
  static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Task;
  static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    assignee: string,
    reporter: string,
    priority: number,
    instrumentid: string,
    taskdefinition?: claros_common_task_definition_pb.TaskDefinition.AsObject,
    taskdata?: claros_common_task_data_pb.TaskData.AsObject,
    auditevent?: claros_common_core_auditevent_pb.AuditEvent.AsObject,
  }
}

