// package: claros.common.gis
// file: claros_common_gis_multi_point3d.proto

import * as jspb from "google-protobuf";
import * as claros_common_gis_point3d_pb from "./claros_common_gis_point3d_pb";

export class MultiPoint3D extends jspb.Message {
  clearPointList(): void;
  getPointList(): Array<claros_common_gis_point3d_pb.Point3D>;
  setPointList(value: Array<claros_common_gis_point3d_pb.Point3D>): void;
  addPoint(value?: claros_common_gis_point3d_pb.Point3D, index?: number): claros_common_gis_point3d_pb.Point3D;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiPoint3D.AsObject;
  static toObject(includeInstance: boolean, msg: MultiPoint3D): MultiPoint3D.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiPoint3D, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiPoint3D;
  static deserializeBinaryFromReader(message: MultiPoint3D, reader: jspb.BinaryReader): MultiPoint3D;
}

export namespace MultiPoint3D {
  export type AsObject = {
    pointList: Array<claros_common_gis_point3d_pb.Point3D.AsObject>,
  }
}

