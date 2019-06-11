// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_form_form.proto

#ifndef PROTOBUF_INCLUDED_claros_5fcommon_5fform_5fform_2eproto
#define PROTOBUF_INCLUDED_claros_5fcommon_5fform_5fform_2eproto

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
#include "claros_common_core_note.pb.h"
#include "claros_common_core_auditevent.pb.h"
#include "claros_common_form_formfield.pb.h"
#include "claros_common_form_formtemplate.pb.h"
#include "claros_common_form_formfield_definition.pb.h"
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>
#define PROTOBUF_INTERNAL_EXPORT_claros_5fcommon_5fform_5fform_2eproto

// Internal implementation detail -- do not use these members.
struct TableStruct_claros_5fcommon_5fform_5fform_2eproto {
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
void AddDescriptors_claros_5fcommon_5fform_5fform_2eproto();
namespace claros {
namespace common {
namespace form {
class Form;
class FormDefaultTypeInternal;
extern FormDefaultTypeInternal _Form_default_instance_;
}  // namespace form
}  // namespace common
}  // namespace claros
namespace google {
namespace protobuf {
template<> ::claros::common::form::Form* Arena::CreateMaybeMessage<::claros::common::form::Form>(Arena*);
}  // namespace protobuf
}  // namespace google
namespace claros {
namespace common {
namespace form {

// ===================================================================

class Form :
    public ::google::protobuf::Message /* @@protoc_insertion_point(class_definition:claros.common.form.Form) */ {
 public:
  Form();
  virtual ~Form();

  Form(const Form& from);

  inline Form& operator=(const Form& from) {
    CopyFrom(from);
    return *this;
  }
  #if LANG_CXX11
  Form(Form&& from) noexcept
    : Form() {
    *this = ::std::move(from);
  }

  inline Form& operator=(Form&& from) noexcept {
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
  static const Form& default_instance();

  static void InitAsDefaultInstance();  // FOR INTERNAL USE ONLY
  static inline const Form* internal_default_instance() {
    return reinterpret_cast<const Form*>(
               &_Form_default_instance_);
  }
  static constexpr int kIndexInFileMessages =
    0;

  void Swap(Form* other);
  friend void swap(Form& a, Form& b) {
    a.Swap(&b);
  }

  // implements Message ----------------------------------------------

  inline Form* New() const final {
    return CreateMaybeMessage<Form>(nullptr);
  }

  Form* New(::google::protobuf::Arena* arena) const final {
    return CreateMaybeMessage<Form>(arena);
  }
  void CopyFrom(const ::google::protobuf::Message& from) final;
  void MergeFrom(const ::google::protobuf::Message& from) final;
  void CopyFrom(const Form& from);
  void MergeFrom(const Form& from);
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
  void InternalSwap(Form* other);
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

  // repeated .claros.common.form.FormFieldDefinition adHocFormFieldDefinitions = 5;
  int adhocformfielddefinitions_size() const;
  void clear_adhocformfielddefinitions();
  static const int kAdHocFormFieldDefinitionsFieldNumber = 5;
  ::claros::common::form::FormFieldDefinition* mutable_adhocformfielddefinitions(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormFieldDefinition >*
      mutable_adhocformfielddefinitions();
  const ::claros::common::form::FormFieldDefinition& adhocformfielddefinitions(int index) const;
  ::claros::common::form::FormFieldDefinition* add_adhocformfielddefinitions();
  const ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormFieldDefinition >&
      adhocformfielddefinitions() const;

  // repeated .claros.common.form.FormField templateFormFields = 6;
  int templateformfields_size() const;
  void clear_templateformfields();
  static const int kTemplateFormFieldsFieldNumber = 6;
  ::claros::common::form::FormField* mutable_templateformfields(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >*
      mutable_templateformfields();
  const ::claros::common::form::FormField& templateformfields(int index) const;
  ::claros::common::form::FormField* add_templateformfields();
  const ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >&
      templateformfields() const;

  // repeated .claros.common.form.FormField adhocFormFields = 7;
  int adhocformfields_size() const;
  void clear_adhocformfields();
  static const int kAdhocFormFieldsFieldNumber = 7;
  ::claros::common::form::FormField* mutable_adhocformfields(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >*
      mutable_adhocformfields();
  const ::claros::common::form::FormField& adhocformfields(int index) const;
  ::claros::common::form::FormField* add_adhocformfields();
  const ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >&
      adhocformfields() const;

  // repeated .claros.common.core.Note notes = 8;
  int notes_size() const;
  void clear_notes();
  static const int kNotesFieldNumber = 8;
  ::claros::common::core::Note* mutable_notes(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::common::core::Note >*
      mutable_notes();
  const ::claros::common::core::Note& notes(int index) const;
  ::claros::common::core::Note* add_notes();
  const ::google::protobuf::RepeatedPtrField< ::claros::common::core::Note >&
      notes() const;

  // repeated .claros.common.core.AuditEvent auditEvents = 99;
  int auditevents_size() const;
  void clear_auditevents();
  static const int kAuditEventsFieldNumber = 99;
  ::claros::common::core::AuditEvent* mutable_auditevents(int index);
  ::google::protobuf::RepeatedPtrField< ::claros::common::core::AuditEvent >*
      mutable_auditevents();
  const ::claros::common::core::AuditEvent& auditevents(int index) const;
  ::claros::common::core::AuditEvent* add_auditevents();
  const ::google::protobuf::RepeatedPtrField< ::claros::common::core::AuditEvent >&
      auditevents() const;

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

  // string name = 2;
  void clear_name();
  static const int kNameFieldNumber = 2;
  const ::std::string& name() const;
  void set_name(const ::std::string& value);
  #if LANG_CXX11
  void set_name(::std::string&& value);
  #endif
  void set_name(const char* value);
  void set_name(const char* value, size_t size);
  ::std::string* mutable_name();
  ::std::string* release_name();
  void set_allocated_name(::std::string* name);

  // .claros.common.core.TimeWindow timeWindow = 3;
  bool has_timewindow() const;
  void clear_timewindow();
  static const int kTimeWindowFieldNumber = 3;
  const ::claros::common::core::TimeWindow& timewindow() const;
  ::claros::common::core::TimeWindow* release_timewindow();
  ::claros::common::core::TimeWindow* mutable_timewindow();
  void set_allocated_timewindow(::claros::common::core::TimeWindow* timewindow);

  // .claros.common.form.FormTemplate formTemplate = 4;
  bool has_formtemplate() const;
  void clear_formtemplate();
  static const int kFormTemplateFieldNumber = 4;
  const ::claros::common::form::FormTemplate& formtemplate() const;
  ::claros::common::form::FormTemplate* release_formtemplate();
  ::claros::common::form::FormTemplate* mutable_formtemplate();
  void set_allocated_formtemplate(::claros::common::form::FormTemplate* formtemplate);

  // @@protoc_insertion_point(class_scope:claros.common.form.Form)
 private:
  class HasBitSetters;

  ::google::protobuf::internal::InternalMetadataWithArena _internal_metadata_;
  ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormFieldDefinition > adhocformfielddefinitions_;
  ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField > templateformfields_;
  ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField > adhocformfields_;
  ::google::protobuf::RepeatedPtrField< ::claros::common::core::Note > notes_;
  ::google::protobuf::RepeatedPtrField< ::claros::common::core::AuditEvent > auditevents_;
  ::google::protobuf::internal::ArenaStringPtr id_;
  ::google::protobuf::internal::ArenaStringPtr name_;
  ::claros::common::core::TimeWindow* timewindow_;
  ::claros::common::form::FormTemplate* formtemplate_;
  mutable ::google::protobuf::internal::CachedSize _cached_size_;
  friend struct ::TableStruct_claros_5fcommon_5fform_5fform_2eproto;
};
// ===================================================================


// ===================================================================

#ifdef __GNUC__
  #pragma GCC diagnostic push
  #pragma GCC diagnostic ignored "-Wstrict-aliasing"
#endif  // __GNUC__
// Form

// string id = 1;
inline void Form::clear_id() {
  id_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Form::id() const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.id)
  return id_.GetNoArena();
}
inline void Form::set_id(const ::std::string& value) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.common.form.Form.id)
}
#if LANG_CXX11
inline void Form::set_id(::std::string&& value) {
  
  id_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.common.form.Form.id)
}
#endif
inline void Form::set_id(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.common.form.Form.id)
}
inline void Form::set_id(const char* value, size_t size) {
  
  id_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.common.form.Form.id)
}
inline ::std::string* Form::mutable_id() {
  
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.id)
  return id_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Form::release_id() {
  // @@protoc_insertion_point(field_release:claros.common.form.Form.id)
  
  return id_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Form::set_allocated_id(::std::string* id) {
  if (id != nullptr) {
    
  } else {
    
  }
  id_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), id);
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.Form.id)
}

// string name = 2;
inline void Form::clear_name() {
  name_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline const ::std::string& Form::name() const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.name)
  return name_.GetNoArena();
}
inline void Form::set_name(const ::std::string& value) {
  
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), value);
  // @@protoc_insertion_point(field_set:claros.common.form.Form.name)
}
#if LANG_CXX11
inline void Form::set_name(::std::string&& value) {
  
  name_.SetNoArena(
    &::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::move(value));
  // @@protoc_insertion_point(field_set_rvalue:claros.common.form.Form.name)
}
#endif
inline void Form::set_name(const char* value) {
  GOOGLE_DCHECK(value != nullptr);
  
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), ::std::string(value));
  // @@protoc_insertion_point(field_set_char:claros.common.form.Form.name)
}
inline void Form::set_name(const char* value, size_t size) {
  
  name_.SetNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(),
      ::std::string(reinterpret_cast<const char*>(value), size));
  // @@protoc_insertion_point(field_set_pointer:claros.common.form.Form.name)
}
inline ::std::string* Form::mutable_name() {
  
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.name)
  return name_.MutableNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline ::std::string* Form::release_name() {
  // @@protoc_insertion_point(field_release:claros.common.form.Form.name)
  
  return name_.ReleaseNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}
inline void Form::set_allocated_name(::std::string* name) {
  if (name != nullptr) {
    
  } else {
    
  }
  name_.SetAllocatedNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), name);
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.Form.name)
}

// .claros.common.core.TimeWindow timeWindow = 3;
inline bool Form::has_timewindow() const {
  return this != internal_default_instance() && timewindow_ != nullptr;
}
inline const ::claros::common::core::TimeWindow& Form::timewindow() const {
  const ::claros::common::core::TimeWindow* p = timewindow_;
  // @@protoc_insertion_point(field_get:claros.common.form.Form.timeWindow)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::core::TimeWindow*>(
      &::claros::common::core::_TimeWindow_default_instance_);
}
inline ::claros::common::core::TimeWindow* Form::release_timewindow() {
  // @@protoc_insertion_point(field_release:claros.common.form.Form.timeWindow)
  
  ::claros::common::core::TimeWindow* temp = timewindow_;
  timewindow_ = nullptr;
  return temp;
}
inline ::claros::common::core::TimeWindow* Form::mutable_timewindow() {
  
  if (timewindow_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::core::TimeWindow>(GetArenaNoVirtual());
    timewindow_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.timeWindow)
  return timewindow_;
}
inline void Form::set_allocated_timewindow(::claros::common::core::TimeWindow* timewindow) {
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
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.Form.timeWindow)
}

// .claros.common.form.FormTemplate formTemplate = 4;
inline bool Form::has_formtemplate() const {
  return this != internal_default_instance() && formtemplate_ != nullptr;
}
inline const ::claros::common::form::FormTemplate& Form::formtemplate() const {
  const ::claros::common::form::FormTemplate* p = formtemplate_;
  // @@protoc_insertion_point(field_get:claros.common.form.Form.formTemplate)
  return p != nullptr ? *p : *reinterpret_cast<const ::claros::common::form::FormTemplate*>(
      &::claros::common::form::_FormTemplate_default_instance_);
}
inline ::claros::common::form::FormTemplate* Form::release_formtemplate() {
  // @@protoc_insertion_point(field_release:claros.common.form.Form.formTemplate)
  
  ::claros::common::form::FormTemplate* temp = formtemplate_;
  formtemplate_ = nullptr;
  return temp;
}
inline ::claros::common::form::FormTemplate* Form::mutable_formtemplate() {
  
  if (formtemplate_ == nullptr) {
    auto* p = CreateMaybeMessage<::claros::common::form::FormTemplate>(GetArenaNoVirtual());
    formtemplate_ = p;
  }
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.formTemplate)
  return formtemplate_;
}
inline void Form::set_allocated_formtemplate(::claros::common::form::FormTemplate* formtemplate) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  if (message_arena == nullptr) {
    delete reinterpret_cast< ::google::protobuf::MessageLite*>(formtemplate_);
  }
  if (formtemplate) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      formtemplate = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, formtemplate, submessage_arena);
    }
    
  } else {
    
  }
  formtemplate_ = formtemplate;
  // @@protoc_insertion_point(field_set_allocated:claros.common.form.Form.formTemplate)
}

// repeated .claros.common.form.FormFieldDefinition adHocFormFieldDefinitions = 5;
inline int Form::adhocformfielddefinitions_size() const {
  return adhocformfielddefinitions_.size();
}
inline ::claros::common::form::FormFieldDefinition* Form::mutable_adhocformfielddefinitions(int index) {
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.adHocFormFieldDefinitions)
  return adhocformfielddefinitions_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormFieldDefinition >*
Form::mutable_adhocformfielddefinitions() {
  // @@protoc_insertion_point(field_mutable_list:claros.common.form.Form.adHocFormFieldDefinitions)
  return &adhocformfielddefinitions_;
}
inline const ::claros::common::form::FormFieldDefinition& Form::adhocformfielddefinitions(int index) const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.adHocFormFieldDefinitions)
  return adhocformfielddefinitions_.Get(index);
}
inline ::claros::common::form::FormFieldDefinition* Form::add_adhocformfielddefinitions() {
  // @@protoc_insertion_point(field_add:claros.common.form.Form.adHocFormFieldDefinitions)
  return adhocformfielddefinitions_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormFieldDefinition >&
Form::adhocformfielddefinitions() const {
  // @@protoc_insertion_point(field_list:claros.common.form.Form.adHocFormFieldDefinitions)
  return adhocformfielddefinitions_;
}

// repeated .claros.common.form.FormField templateFormFields = 6;
inline int Form::templateformfields_size() const {
  return templateformfields_.size();
}
inline ::claros::common::form::FormField* Form::mutable_templateformfields(int index) {
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.templateFormFields)
  return templateformfields_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >*
Form::mutable_templateformfields() {
  // @@protoc_insertion_point(field_mutable_list:claros.common.form.Form.templateFormFields)
  return &templateformfields_;
}
inline const ::claros::common::form::FormField& Form::templateformfields(int index) const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.templateFormFields)
  return templateformfields_.Get(index);
}
inline ::claros::common::form::FormField* Form::add_templateformfields() {
  // @@protoc_insertion_point(field_add:claros.common.form.Form.templateFormFields)
  return templateformfields_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >&
Form::templateformfields() const {
  // @@protoc_insertion_point(field_list:claros.common.form.Form.templateFormFields)
  return templateformfields_;
}

// repeated .claros.common.form.FormField adhocFormFields = 7;
inline int Form::adhocformfields_size() const {
  return adhocformfields_.size();
}
inline ::claros::common::form::FormField* Form::mutable_adhocformfields(int index) {
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.adhocFormFields)
  return adhocformfields_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >*
Form::mutable_adhocformfields() {
  // @@protoc_insertion_point(field_mutable_list:claros.common.form.Form.adhocFormFields)
  return &adhocformfields_;
}
inline const ::claros::common::form::FormField& Form::adhocformfields(int index) const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.adhocFormFields)
  return adhocformfields_.Get(index);
}
inline ::claros::common::form::FormField* Form::add_adhocformfields() {
  // @@protoc_insertion_point(field_add:claros.common.form.Form.adhocFormFields)
  return adhocformfields_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::common::form::FormField >&
Form::adhocformfields() const {
  // @@protoc_insertion_point(field_list:claros.common.form.Form.adhocFormFields)
  return adhocformfields_;
}

// repeated .claros.common.core.Note notes = 8;
inline int Form::notes_size() const {
  return notes_.size();
}
inline ::claros::common::core::Note* Form::mutable_notes(int index) {
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.notes)
  return notes_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::common::core::Note >*
Form::mutable_notes() {
  // @@protoc_insertion_point(field_mutable_list:claros.common.form.Form.notes)
  return &notes_;
}
inline const ::claros::common::core::Note& Form::notes(int index) const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.notes)
  return notes_.Get(index);
}
inline ::claros::common::core::Note* Form::add_notes() {
  // @@protoc_insertion_point(field_add:claros.common.form.Form.notes)
  return notes_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::common::core::Note >&
Form::notes() const {
  // @@protoc_insertion_point(field_list:claros.common.form.Form.notes)
  return notes_;
}

// repeated .claros.common.core.AuditEvent auditEvents = 99;
inline int Form::auditevents_size() const {
  return auditevents_.size();
}
inline ::claros::common::core::AuditEvent* Form::mutable_auditevents(int index) {
  // @@protoc_insertion_point(field_mutable:claros.common.form.Form.auditEvents)
  return auditevents_.Mutable(index);
}
inline ::google::protobuf::RepeatedPtrField< ::claros::common::core::AuditEvent >*
Form::mutable_auditevents() {
  // @@protoc_insertion_point(field_mutable_list:claros.common.form.Form.auditEvents)
  return &auditevents_;
}
inline const ::claros::common::core::AuditEvent& Form::auditevents(int index) const {
  // @@protoc_insertion_point(field_get:claros.common.form.Form.auditEvents)
  return auditevents_.Get(index);
}
inline ::claros::common::core::AuditEvent* Form::add_auditevents() {
  // @@protoc_insertion_point(field_add:claros.common.form.Form.auditEvents)
  return auditevents_.Add();
}
inline const ::google::protobuf::RepeatedPtrField< ::claros::common::core::AuditEvent >&
Form::auditevents() const {
  // @@protoc_insertion_point(field_list:claros.common.form.Form.auditEvents)
  return auditevents_;
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
#endif  // PROTOBUF_INCLUDED_claros_5fcommon_5fform_5fform_2eproto
