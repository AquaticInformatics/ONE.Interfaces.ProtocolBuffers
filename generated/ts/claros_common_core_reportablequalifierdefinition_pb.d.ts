// package: claros.common.core
// file: claros_common_core_reportablequalifierdefinition.proto

import * as jspb from "google-protobuf";
import * as claros_common_core_reportablequalifier_type_pb from "./claros_common_core_reportablequalifier_type_pb";
import * as claros_common_core_reportablequalifierdefinition_type_pb from "./claros_common_core_reportablequalifierdefinition_type_pb";

export class ReportableQualifierDefinition extends jspb.Message {
  getReportablequalifiertype(): claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap[keyof claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap];
  setReportablequalifiertype(value: claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap[keyof claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap]): void;

  getReportablequalifierdefinitiontype(): claros_common_core_reportablequalifierdefinition_type_pb.ReportableQualifierDefinitionTypeMap[keyof claros_common_core_reportablequalifierdefinition_type_pb.ReportableQualifierDefinitionTypeMap];
  setReportablequalifierdefinitiontype(value: claros_common_core_reportablequalifierdefinition_type_pb.ReportableQualifierDefinitionTypeMap[keyof claros_common_core_reportablequalifierdefinition_type_pb.ReportableQualifierDefinitionTypeMap]): void;

  getConstantvalue(): number;
  setConstantvalue(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportableQualifierDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ReportableQualifierDefinition): ReportableQualifierDefinition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReportableQualifierDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportableQualifierDefinition;
  static deserializeBinaryFromReader(message: ReportableQualifierDefinition, reader: jspb.BinaryReader): ReportableQualifierDefinition;
}

export namespace ReportableQualifierDefinition {
  export type AsObject = {
    reportablequalifiertype: claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap[keyof claros_common_core_reportablequalifier_type_pb.ReportableQualifierTypeMap],
    reportablequalifierdefinitiontype: claros_common_core_reportablequalifierdefinition_type_pb.ReportableQualifierDefinitionTypeMap[keyof claros_common_core_reportablequalifierdefinition_type_pb.ReportableQualifierDefinitionTypeMap],
    constantvalue: number,
  }
}

