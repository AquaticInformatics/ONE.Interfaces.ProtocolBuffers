# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: claros_common_gis_point2d.proto

require 'google/protobuf'

Google::Protobuf::DescriptorPool.generated_pool.build do
  add_file("claros_common_gis_point2d.proto", :syntax => :proto3) do
    add_message "claros.common.gis.Point2D" do
      optional :x, :float, 1
      optional :y, :float, 2
    end
  end
end

module Claros
  module Common
    module Gis
      Point2D = Google::Protobuf::DescriptorPool.generated_pool.lookup("claros.common.gis.Point2D").msgclass
    end
  end
end