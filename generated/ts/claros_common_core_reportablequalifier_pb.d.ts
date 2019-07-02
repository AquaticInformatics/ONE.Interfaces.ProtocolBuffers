// package: claros.common.core
// file: claros_common_core_reportablequalifier.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_reportablequalifier_type_pb from "./claros_common_core_reportablequalifier_type_pb";

export class ReportableQualifier extends jspb.Message {
  getReportablequalifiertype(): claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap[keyof claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap];
  setReportablequalifiertype(value: claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap[keyof claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap]): void;

  getQualifiedvalue(): string;
  setQualifiedvalue(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportableQualifier.AsObject;
  static toObject(includeInstance: boolean, msg: ReportableQualifier): ReportableQualifier.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportableQualifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportableQualifier;
  static deserializeBinaryFromReader(message: ReportableQualifier, reader: jspb.BinaryReader): ReportableQualifier;
}

export namespace ReportableQualifier {
  export type AsObject = {
    reportablequalifiertype: claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap[keyof claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap],
    qualifiedvalue: string,
  }
}

