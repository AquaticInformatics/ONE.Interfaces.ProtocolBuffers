// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_measurement_scsensor_binding.proto

#ifndef PROTOBUF_INCLUDED_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto
#define PROTOBUF_INCLUDED_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto

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
#include "claros_common_core_clarosdatetime.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto {
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
void AddDescriptors_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto();
namespace claros {
namespace instrument {
namespace measurement {
class SCSensorBinding;
class SCSensorBindingDefaultTypeInternal;
extern SCSensorBindingDefaultTypeInternal _SCSensorBinding_default_instance_;
}  // namespace measurement
}  // namespace instrument
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::instrument::measurement::SCSensorBinding* Arena::CreateMaybeMessage<::claros::instrument::measurement::SCSensorBinding>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace instrument {
namespace measurement {

// ===================================================================

class SCSensorBinding :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.instrument.measurement.SCSensorBinding) */ {
 public:
  SCSensorBinding();
  virtual ~SCSensorBinding();

  SCSensorBinding(const SCSensorBinding& from);

  inline SCSensorBinding& operator=(const SCSensorBinding& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  SCSensorBinding(SCSensorBinding&& from) noexcept
    : SCSensorBinding() {
    *this = ::std::move(from);
  }

  inline SCSensorBinding& operator=(SCSensorBinding&& from) noexcept {
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
  static const SCSensorBinding& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const SCSensorBinding* internal_default_instance() {
    return reinterpret_cast<const SCSensorBinding*>(
               &_SCSensorBinding_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(SCSensorBinding* other);
  friend void swap(SCSensorBinding& a, SCSensorBinding& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline SCSensorBinding* New() const final {
    return CreateMaybeMessage<SCSensorBinding>(nullptr);
  }

  SCSensorBinding* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<SCSensorBinding>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const SCSensorBinding& from);
  void MergeFrom(const SCSensorBinding& from);
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
  void InternalSwap(SCSensorBinding* other);
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

  // string tag = 3;
  void clear_tag();
  static const int kTagFieldNumber = 3;
  const ::std::string& tag() const;
  void set_tag(const ::std::string& value);
  #if LANG_CXX11
  void set_tag(::std::string&& value);
  #endif
  void set_tag(const char* value);
  void set_tag(const char* value, size_t size);
  ::std::string* mutable_tag();
  ::std::string* release_tag();
  void set_allocated_tag(::std::string* tag);

  // .claros.common.core.ClarosDateTime validFrom = 4;
  bool has_validfrom() const;
  void clear_validfrom();
  static const int kValidFromFieldNumber = 4;
  const ::claros::common::core::ClarosDateTime& validfrom() const;
  ::claros::common::core::ClarosDateTime* release_validfrom();
  ::claros::common::core::ClarosDateTime* mutable_validfrom();
  void set_allocated_validfrom(::claros::common::core::ClarosDateTime* validfrom);

  // .claros.common.core.ClarosDateTime validTo = 5;
  bool has_validto() const;
  void clear_validto();
  static const int kValidToFieldNumber = 5;
  const ::claros::common::core::ClarosDateTime& validto() const;
  ::claros::common::core::ClarosDateTime* release_validto();
  ::claros::common::core::ClarosDateTime* mutable_validto();
  void set_allocated_validto(::claros::common::core::ClarosDateTime* validto);

  // uint32 channel = 2;
  void clear_channel();
  static const int kChannelFieldNumber = 2;
  ::google::protobuf::uint32 channel() const;
  void set_channel(::google::protobuf::uint32 value);

  // @@protoc_insertion_point(class_scope:claros.instrument.measurement.SCSensorBinding)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr tag_;
  ::claros::common::core::ClarosDateTime* validfrom_;
  ::claros::common::core::ClarosDateTime* validto_;
  ::google::protobuf::uint32 channel_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// SCSensorBinding

// uint32 channel = 2;
inline void SCSensorBinding::clear_channel() {
  channel_ = 0u;
}
inline ::google::protobuf::uint32 SCSensorBinding::channel() const {
  // @@protoc_insertion_point(field_get:claros.instrument.measurement.SCSensorBinding.channel)
  return channel_;
}
inline void SCSensorBinding::set_channel(::google::protobuf::uint32 value) {
  
  channel_ = value;
  // @@protoc_insertion_point(field_set:claros.instrument.measurement.SCSensorBinding.channel)
}

// string tag = 3;
inline void SCSensorBinding::clear_tag() {
  tag_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& SCSensorBinding::tag() const {
  // @@protoc_insertion_point(field_get:claros.instrument.measurement.SCSensorBinding.tag)
  return tag_.GetNoArena();
}
inline void SCSensorBinding::set_tag(const ::std::string& value) {
  
  tag_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.instrument.measurement.SCSensorBinding.tag)
}
#if LANG_CXX11
inline void SCSensorBinding::set_tag(::std::string&& value) {
  
  tag_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.instrument.measurement.SCSensorBinding.tag)
}
#endif
inline void SCSensorBinding::set_tag(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  tag_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.instrument.measurement.SCSensorBinding.tag)
}
inline void SCSensorBinding::set_tag(const char* value, size_t size) {
  
  tag_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.instrument.measurement.SCSensorBinding.tag)
}
inline ::std::string* SCSensorBinding::mutable_tag() {
  
  // @@protoc_insertion_point(field_mutable:claros.instrument.measurement.SCSensorBinding.tag)
  return tag_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* SCSensorBinding::release_tag() {
  // @@protoc_insertion_point(field_release:claros.instrument.measurement.SCSensorBinding.tag)
  
  return tag_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void SCSensorBinding::set_allocated_tag(::std::string* tag) {
  if (tag != nullptr) {
    
  } else {
    
  }
  tag_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), tag);
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.measurement.SCSensorBinding.tag)
}

// .claros.common.core.ClarosDateTime validFrom = 4;
inline bool SCSensorBinding::has_validfrom() const {
  return this != internal_default_instance() && validfrom_ != nullptr;
}
inline const ::claros::common::core::ClarosDateTime& SCSensorBinding::validfrom() const {
  const ::claros::common::core::ClarosDateTime* p = validfrom_;
  // @@protoc_insertion_point(field_get:claros.instrument.measurement.SCSensorBinding.validFrom)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::core::ClarosDateTime*>(
      &::claros::common::core::_ClarosDateTime_default_instance_);
}
inline ::claros::common::core::ClarosDateTime* SCSensorBinding::release_validfrom() {
  // @@protoc_insertion_point(field_release:claros.instrument.measurement.SCSensorBinding.validFrom)
  
  ::claros::common::core::ClarosDateTime* temp = validfrom_;
  validfrom_ = nullptr;
  return temp;
}
inline ::claros::common::core::ClarosDateTime* SCSensorBinding::mutable_validfrom() {
  
  if (validfrom_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::core::ClarosDateTime>(GetArenaNoVirtual());
    validfrom_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.measurement.SCSensorBinding.validFrom)
  return validfrom_;
}
inline void SCSensorBinding::set_allocated_validfrom(::claros::common::core::ClarosDateTime* validfrom) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(validfrom_);
  }
  if (validfrom) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      validfrom = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, validfrom, submessage_arena);
    }
    
  } else {
    
  }
  validfrom_ = validfrom;
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.measurement.SCSensorBinding.validFrom)
}

// .claros.common.core.ClarosDateTime validTo = 5;
inline bool SCSensorBinding::has_validto() const {
  return this != internal_default_instance() && validto_ != nullptr;
}
inline const ::claros::common::core::ClarosDateTime& SCSensorBinding::validto() const {
  const ::claros::common::core::ClarosDateTime* p = validto_;
  // @@protoc_insertion_point(field_get:claros.instrument.measurement.SCSensorBinding.validTo)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::core::ClarosDateTime*>(
      &::claros::common::core::_ClarosDateTime_default_instance_);
}
inline ::claros::common::core::ClarosDateTime* SCSensorBinding::release_validto() {
  // @@protoc_insertion_point(field_release:claros.instrument.measurement.SCSensorBinding.validTo)
  
  ::claros::common::core::ClarosDateTime* temp = validto_;
  validto_ = nullptr;
  return temp;
}
inline ::claros::common::core::ClarosDateTime* SCSensorBinding::mutable_validto() {
  
  if (validto_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::core::ClarosDateTime>(GetArenaNoVirtual());
    validto_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.measurement.SCSensorBinding.validTo)
  return validto_;
}
inline void SCSensorBinding::set_allocated_validto(::claros::common::core::ClarosDateTime* validto) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(validto_);
  }
  if (validto) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      validto = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, validto, submessage_arena);
    }
    
  } else {
    
  }
  validto_ = validto;
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.measurement.SCSensorBinding.validTo)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace measurement
}  // namespace instrument
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5finstrument_5fmeasurement_5fscsensor_5fbinding_2eproto
