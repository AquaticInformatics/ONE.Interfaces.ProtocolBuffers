// package: claros.common.task
// file: claros_common_task_definition_source_instrument_maintenance.proto

import * as jspb from "google-protobuf";
import * as claros_instrument_definition_instrument_definition_model_pb from "./claros_instrument_definition_instrument_definition_model_pb";

export class TaskDefinitionSourceInstrumentMaintenance extends jspb.Message {
  hasInstrumentmodel(): boolean;
  clearInstrumentmodel(): void;
  getInstrumentmodel(): claros_instrument_definition_instrument_definition_model_pb.InstrumentDefinitionModel | undefined;
  setInstrumentmodel(value?: claros_instrument_definition_instrument_definition_model_pb.InstrumentDefinitionModel): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TaskDefinitionSourceInstrumentMaintenance.AsObject;
  static toObject(includeInstance: boolean, msg: TaskDefinitionSourceInstrumentMaintenance): TaskDefinitionSourceInstrumentMaintenance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TaskDefinitionSourceInstrumentMaintenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TaskDefinitionSourceInstrumentMaintenance;
  static deserializeBinaryFromReader(message: TaskDefinitionSourceInstrumentMaintenance, reader: jspb.BinaryReader): TaskDefinitionSourceInstrumentMaintenance;
}

export namespace TaskDefinitionSourceInstrumentMaintenance {
  export type AsObject = {
    instrumentmodel?: claros_instrument_definition_instrument_definition_model_pb.InstrumentDefinitionModel.AsObject,
  }
}

