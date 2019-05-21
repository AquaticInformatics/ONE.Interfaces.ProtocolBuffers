# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_event.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_datetime_pb2 as claros__common__datetime__pb2
import claros_instrument_event_metadata_pb2 as claros__instrument__event__metadata__pb2
import claros_instrument_calibration_pb2 as claros__instrument__calibration__pb2
import claros_instrument_prognosys_pb2 as claros__instrument__prognosys__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_instrument_event.proto',
  package='claros.instrument',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1d\x63laros_instrument_event.proto\x12\x11\x63laros.instrument\x1a\x1c\x63laros_common_datetime.proto\x1a&claros_instrument_event_metadata.proto\x1a#claros_instrument_calibration.proto\x1a!claros_instrument_prognosys.proto\"\xa9\x03\n\x0fInstrumentEvent\x12\x34\n\x0c\x63\x61librations\x18\x01 \x03(\x0b\x32\x1e.claros.instrument.Calibration\x12\x30\n\x06\x65rrors\x18\x02 \x03(\x0b\x32 .claros.instrument.EventMetaData\x12.\n\x04info\x18\x03 \x03(\x0b\x32 .claros.instrument.EventMetaData\x12\x30\n\x06limits\x18\x04 \x03(\x0b\x32 .claros.instrument.EventMetaData\x12\x33\n\treminders\x18\x05 \x03(\x0b\x32 .claros.instrument.EventMetaData\x12\x32\n\x08warnings\x18\x06 \x03(\x0b\x32 .claros.instrument.EventMetaData\x12\x33\n\tprognosys\x18\x07 \x03(\x0b\x32 .claros.instrument.PrognosysData\x12.\n\reventDateTime\x18\x08 \x01(\x0b\x32\x17.claros.common.DateTimeb\x06proto3')
  ,
  dependencies=[claros__common__datetime__pb2.DESCRIPTOR,claros__instrument__event__metadata__pb2.DESCRIPTOR,claros__instrument__calibration__pb2.DESCRIPTOR,claros__instrument__prognosys__pb2.DESCRIPTOR,])




_INSTRUMENTEVENT = _descriptor.Descriptor(
  name='InstrumentEvent',
  full_name='claros.instrument.InstrumentEvent',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='calibrations', full_name='claros.instrument.InstrumentEvent.calibrations', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='errors', full_name='claros.instrument.InstrumentEvent.errors', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='info', full_name='claros.instrument.InstrumentEvent.info', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='limits', full_name='claros.instrument.InstrumentEvent.limits', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='reminders', full_name='claros.instrument.InstrumentEvent.reminders', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='warnings', full_name='claros.instrument.InstrumentEvent.warnings', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='prognosys', full_name='claros.instrument.InstrumentEvent.prognosys', index=6,
      number=7, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='eventDateTime', full_name='claros.instrument.InstrumentEvent.eventDateTime', index=7,
      number=8, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
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
  serialized_start=195,
  serialized_end=620,
)

_INSTRUMENTEVENT.fields_by_name['calibrations'].message_type = claros__instrument__calibration__pb2._CALIBRATION
_INSTRUMENTEVENT.fields_by_name['errors'].message_type = claros__instrument__event__metadata__pb2._EVENTMETADATA
_INSTRUMENTEVENT.fields_by_name['info'].message_type = claros__instrument__event__metadata__pb2._EVENTMETADATA
_INSTRUMENTEVENT.fields_by_name['limits'].message_type = claros__instrument__event__metadata__pb2._EVENTMETADATA
_INSTRUMENTEVENT.fields_by_name['reminders'].message_type = claros__instrument__event__metadata__pb2._EVENTMETADATA
_INSTRUMENTEVENT.fields_by_name['warnings'].message_type = claros__instrument__event__metadata__pb2._EVENTMETADATA
_INSTRUMENTEVENT.fields_by_name['prognosys'].message_type = claros__instrument__prognosys__pb2._PROGNOSYSDATA
_INSTRUMENTEVENT.fields_by_name['eventDateTime'].message_type = claros__common__datetime__pb2._DATETIME
DESCRIPTOR.message_types_by_name['InstrumentEvent'] = _INSTRUMENTEVENT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

InstrumentEvent = _reflection.GeneratedProtocolMessageType('InstrumentEvent', (_message.Message,), dict(
  DESCRIPTOR = _INSTRUMENTEVENT,
  __module__ = 'claros_instrument_event_pb2'
  # @@protoc_insertion_point(class_scope:claros.instrument.InstrumentEvent)
  ))
_sym_db.RegisterMessage(InstrumentEvent)


# @@protoc_insertion_point(module_scope)