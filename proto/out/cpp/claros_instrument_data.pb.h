// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_data.proto

#ifndef PROTOBUF_INCLUDED_claros_5finstrument_5fdata_2eproto
#define PROTOBUF_INCLUDED_claros_5finstrument_5fdata_2eproto

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
#include <google/protobuf/map.h>  // IWYU pragma: export
#include <google/protobuf/map_entry.h>
#include <google/protobuf/map_field_inl.h>
#include <google/protobuf/unknown_field_set.h>
#include "claros_instrument_event.pb.h"
#include "claros_instrument_measurement.pb.h"
#include "claros_common_datetime.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5finstrument_5fdata_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5finstrument_5fdata_2eproto {
  static const ::google::protobuf::internal::ParseTableField entries[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::AuxillaryParseTableField aux[]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::ParseTable schema[3]
    PROTOBUF_SECTION_VARIABLE(protodesc_cold);
  static const ::google::protobuf::internal::FieldMetadata field_metadata[];
  static const ::google::protobuf::internal::SerializationTable serialization_table[];
  static const ::google::protobuf::uint32 offsets[];
};
void AddDescriptors_claros_5finstrument_5fdata_2eproto();
namespace claros {
namespace instrument {
class InstrumentData;
class InstrumentDataDefaultTypeInternal;
extern InstrumentDataDefaultTypeInternal _InstrumentData_default_instance_;
class InstrumentData_SettingsEntry_DoNotUse;
class InstrumentData_SettingsEntry_DoNotUseDefaultTypeInternal;
extern InstrumentData_SettingsEntry_DoNotUseDefaultTypeInternal _InstrumentData_SettingsEntry_DoNotUse_default_instance_;
class InstrumentData_StatesEntry_DoNotUse;
class InstrumentData_StatesEntry_DoNotUseDefaultTypeInternal;
extern InstrumentData_StatesEntry_DoNotUseDefaultTypeInternal _InstrumentData_StatesEntry_DoNotUse_default_instance_;
}  // namespace instrument
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::instrument::InstrumentData* Arena::CreateMaybeMessage<::claros::instrument::InstrumentData>(Arena*);
template<> ::claros::instrument::InstrumentData_SettingsEntry_DoNotUse* Arena::CreateMaybeMessage<::claros::instrument::InstrumentData_SettingsEntry_DoNotUse>(Arena*);
template<> ::claros::instrument::InstrumentData_StatesEntry_DoNotUse* Arena::CreateMaybeMessage<::claros::instrument::InstrumentData_StatesEntry_DoNotUse>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace instrument {

// ===================================================================

class InstrumentData_SettingsEntry_DoNotUse : public ::google::protobuf::internal::MapEntry<InstrumentData_SettingsEntry_DoNotUse, 
    ::std::string, ::std::string,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    0 > {
public:
#if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
static bool _ParseMap(const char* begin, const char* end, void* object, ::google::protobuf::internal::ParseContext* ctx);
#endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  typedef ::google::protobuf::internal::MapEntry<InstrumentData_SettingsEntry_DoNotUse, 
    ::std::string, ::std::string,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    0 > SuperType;
  InstrumentData_SettingsEntry_DoNotUse();
  InstrumentData_SettingsEntry_DoNotUse(::google::protobuf::Arena* arena);
  void MergeFrom(const InstrumentData_SettingsEntry_DoNotUse& other);
  static const InstrumentData_SettingsEntry_DoNotUse* internal_default_instance() { return reinterpret_cast<const InstrumentData_SettingsEntry_DoNotUse*>(&_InstrumentData_SettingsEntry_DoNotUse_default_instance_); }
  void MergeFrom(const ::google::protobuf::Message& other) final;
  ::google::protobuf::Metadata GetMetadata() const;
};

// -------------------------------------------------------------------

class InstrumentData_StatesEntry_DoNotUse : public ::google::protobuf::internal::MapEntry<InstrumentData_StatesEntry_DoNotUse, 
    ::std::string, ::std::string,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    0 > {
public:
#if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
static bool _ParseMap(const char* begin, const char* end, void* object, ::google::protobuf::internal::ParseContext* ctx);
#endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
  typedef ::google::protobuf::internal::MapEntry<InstrumentData_StatesEntry_DoNotUse, 
    ::std::string, ::std::string,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
    0 > SuperType;
  InstrumentData_StatesEntry_DoNotUse();
  InstrumentData_StatesEntry_DoNotUse(::google::protobuf::Arena* arena);
  void MergeFrom(const InstrumentData_StatesEntry_DoNotUse& other);
  static const InstrumentData_StatesEntry_DoNotUse* internal_default_instance() { return reinterpret_cast<const InstrumentData_StatesEntry_DoNotUse*>(&_InstrumentData_StatesEntry_DoNotUse_default_instance_); }
  void MergeFrom(const ::google::protobuf::Message& other) final;
  ::google::protobuf::Metadata GetMetadata() const;
};

// -------------------------------------------------------------------

class InstrumentData :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.instrument.InstrumentData) */ {
 public:
  InstrumentData();
  virtual ~InstrumentData();

  InstrumentData(const InstrumentData& from);

  inline InstrumentData& operator=(const InstrumentData& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  InstrumentData(InstrumentData&& from) noexcept
    : InstrumentData() {
    *this = ::std::move(from);
  }

  inline InstrumentData& operator=(InstrumentData&& from) noexcept {
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
  static const InstrumentData& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const InstrumentData* internal_default_instance() {
    return reinterpret_cast<const InstrumentData*>(
               &_InstrumentData_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    2;

  void Swap(InstrumentData* other);
  friend void swap(InstrumentData& a, InstrumentData& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline InstrumentData* New() const final {
    return CreateMaybeMessage<InstrumentData>(nullptr);
  }

  InstrumentData* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<InstrumentData>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const InstrumentData& from);
  void MergeFrom(const InstrumentData& from);
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
  void InternalSwap(InstrumentData* other);
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

  // repeated .claros.instrument.InstrumentMeasurement measurements = 4;
  int measurements_size() const;
  void clear_measurements();
  static const int kMeasurementsFieldNumber = 4;
  ::claros::instrument::InstrumentMeasurement* mutable_measurements(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::instrument::InstrumentMeasurement >*
      mutable_measurements();
  const ::claros::instrument::InstrumentMeasurement& measurements(int index) const;
  ::claros::instrument::InstrumentMeasurement* add_measurements();
  const ::google::protobuf::RepeatedPtrField< ::claros::instrument::InstrumentMeasurement >&
      measurements() const;

  // map<string, string> settings = 5;
  int settings_size() const;
  void clear_settings();
  static const int kSettingsFieldNumber = 5;
  const ::google::protobuf::Map< ::std::string, ::std::string >&
      settings() const;
  ::google::protobuf::Map< ::std::string, ::std::string >*
      mutable_settings();

  // map<string, string> states = 6;
  int states_size() const;
  void clear_states();
  static const int kStatesFieldNumber = 6;
  const ::google::protobuf::Map< ::std::string, ::std::string >&
      states() const;
  ::google::protobuf::Map< ::std::string, ::std::string >*
      mutable_states();

  // string tenantId = 1;
  void clear_tenantid();
  static const int kTenantIdFieldNumber = 1;
  const ::std::string& tenantid() const;
  void set_tenantid(const ::std::string& value);
  #if LANG_CXX11
  void set_tenantid(::std::string&& value);
  #endif
  void set_tenantid(const char* value);
  void set_tenantid(const char* value, size_t size);
  ::std::string* mutable_tenantid();
  ::std::string* release_tenantid();
  void set_allocated_tenantid(::std::string* tenantid);

  // string fusionId = 2;
  void clear_fusionid();
  static const int kFusionIdFieldNumber = 2;
  const ::std::string& fusionid() const;
  void set_fusionid(const ::std::string& value);
  #if LANG_CXX11
  void set_fusionid(::std::string&& value);
  #endif
  void set_fusionid(const char* value);
  void set_fusionid(const char* value, size_t size);
  ::std::string* mutable_fusionid();
  ::std::string* release_fusionid();
  void set_allocated_fusionid(::std::string* fusionid);

  // .claros.instrument.InstrumentEvent events = 3;
  bool has_events() const;
  void clear_events();
  static const int kEventsFieldNumber = 3;
  const ::claros::instrument::InstrumentEvent& events() const;
  ::claros::instrument::InstrumentEvent* release_events();
  ::claros::instrument::InstrumentEvent* mutable_events();
  void set_allocated_events(::claros::instrument::InstrumentEvent* events);

  // .claros.common.DateTime instrumentDataDateTime = 7;
  bool has_instrumentdatadatetime() const;
  void clear_instrumentdatadatetime();
  static const int kInstrumentDataDateTimeFieldNumber = 7;
  const ::claros::common::DateTime& instrumentdatadatetime() const;
  ::claros::common::DateTime* release_instrumentdatadatetime();
  ::claros::common::DateTime* mutable_instrumentdatadatetime();
  void set_allocated_instrumentdatadatetime(::claros::common::DateTime* instrumentdatadatetime);

  // @@protoc_insertion_point(class_scope:claros.instrument.InstrumentData)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::claros::instrument::InstrumentMeasurement > measurements_;
  ::google::protobuf::internal::MapField<
      InstrumentData_SettingsEntry_DoNotUse,
      ::std::string, ::std::string,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      0 > settings_;
  ::google::protobuf::internal::MapField<
      InstrumentData_StatesEntry_DoNotUse,
      ::std::string, ::std::string,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      ::google::protobuf::internal::WireFormatLite::TYPE_STRING,
      0 > states_;
  ::google::protobuf::internal::ArenaStringPtr tenantid_;
  ::google::protobuf::internal::ArenaStringPtr fusionid_;
  ::claros::instrument::InstrumentEvent* events_;
  ::claros::common::DateTime* instrumentdatadatetime_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5finstrument_5fdata_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// -------------------------------------------------------------------

// -------------------------------------------------------------------

// InstrumentData

// string tenantId = 1;
inline void InstrumentData::clear_tenantid() {
  tenantid_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& InstrumentData::tenantid() const {
  // @@protoc_insertion_point(field_get:claros.instrument.InstrumentData.tenantId)
  return tenantid_.GetNoArena();
}
inline void InstrumentData::set_tenantid(const ::std::string& value) {
  
  tenantid_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.instrument.InstrumentData.tenantId)
}
#if LANG_CXX11
inline void InstrumentData::set_tenantid(::std::string&& value) {
  
  tenantid_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.instrument.InstrumentData.tenantId)
}
#endif
inline void InstrumentData::set_tenantid(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  tenantid_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.instrument.InstrumentData.tenantId)
}
inline void InstrumentData::set_tenantid(const char* value, size_t size) {
  
  tenantid_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.instrument.InstrumentData.tenantId)
}
inline ::std::string* InstrumentData::mutable_tenantid() {
  
  // @@protoc_insertion_point(field_mutable:claros.instrument.InstrumentData.tenantId)
  return tenantid_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* InstrumentData::release_tenantid() {
  // @@protoc_insertion_point(field_release:claros.instrument.InstrumentData.tenantId)
  
  return tenantid_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void InstrumentData::set_allocated_tenantid(::std::string* tenantid) {
  if (tenantid != nullptr) {
    
  } else {
    
  }
  tenantid_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), tenantid);
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.InstrumentData.tenantId)
}

// string fusionId = 2;
inline void InstrumentData::clear_fusionid() {
  fusionid_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& InstrumentData::fusionid() const {
  // @@protoc_insertion_point(field_get:claros.instrument.InstrumentData.fusionId)
  return fusionid_.GetNoArena();
}
inline void InstrumentData::set_fusionid(const ::std::string& value) {
  
  fusionid_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.instrument.InstrumentData.fusionId)
}
#if LANG_CXX11
inline void InstrumentData::set_fusionid(::std::string&& value) {
  
  fusionid_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.instrument.InstrumentData.fusionId)
}
#endif
inline void InstrumentData::set_fusionid(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  fusionid_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.instrument.InstrumentData.fusionId)
}
inline void InstrumentData::set_fusionid(const char* value, size_t size) {
  
  fusionid_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.instrument.InstrumentData.fusionId)
}
inline ::std::string* InstrumentData::mutable_fusionid() {
  
  // @@protoc_insertion_point(field_mutable:claros.instrument.InstrumentData.fusionId)
  return fusionid_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* InstrumentData::release_fusionid() {
  // @@protoc_insertion_point(field_release:claros.instrument.InstrumentData.fusionId)
  
  return fusionid_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void InstrumentData::set_allocated_fusionid(::std::string* fusionid) {
  if (fusionid != nullptr) {
    
  } else {
    
  }
  fusionid_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), fusionid);
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.InstrumentData.fusionId)
}

// .claros.instrument.InstrumentEvent events = 3;
inline bool InstrumentData::has_events() const {
  return this != internal_default_instance() && events_ != nullptr;
}
inline const ::claros::instrument::InstrumentEvent& InstrumentData::events() const {
  const ::claros::instrument::InstrumentEvent* p = events_;
  // @@protoc_insertion_point(field_get:claros.instrument.InstrumentData.events)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::instrument::InstrumentEvent*>(
      &::claros::instrument::_InstrumentEvent_default_instance_);
}
inline ::claros::instrument::InstrumentEvent* InstrumentData::release_events() {
  // @@protoc_insertion_point(field_release:claros.instrument.InstrumentData.events)
  
  ::claros::instrument::InstrumentEvent* temp = events_;
  events_ = nullptr;
  return temp;
}
inline ::claros::instrument::InstrumentEvent* InstrumentData::mutable_events() {
  
  if (events_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::instrument::InstrumentEvent>(GetArenaNoVirtual());
    events_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.InstrumentData.events)
  return events_;
}
inline void InstrumentData::set_allocated_events(::claros::instrument::InstrumentEvent* events) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(events_);
  }
  if (events) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      events = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, events, submessage_arena);
    }
    
  } else {
    
  }
  events_ = events;
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.InstrumentData.events)
}

// repeated .claros.instrument.InstrumentMeasurement measurements = 4;
inline int InstrumentData::measurements_size() const {
  return measurements_.size();
}
inline ::claros::instrument::InstrumentMeasurement* InstrumentData::mutable_measurements(int index) {
  // @@protoc_insertion_point(field_mutable:claros.instrument.InstrumentData.measurements)
  return measurements_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::instrument::InstrumentMeasurement >*
InstrumentData::mutable_measurements() {
  // @@protoc_insertion_point(field_mutable_list:claros.instrument.InstrumentData.measurements)
  return &measurements_;
}
inline const ::claros::instrument::InstrumentMeasurement& InstrumentData::measurements(int index) const {
  // @@protoc_insertion_point(field_get:claros.instrument.InstrumentData.measurements)
  return measurements_.Get(index);
}
inline ::claros::instrument::InstrumentMeasurement* InstrumentData::add_measurements() {
  // @@protoc_insertion_point(field_add:claros.instrument.InstrumentData.measurements)
  return measurements_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::instrument::InstrumentMeasurement >&
InstrumentData::measurements() const {
  // @@protoc_insertion_point(field_list:claros.instrument.InstrumentData.measurements)
  return measurements_;
}

// map<string, string> settings = 5;
inline int InstrumentData::settings_size() const {
  return settings_.size();
}
inline void InstrumentData::clear_settings() {
  settings_.Clear();
}
inline const ::google::protobuf::Map< ::std::string, ::std::string >&
InstrumentData::settings() const {
  // @@protoc_insertion_point(field_map:claros.instrument.InstrumentData.settings)
  return settings_.GetMap();
}
inline ::google::protobuf::Map< ::std::string, ::std::string >*
InstrumentData::mutable_settings() {
  // @@protoc_insertion_point(field_mutable_map:claros.instrument.InstrumentData.settings)
  return settings_.MutableMap();
}

// map<string, string> states = 6;
inline int InstrumentData::states_size() const {
  return states_.size();
}
inline void InstrumentData::clear_states() {
  states_.Clear();
}
inline const ::google::protobuf::Map< ::std::string, ::std::string >&
InstrumentData::states() const {
  // @@protoc_insertion_point(field_map:claros.instrument.InstrumentData.states)
  return states_.GetMap();
}
inline ::google::protobuf::Map< ::std::string, ::std::string >*
InstrumentData::mutable_states() {
  // @@protoc_insertion_point(field_mutable_map:claros.instrument.InstrumentData.states)
  return states_.MutableMap();
}

// .claros.common.DateTime instrumentDataDateTime = 7;
inline bool InstrumentData::has_instrumentdatadatetime() const {
  return this != internal_default_instance() && instrumentdatadatetime_ != nullptr;
}
inline const ::claros::common::DateTime& InstrumentData::instrumentdatadatetime() const {
  const ::claros::common::DateTime* p = instrumentdatadatetime_;
  // @@protoc_insertion_point(field_get:claros.instrument.InstrumentData.instrumentDataDateTime)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::DateTime*>(
      &::claros::common::_DateTime_default_instance_);
}
inline ::claros::common::DateTime* InstrumentData::release_instrumentdatadatetime() {
  // @@protoc_insertion_point(field_release:claros.instrument.InstrumentData.instrumentDataDateTime)
  
  ::claros::common::DateTime* temp = instrumentdatadatetime_;
  instrumentdatadatetime_ = nullptr;
  return temp;
}
inline ::claros::common::DateTime* InstrumentData::mutable_instrumentdatadatetime() {
  
  if (instrumentdatadatetime_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::DateTime>(GetArenaNoVirtual());
    instrumentdatadatetime_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.instrument.InstrumentData.instrumentDataDateTime)
  return instrumentdatadatetime_;
}
inline void InstrumentData::set_allocated_instrumentdatadatetime(::claros::common::DateTime* instrumentdatadatetime) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(instrumentdatadatetime_);
  }
  if (instrumentdatadatetime) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      instrumentdatadatetime = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, instrumentdatadatetime, submessage_arena);
    }
    
  } else {
    
  }
  instrumentdatadatetime_ = instrumentdatadatetime;
  // @@protoc_insertion_point(field_set_allocated:claros.instrument.InstrumentData.instrumentDataDateTime)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__
// -------------------------------------------------------------------

// -------------------------------------------------------------------


// @@protoc_insertion_point(namespace_scope)

}  // namespace instrument
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5finstrument_5fdata_2eproto