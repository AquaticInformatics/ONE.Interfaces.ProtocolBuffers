# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_limit.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_limit.proto", :syntax => :proto3) do
    add_message "claros.common.Limit" do
      optional :severity, :uint32, 1
      optional :polarity, :uint32, 2
      optional :i18nKey, :string, 3
    end
  end
end

module Claros
  module Common
    Limit = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.Limit").msgclass
  end
end