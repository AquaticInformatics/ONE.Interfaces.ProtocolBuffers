# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_form_formdataentry_type.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_form_formdataentry_type.proto", :syntax => :proto3) do
    add_enum "claros.common.form.FormDataEntryType" do
      value :FORM_DATE_ENTRY_UNKNOWN, 0
      value :FORM_DATE_ENTRY_INSTRUMENT, 1
      value :FORM_DATE_ENTRY_TOTALIZER, 2
      value :FORM_DATE_ENTRY_CONSUMPTION, 3
      value :FORM_DATE_ENTRY_TEXT, 4
    end
  end
end

module Claros
  module Common
    module Form
      FormDataEntryType = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.form.FormDataEntryType").enummodule
    end
  end
end
