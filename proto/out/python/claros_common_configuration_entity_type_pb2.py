# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_configuration_entity_type.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_common_configuration_entity_type.proto',
  package='claros.common.configuration',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n-claros_common_configuration_entity_type.proto\x12\x1b\x63laros.common.configuration*9\n\nEntityType\x12\x12\n\x0e\x45NTITY_UNKNOWN\x10\x00\x12\x17\n\x13\x45NTITY_FORMTEMPLATE\x10\x01\x62\x06proto3')
)

_ENTITYTYPE = _descriptor.EnumDescriptor(
  name='EntityType',
  full_name='claros.common.configuration.EntityType',
  filename=None,
  file=DESCRIPTOR,
  values=[
    _descriptor.EnumValueDescriptor(
      name='ENTITY_UNKNOWN', index=0, number=0,
      serialized_options=None,
      type=None),
    _descriptor.EnumValueDescriptor(
      name='ENTITY_FORMTEMPLATE', index=1, number=1,
      serialized_options=None,
      type=None),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=78,
  serialized_end=135,
)
_sym_db.RegisterEnumDescriptor(_ENTITYTYPE)

EntityType = enum_type_wrapper.EnumTypeWrapper(_ENTITYTYPE)
ENTITY_UNKNOWN = 0
ENTITY_FORMTEMPLATE = 1


DESCRIPTOR.enum_types_by_name['EntityType'] = _ENTITYTYPE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)


# @@protoc_insertion_point(module_scope)
