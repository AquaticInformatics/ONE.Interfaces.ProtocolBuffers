# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_operations_spreadsheet_worksheet_type.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_operations_spreadsheet_worksheet_type.proto", :syntax => :proto3) do
    add_enum "claros.operations.spreadsheet.WorksheetType" do
      value :WORKSHEET_UNKNOWN, 0
      value :WORKSHEET_FIFTEEN_MINUTE, 1
      value :WORKSHEET_HOUR, 2
      value :WORKSHEET_FOUR_HOUR, 3
      value :WORKSHEET_DAILY, 4
    end
  end
end

module Claros
  module Operations
    module Spreadsheet
      WorksheetType = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.operations.spreadsheet.WorksheetType").enummodule
    end
  end
end
