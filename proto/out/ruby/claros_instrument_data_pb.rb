# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_instrument_data.proto

require 'google/protobuf'

require 'claros_instrument_event_pb'
require 'claros_instrument_measurement_pb'
require 'claros_common_datetime_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_instrument_data.proto", :syntax => :proto3) do
    add_message "claros.instrument.InstrumentData" do
      optional :tenantId, :string, 1
      optional :fusionId, :string, 2
      optional :events, :message, 3, "claros.instrument.InstrumentEvent"
      repeated :measurements, :message, 4, "claros.instrument.InstrumentMeasurement"
      map :settings, :string, :string, 5
      map :states, :string, :string, 6
      optional :instrumentDataDateTime, :message, 7, "claros.common.ClarosDateTime"
    end
  end
end

module Claros
  module Instrument
    InstrumentData = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.instrument.InstrumentData").msgclass
  end
end
