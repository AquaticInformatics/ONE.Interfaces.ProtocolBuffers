// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_gis_multi_point3d.proto

#ifndef PROTOBUF_INCLUDED_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto
#define PROTOBUF_INCLUDED_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto

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
#include <google/protobuf/message.h>
#include <google/protobuf/repeated_field.h>  // IWYU pragma: export
#include <google/protobuf/extension_set.h>  // IWYU pragma: export
#include <google/protobuf/unknown_field_set.h>
#include "claros_common_gis_point3d.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto {
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
void AddDescriptors_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto();
namespace claros {
namespace common {
namespace gis {
class MultiPoint3D;
class MultiPoint3DDefaultTypeInternal;
extern MultiPoint3DDefaultTypeInternal _MultiPoint3D_default_instance_;
}  // namespace gis
}  // namespace common
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::common::gis::MultiPoint3D* Arena::CreateMaybeMessage<::claros::common::gis::MultiPoint3D>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace common {
namespace gis {

// ===================================================================

class MultiPoint3D :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.common.gis.MultiPoint3D) */ {
 public:
  MultiPoint3D();
  virtual ~MultiPoint3D();

  MultiPoint3D(const MultiPoint3D& from);

  inline MultiPoint3D& operator=(const MultiPoint3D& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  MultiPoint3D(MultiPoint3D&& from) noexcept
    : MultiPoint3D() {
    *this = ::std::move(from);
  }

  inline MultiPoint3D& operator=(MultiPoint3D&& from) noexcept {
    if (GetArenaNoVirtual() == from.GetArenaNoVirtual()) {
      if (this != &from) InternalSwap(&from);
    } else {
      CopyFrom(from);
    }
    return *this;
  }
  #endif
  static const ::google::protobuf::Descriptor* descriptor() {
    return default_instance().GetDescriptor();
  }
  static const MultiPoint3D& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const MultiPoint3D* internal_default_instance() {
    return reinterpret_cast<const MultiPoint3D*>(
               &_MultiPoint3D_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(MultiPoint3D* other);
  friend void swap(MultiPoint3D& a, MultiPoint3D& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline MultiPoint3D* New() const final {
    return CreateMaybeMessage<MultiPoint3D>(nullptr);
  }

  MultiPoint3D* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<MultiPoint3D>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const MultiPoint3D& from);
  void MergeFrom(const MultiPoint3D& from);
  PROTOBUF_ATTRIBUTE_REINITIALIZES void Clear() final;
  bool IsInitialized() const final;

  size_t ByteSizeLong() const final;
  #if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  static const char* _InternalParse(const char* begin, const char* end, void* object, ::google::protobuf::internal::ParseContext* ctx);
  ::google::protobuf::internal::ParseFunc _ParseFunc() const final { return _InternalParse; }
  #else
  bool MergePartialFromCodedStream(
      ::google::protobuf::io::CodedInputStream* input) final;
  #endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  void SerializeWithCachedSizes(
      ::google::protobuf::io::CodedOutputStream* output) const final;
  ::google::protobuf::uint8* InternalSerializeWithCachedSizesToArray(
      ::google::protobuf::uint8* target) const final;
  int GetCachedSize() const final { return _cached_size_.Get(); }

  private:
  void SharedCtor();
  void SharedDtor();
  void SetCachedSize(int size) const final;
  void InternalSwap(MultiPoint3D* other);
  private:
  inline ::google::protobuf::Arena* GetArenaNoVirtual() const {
    return nullptr;
  }
  inline void* MaybeArenaPtr() const {
    return nullptr;
  }
  public:

  ::google::protobuf::Metadata GetMetadata() const final;

  // nested types ----------------------------------------------------

  // accessors -------------------------------------------------------

  // repeated .claros.common.gis.Point3D point = 1;
  int point_size() const;
  void clear_point();
  static const int kPointFieldNumber = 1;
  ::claros::common::gis::Point3D* mutable_point(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::common::gis::Point3D >*
      mutable_point();
  const ::claros::common::gis::Point3D& point(int index) const;
  ::claros::common::gis::Point3D* add_point();
  const ::google::protobuf::RepeatedPtrField< ::claros::common::gis::Point3D >&
      point() const;

  // @@protoc_insertion_point(class_scope:claros.common.gis.MultiPoint3D)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::claros::common::gis::Point3D > point_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// MultiPoint3D

// repeated .claros.common.gis.Point3D point = 1;
inline int MultiPoint3D::point_size() const {
  return point_.size();
}
inline ::claros::common::gis::Point3D* MultiPoint3D::mutable_point(int index) {
  // @@protoc_insertion_point(field_mutable:claros.common.gis.MultiPoint3D.point)
  return point_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::common::gis::Point3D >*
MultiPoint3D::mutable_point() {
  // @@protoc_insertion_point(field_mutable_list:claros.common.gis.MultiPoint3D.point)
  return &point_;
}
inline const ::claros::common::gis::Point3D& MultiPoint3D::point(int index) const {
  // @@protoc_insertion_point(field_get:claros.common.gis.MultiPoint3D.point)
  return point_.Get(index);
}
inline ::claros::common::gis::Point3D* MultiPoint3D::add_point() {
  // @@protoc_insertion_point(field_add:claros.common.gis.MultiPoint3D.point)
  return point_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::common::gis::Point3D >&
MultiPoint3D::point() const {
  // @@protoc_insertion_point(field_list:claros.common.gis.MultiPoint3D.point)
  return point_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace gis
}  // namespace common
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5fcommon_5fgis_5fmulti_5fpoint3d_2eproto