// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_datasource_type.proto

#ifndef PROTOBUF_INCLUDED_claros_5fcommon_5fcore_5fdatasource_5ftype_2eproto
#define PROTOBUF_INCLUDED_claros_5fcommon_5fcore_5fdatasource_5ftype_2eproto

#include <limits>
#include <string>

#include <google/protobuf/port_def.inc>
#if PROTOBUF_VERSION < 3007000
#error This file was generated by a newer version of protoc which is
#error incompatible with your Protocol Buffer headers. Please update
#error your headers.
#endif
#if 3007001 < PROTOBUF_MIN_PROTOC_VERSION
#error This file was generated by an older version of protoc which is
#error incompatible with your Protocol Buffer headers. Please
#error regenerate this file with a newer version of protoc.
#endif

#include <google/protobuf/port_undef.inc>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/arena.h>
#include <google/protobuf/arenastring.h>
#include <google/protobuf/generated_message_table_driven.h>
#include <google/protobuf/generated_message_util.h>
#include <google/protobuf/inlined_string_field.h>
#include <google/protobuf/metadata.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/generated_enum_reflection.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5fcommon_5fcore_5fdatasource_5ftype_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5fcommon_5fcore_5fdatasource_5ftype_2eproto {
  static const ::google::protobuf::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::ParseTable schema[1]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors_claros_5fcommon_5fcore_5fdatasource_5ftype_2eproto();
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace common {
namespace core {

enum DataSourceType {
  DATASOURCE_UNKNOWN = 0,
  DATASOURCE_FORM = 1,
  DATASOURCE_COMPUTATION = 2,
  DATASOURCE_SPREADSHEET = 3,
  DATASOURCE_INSTRUMENTMEASUREMENT = 4,
  DATASOURCE_IMPORT = 5,
  DATASOURCE_SPREADSHEET_DEFINITION = 6,
  DataSourceType_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::google::protobuf::int32>::min(),
  DataSourceType_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::google::protobuf::int32>::max()
};
bool DataSourceType_IsValid(int value);
const DataSourceType DataSourceType_MIN = DATASOURCE_UNKNOWN;
const DataSourceType DataSourceType_MAX = DATASOURCE_SPREADSHEET_DEFINITION;
const int DataSourceType_ARRAYSIZE = DataSourceType_MAX + 1;

const ::google::protobuf::EnumDescriptor* DataSourceType_descriptor();
inline const ::std::string& DataSourceType_Name(DataSourceType value) {
  return ::google::protobuf::internal::NameOfEnum(
    DataSourceType_descriptor(), value);
}
inline bool DataSourceType_Parse(
    const ::std::string& name, DataSourceType* value) {
  return ::google::protobuf::internal::ParseNamedEnum<DataSourceType>(
    DataSourceType_descriptor(), name, value);
}
// ===================================================================


// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace core
}  // namespace common
}  // namespace claros

namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::claros::common::core::DataSourceType> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::claros::common::core::DataSourceType>() {
  return ::claros::common::core::DataSourceType_descriptor();
}

}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5fcommon_5fcore_5fdatasource_5ftype_2eproto
