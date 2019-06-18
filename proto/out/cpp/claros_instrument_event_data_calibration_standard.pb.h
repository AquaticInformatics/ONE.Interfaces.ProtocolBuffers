// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_event_data_calibration_standard.proto

#ifndef PROTOBUF_INCLUDED_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto
#define PROTOBUF_INCLUDED_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto

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
#include "claros_instrument_event_data_calibration_value.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto {
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
void AddDescriptors_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto();
namespace claros {
namespace instrument {
namespace event {
class EventDataCalibrationStandard;
class EventDataCalibrationStandardDefaultTypeInternal;
extern EventDataCalibrationStandardDefaultTypeInternal _EventDataCalibrationStandard_default_instance_;
}  // namespace event
}  // namespace instrument
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::instrument::event::EventDataCalibrationStandard* Arena::CreateMaybeMessage<::claros::instrument::event::EventDataCalibrationStandard>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace instrument {
namespace event {

// ===================================================================

class EventDataCalibrationStandard :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.instrument.event.EventDataCalibrationStandard) */ {
 public:
  EventDataCalibrationStandard();
  virtual ~EventDataCalibrationStandard();

  EventDataCalibrationStandard(const EventDataCalibrationStandard& from);

  inline EventDataCalibrationStandard& operator=(const EventDataCalibrationStandard& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  EventDataCalibrationStandard(EventDataCalibrationStandard&& from) noexcept
    : EventDataCalibrationStandard() {
    *this = ::std::move(from);
  }

  inline EventDataCalibrationStandard& operator=(EventDataCalibrationStandard&& from) noexcept {
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
  static const EventDataCalibrationStandard& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const EventDataCalibrationStandard* internal_default_instance() {
    return reinterpret_cast<const EventDataCalibrationStandard*>(
               &_EventDataCalibrationStandard_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(EventDataCalibrationStandard* other);
  friend void swap(EventDataCalibrationStandard& a, EventDataCalibrationStandard& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline EventDataCalibrationStandard* New() const final {
    return CreateMaybeMessage<EventDataCalibrationStandard>(nullptr);
  }

  EventDataCalibrationStandard* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<EventDataCalibrationStandard>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const EventDataCalibrationStandard& from);
  void MergeFrom(const EventDataCalibrationStandard& from);
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
  void InternalSwap(EventDataCalibrationStandard* other);
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

  // repeated .claros.instrument.event.EventDataCalibrationValue secondaryValues = 4;
  int secondaryvalues_size() const;
  void clear_secondaryvalues();
  static const int kSecondaryValuesFieldNumber = 4;
  ::claros::instrument::event::EventDataCalibrationValue* mutable_secondaryvalues(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::instrument::event::EventDataCalibrationValue >*
      mutable_secondaryvalues();
  const ::claros::instrument::event::EventDataCalibrationValue& secondaryvalues(int index) const;
  ::claros::instrument::event::EventDataCalibrationValue* add_secondaryvalues();
  const ::google::protobuf::RepeatedPtrField< ::claros::instrument::event::EventDataCalibrationValue >&
      secondaryvalues() const;

  // .claros.instrument.event.EventDataCalibrationValue knownValue = 1;
  bool has_knownvalue() const;
  void clear_knownvalue();
  static const int kKnownValueFieldNumber = 1;
  const ::claros::instrument::event::EventDataCalibrationValue& knownvalue() const;
  ::claros::instrument::event::EventDataCalibrationValue* release_knownvalue();
  ::claros::instrument::event::EventDataCalibrationValue* mutable_knownvalue();
  void set_allocated_knownvalue(::claros::instrument::event::EventDataCalibrationValue* knownvalue);

  // .claros.instrument.event.EventDataCalibrationValue measuredValue = 2;
  bool has_measuredvalue() const;
  void clear_measuredvalue();
  static const int kMeasuredValueFieldNumber = 2;
  const ::claros::instrument::event::EventDataCalibrationValue& measuredvalue() const;
  ::claros::instrument::event::EventDataCalibrationValue* release_measuredvalue();
  ::claros::instrument::event::EventDataCalibrationValue* mutable_measuredvalue();
  void set_allocated_measuredvalue(::claros::instrument::event::EventDataCalibrationValue* measuredvalue);

  // @@protoc_insertion_point(class_scope:claros.instrument.event.EventDataCalibrationStandard)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::claros::instrument::event::EventDataCalibrationValue > secondaryvalues_;
  ::claros::instrument::event::EventDataCalibrationValue* knownvalue_;
  ::claros::instrument::event::EventDataCalibrationValue* measuredvalue_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// EventDataCalibrationStandard

// .claros.instrument.event.EventDataCalibrationValue knownValue = 1;
inline bool EventDataCalibrationStandard::has_knownvalue() const {
  return this != internal_default_instance() && knownvalue_ != nullptr;
}
inline const ::claros::instrument::event::EventDataCalibrationValue& EventDataCalibrationStandard::knownvalue() const {
  const ::claros::instrument::event::EventDataCalibrationValue* p = knownvalue_;
  // @@protoc_insertion_point(field_get:claros.instrument.event.EventDataCalibrationStandard.knownValue)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::instrument::event::EventDataCalibrationValue*>(
      &::claros::instrument::event::_EventDataCalibrationValue_default_instance_);
}
inline ::claros::instrument::event::EventDataCalibrationValue* EventDataCalibrationStandard::release_knownvalue() {
  // @@protoc_insertion_point(field_release:claros.instrument.event.EventDataCalibrationStandard.knownValue)
  
  ::claros::instrument::event::EventDataCalibrationValue* temp = knownvalue_;
  knownvalue_ = nullptr;
  return temp;
}
inline ::claros::instrument::event::EventDataCalibrationValue* EventDataCalibrationStandard::mutable_knownvalue() {
  
  if (knownvalue_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::instrument::event::EventDataCalibrationValue>(GetArenaNoVirtual());
    knownvalue_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.event.EventDataCalibrationStandard.knownValue)
  return knownvalue_;
}
inline void EventDataCalibrationStandard::set_allocated_knownvalue(::claros::instrument::event::EventDataCalibrationValue* knownvalue) {
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
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.event.EventDataCalibrationStandard.knownValue)
}

// .claros.instrument.event.EventDataCalibrationValue measuredValue = 2;
inline bool EventDataCalibrationStandard::has_measuredvalue() const {
  return this != internal_default_instance() && measuredvalue_ != nullptr;
}
inline const ::claros::instrument::event::EventDataCalibrationValue& EventDataCalibrationStandard::measuredvalue() const {
  const ::claros::instrument::event::EventDataCalibrationValue* p = measuredvalue_;
  // @@protoc_insertion_point(field_get:claros.instrument.event.EventDataCalibrationStandard.measuredValue)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::instrument::event::EventDataCalibrationValue*>(
      &::claros::instrument::event::_EventDataCalibrationValue_default_instance_);
}
inline ::claros::instrument::event::EventDataCalibrationValue* EventDataCalibrationStandard::release_measuredvalue() {
  // @@protoc_insertion_point(field_release:claros.instrument.event.EventDataCalibrationStandard.measuredValue)
  
  ::claros::instrument::event::EventDataCalibrationValue* temp = measuredvalue_;
  measuredvalue_ = nullptr;
  return temp;
}
inline ::claros::instrument::event::EventDataCalibrationValue* EventDataCalibrationStandard::mutable_measuredvalue() {
  
  if (measuredvalue_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::instrument::event::EventDataCalibrationValue>(GetArenaNoVirtual());
    measuredvalue_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.event.EventDataCalibrationStandard.measuredValue)
  return measuredvalue_;
}
inline void EventDataCalibrationStandard::set_allocated_measuredvalue(::claros::instrument::event::EventDataCalibrationValue* measuredvalue) {
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
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.event.EventDataCalibrationStandard.measuredValue)
}

// repeated .claros.instrument.event.EventDataCalibrationValue secondaryValues = 4;
inline int EventDataCalibrationStandard::secondaryvalues_size() const {
  return secondaryvalues_.size();
}
inline ::claros::instrument::event::EventDataCalibrationValue* EventDataCalibrationStandard::mutable_secondaryvalues(int index) {
  // @@protoc_insertion_point(field_mutable:claros.instrument.event.EventDataCalibrationStandard.secondaryValues)
  return secondaryvalues_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::instrument::event::EventDataCalibrationValue >*
EventDataCalibrationStandard::mutable_secondaryvalues() {
  // @@protoc_insertion_point(field_mutable_list:claros.instrument.event.EventDataCalibrationStandard.secondaryValues)
  return &secondaryvalues_;
}
inline const ::claros::instrument::event::EventDataCalibrationValue& EventDataCalibrationStandard::secondaryvalues(int index) const {
  // @@protoc_insertion_point(field_get:claros.instrument.event.EventDataCalibrationStandard.secondaryValues)
  return secondaryvalues_.Get(index);
}
inline ::claros::instrument::event::EventDataCalibrationValue* EventDataCalibrationStandard::add_secondaryvalues() {
  // @@protoc_insertion_point(field_add:claros.instrument.event.EventDataCalibrationStandard.secondaryValues)
  return secondaryvalues_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::instrument::event::EventDataCalibrationValue >&
EventDataCalibrationStandard::secondaryvalues() const {
  // @@protoc_insertion_point(field_list:claros.instrument.event.EventDataCalibrationStandard.secondaryValues)
  return secondaryvalues_;
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace event
}  // namespace instrument
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5finstrument_5fevent_5fdata_5fcalibration_5fstandard_2eproto
