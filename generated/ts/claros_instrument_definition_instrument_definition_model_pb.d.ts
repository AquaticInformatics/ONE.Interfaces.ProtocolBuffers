// package: claros.instrument
// file: claros_instrument_definition_instrument_definition_model.proto

import * as jspb from "google-protobuf";
import * as claros_instrument_type_pb from "./claros_instrument_type_pb";
import * as claros_instrument_definition_instrument_group_type_pb from "./claros_instrument_definition_instrument_group_type_pb";
import * as claros_instrument_definition_instrument_manufacturer_type_pb from "./claros_instrument_definition_instrument_manufacturer_type_pb";

export class InstrumentDefinitionModel extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getI18nkeyname(): string;
  setI18nkeyname(value: string): void;

  getInstrumentgrouptype(): claros_instrument_definition_instrument_group_type_pb.InstrumentGroupTypeMap[keyof claros_instrument_definition_instrument_group_type_pb.InstrumentGroupTypeMap];
  setInstrumentgrouptype(value: claros_instrument_definition_instrument_group_type_pb.InstrumentGroupTypeMap[keyof claros_instrument_definition_instrument_group_type_pb.InstrumentGroupTypeMap]): void;

  getName(): string;
  setName(value: string): void;

  getCanhavechildren(): boolean;
  setCanhavechildren(value: boolean): void;

  getMusthaveparent(): boolean;
  setMusthaveparent(value: boolean): void;

  getRootlistvisible(): boolean;
  setRootlistvisible(value: boolean): void;

  getEmitsmeasurements(): boolean;
  setEmitsmeasurements(value: boolean): void;

  getPicturesmallurl(): string;
  setPicturesmallurl(value: string): void;

  getPicturelargeurl(): string;
  setPicturelargeurl(value: string): void;

  getUsesfid(): boolean;
  setUsesfid(value: boolean): void;

  getInstrumentmanufacturer(): claros_instrument_definition_instrument_manufacturer_type_pb.InstrumentManufacturerTypeMap[keyof claros_instrument_definition_instrument_manufacturer_type_pb.InstrumentManufacturerTypeMap];
  setInstrumentmanufacturer(value: claros_instrument_definition_instrument_manufacturer_type_pb.InstrumentManufacturerTypeMap[keyof claros_instrument_definition_instrument_manufacturer_type_pb.InstrumentManufacturerTypeMap]): void;

  getFidinstrumentcode(): string;
  setFidinstrumentcode(value: string): void;

  getGuidedworkflowsupport(): boolean;
  setGuidedworkflowsupport(value: boolean): void;

  getTransmissioninterval(): number;
  setTransmissioninterval(value: number): void;

  getDescription(): string;
  setDescription(value: string): void;

  getInstrumenttype(): claros_instrument_type_pb.InstrumentTypeMap[keyof claros_instrument_type_pb.InstrumentTypeMap];
  setInstrumenttype(value: claros_instrument_type_pb.InstrumentTypeMap[keyof claros_instrument_type_pb.InstrumentTypeMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstrumentDefinitionModel.AsObject;
  static toObject(includeInstance: boolean, msg: InstrumentDefinitionModel): InstrumentDefinitionModel.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: InstrumentDefinitionModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstrumentDefinitionModel;
  static deserializeBinaryFromReader(message: InstrumentDefinitionModel, reader: jspb.BinaryReader): InstrumentDefinitionModel;
}

export namespace InstrumentDefinitionModel {
  export type AsObject = {
    id: string,
    i18nkeyname: string,
    instrumentgrouptype: claros_instrument_definition_instrument_group_type_pb.InstrumentGroupTypeMap[keyof claros_instrument_definition_instrument_group_type_pb.InstrumentGroupTypeMap],
    name: string,
    canhavechildren: boolean,
    musthaveparent: boolean,
    rootlistvisible: boolean,
    emitsmeasurements: boolean,
    picturesmallurl: string,
    picturelargeurl: string,
    usesfid: boolean,
    instrumentmanufacturer: claros_instrument_definition_instrument_manufacturer_type_pb.InstrumentManufacturerTypeMap[keyof claros_instrument_definition_instrument_manufacturer_type_pb.InstrumentManufacturerTypeMap],
    fidinstrumentcode: string,
    guidedworkflowsupport: boolean,
    transmissioninterval: number,
    description: string,
    instrumenttype: claros_instrument_type_pb.InstrumentTypeMap[keyof claros_instrument_type_pb.InstrumentTypeMap],
  }
}

