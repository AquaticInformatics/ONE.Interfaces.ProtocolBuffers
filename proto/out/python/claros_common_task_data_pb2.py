# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_task_data.proto

import sys
_b=sys.version_info[0]<3 and (lambda x:x) or (lambda x:x.encode('latin1'))
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import claros_common_task_definition_binding_instrument_maintenance_pb2 as claros__common__task__definition__binding__instrument__maintenance__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='claros_common_task_data.proto',
  package='claros.common.task',
  syntax='proto3',
  serialized_options=None,
  serialized_pb=_b('\n\x1d\x63laros_common_task_data.proto\x12\x12\x63laros.common.task\x1a\x42\x63laros_common_task_definition_binding_instrument_maintenance.proto\"o\n\x08TaskData\x12X\n\x1c\x62indingInstrumentMaintenance\x18\x01 \x01(\x0b\x32\x30.claros.common.task.BindingInstrumentMaintenanceH\x00\x42\t\n\x07\x62indingb\x06proto3')
  ,
  dependencies=[claros__common__task__definition__binding__instrument__maintenance__pb2.DESCRIPTOR,])




_TASKDATA = _descriptor.Descriptor(
  name='TaskData',
  full_name='claros.common.task.TaskData',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  fields=[
    _descriptor.FieldDescriptor(
      name='bindingInstrumentMaintenance', full_name='claros.common.task.TaskData.bindingInstrumentMaintenance', index=0,
      number=1, type=11, cpp_type=10, label=1,
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
    _descriptor.OneofDescriptor(
      name='binding', full_name='claros.common.task.TaskData.binding',
      index=0, containing_type=None, fields=[]),
  ],
  serialized_start=121,
  serialized_end=232,
)

_TASKDATA.fields_by_name['bindingInstrumentMaintenance'].message_type = claros__common__task__definition__binding__instrument__maintenance__pb2._BINDINGINSTRUMENTMAINTENANCE
_TASKDATA.oneofs_by_name['binding'].fields.append(
  _TASKDATA.fields_by_name['bindingInstrumentMaintenance'])
_TASKDATA.fields_by_name['bindingInstrumentMaintenance'].containing_oneof = _TASKDATA.oneofs_by_name['binding']
DESCRIPTOR.message_types_by_name['TaskData'] = _TASKDATA
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

TaskData = _reflection.GeneratedProtocolMessageType('TaskData', (_message.Message,), dict(
  DESCRIPTOR = _TASKDATA,
  __module__ = 'claros_common_task_data_pb2'
  # @@protoc_insertion_point(class_scope:claros.common.task.TaskData)
  ))
_sym_db.RegisterMessage(TaskData)


# @@protoc_insertion_point(module_scope)
