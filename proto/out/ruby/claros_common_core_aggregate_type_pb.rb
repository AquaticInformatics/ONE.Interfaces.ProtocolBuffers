# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_core_aggregate_type.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_core_aggregate_type.proto", :syntax => :proto3) do
    add_enum "claros.common.core.AggregateType" do
      value :A_UNKNOWN, 0
      value :A_MINIMUM, 1
      value :A_MAXIMUM, 2
      value :A_AVERAGE, 3
    end
  end
end

module Claros
  module Common
    module Core
      AggregateType = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.core.AggregateType").enummodule
    end
  end
end
