// package: claros.common.computation
// file: claros_common_computation_expressionline.proto

import * as jspb from "google-protobuf";

export class ExpressionLine extends jspb.Message {
  getI18nkey(): string;
  setI18nkey(value: string): void;

  getName(): string;
  setName(value: string): void;

  getExpression(): string;
  setExpression(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExpressionLine.AsObject;
  static toObject(includeInstance: boolean, msg: ExpressionLine): ExpressionLine.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExpressionLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExpressionLine;
  static deserializeBinaryFromReader(message: ExpressionLine, reader: jspb.BinaryReader): ExpressionLine;
}

export namespace ExpressionLine {
  export type AsObject = {
    i18nkey: string,
    name: string,
    expression: string,
    description: string,
  }
}

