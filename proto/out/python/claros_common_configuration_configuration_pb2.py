# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_configuration_configuration.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_datetime_pb2 as claros__common__datetime__pb2
import claros_common_enum_entitytype_pb2 as claros__common__enum__entitytype__pb2
import claros_common_privileges_pb2 as claros__common__privileges__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_common_configuration_configuration.proto',
  package='claros.common.configuration',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n/claros_common_configuration_configuration.proto\x12\x1b\x63laros.common.configuration\x1a\x1c\x63laros_common_datetime.proto\x1a#claros_common_enum_entitytype.proto\x1a\x1e\x63laros_common_privileges.proto\"\x8e\x03\n\rConfiguration\x12\n\n\x02id\x18\x01 \x01(\t\x12\x13\n\x0b\x63reatedById\x18\x02 \x01(\t\x12*\n\tcreatedOn\x18\x03 \x01(\x0b\x32\x17.claros.common.DateTime\x12\x14\n\x0cmodifiedById\x18\x04 \x01(\t\x12+\n\nmodifiedOn\x18\x05 \x01(\x0b\x32\x17.claros.common.DateTime\x12\x19\n\x11\x63onfigurationData\x18\x06 \x01(\t\x12=\n\x0c\x65ntityTypeId\x18\x07 \x01(\x0e\x32\'.claros.common.configuration.EntityType\x12\x12\n\nfilterById\x18\x08 \x01(\t\x12\x10\n\x08tenantId\x18\t \x01(\t\x12\x0f\n\x07ownerId\x18\n \x01(\t\x12\x0e\n\x06public\x18\x0b \x01(\x08\x12\x0f\n\x07version\x18\x0c \x01(\r\x12;\n\nprivileges\x18\r \x03(\x0b\x32\'.claros.common.configuration.Privilegesb\x06proto3')
  ,
  dependencies=[claros__common__datetime__pb2.DESCRIPTOR,claros__common__enum__entitytype__pb2.DESCRIPTOR,claros__common__privileges__pb2.DESCRIPTOR,])




_CONFIGURATION = _descriptor.Descriptor(
  name='Configuration',
  full_name='claros.common.configuration.Configuration',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='id', full_name='claros.common.configuration.Configuration.id', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='createdById', full_name='claros.common.configuration.Configuration.createdById', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='createdOn', full_name='claros.common.configuration.Configuration.createdOn', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='modifiedById', full_name='claros.common.configuration.Configuration.modifiedById', index=3,
      number=4, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='modifiedOn', full_name='claros.common.configuration.Configuration.modifiedOn', index=4,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='configurationData', full_name='claros.common.configuration.Configuration.configurationData', index=5,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='entityTypeId', full_name='claros.common.configuration.Configuration.entityTypeId', index=6,
      number=7, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='filterById', full_name='claros.common.configuration.Configuration.filterById', index=7,
      number=8, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='tenantId', full_name='claros.common.configuration.Configuration.tenantId', index=8,
      number=9, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='ownerId', full_name='claros.common.configuration.Configuration.ownerId', index=9,
      number=10, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=_b("").decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='public', full_name='claros.common.configuration.Configuration.public', index=10,
      number=11, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='version', full_name='claros.common.configuration.Configuration.version', index=11,
      number=12, type=13, cpp_type=3, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='privileges', full_name='claros.common.configuration.Configuration.privileges', index=12,
      number=13, type=11, cpp_type=10, label=3,
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
  serialized_start=180,
  serialized_end=578,
)

_CONFIGURATION.fields_by_name['createdOn'].message_type = claros__common__datetime__pb2._DATETIME
_CONFIGURATION.fields_by_name['modifiedOn'].message_type = claros__common__datetime__pb2._DATETIME
_CONFIGURATION.fields_by_name['entityTypeId'].enum_type = claros__common__enum__entitytype__pb2._ENTITYTYPE
_CONFIGURATION.fields_by_name['privileges'].message_type = claros__common__privileges__pb2._PRIVILEGES
DESCRIPTOR.message_types_by_name['Configuration'] = _CONFIGURATION
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Configuration = _reflection.GeneratedProtocolMessageType('Configuration', (_message.Message,), dict(
  DESCRIPTOR = _CONFIGURATION,
  __module__ = 'claros_common_configuration_configuration_pb2'
  # @@protoc_insertion_point(class_scope:claros.common.configuration.Configuration)
  ))
_sym_db.RegisterMessage(Configuration)


# @@protoc_insertion_point(module_scope)
