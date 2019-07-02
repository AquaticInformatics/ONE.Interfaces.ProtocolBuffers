// package: claros.common.gis
// file: claros_common_gis_point3d.proto

import * as jspb from "google-protobuf";

export class Point3D extends jspb.Message {
  getX(): number;
  setX(value: number): void;

  getY(): number;
  setY(value: number): void;

  getZ(): number;
  setZ(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Point3D.AsObject;
  static toObject(includeInstance: boolean, msg: Point3D): Point3D.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Point3D, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Point3D;
  static deserializeBinaryFromReader(message: Point3D, reader: jspb.BinaryReader): Point3D;
}

export namespace Point3D {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
  }
}

