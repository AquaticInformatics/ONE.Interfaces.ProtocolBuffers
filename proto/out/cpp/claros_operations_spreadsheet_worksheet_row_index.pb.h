// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_operations_spreadsheet_worksheet_row_index.proto

#ifndef PROTOBUF_INCLUDED_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto
#define PROTOBUF_INCLUDED_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto

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
#include "claros_common_core_timewindow.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto {
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
void AddDescriptors_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto();
namespace claros {
namespace common {
namespace form {
class WorksheetIndex;
class WorksheetIndexDefaultTypeInternal;
extern WorksheetIndexDefaultTypeInternal _WorksheetIndex_default_instance_;
}  // namespace form
}  // namespace common
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::common::form::WorksheetIndex* Arena::CreateMaybeMessage<::claros::common::form::WorksheetIndex>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace common {
namespace form {

// ===================================================================

class WorksheetIndex :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.common.form.WorksheetIndex) */ {
 public:
  WorksheetIndex();
  virtual ~WorksheetIndex();

  WorksheetIndex(const WorksheetIndex& from);

  inline WorksheetIndex& operator=(const WorksheetIndex& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  WorksheetIndex(WorksheetIndex&& from) noexcept
    : WorksheetIndex() {
    *this = ::std::move(from);
  }

  inline WorksheetIndex& operator=(WorksheetIndex&& from) noexcept {
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
  static const WorksheetIndex& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const WorksheetIndex* internal_default_instance() {
    return reinterpret_cast<const WorksheetIndex*>(
               &_WorksheetIndex_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(WorksheetIndex* other);
  friend void swap(WorksheetIndex& a, WorksheetIndex& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline WorksheetIndex* New() const final {
    return CreateMaybeMessage<WorksheetIndex>(nullptr);
  }

  WorksheetIndex* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<WorksheetIndex>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const WorksheetIndex& from);
  void MergeFrom(const WorksheetIndex& from);
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
  void InternalSwap(WorksheetIndex* other);
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

  // string id = 1;
  void clear_id();
  static const int kIdFieldNumber = 1;
  const ::std::string& id() const;
  void set_id(const ::std::string& value);
  #if LANG_CXX11
  void set_id(::std::string&& value);
  #endif
  void set_id(const char* value);
  void set_id(const char* value, size_t size);
  ::std::string* mutable_id();
  ::std::string* release_id();
  void set_allocated_id(::std::string* id);

  // .claros.common.core.TimeWindow timeWindow = 3;
  bool has_timewindow() const;
  void clear_timewindow();
  static const int kTimeWindowFieldNumber = 3;
  const ::claros::common::core::TimeWindow& timewindow() const;
  ::claros::common::core::TimeWindow* release_timewindow();
  ::claros::common::core::TimeWindow* mutable_timewindow();
  void set_allocated_timewindow(::claros::common::core::TimeWindow* timewindow);

  // .claros.common.core.TimeWindow utcTimeWindows = 4;
  bool has_utctimewindows() const;
  void clear_utctimewindows();
  static const int kUtcTimeWindowsFieldNumber = 4;
  const ::claros::common::core::TimeWindow& utctimewindows() const;
  ::claros::common::core::TimeWindow* release_utctimewindows();
  ::claros::common::core::TimeWindow* mutable_utctimewindows();
  void set_allocated_utctimewindows(::claros::common::core::TimeWindow* utctimewindows);

  // uint32 worksheetVersion = 2;
  void clear_worksheetversion();
  static const int kWorksheetVersionFieldNumber = 2;
  ::google::protobuf::uint32 worksheetversion() const;
  void set_worksheetversion(::google::protobuf::uint32 value);

  // bool isInSpeed = 5;
  void clear_isinspeed();
  static const int kIsInSpeedFieldNumber = 5;
  bool isinspeed() const;
  void set_isinspeed(bool value);

  // @@protoc_insertion_point(class_scope:claros.common.form.WorksheetIndex)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::internal::ArenaStringPtr id_;
  ::claros::common::core::TimeWindow* timewindow_;
  ::claros::common::core::TimeWindow* utctimewindows_;
  ::google::protobuf::uint32 worksheetversion_;
  bool isinspeed_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// WorksheetIndex

// string id = 1;
inline void WorksheetIndex::clear_id() {
  id_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& WorksheetIndex::id() const {
  // @@protoc_insertion_point(field_get:claros.common.form.WorksheetIndex.id)
  return id_.GetNoArena();
}
inline void WorksheetIndex::set_id(const ::std::string& value) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.common.form.WorksheetIndex.id)
}
#if LANG_CXX11
inline void WorksheetIndex::set_id(::std::string&& value) {
  
  id_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.common.form.WorksheetIndex.id)
}
#endif
inline void WorksheetIndex::set_id(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.common.form.WorksheetIndex.id)
}
inline void WorksheetIndex::set_id(const char* value, size_t size) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.common.form.WorksheetIndex.id)
}
inline ::std::string* WorksheetIndex::mutable_id() {
  
  // @@protoc_insertion_point(field_mutable:claros.common.form.WorksheetIndex.id)
  return id_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* WorksheetIndex::release_id() {
  // @@protoc_insertion_point(field_release:claros.common.form.WorksheetIndex.id)
  
  return id_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void WorksheetIndex::set_allocated_id(::std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), id);
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.WorksheetIndex.id)
}

// uint32 worksheetVersion = 2;
inline void WorksheetIndex::clear_worksheetversion() {
  worksheetversion_ = 0u;
}
inline ::google::protobuf::uint32 WorksheetIndex::worksheetversion() const {
  // @@protoc_insertion_point(field_get:claros.common.form.WorksheetIndex.worksheetVersion)
  return worksheetversion_;
}
inline void WorksheetIndex::set_worksheetversion(::google::protobuf::uint32 value) {
  
  worksheetversion_ = value;
  // @@protoc_insertion_point(field_set:claros.common.form.WorksheetIndex.worksheetVersion)
}

// .claros.common.core.TimeWindow timeWindow = 3;
inline bool WorksheetIndex::has_timewindow() const {
  return this != internal_default_instance() && timewindow_ != nullptr;
}
inline const ::claros::common::core::TimeWindow& WorksheetIndex::timewindow() const {
  const ::claros::common::core::TimeWindow* p = timewindow_;
  // @@protoc_insertion_point(field_get:claros.common.form.WorksheetIndex.timeWindow)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::core::TimeWindow*>(
      &::claros::common::core::_TimeWindow_default_instance_);
}
inline ::claros::common::core::TimeWindow* WorksheetIndex::release_timewindow() {
  // @@protoc_insertion_point(field_release:claros.common.form.WorksheetIndex.timeWindow)
  
  ::claros::common::core::TimeWindow* temp = timewindow_;
  timewindow_ = nullptr;
  return temp;
}
inline ::claros::common::core::TimeWindow* WorksheetIndex::mutable_timewindow() {
  
  if (timewindow_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::core::TimeWindow>(GetArenaNoVirtual());
    timewindow_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.common.form.WorksheetIndex.timeWindow)
  return timewindow_;
}
inline void WorksheetIndex::set_allocated_timewindow(::claros::common::core::TimeWindow* timewindow) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(timewindow_);
  }
  if (timewindow) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      timewindow = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, timewindow, submessage_arena);
    }
    
  } else {
    
  }
  timewindow_ = timewindow;
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.WorksheetIndex.timeWindow)
}

// .claros.common.core.TimeWindow utcTimeWindows = 4;
inline bool WorksheetIndex::has_utctimewindows() const {
  return this != internal_default_instance() && utctimewindows_ != nullptr;
}
inline const ::claros::common::core::TimeWindow& WorksheetIndex::utctimewindows() const {
  const ::claros::common::core::TimeWindow* p = utctimewindows_;
  // @@protoc_insertion_point(field_get:claros.common.form.WorksheetIndex.utcTimeWindows)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::core::TimeWindow*>(
      &::claros::common::core::_TimeWindow_default_instance_);
}
inline ::claros::common::core::TimeWindow* WorksheetIndex::release_utctimewindows() {
  // @@protoc_insertion_point(field_release:claros.common.form.WorksheetIndex.utcTimeWindows)
  
  ::claros::common::core::TimeWindow* temp = utctimewindows_;
  utctimewindows_ = nullptr;
  return temp;
}
inline ::claros::common::core::TimeWindow* WorksheetIndex::mutable_utctimewindows() {
  
  if (utctimewindows_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::core::TimeWindow>(GetArenaNoVirtual());
    utctimewindows_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.common.form.WorksheetIndex.utcTimeWindows)
  return utctimewindows_;
}
inline void WorksheetIndex::set_allocated_utctimewindows(::claros::common::core::TimeWindow* utctimewindows) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(utctimewindows_);
  }
  if (utctimewindows) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      utctimewindows = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, utctimewindows, submessage_arena);
    }
    
  } else {
    
  }
  utctimewindows_ = utctimewindows;
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.WorksheetIndex.utcTimeWindows)
}

// bool isInSpeed = 5;
inline void WorksheetIndex::clear_isinspeed() {
  isinspeed_ = false;
}
inline bool WorksheetIndex::isinspeed() const {
  // @@protoc_insertion_point(field_get:claros.common.form.WorksheetIndex.isInSpeed)
  return isinspeed_;
}
inline void WorksheetIndex::set_isinspeed(bool value) {
  
  isinspeed_ = value;
  // @@protoc_insertion_point(field_set:claros.common.form.WorksheetIndex.isInSpeed)
}

#ifdef __GNUC__
  #pragma GCC diagnostic pop
#endif  // __GNUC__

// @@protoc_insertion_point(namespace_scope)

}  // namespace form
}  // namespace common
}  // namespace claros

// @@protoc_insertion_point(global_scope)

#include <google/protobuf/port_undef.inc>
#endif  // PROTOBUF_INCLUDED_claros_5foperations_5fspreadsheet_5fworksheet_5frow_5findex_2eproto
