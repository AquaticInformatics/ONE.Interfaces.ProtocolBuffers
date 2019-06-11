# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_measurement_field_binding.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_core_clarosdatetime_pb2 as claros__common__core__clarosdatetime__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_instrument_measurement_field_binding.proto',
  package='claros.instrument',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n1claros_instrument_measurement_field_binding.proto\x12\x11\x63laros.instrument\x1a\'claros_common_core_clarosdatetime.proto\"\x8b\x01\n!InstrumentMeasurementFieldBinding\x12\x1f\n\x17instrumentMeasurementId\x18\x01 \x01(\t\x12\x35\n\ttimestamp\x18\x02 \x01(\x0b\x32\".claros.common.core.ClarosDateTime\x12\x0e\n\x06unitId\x18\x03 \x01(\rb\x06proto3')
  ,
  dependencies=[claros__common__core__clarosdatetime__pb2.DESCRIPTOR,])




_INSTRUMENTMEASUREMENTFIELDBINDING = _descriptor.Descriptor(
  name='InstrumentMeasurementFieldBinding',
  full_name='claros.instrument.InstrumentMeasurementFieldBinding',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='instrumentMeasurementId', full_name='claros.instrument.InstrumentMeasurementFieldBinding.instrumentMeasurementId', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='timestamp', full_name='claros.instrument.InstrumentMeasurementFieldBinding.timestamp', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='unitId', full_name='claros.instrument.InstrumentMeasurementFieldBinding.unitId', index=2,
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
  serialized_start=114,
  serialized_end=253,
)

_INSTRUMENTMEASUREMENTFIELDBINDING.fields_by_name['timestamp'].message_type = claros__common__core__clarosdatetime__pb2._CLAROSDATETIME
DESCRIPTOR.message_types_by_name['InstrumentMeasurementFieldBinding'] = _INSTRUMENTMEASUREMENTFIELDBINDING
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

InstrumentMeasurementFieldBinding = _reflection.GeneratedProtocolMessageType('InstrumentMeasurementFieldBinding', (_message.Message,), dict(
  DESCRIPTOR = _INSTRUMENTMEASUREMENTFIELDBINDING,
  __module__ = 'claros_instrument_measurement_field_binding_pb2'
  # @@protoc_insertion_point(class_scope:claros.instrument.InstrumentMeasurementFieldBinding)
  ))
_sym_db.RegisterMessage(InstrumentMeasurementFieldBinding)


# @@protoc_insertion_point(module_scope)
