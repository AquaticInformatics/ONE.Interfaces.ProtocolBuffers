# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_task_data.proto

require 'google/protobuf'

require 'claros_common_task_definition_binding_instrument_maintenance_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_task_data.proto", :syntax => :proto3) do
    add_message "claros.common.task.TaskData" do
      oneof :binding do
        optional :bindingInstrumentMaintenance, :message, 1, "claros.common.task.BindingInstrumentMaintenance"
      end
    end
  end
end

module Claros
  module Common
    module Task
      TaskData = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.task.TaskData").msgclass
    end
  end
end
