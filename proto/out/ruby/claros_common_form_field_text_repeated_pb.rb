# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_form_field_text_repeated.proto

require 'google/protobuf'

require 'claros_common_form_field_text_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_form_field_text_repeated.proto", :syntax => :proto3) do
    add_message "claros.common.form.FormFieldTextRepeated" do
      repeated :formFieldTextRepeated, :message, 1, "claros.common.form.FormFieldText"
    end
  end
end

module Claros
  module Common
    module Form
      FormFieldTextRepeated = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.form.FormFieldTextRepeated").msgclass
    end
  end
end
