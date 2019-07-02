// package: claros.common.computation
// file: claros_common_computation_variable.proto

import * as jspb from "google-protobuf";
import * as claros_common_computation_cursor_type_pb from "./claros_common_computation_cursor_type_pb";
import * as claros_common_computation_propertyselector_type_pb from "./claros_common_computation_propertyselector_type_pb";

export class Variable extends jspb.Message {
  getI18nkey(): string;
  setI18nkey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getQuantitytypeid(): string;
  setQuantitytypeid(value: string): void;

  getCursortype(): claros_common_computation_cursor_type_pb.ComputationCursorTypeMap[keyof claros_common_computation_cursor_type_pb.ComputationCursorTypeMap];
  setCursortype(value: claros_common_computation_cursor_type_pb.ComputationCursorTypeMap[keyof claros_common_computation_cursor_type_pb.ComputationCursorTypeMap]): void;

  getCursorabsolute(): number;
  setCursorabsolute(value: number): void;

  getPropertyselector(): claros_common_computation_propertyselector_type_pb.PropertySelectorTypeMap[keyof claros_common_computation_propertyselector_type_pb.PropertySelectorTypeMap];
  setPropertyselector(value: claros_common_computation_propertyselector_type_pb.PropertySelectorTypeMap[keyof claros_common_computation_propertyselector_type_pb.PropertySelectorTypeMap]): void;

  getSuggestedparameterid(): number;
  setSuggestedparameterid(value: number): void;

  getSuggestedunitid(): number;
  setSuggestedunitid(value: number): void;

  hasColumnid(): boolean;
  clearColumnid(): void;
  getColumnid(): number;
  setColumnid(value: number): void;

  hasFormfieldid(): boolean;
  clearFormfieldid(): void;
  getFormfieldid(): number;
  setFormfieldid(value: number): void;

  getBindingCase(): Variable.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Variable.AsObject;
  static toObject(includeInstance: boolean, msg: Variable): Variable.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Variable, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Variable;
  static deserializeBinaryFromReader(message: Variable, reader: jspb.BinaryReader): Variable;
}

export namespace Variable {
  export type AsObject = {
    i18nkey: string,
    name: string,
    description: string,
    quantitytypeid: string,
    cursortype: claros_common_computation_cursor_type_pb.ComputationCursorTypeMap[keyof claros_common_computation_cursor_type_pb.ComputationCursorTypeMap],
    cursorabsolute: number,
    propertyselector: claros_common_computation_propertyselector_type_pb.PropertySelectorTypeMap[keyof claros_common_computation_propertyselector_type_pb.PropertySelectorTypeMap],
    suggestedparameterid: number,
    suggestedunitid: number,
    columnid: number,
    formfieldid: number,
  }

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    COLUMNID = 10,
    FORMFIELDID = 11,
  }
}

