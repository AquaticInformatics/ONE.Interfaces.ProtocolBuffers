# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_event_data_calibration.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_instrument_event_data_calibration_standard_pb2 as claros__instrument__event__data__calibration__standard__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_instrument_event_data_calibration.proto',
  package='claros.instrument.event',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n.claros_instrument_event_data_calibration.proto\x12\x17\x63laros.instrument.event\x1a\x37\x63laros_instrument_event_data_calibration_standard.proto\"\x8b\x02\n\x14\x45ventDataCalibration\x12\n\n\x02ID\x18\x01 \x01(\t\x12\x0e\n\x06userID\x18\x02 \x01(\t\x12\x0c\n\x04time\x18\x03 \x01(\x04\x12\x0e\n\x06status\x18\x04 \x01(\r\x12\x13\n\x0boffsetUnits\x18\x05 \x01(\r\x12\x12\n\nslopeUnits\x18\x06 \x01(\r\x12\r\n\x05slope\x18\x07 \x01(\x02\x12\x10\n\x08slopeAux\x18\x08 \x01(\x02\x12\x0e\n\x06offset\x18\t \x01(\x02\x12\n\n\x02r2\x18\n \x01(\x02\x12S\n\x14\x63\x61librationStandards\x18\x0b \x03(\x0b\x32\x35.claros.instrument.event.EventDataCalibrationStandardb\x06proto3')
  ,
  dependencies=[claros__instrument__event__data__calibration__standard__pb2.DESCRIPTOR,])




_EVENTDATACALIBRATION = _descriptor.Descriptor(
  name='EventDataCalibration',
  full_name='claros.instrument.event.EventDataCalibration',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='ID', full_name='claros.instrument.event.EventDataCalibration.ID', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='userID', full_name='claros.instrument.event.EventDataCalibration.userID', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='time', full_name='claros.instrument.event.EventDataCalibration.time', index=2,
      number=3, type=4, cpp_type=4, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='status', full_name='claros.instrument.event.EventDataCalibration.status', index=3,
      number=4, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='offsetUnits', full_name='claros.instrument.event.EventDataCalibration.offsetUnits', index=4,
      number=5, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='slopeUnits', full_name='claros.instrument.event.EventDataCalibration.slopeUnits', index=5,
      number=6, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='slope', full_name='claros.instrument.event.EventDataCalibration.slope', index=6,
      number=7, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='slopeAux', full_name='claros.instrument.event.EventDataCalibration.slopeAux', index=7,
      number=8, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='offset', full_name='claros.instrument.event.EventDataCalibration.offset', index=8,
      number=9, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='r2', full_name='claros.instrument.event.EventDataCalibration.r2', index=9,
      number=10, type=2, cpp_type=6, label=1,
      has_default_value=False, default_value=float(0),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='calibrationStandards', full_name='claros.instrument.event.EventDataCalibration.calibrationStandards', index=10,
      number=11, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=133,
  serialized_end=400,
)

_EVENTDATACALIBRATION.fields_by_name['calibrationStandards'].message_type = claros__instrument__event__data__calibration__standard__pb2._EVENTDATACALIBRATIONSTANDARD
DESCRIPTOR.message_types_by_name['EventDataCalibration'] = _EVENTDATACALIBRATION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

EventDataCalibration = _reflection.GeneratedProtocolMessageType('EventDataCalibration', (_message.Message,), dict(
  DESCRIPTOR = _EVENTDATACALIBRATION,
  __module__ = 'claros_instrument_event_data_calibration_pb2'
  # @@protoc_insertion_point(class_scope:claros.instrument.event.EventDataCalibration)
  ))
_sym_db.RegisterMessage(EventDataCalibration)


# @@protoc_insertion_point(module_scope)
