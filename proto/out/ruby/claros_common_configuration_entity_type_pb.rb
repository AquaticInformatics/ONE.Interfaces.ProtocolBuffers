# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_configuration_entity_type.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_configuration_entity_type.proto", :syntax => :proto3) do
    add_enum "claros.common.configuration.EntityType" do
      value :ENTITY_UNKNOWN, 0
      value :ENTITY_FORMTEMPLATE, 1
    end
  end
end

module Claros
  module Common
    module Configuration
      EntityType = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.configuration.EntityType").enummodule
    end
  end
end
