# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_core_dayofweek.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_core_dayofweek.proto", :syntax => :proto3) do
    add_enum "claros.common.core.DayOfWeek" do
      value :DOW_UNKNOWN, 0
      value :DOW_SUNDAY, 1
      value :DOW_MONDAY, 2
      value :DOW_TUESDAY, 3
      value :DOW_WEDNESDAY, 4
      value :DOW_THURSDAY, 5
      value :DOW_FRIDAY, 6
      value :DOW_SATURDAY, 7
    end
  end
end

module Claros
  module Common
    module Core
      DayOfWeek = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.core.DayOfWeek").enummodule
    end
  end
end
