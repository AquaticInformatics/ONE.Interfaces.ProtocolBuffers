# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_gis_multi_point3d.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_gis_point3d_pb2 as claros__common__gis__point3d__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_common_gis_multi_point3d.proto',
  package='claros.common.gis',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n%claros_common_gis_multi_point3d.proto\x12\x11\x63laros.common.gis\x1a\x1f\x63laros_common_gis_point3d.proto\"9\n\x0cMultiPoint3D\x12)\n\x05point\x18\x01 \x03(\x0b\x32\x1a.claros.common.gis.Point3Db\x06proto3')
  ,
  dependencies=[claros__common__gis__point3d__pb2.DESCRIPTOR,])




_MULTIPOINT3D = _descriptor.Descriptor(
  name='MultiPoint3D',
  full_name='claros.common.gis.MultiPoint3D',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='point', full_name='claros.common.gis.MultiPoint3D.point', index=0,
      number=1, type=11, cpp_type=10, label=3,
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
  serialized_start=93,
  serialized_end=150,
)

_MULTIPOINT3D.fields_by_name['point'].message_type = claros__common__gis__point3d__pb2._POINT3D
DESCRIPTOR.message_types_by_name['MultiPoint3D'] = _MULTIPOINT3D
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

MultiPoint3D = _reflection.GeneratedProtocolMessageType('MultiPoint3D', (_message.Message,), dict(
  DESCRIPTOR = _MULTIPOINT3D,
  __module__ = 'claros_common_gis_multi_point3d_pb2'
  # @@protoc_insertion_point(class_scope:claros.common.gis.MultiPoint3D)
  ))
_sym_db.RegisterMessage(MultiPoint3D)


# @@protoc_insertion_point(module_scope)