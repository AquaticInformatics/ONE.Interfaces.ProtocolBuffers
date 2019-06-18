// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_configuration_entity_type.proto

#ifndef PROTOBUF_INCLUDED_claros_5fcommon_5fconfiguration_5fentity_5ftype_2eproto
#define PROTOBUF_INCLUDED_claros_5fcommon_5fconfiguration_5fentity_5ftype_2eproto

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
#define PROTOBUF_INTERNAL_EXPORT_claros_5fcommon_5fconfiguration_5fentity_5ftype_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5fcommon_5fconfiguration_5fentity_5ftype_2eproto {
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
void AddDescriptors_claros_5fcommon_5fconfiguration_5fentity_5ftype_2eproto();
namespace google {
namespace protobuf {
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace common {
namespace configuration {

enum EntityType {
  ENTITY_UNKNOWN = 0,
  ENTITY_FORMTEMPLATE = 1,
  EntityType_INT_MIN_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::google::protobuf::int32>::min(),
  EntityType_INT_MAX_SENTINEL_DO_NOT_USE_ = std::numeric_limits<::google::protobuf::int32>::max()
};
bool EntityType_IsValid(int value);
const EntityType EntityType_MIN = ENTITY_UNKNOWN;
const EntityType EntityType_MAX = ENTITY_FORMTEMPLATE;
const int EntityType_ARRAYSIZE = EntityType_MAX + 1;

const ::google::protobuf::EnumDescriptor* EntityType_descriptor();
inline const ::std::string& EntityType_Name(EntityType value) {
  return ::google::protobuf::internal::NameOfEnum(
    EntityType_descriptor(), value);
}
inline bool EntityType_Parse(
    const ::std::string& name, EntityType* value) {
  return ::google::protobuf::internal::ParseNamedEnum<EntityType>(
    EntityType_descriptor(), name, value);
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

}  // namespace configuration
}  // namespace common
}  // namespace claros

namespace google {
namespace protobuf {

template <> struct is_proto_enum< ::claros::common::configuration::EntityType> : ::std::true_type {};
template <>
inline const EnumDescriptor* GetEnumDescriptor< ::claros::common::configuration::EntityType>() {
  return ::claros::common::configuration::EntityType_descriptor();
}

}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5fcommon_5fconfiguration_5fentity_5ftype_2eproto
