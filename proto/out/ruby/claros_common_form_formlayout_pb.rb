# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_form_formlayout.proto

require 'google/protobuf'

require 'claros_common_form_formsection_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_form_formlayout.proto", :syntax => :proto3) do
    add_message "claros.common.form.FormLayout" do
      repeated :sections, :message, 1, "claros.common.form.FormSection"
    end
  end
end

module Claros
  module Common
    module Form
      FormLayout = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.form.FormLayout").msgclass
    end
  end
end
