# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_computation_propertyselector_type.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_computation_propertyselector_type.proto", :syntax => :proto3) do
    add_enum "claros.common.computation.PropertySelectorType" do
      value :PROPERTY_SELECTOR_UNKNOWN, 0
      value :PROPERTY_SELECTOR_MEASUREMENTTIME, 1
      value :PROPERTY_SELECTOR_BEGINLINETIME, 2
      value :PROPERTY_SELECTOR_ENDLINETIME, 3
      value :PROPERTY_SELECTOR_MEASURMENTVALUE, 4
    end
  end
end

module Claros
  module Common
    module Computation
      PropertySelectorType = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.computation.PropertySelectorType").enummodule
    end
  end
end
