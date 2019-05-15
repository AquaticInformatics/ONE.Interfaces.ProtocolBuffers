# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_gis_gis.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_gis_point2d_pb2 as claros__common__gis__point2d__pb2
import claros_common_gis_point3d_pb2 as claros__common__gis__point3d__pb2
import claros_common_gis_multi_point2d_pb2 as claros__common__gis__multi__point2d__pb2
import claros_common_gis_multi_point3d_pb2 as claros__common__gis__multi__point3d__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_common_gis_gis.proto',
  package='claros.common.gis',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1b\x63laros_common_gis_gis.proto\x12\x11\x63laros.common.gis\x1a\x1f\x63laros_common_gis_point2d.proto\x1a\x1f\x63laros_common_gis_point3d.proto\x1a%claros_common_gis_multi_point2d.proto\x1a%claros_common_gis_multi_point3d.proto\"\xcf\x01\n\x03GIS\x12+\n\x07point2d\x18\x01 \x01(\x0b\x32\x1a.claros.common.gis.Point2D\x12+\n\x07point3d\x18\x02 \x01(\x0b\x32\x1a.claros.common.gis.Point3D\x12\x36\n\rmulti_point2d\x18\x03 \x01(\x0b\x32\x1f.claros.common.gis.MultiPoint2D\x12\x36\n\rmulti_point3d\x18\x04 \x01(\x0b\x32\x1f.claros.common.gis.MultiPoint3Db\x06proto3')
  ,
  dependencies=[claros__common__gis__point2d__pb2.DESCRIPTOR,claros__common__gis__point3d__pb2.DESCRIPTOR,claros__common__gis__multi__point2d__pb2.DESCRIPTOR,claros__common__gis__multi__point3d__pb2.DESCRIPTOR,])




_GIS = _descriptor.Descriptor(
  name='GIS',
  full_name='claros.common.gis.GIS',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='point2d', full_name='claros.common.gis.GIS.point2d', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='point3d', full_name='claros.common.gis.GIS.point3d', index=1,
      number=2, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='multi_point2d', full_name='claros.common.gis.GIS.multi_point2d', index=2,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR),
    _descriptor.FieldDescriptor(
      name='multi_point3d', full_name='claros.common.gis.GIS.multi_point3d', index=3,
      number=4, type=11, cpp_type=10, label=1,
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
  serialized_end=402,
)

_GIS.fields_by_name['point2d'].message_type = claros__common__gis__point2d__pb2._POINT2D
_GIS.fields_by_name['point3d'].message_type = claros__common__gis__point3d__pb2._POINT3D
_GIS.fields_by_name['multi_point2d'].message_type = claros__common__gis__multi__point2d__pb2._MULTIPOINT2D
_GIS.fields_by_name['multi_point3d'].message_type = claros__common__gis__multi__point3d__pb2._MULTIPOINT3D
DESCRIPTOR.message_types_by_name['GIS'] = _GIS
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

GIS = _reflection.GeneratedProtocolMessageType('GIS', (_message.Message,), dict(
  DESCRIPTOR = _GIS,
  __module__ = 'claros_common_gis_gis_pb2'
  # @@protoc_insertion_point(class_scope:claros.common.gis.GIS)
  ))
_sym_db.RegisterMessage(GIS)


# @@protoc_insertion_point(module_scope)
