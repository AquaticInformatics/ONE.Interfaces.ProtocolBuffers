# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_calibration_value.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_instrument_calibration_value.proto',
  package='claros.instrument',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n)claros_instrument_calibration_value.proto\x12\x11\x63laros.instrument\"E\n\x10\x43\x61librationValue\x12\r\n\x05value\x18\x01 \x01(\x02\x12\x0c\n\x04unit\x18\x02 \x01(\r\x12\x14\n\x0c\x63hemicalForm\x18\x03 \x01(\rb\x06proto3')
)




_CALIBRATIONVALUE = _descriptor.Descriptor(
  name='CalibrationValue',
  full_name='claros.instrument.CalibrationValue',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='value', full_name='claros.instrument.CalibrationValue.value', index=0,
      number=1, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='unit', full_name='claros.instrument.CalibrationValue.unit', index=1,
      number=2, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='chemicalForm', full_name='claros.instrument.CalibrationValue.chemicalForm', index=2,
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
  serialized_start=64,
  serialized_end=133,
)

DESCRIPTOR.message_types_by_name['CalibrationValue'] = _CALIBRATIONVALUE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CalibrationValue = _reflection.GeneratedProtocolMessageType('CalibrationValue', (_message.Message,), dict(
  DESCRIPTOR = _CALIBRATIONVALUE,
  __module__ = 'claros_instrument_calibration_value_pb2'
  # @@protoc_insertion_point(class_scope:claros.instrument.CalibrationValue)
  ))
_sym_db.RegisterMessage(CalibrationValue)


# @@protoc_insertion_point(module_scope)