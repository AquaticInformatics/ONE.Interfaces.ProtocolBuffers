// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_calibration_standard.proto

#ifndef PROTOBUF_INCLUDED_claros_5finstrument_5fcalibration_5fstandard_2eproto
#define PROTOBUF_INCLUDED_claros_5finstrument_5fcalibration_5fstandard_2eproto

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
#include "claros_instrument_calibration_value.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5finstrument_5fcalibration_5fstandard_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5finstrument_5fcalibration_5fstandard_2eproto {
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
void AddDescriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto();
namespace claros {
namespace instrument {
class CalibrationStandard;
class CalibrationStandardDefaultTypeInternal;
extern CalibrationStandardDefaultTypeInternal _CalibrationStandard_default_instance_;
}  // namespace instrument
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::instrument::CalibrationStandard* Arena::CreateMaybeMessage<::claros::instrument::CalibrationStandard>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace instrument {

// ===================================================================

class CalibrationStandard :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.instrument.CalibrationStandard) */ {
 public:
  CalibrationStandard();
  virtual ~CalibrationStandard();

  CalibrationStandard(const CalibrationStandard& from);

  inline CalibrationStandard& operator=(const CalibrationStandard& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  CalibrationStandard(CalibrationStandard&& from) noexcept
    : CalibrationStandard() {
    *this = ::std::move(from);
  }

  inline CalibrationStandard& operator=(CalibrationStandard&& from) noexcept {
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
  static const CalibrationStandard& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const CalibrationStandard* internal_default_instance() {
    return reinterpret_cast<const CalibrationStandard*>(
               &_CalibrationStandard_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(CalibrationStandard* other);
  friend void swap(CalibrationStandard& a, CalibrationStandard& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline CalibrationStandard* New() const final {
    return CreateMaybeMessage<CalibrationStandard>(nullptr);
  }

  CalibrationStandard* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<CalibrationStandard>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const CalibrationStandard& from);
  void MergeFrom(const CalibrationStandard& from);
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
  void InternalSwap(CalibrationStandard* other);
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

  // repeated .claros.instrument.CalibrationValue secondaryValues = 4;
  int secondaryvalues_size() const;
  void clear_secondaryvalues();
  static const int kSecondaryValuesFieldNumber = 4;
  ::claros::instrument::CalibrationValue* mutable_secondaryvalues(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::instrument::CalibrationValue >*
      mutable_secondaryvalues();
  const ::claros::instrument::CalibrationValue& secondaryvalues(int index) const;
  ::claros::instrument::CalibrationValue* add_secondaryvalues();
  const ::google::protobuf::RepeatedPtrField< ::claros::instrument::CalibrationValue >&
      secondaryvalues() const;

  // .claros.instrument.CalibrationValue knownValue = 1;
  bool has_knownvalue() const;
  void clear_knownvalue();
  static const int kKnownValueFieldNumber = 1;
  const ::claros::instrument::CalibrationValue& knownvalue() const;
  ::claros::instrument::CalibrationValue* release_knownvalue();
  ::claros::instrument::CalibrationValue* mutable_knownvalue();
  void set_allocated_knownvalue(::claros::instrument::CalibrationValue* knownvalue);

  // .claros.instrument.CalibrationValue measuredValue = 2;
  bool has_measuredvalue() const;
  void clear_measuredvalue();
  static const int kMeasuredValueFieldNumber = 2;
  const ::claros::instrument::CalibrationValue& measuredvalue() const;
  ::claros::instrument::CalibrationValue* release_measuredvalue();
  ::claros::instrument::CalibrationValue* mutable_measuredvalue();
  void set_allocated_measuredvalue(::claros::instrument::CalibrationValue* measuredvalue);

  // @@protoc_insertion_point(class_scope:claros.instrument.CalibrationStandard)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::claros::instrument::CalibrationValue > secondaryvalues_;
  ::claros::instrument::CalibrationValue* knownvalue_;
  ::claros::instrument::CalibrationValue* measuredvalue_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5finstrument_5fcalibration_5fstandard_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// CalibrationStandard

// .claros.instrument.CalibrationValue knownValue = 1;
inline bool CalibrationStandard::has_knownvalue() const {
  return this != internal_default_instance() && knownvalue_ != nullptr;
}
inline const ::claros::instrument::CalibrationValue& CalibrationStandard::knownvalue() const {
  const ::claros::instrument::CalibrationValue* p = knownvalue_;
  // @@protoc_insertion_point(field_get:claros.instrument.CalibrationStandard.knownValue)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::instrument::CalibrationValue*>(
      &::claros::instrument::_CalibrationValue_default_instance_);
}
inline ::claros::instrument::CalibrationValue* CalibrationStandard::release_knownvalue() {
  // @@protoc_insertion_point(field_release:claros.instrument.CalibrationStandard.knownValue)
  
  ::claros::instrument::CalibrationValue* temp = knownvalue_;
  knownvalue_ = nullptr;
  return temp;
}
inline ::claros::instrument::CalibrationValue* CalibrationStandard::mutable_knownvalue() {
  
  if (knownvalue_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::instrument::CalibrationValue>(GetArenaNoVirtual());
    knownvalue_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.CalibrationStandard.knownValue)
  return knownvalue_;
}
inline void CalibrationStandard::set_allocated_knownvalue(::claros::instrument::CalibrationValue* knownvalue) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(knownvalue_);
  }
  if (knownvalue) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      knownvalue = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, knownvalue, submessage_arena);
    }
    
  } else {
    
  }
  knownvalue_ = knownvalue;
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.CalibrationStandard.knownValue)
}

// .claros.instrument.CalibrationValue measuredValue = 2;
inline bool CalibrationStandard::has_measuredvalue() const {
  return this != internal_default_instance() && measuredvalue_ != nullptr;
}
inline const ::claros::instrument::CalibrationValue& CalibrationStandard::measuredvalue() const {
  const ::claros::instrument::CalibrationValue* p = measuredvalue_;
  // @@protoc_insertion_point(field_get:claros.instrument.CalibrationStandard.measuredValue)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::instrument::CalibrationValue*>(
      &::claros::instrument::_CalibrationValue_default_instance_);
}
inline ::claros::instrument::CalibrationValue* CalibrationStandard::release_measuredvalue() {
  // @@protoc_insertion_point(field_release:claros.instrument.CalibrationStandard.measuredValue)
  
  ::claros::instrument::CalibrationValue* temp = measuredvalue_;
  measuredvalue_ = nullptr;
  return temp;
}
inline ::claros::instrument::CalibrationValue* CalibrationStandard::mutable_measuredvalue() {
  
  if (measuredvalue_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::instrument::CalibrationValue>(GetArenaNoVirtual());
    measuredvalue_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.CalibrationStandard.measuredValue)
  return measuredvalue_;
}
inline void CalibrationStandard::set_allocated_measuredvalue(::claros::instrument::CalibrationValue* measuredvalue) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(measuredvalue_);
  }
  if (measuredvalue) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      measuredvalue = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, measuredvalue, submessage_arena);
    }
    
  } else {
    
  }
  measuredvalue_ = measuredvalue;
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.CalibrationStandard.measuredValue)
}

// repeated .claros.instrument.CalibrationValue secondaryValues = 4;
inline int CalibrationStandard::secondaryvalues_size() const {
  return secondaryvalues_.size();
}
inline ::claros::instrument::CalibrationValue* CalibrationStandard::mutable_secondaryvalues(int index) {
  // @@protoc_insertion_point(field_mutable:claros.instrument.CalibrationStandard.secondaryValues)
  return secondaryvalues_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::instrument::CalibrationValue >*
CalibrationStandard::mutable_secondaryvalues() {
  // @@protoc_insertion_point(field_mutable_list:claros.instrument.CalibrationStandard.secondaryValues)
  return &secondaryvalues_;
}
inline const ::claros::instrument::CalibrationValue& CalibrationStandard::secondaryvalues(int index) const {
  // @@protoc_insertion_point(field_get:claros.instrument.CalibrationStandard.secondaryValues)
  return secondaryvalues_.Get(index);
}
inline ::claros::instrument::CalibrationValue* CalibrationStandard::add_secondaryvalues() {
  // @@protoc_insertion_point(field_add:claros.instrument.CalibrationStandard.secondaryValues)
  return secondaryvalues_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::instrument::CalibrationValue >&
CalibrationStandard::secondaryvalues() const {
  // @@protoc_insertion_point(field_list:claros.instrument.CalibrationStandard.secondaryValues)
  return secondaryvalues_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace instrument
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5finstrument_5fcalibration_5fstandard_2eproto
