// package: claros.common.gis
// file: claros_common_gis_multi_point2d.proto

import * as jspb from "google-protobuf";
import * as claros_common_gis_point2d_pb from "./claros_common_gis_point2d_pb";

export class MultiPoint2D extends jspb.Message {
  clearPointList(): void;
  getPointList(): Array<claros_common_gis_point2d_pb.Point2D>;
  setPointList(value: Array<claros_common_gis_point2d_pb.Point2D>): void;
  addPoint(value?: claros_common_gis_point2d_pb.Point2D, index?: number): claros_common_gis_point2d_pb.Point2D;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultiPoint2D.AsObject;
  static toObject(includeInstance: boolean, msg: MultiPoint2D): MultiPoint2D.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MultiPoint2D, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultiPoint2D;
  static deserializeBinaryFromReader(message: MultiPoint2D, reader: jspb.BinaryReader): MultiPoint2D;
}

export namespace MultiPoint2D {
  export type AsObject = {
    pointList: Array<claros_common_gis_point2d_pb.Point2D.AsObject>,
  }
}

