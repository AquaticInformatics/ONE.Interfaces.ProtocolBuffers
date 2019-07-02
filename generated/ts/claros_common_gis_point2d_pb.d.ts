// package: claros.common.gis
// file: claros_common_gis_point2d.proto

import * as jspb from "google-protobuf";

export class Point2D extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point2D.AsObject;
  static toObject(includeInstance: boolean, msg: Point2D): Point2D.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point2D, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point2D;
  static deserializeBinaryFromReader(message: Point2D, reader: jspb.BinaryReader): Point2D;
}

export namespace Point2D {
  export type AsObject = {
    x: number,
    y: number,
  }
}

