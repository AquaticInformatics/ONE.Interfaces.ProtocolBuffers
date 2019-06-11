// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_clarosdatetime.proto

#ifndef PROTOBUF_INCLUDED_claros_5fcommon_5fcore_5fclarosdatetime_2eproto
#define PROTOBUF_INCLUDED_claros_5fcommon_5fcore_5fclarosdatetime_2eproto

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
#include "claros_common_core_mobiledatetime.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5fcommon_5fcore_5fclarosdatetime_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5fcommon_5fcore_5fclarosdatetime_2eproto {
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
void AddDescriptors_claros_5fcommon_5fcore_5fclarosdatetime_2eproto();
namespace claros {
namespace common {
namespace core {
class ClarosDateTime;
class ClarosDateTimeDefaultTypeInternal;
extern ClarosDateTimeDefaultTypeInternal _ClarosDateTime_default_instance_;
}  // namespace core
}  // namespace common
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::common::core::ClarosDateTime* Arena::CreateMaybeMessage<::claros::common::core::ClarosDateTime>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace common {
namespace core {

// ===================================================================

class ClarosDateTime :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.common.core.ClarosDateTime) */ {
 public:
  ClarosDateTime();
  virtual ~ClarosDateTime();

  ClarosDateTime(const ClarosDateTime& from);

  inline ClarosDateTime& operator=(const ClarosDateTime& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  ClarosDateTime(ClarosDateTime&& from) noexcept
    : ClarosDateTime() {
    *this = ::std::move(from);
  }

  inline ClarosDateTime& operator=(ClarosDateTime&& from) noexcept {
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
  static const ClarosDateTime& default_instance();

  enum ClarosDateTimeCase {
    kMobileDateTime = 1,
    kJsonDateTime = 2,
    kTicks = 3,
    CLAROSDATETIME_NOT_SET = 0,
  };

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const ClarosDateTime* internal_default_instance() {
    return reinterpret_cast<const ClarosDateTime*>(
               &_ClarosDateTime_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(ClarosDateTime* other);
  friend void swap(ClarosDateTime& a, ClarosDateTime& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline ClarosDateTime* New() const final {
    return CreateMaybeMessage<ClarosDateTime>(nullptr);
  }

  ClarosDateTime* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<ClarosDateTime>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const ClarosDateTime& from);
  void MergeFrom(const ClarosDateTime& from);
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
  void InternalSwap(ClarosDateTime* other);
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

  // .claros.common.core.MobileDateTime mobileDateTime = 1;
  bool has_mobiledatetime() const;
  void clear_mobiledatetime();
  static const int kMobileDateTimeFieldNumber = 1;
  const ::claros::common::core::MobileDateTime& mobiledatetime() const;
  ::claros::common::core::MobileDateTime* release_mobiledatetime();
  ::claros::common::core::MobileDateTime* mutable_mobiledatetime();
  void set_allocated_mobiledatetime(::claros::common::core::MobileDateTime* mobiledatetime);

  // string jsonDateTime = 2;
  private:
  bool has_jsondatetime() const;
  public:
  void clear_jsondatetime();
  static const int kJsonDateTimeFieldNumber = 2;
  const ::std::string& jsondatetime() const;
  void set_jsondatetime(const ::std::string& value);
  #if LANG_CXX11
  void set_jsondatetime(::std::string&& value);
  #endif
  void set_jsondatetime(const char* value);
  void set_jsondatetime(const char* value, size_t size);
  ::std::string* mutable_jsondatetime();
  ::std::string* release_jsondatetime();
  void set_allocated_jsondatetime(::std::string* jsondatetime);

  // uint64 ticks = 3;
  private:
  bool has_ticks() const;
  public:
  void clear_ticks();
  static const int kTicksFieldNumber = 3;
  ::google::protobuf::uint64 ticks() const;
  void set_ticks(::google::protobuf::uint64 value);

  void clear_clarosDateTime();
  ClarosDateTimeCase clarosDateTime_case() const;
  // @@protoc_insertion_point(class_scope:claros.common.core.ClarosDateTime)
 private:
  class HasBitSetters;
  void set_has_mobiledatetime();
  void set_has_jsondatetime();
  void set_has_ticks();

  inline bool has_clarosDateTime() const;
  inline void clear_has_clarosDateTime();

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  union ClarosDateTimeUnion {
    ClarosDateTimeUnion() {}
    ::claros::common::core::MobileDateTime* mobiledatetime_;
    ::google::protobuf::internal::ArenaStringPtr jsondatetime_;
    ::google::protobuf::uint64 ticks_;
  } clarosDateTime_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  ::google::protobuf::uint32 _oneof_case_[1];

  friend struct ::TableStruct_claros_5fcommon_5fcore_5fclarosdatetime_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// ClarosDateTime

// .claros.common.core.MobileDateTime mobileDateTime = 1;
inline bool ClarosDateTime::has_mobiledatetime() const {
  return clarosDateTime_case() == kMobileDateTime;
}
inline void ClarosDateTime::set_has_mobiledatetime() {
  _oneof_case_[0] = kMobileDateTime;
}
inline ::claros::common::core::MobileDateTime* ClarosDateTime::release_mobiledatetime() {
  // @@protoc_insertion_point(field_release:claros.common.core.ClarosDateTime.mobileDateTime)
  if (has_mobiledatetime()) {
    clear_has_clarosDateTime();
      ::claros::common::core::MobileDateTime* temp = clarosDateTime_.mobiledatetime_;
    clarosDateTime_.mobiledatetime_ = nullptr;
    return temp;
  } else {
    return nullptr;
  }
}
inline const ::claros::common::core::MobileDateTime& ClarosDateTime::mobiledatetime() const {
  // @@protoc_insertion_point(field_get:claros.common.core.ClarosDateTime.mobileDateTime)
  return has_mobiledatetime()
      ? *clarosDateTime_.mobiledatetime_
      : *reinterpret_cast< ::claros::common::core::MobileDateTime*>(&::claros::common::core::_MobileDateTime_default_instance_);
}
inline ::claros::common::core::MobileDateTime* ClarosDateTime::mutable_mobiledatetime() {
  if (!has_mobiledatetime()) {
    clear_clarosDateTime();
    set_has_mobiledatetime();
    clarosDateTime_.mobiledatetime_ = CreateMaybeMessage< ::claros::common::core::MobileDateTime >(
        GetArenaNoVirtual());
  }
  // @@protoc_insertion_point(field_mutable:claros.common.core.ClarosDateTime.mobileDateTime)
  return clarosDateTime_.mobiledatetime_;
}

// string jsonDateTime = 2;
inline bool ClarosDateTime::has_jsondatetime() const {
  return clarosDateTime_case() == kJsonDateTime;
}
inline void ClarosDateTime::set_has_jsondatetime() {
  _oneof_case_[0] = kJsonDateTime;
}
inline void ClarosDateTime::clear_jsondatetime() {
  if (has_jsondatetime()) {
    clarosDateTime_.jsondatetime_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
    clear_has_clarosDateTime();
  }
}
inline const ::std::string& ClarosDateTime::jsondatetime() const {
  // @@protoc_insertion_point(field_get:claros.common.core.ClarosDateTime.jsonDateTime)
  if (has_jsondatetime()) {
    return clarosDateTime_.jsondatetime_.GetNoArena();
  }
  return *&::google::protobuf::internal::GetEmptyStringAlreadyInited();
}
inline void ClarosDateTime::set_jsondatetime(const ::std::string& value) {
  // @@protoc_insertion_point(field_set:claros.common.core.ClarosDateTime.jsonDateTime)
  if (!has_jsondatetime()) {
    clear_clarosDateTime();
    set_has_jsondatetime();
    clarosDateTime_.jsondatetime_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  clarosDateTime_.jsondatetime_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.common.core.ClarosDateTime.jsonDateTime)
}
#if LANG_CXX11
inline void ClarosDateTime::set_jsondatetime(::std::string&& value) {
  // @@protoc_insertion_point(field_set:claros.common.core.ClarosDateTime.jsonDateTime)
  if (!has_jsondatetime()) {
    clear_clarosDateTime();
    set_has_jsondatetime();
    clarosDateTime_.jsondatetime_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  clarosDateTime_.jsondatetime_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.common.core.ClarosDateTime.jsonDateTime)
}
#endif
inline void ClarosDateTime::set_jsondatetime(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  if (!has_jsondatetime()) {
    clear_clarosDateTime();
    set_has_jsondatetime();
    clarosDateTime_.jsondatetime_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  clarosDateTime_.jsondatetime_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.common.core.ClarosDateTime.jsonDateTime)
}
inline void ClarosDateTime::set_jsondatetime(const char* value, size_t size) {
  if (!has_jsondatetime()) {
    clear_clarosDateTime();
    set_has_jsondatetime();
    clarosDateTime_.jsondatetime_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  clarosDateTime_.jsondatetime_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(
      reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.common.core.ClarosDateTime.jsonDateTime)
}
inline ::std::string* ClarosDateTime::mutable_jsondatetime() {
  if (!has_jsondatetime()) {
    clear_clarosDateTime();
    set_has_jsondatetime();
    clarosDateTime_.jsondatetime_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  }
  // @@protoc_insertion_point(field_mutable:claros.common.core.ClarosDateTime.jsonDateTime)
  return clarosDateTime_.jsondatetime_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* ClarosDateTime::release_jsondatetime() {
  // @@protoc_insertion_point(field_release:claros.common.core.ClarosDateTime.jsonDateTime)
  if (has_jsondatetime()) {
    clear_has_clarosDateTime();
    return clarosDateTime_.jsondatetime_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  } else {
    return nullptr;
  }
}
inline void ClarosDateTime::set_allocated_jsondatetime(::std::string* jsondatetime) {
  if (has_clarosDateTime()) {
    clear_clarosDateTime();
  }
  if (jsondatetime != nullptr) {
    set_has_jsondatetime();
    clarosDateTime_.jsondatetime_.UnsafeSetDefault(jsondatetime);
  }
  // @@protoc_insertion_point(field_set_allocated:claros.common.core.ClarosDateTime.jsonDateTime)
}

// uint64 ticks = 3;
inline bool ClarosDateTime::has_ticks() const {
  return clarosDateTime_case() == kTicks;
}
inline void ClarosDateTime::set_has_ticks() {
  _oneof_case_[0] = kTicks;
}
inline void ClarosDateTime::clear_ticks() {
  if (has_ticks()) {
    clarosDateTime_.ticks_ = PROTOBUF_ULONGLONG(0);
    clear_has_clarosDateTime();
  }
}
inline ::google::protobuf::uint64 ClarosDateTime::ticks() const {
  // @@protoc_insertion_point(field_get:claros.common.core.ClarosDateTime.ticks)
  if (has_ticks()) {
    return clarosDateTime_.ticks_;
  }
  return PROTOBUF_ULONGLONG(0);
}
inline void ClarosDateTime::set_ticks(::google::protobuf::uint64 value) {
  if (!has_ticks()) {
    clear_clarosDateTime();
    set_has_ticks();
  }
  clarosDateTime_.ticks_ = value;
  // @@protoc_insertion_point(field_set:claros.common.core.ClarosDateTime.ticks)
}

inline bool ClarosDateTime::has_clarosDateTime() const {
  return clarosDateTime_case() != CLAROSDATETIME_NOT_SET;
}
inline void ClarosDateTime::clear_has_clarosDateTime() {
  _oneof_case_[0] = CLAROSDATETIME_NOT_SET;
}
inline ClarosDateTime::ClarosDateTimeCase ClarosDateTime::clarosDateTime_case() const {
  return ClarosDateTime::ClarosDateTimeCase(_oneof_case_[0]);
}
#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace core
}  // namespace common
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5fcommon_5fcore_5fclarosdatetime_2eproto
