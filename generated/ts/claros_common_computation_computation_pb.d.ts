// package: claros.common.computation
// file: claros_common_computation_computation.proto

import * as jspb from "google-protobuf";
import * as claros_common_computation_variable_pb from "./claros_common_computation_variable_pb";
import * as claros_common_computation_expressionline_pb from "./claros_common_computation_expressionline_pb";

export class Computation extends jspb.Message {
  getI18nkey(): string;
  setI18nkey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearInputvariablesList(): void;
  getInputvariablesList(): Array<claros_common_computation_variable_pb.Variable>;
  setInputvariablesList(value: Array<claros_common_computation_variable_pb.Variable>): void;
  addInputvariables(value?: claros_common_computation_variable_pb.Variable, index?: number): claros_common_computation_variable_pb.Variable;

  clearOutputvariablesList(): void;
  getOutputvariablesList(): Array<claros_common_computation_variable_pb.Variable>;
  setOutputvariablesList(value: Array<claros_common_computation_variable_pb.Variable>): void;
  addOutputvariables(value?: claros_common_computation_variable_pb.Variable, index?: number): claros_common_computation_variable_pb.Variable;

  clearExpressionlinesList(): void;
  getExpressionlinesList(): Array<claros_common_computation_expressionline_pb.ExpressionLine>;
  setExpressionlinesList(value: Array<claros_common_computation_expressionline_pb.ExpressionLine>): void;
  addExpressionlines(value?: claros_common_computation_expressionline_pb.ExpressionLine, index?: number): claros_common_computation_expressionline_pb.ExpressionLine;

  getIsactive(): boolean;
  setIsactive(value: boolean): void;

  getIsvalid(): boolean;
  setIsvalid(value: boolean): void;

  hasLedgerid(): boolean;
  clearLedgerid(): void;
  getLedgerid(): string;
  setLedgerid(value: string): void;

  hasFormid(): boolean;
  clearFormid(): void;
  getFormid(): string;
  setFormid(value: string): void;

  getBindingCase(): Computation.BindingCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Computation.AsObject;
  static toObject(includeInstance: boolean, msg: Computation): Computation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Computation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Computation;
  static deserializeBinaryFromReader(message: Computation, reader: jspb.BinaryReader): Computation;
}

export namespace Computation {
  export type AsObject = {
    i18nkey: string,
    name: string,
    description: string,
    inputvariablesList: Array<claros_common_computation_variable_pb.Variable.AsObject>,
    outputvariablesList: Array<claros_common_computation_variable_pb.Variable.AsObject>,
    expressionlinesList: Array<claros_common_computation_expressionline_pb.ExpressionLine.AsObject>,
    isactive: boolean,
    isvalid: boolean,
    ledgerid: string,
    formid: string,
  }

  export enum BindingCase {
    BINDING_NOT_SET = 0,
    LEDGERID = 9,
    FORMID = 10,
  }
}

