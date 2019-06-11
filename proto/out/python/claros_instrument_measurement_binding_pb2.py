# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_measurement_binding.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_core_aggregate_type_pb2 as claros__common__core__aggregate__type__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_instrument_measurement_binding.proto',
  package='claros.instrument',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n+claros_instrument_measurement_binding.proto\x12\x11\x63laros.instrument\x1a\'claros_common_core_aggregate_type.proto\"\x89\x01\n\x1cInstrumentMeasurementBinding\x12\x1f\n\x17instrumentMeasurementId\x18\x01 \x01(\t\x12\x38\n\raggregateType\x18\x02 \x01(\x0e\x32!.claros.common.core.AggregateType\x12\x0e\n\x06unitId\x18\x03 \x01(\rb\x06proto3')
  ,
  dependencies=[claros__common__core__aggregate__type__pb2.DESCRIPTOR,])




_INSTRUMENTMEASUREMENTBINDING = _descriptor.Descriptor(
  name='InstrumentMeasurementBinding',
  full_name='claros.instrument.InstrumentMeasurementBinding',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='instrumentMeasurementId', full_name='claros.instrument.InstrumentMeasurementBinding.instrumentMeasurementId', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='aggregateType', full_name='claros.instrument.InstrumentMeasurementBinding.aggregateType', index=1,
      number=2, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='unitId', full_name='claros.instrument.InstrumentMeasurementBinding.unitId', index=2,
      number=3, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=108,
  serialized_end=245,
)

_INSTRUMENTMEASUREMENTBINDING.fields_by_name['aggregateType'].enum_type = claros__common__core__aggregate__type__pb2._AGGREGATETYPE
DESCRIPTOR.message_types_by_name['InstrumentMeasurementBinding'] = _INSTRUMENTMEASUREMENTBINDING
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

InstrumentMeasurementBinding = _reflection.GeneratedProtocolMessageType('InstrumentMeasurementBinding', (_message.Message,), dict(
  DESCRIPTOR = _INSTRUMENTMEASUREMENTBINDING,
  __module__ = 'claros_instrument_measurement_binding_pb2'
  # @@protoc_insertion_point(class_scope:claros.instrument.InstrumentMeasurementBinding)
  ))
_sym_db.RegisterMessage(InstrumentMeasurementBinding)


# @@protoc_insertion_point(module_scope)
