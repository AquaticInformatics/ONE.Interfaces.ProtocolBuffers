# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_core_reportablequalifierdefinition.proto

require 'google/protobuf'

require 'claros_common_core_reportablequalifier_type_pb'
require 'claros_common_core_reportablequalifierdefinition_type_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_core_reportablequalifierdefinition.proto", :syntax => :proto3) do
    add_message "claros.common.core.ReportableQualifierDefinition" do
      optional :reportableQualifierType, :enum, 1, "claros.common.core.ReportableQualifierType"
      optional :reportableQualifierDefinitionType, :enum, 2, "claros.common.core.ReportableQualifierDefinitionType"
      optional :constantValue, :double, 3
    end
  end
end

module Claros
  module Common
    module Core
      ReportableQualifierDefinition = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.core.ReportableQualifierDefinition").msgclass
    end
  end
end
