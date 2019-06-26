// package: claros.common.task
// file: claros_common_task_definition_binding_instrument_maintenance.proto

import * as jspb from "google-protobuf";

export class BindingInstrumentMaintenance extends jspb.Message {
  getInstrumentid(): string;
  setInstrumentid(value: string): void;

  getWorkflowdefinitionid(): string;
  setWorkflowdefinitionid(value: string): void;

  getPrognosysdefinitionid(): string;
  setPrognosysdefinitionid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingInstrumentMaintenance.AsObject;
  static toObject(includeInstance: boolean, msg: BindingInstrumentMaintenance): BindingInstrumentMaintenance.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BindingInstrumentMaintenance, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingInstrumentMaintenance;
  static deserializeBinaryFromReader(message: BindingInstrumentMaintenance, reader: jspb.BinaryReader): BindingInstrumentMaintenance;
}

export namespace BindingInstrumentMaintenance {
  export type AsObject = {
    instrumentid: string,
    workflowdefinitionid: string,
    prognosysdefinitionid: string,
  }
}

