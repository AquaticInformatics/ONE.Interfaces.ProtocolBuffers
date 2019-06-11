# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_computation_computation.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_computation_variable_pb2 as claros__common__computation__variable__pb2
import claros_common_computation_expressionline_pb2 as claros__common__computation__expressionline__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_common_computation_computation.proto',
  package='claros.common.computation',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n+claros_common_computation_computation.proto\x12\x19\x63laros.common.computation\x1a(claros_common_computation_variable.proto\x1a.claros_common_computation_expressionline.proto\"\xd4\x02\n\x0b\x43omputation\x12\x0f\n\x07i18nKey\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x13\n\x0b\x64\x65scription\x18\x03 \x01(\t\x12;\n\x0einputVariables\x18\x04 \x03(\x0b\x32#.claros.common.computation.Variable\x12<\n\x0foutputVariables\x18\x05 \x03(\x0b\x32#.claros.common.computation.Variable\x12\x42\n\x0f\x65xpressionLines\x18\x06 \x03(\x0b\x32).claros.common.computation.ExpressionLine\x12\x10\n\x08isActive\x18\x07 \x01(\x08\x12\x0f\n\x07isValid\x18\x08 \x01(\x08\x12\x12\n\x08ledgerId\x18\t \x01(\tH\x00\x12\x10\n\x06\x66ormId\x18\n \x01(\tH\x00\x42\t\n\x07\x62indingb\x06proto3')
  ,
  dependencies=[claros__common__computation__variable__pb2.DESCRIPTOR,claros__common__computation__expressionline__pb2.DESCRIPTOR,])




_COMPUTATION = _descriptor.Descriptor(
  name='Computation',
  full_name='claros.common.computation.Computation',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='i18nKey', full_name='claros.common.computation.Computation.i18nKey', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='name', full_name='claros.common.computation.Computation.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='description', full_name='claros.common.computation.Computation.description', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='inputVariables', full_name='claros.common.computation.Computation.inputVariables', index=3,
      number=4, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='outputVariables', full_name='claros.common.computation.Computation.outputVariables', index=4,
      number=5, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='expressionLines', full_name='claros.common.computation.Computation.expressionLines', index=5,
      number=6, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isActive', full_name='claros.common.computation.Computation.isActive', index=6,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='isValid', full_name='claros.common.computation.Computation.isValid', index=7,
      number=8, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ledgerId', full_name='claros.common.computation.Computation.ledgerId', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='formId', full_name='claros.common.computation.Computation.formId', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
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
    _descriptor.OneofDescriptor(
      name='binding', full_name='claros.common.computation.Computation.binding',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=165,
  serialized_end=505,
)

_COMPUTATION.fields_by_name['inputVariables'].message_type = claros__common__computation__variable__pb2._VARIABLE
_COMPUTATION.fields_by_name['outputVariables'].message_type = claros__common__computation__variable__pb2._VARIABLE
_COMPUTATION.fields_by_name['expressionLines'].message_type = claros__common__computation__expressionline__pb2._EXPRESSIONLINE
_COMPUTATION.oneofs_by_name['binding'].fields.append(
  _COMPUTATION.fields_by_name['ledgerId'])
_COMPUTATION.fields_by_name['ledgerId'].containing_oneof = _COMPUTATION.oneofs_by_name['binding']
_COMPUTATION.oneofs_by_name['binding'].fields.append(
  _COMPUTATION.fields_by_name['formId'])
_COMPUTATION.fields_by_name['formId'].containing_oneof = _COMPUTATION.oneofs_by_name['binding']
DESCRIPTOR.message_types_by_name['Computation'] = _COMPUTATION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Computation = _reflection.GeneratedProtocolMessageType('Computation', (_message.Message,), dict(
  DESCRIPTOR = _COMPUTATION,
  __module__ = 'claros_common_computation_computation_pb2'
  # @@protoc_insertion_point(class_scope:claros.common.computation.Computation)
  ))
_sym_db.RegisterMessage(Computation)


# @@protoc_insertion_point(module_scope)
