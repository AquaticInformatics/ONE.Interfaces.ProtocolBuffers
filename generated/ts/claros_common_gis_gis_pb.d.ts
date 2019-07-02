// package: claros.common.gis
// file: claros_common_gis_gis.proto

import * as jspb from "google-protobuf";
import * as claros_common_gis_point2d_pb from "./claros_common_gis_point2d_pb";
import * as claros_common_gis_point3d_pb from "./claros_common_gis_point3d_pb";
import * as claros_common_gis_multi_point2d_pb from "./claros_common_gis_multi_point2d_pb";
import * as claros_common_gis_multi_point3d_pb from "./claros_common_gis_multi_point3d_pb";

export class GIS extends jspb.Message {
  hasPoint2d(): boolean;
  clearPoint2d(): void;
  getPoint2d(): claros_common_gis_point2d_pb.Point2D | undefined;
  setPoint2d(value?: claros_common_gis_point2d_pb.Point2D): void;

  hasPoint3d(): boolean;
  clearPoint3d(): void;
  getPoint3d(): claros_common_gis_point3d_pb.Point3D | undefined;
  setPoint3d(value?: claros_common_gis_point3d_pb.Point3D): void;

  hasMultiPoint2d(): boolean;
  clearMultiPoint2d(): void;
  getMultiPoint2d(): claros_common_gis_multi_point2d_pb.MultiPoint2D | undefined;
  setMultiPoint2d(value?: claros_common_gis_multi_point2d_pb.MultiPoint2D): void;

  hasMultiPoint3d(): boolean;
  clearMultiPoint3d(): void;
  getMultiPoint3d(): claros_common_gis_multi_point3d_pb.MultiPoint3D | undefined;
  setMultiPoint3d(value?: claros_common_gis_multi_point3d_pb.MultiPoint3D): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GIS.AsObject;
  static toObject(includeInstance: boolean, msg: GIS): GIS.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GIS, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GIS;
  static deserializeBinaryFromReader(message: GIS, reader: jspb.BinaryReader): GIS;
}

export namespace GIS {
  export type AsObject = {
    point2d?: claros_common_gis_point2d_pb.Point2D.AsObject,
    point3d?: claros_common_gis_point3d_pb.Point3D.AsObject,
    multiPoint2d?: claros_common_gis_multi_point2d_pb.MultiPoint2D.AsObject,
    multiPoint3d?: claros_common_gis_multi_point3d_pb.MultiPoint3D.AsObject,
  }
}

