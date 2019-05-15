// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_calibration_standard.proto

#include "claros_instrument_calibration_standard.pb.h"

#include <algorithm>

#include <google/protobuf/stubs/common.h>
#include <google/protobuf/io/coded_stream.h>
#include <google/protobuf/extension_set.h>
#include <google/protobuf/wire_format_lite_inl.h>
#include <google/protobuf/descriptor.h>
#include <google/protobuf/generated_message_reflection.h>
#include <google/protobuf/reflection_ops.h>
#include <google/protobuf/wire_format.h>
// @@protoc_insertion_point(includes)
#include <google/protobuf/port_def.inc>

extern PROTOBUF_INTERNAL_EXPORT_claros_5finstrument_5fcalibration_5fvalue_2eproto ::google::protobuf::internal::SCCInfo<0> scc_info_CalibrationValue_claros_5finstrument_5fcalibration_5fvalue_2eproto;
namespace claros {
namespace instrument {
class CalibrationStandardDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<CalibrationStandard> _instance;
} _CalibrationStandard_default_instance_;
}  // namespace instrument
}  // namespace claros
static void InitDefaultsCalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::claros::instrument::_CalibrationStandard_default_instance_;
    new (ptr) ::claros::instrument::CalibrationStandard();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::claros::instrument::CalibrationStandard::InitAsDefaultInstance();
}

::google::protobuf::internal::SCCInfo<1> scc_info_CalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto =
    {{ATOMIC_VAR_INIT(::google::protobuf::internal::SCCInfoBase::kUninitialized), 1, InitDefaultsCalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto}, {
      &scc_info_CalibrationValue_claros_5finstrument_5fcalibration_5fvalue_2eproto.base,}};

void InitDefaults_claros_5finstrument_5fcalibration_5fstandard_2eproto() {
  ::google::protobuf::internal::InitSCC(&scc_info_CalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto.base);
}

::google::protobuf::Metadata file_level_metadata_claros_5finstrument_5fcalibration_5fstandard_2eproto[1];
constexpr ::google::protobuf::EnumDescriptor const** file_level_enum_descriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto = nullptr;
constexpr ::google::protobuf::ServiceDescriptor const** file_level_service_descriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto = nullptr;

const ::google::protobuf::uint32 TableStruct_claros_5finstrument_5fcalibration_5fstandard_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::claros::instrument::CalibrationStandard, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::claros::instrument::CalibrationStandard, knownvalue_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::CalibrationStandard, measuredvalue_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::CalibrationStandard, secondaryvalues_),
};
static const ::google::protobuf::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::claros::instrument::CalibrationStandard)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&::claros::instrument::_CalibrationStandard_default_instance_),
};

::google::protobuf::internal::AssignDescriptorsTable assign_descriptors_table_claros_5finstrument_5fcalibration_5fstandard_2eproto = {
  {}, AddDescriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto, "claros_instrument_calibration_standard.proto", schemas,
  file_default_instances, TableStruct_claros_5finstrument_5fcalibration_5fstandard_2eproto::offsets,
  file_level_metadata_claros_5finstrument_5fcalibration_5fstandard_2eproto, 1, file_level_enum_descriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto, file_level_service_descriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto,
};

const char descriptor_table_protodef_claros_5finstrument_5fcalibration_5fstandard_2eproto[] =
  "\n,claros_instrument_calibration_standard"
  ".proto\022\021claros.instrument\032)claros_instru"
  "ment_calibration_value.proto\"\310\001\n\023Calibra"
  "tionStandard\0227\n\nknownValue\030\001 \001(\0132#.claro"
  "s.instrument.CalibrationValue\022:\n\rmeasure"
  "dValue\030\002 \001(\0132#.claros.instrument.Calibra"
  "tionValue\022<\n\017secondaryValues\030\004 \003(\0132#.cla"
  "ros.instrument.CalibrationValueb\006proto3"
  ;
::google::protobuf::internal::DescriptorTable descriptor_table_claros_5finstrument_5fcalibration_5fstandard_2eproto = {
  false, InitDefaults_claros_5finstrument_5fcalibration_5fstandard_2eproto, 
  descriptor_table_protodef_claros_5finstrument_5fcalibration_5fstandard_2eproto,
  "claros_instrument_calibration_standard.proto", &assign_descriptors_table_claros_5finstrument_5fcalibration_5fstandard_2eproto, 319,
};

void AddDescriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto() {
  static constexpr ::google::protobuf::internal::InitFunc deps[1] =
  {
    ::AddDescriptors_claros_5finstrument_5fcalibration_5fvalue_2eproto,
  };
 ::google::protobuf::internal::AddDescriptors(&descriptor_table_claros_5finstrument_5fcalibration_5fstandard_2eproto, deps, 1);
}

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_claros_5finstrument_5fcalibration_5fstandard_2eproto = []() { AddDescriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto(); return true; }();
namespace claros {
namespace instrument {

// ===================================================================

void CalibrationStandard::InitAsDefaultInstance() {
  ::claros::instrument::_CalibrationStandard_default_instance_._instance.get_mutable()->knownvalue_ = const_cast< ::claros::instrument::CalibrationValue*>(
      ::claros::instrument::CalibrationValue::internal_default_instance());
  ::claros::instrument::_CalibrationStandard_default_instance_._instance.get_mutable()->measuredvalue_ = const_cast< ::claros::instrument::CalibrationValue*>(
      ::claros::instrument::CalibrationValue::internal_default_instance());
}
class CalibrationStandard::HasBitSetters {
 public:
  static const ::claros::instrument::CalibrationValue& knownvalue(const CalibrationStandard* msg);
  static const ::claros::instrument::CalibrationValue& measuredvalue(const CalibrationStandard* msg);
};

const ::claros::instrument::CalibrationValue&
CalibrationStandard::HasBitSetters::knownvalue(const CalibrationStandard* msg) {
  return *msg->knownvalue_;
}
const ::claros::instrument::CalibrationValue&
CalibrationStandard::HasBitSetters::measuredvalue(const CalibrationStandard* msg) {
  return *msg->measuredvalue_;
}
void CalibrationStandard::clear_knownvalue() {
  if (GetArenaNoVirtual() == nullptr && knownvalue_ != nullptr) {
    delete knownvalue_;
  }
  knownvalue_ = nullptr;
}
void CalibrationStandard::clear_measuredvalue() {
  if (GetArenaNoVirtual() == nullptr && measuredvalue_ != nullptr) {
    delete measuredvalue_;
  }
  measuredvalue_ = nullptr;
}
void CalibrationStandard::clear_secondaryvalues() {
  secondaryvalues_.Clear();
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int CalibrationStandard::kKnownValueFieldNumber;
const int CalibrationStandard::kMeasuredValueFieldNumber;
const int CalibrationStandard::kSecondaryValuesFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

CalibrationStandard::CalibrationStandard()
  : ::google::protobuf::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:claros.instrument.CalibrationStandard)
}
CalibrationStandard::CalibrationStandard(const CalibrationStandard& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(nullptr),
      secondaryvalues_(from.secondaryvalues_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  if (from.has_knownvalue()) {
    knownvalue_ = new ::claros::instrument::CalibrationValue(*from.knownvalue_);
  } else {
    knownvalue_ = nullptr;
  }
  if (from.has_measuredvalue()) {
    measuredvalue_ = new ::claros::instrument::CalibrationValue(*from.measuredvalue_);
  } else {
    measuredvalue_ = nullptr;
  }
  // @@protoc_insertion_point(copy_constructor:claros.instrument.CalibrationStandard)
}

void CalibrationStandard::SharedCtor() {
  ::google::protobuf::internal::InitSCC(
      &scc_info_CalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto.base);
  ::memset(&knownvalue_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&measuredvalue_) -
      reinterpret_cast<char*>(&knownvalue_)) + sizeof(measuredvalue_));
}

CalibrationStandard::~CalibrationStandard() {
  // @@protoc_insertion_point(destructor:claros.instrument.CalibrationStandard)
  SharedDtor();
}

void CalibrationStandard::SharedDtor() {
  if (this != internal_default_instance()) delete knownvalue_;
  if (this != internal_default_instance()) delete measuredvalue_;
}

void CalibrationStandard::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const CalibrationStandard& CalibrationStandard::default_instance() {
  ::google::protobuf::internal::InitSCC(&::scc_info_CalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto.base);
  return *internal_default_instance();
}


void CalibrationStandard::Clear() {
// @@protoc_insertion_point(message_clear_start:claros.instrument.CalibrationStandard)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  secondaryvalues_.Clear();
  if (GetArenaNoVirtual() == nullptr && knownvalue_ != nullptr) {
    delete knownvalue_;
  }
  knownvalue_ = nullptr;
  if (GetArenaNoVirtual() == nullptr && measuredvalue_ != nullptr) {
    delete measuredvalue_;
  }
  measuredvalue_ = nullptr;
  _internal_metadata_.Clear();
}

#if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
const char* CalibrationStandard::_InternalParse(const char* begin, const char* end, void* object,
                  ::google::protobuf::internal::ParseContext* ctx) {
  auto msg = static_cast<CalibrationStandard*>(object);
  ::google::protobuf::int32 size; (void)size;
  int depth; (void)depth;
  ::google::protobuf::uint32 tag;
  ::google::protobuf::internal::ParseFunc parser_till_end; (void)parser_till_end;
  auto ptr = begin;
  while (ptr < end) {
    ptr = ::google::protobuf::io::Parse32(ptr, &tag);
    GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
    switch (tag >> 3) {
      // .claros.instrument.CalibrationValue knownValue = 1;
      case 1: {
        if (static_cast<::google::protobuf::uint8>(tag) != 10) goto handle_unusual;
        ptr = ::google::protobuf::io::ReadSize(ptr, &size);
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        parser_till_end = ::claros::instrument::CalibrationValue::_InternalParse;
        object = msg->mutable_knownvalue();
        if (size > end - ptr) goto len_delim_till_end;
        ptr += size;
        GOOGLE_PROTOBUF_PARSER_ASSERT(ctx->ParseExactRange(
            {parser_till_end, object}, ptr - size, ptr));
        break;
      }
      // .claros.instrument.CalibrationValue measuredValue = 2;
      case 2: {
        if (static_cast<::google::protobuf::uint8>(tag) != 18) goto handle_unusual;
        ptr = ::google::protobuf::io::ReadSize(ptr, &size);
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        parser_till_end = ::claros::instrument::CalibrationValue::_InternalParse;
        object = msg->mutable_measuredvalue();
        if (size > end - ptr) goto len_delim_till_end;
        ptr += size;
        GOOGLE_PROTOBUF_PARSER_ASSERT(ctx->ParseExactRange(
            {parser_till_end, object}, ptr - size, ptr));
        break;
      }
      // repeated .claros.instrument.CalibrationValue secondaryValues = 4;
      case 4: {
        if (static_cast<::google::protobuf::uint8>(tag) != 34) goto handle_unusual;
        do {
          ptr = ::google::protobuf::io::ReadSize(ptr, &size);
          GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
          parser_till_end = ::claros::instrument::CalibrationValue::_InternalParse;
          object = msg->add_secondaryvalues();
          if (size > end - ptr) goto len_delim_till_end;
          ptr += size;
          GOOGLE_PROTOBUF_PARSER_ASSERT(ctx->ParseExactRange(
              {parser_till_end, object}, ptr - size, ptr));
          if (ptr >= end) break;
        } while ((::google::protobuf::io::UnalignedLoad<::google::protobuf::uint64>(ptr) & 255) == 34 && (ptr += 1));
        break;
      }
      default: {
      handle_unusual:
        if ((tag & 7) == 4 || tag == 0) {
          ctx->EndGroup(tag);
          return ptr;
        }
        auto res = UnknownFieldParse(tag, {_InternalParse, msg},
          ptr, end, msg->_internal_metadata_.mutable_unknown_fields(), ctx);
        ptr = res.first;
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr != nullptr);
        if (res.second) return ptr;
      }
    }  // switch
  }  // while
  return ptr;
len_delim_till_end:
  return ctx->StoreAndTailCall(ptr, end, {_InternalParse, msg},
                               {parser_till_end, object}, size);
}
#else  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
bool CalibrationStandard::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!PROTOBUF_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:claros.instrument.CalibrationStandard)
  for (;;) {
    ::std::pair<::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .claros.instrument.CalibrationValue knownValue = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (10 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessage(
               input, mutable_knownvalue()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // .claros.instrument.CalibrationValue measuredValue = 2;
      case 2: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (18 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessage(
               input, mutable_measuredvalue()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // repeated .claros.instrument.CalibrationValue secondaryValues = 4;
      case 4: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (34 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessage(
                input, add_secondaryvalues()));
        } else {
          goto handle_unusual;
        }
        break;
      }

      default: {
      handle_unusual:
        if (tag == 0) {
          goto success;
        }
        DO_(::google::protobuf::internal::WireFormat::SkipField(
              input, tag, _internal_metadata_.mutable_unknown_fields()));
        break;
      }
    }
  }
success:
  // @@protoc_insertion_point(parse_success:claros.instrument.CalibrationStandard)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:claros.instrument.CalibrationStandard)
  return false;
#undef DO_
}
#endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER

void CalibrationStandard::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:claros.instrument.CalibrationStandard)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .claros.instrument.CalibrationValue knownValue = 1;
  if (this->has_knownvalue()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, HasBitSetters::knownvalue(this), output);
  }

  // .claros.instrument.CalibrationValue measuredValue = 2;
  if (this->has_measuredvalue()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      2, HasBitSetters::measuredvalue(this), output);
  }

  // repeated .claros.instrument.CalibrationValue secondaryValues = 4;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->secondaryvalues_size()); i < n; i++) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      4,
      this->secondaryvalues(static_cast<int>(i)),
      output);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        _internal_metadata_.unknown_fields(), output);
  }
  // @@protoc_insertion_point(serialize_end:claros.instrument.CalibrationStandard)
}

::google::protobuf::uint8* CalibrationStandard::InternalSerializeWithCachedSizesToArray(
    ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:claros.instrument.CalibrationStandard)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .claros.instrument.CalibrationValue knownValue = 1;
  if (this->has_knownvalue()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageToArray(
        1, HasBitSetters::knownvalue(this), target);
  }

  // .claros.instrument.CalibrationValue measuredValue = 2;
  if (this->has_measuredvalue()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageToArray(
        2, HasBitSetters::measuredvalue(this), target);
  }

  // repeated .claros.instrument.CalibrationValue secondaryValues = 4;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->secondaryvalues_size()); i < n; i++) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageToArray(
        4, this->secondaryvalues(static_cast<int>(i)), target);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:claros.instrument.CalibrationStandard)
  return target;
}

size_t CalibrationStandard::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:claros.instrument.CalibrationStandard)
  size_t total_size = 0;

  if (_internal_metadata_.have_unknown_fields()) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        _internal_metadata_.unknown_fields());
  }
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .claros.instrument.CalibrationValue secondaryValues = 4;
  {
    unsigned int count = static_cast<unsigned int>(this->secondaryvalues_size());
    total_size += 1UL * count;
    for (unsigned int i = 0; i < count; i++) {
      total_size +=
        ::google::protobuf::internal::WireFormatLite::MessageSize(
          this->secondaryvalues(static_cast<int>(i)));
    }
  }

  // .claros.instrument.CalibrationValue knownValue = 1;
  if (this->has_knownvalue()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSize(
        *knownvalue_);
  }

  // .claros.instrument.CalibrationValue measuredValue = 2;
  if (this->has_measuredvalue()) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::MessageSize(
        *measuredvalue_);
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void CalibrationStandard::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:claros.instrument.CalibrationStandard)
  GOOGLE_DCHECK_NE(&from, this);
  const CalibrationStandard* source =
      ::google::protobuf::DynamicCastToGenerated<CalibrationStandard>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:claros.instrument.CalibrationStandard)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:claros.instrument.CalibrationStandard)
    MergeFrom(*source);
  }
}

void CalibrationStandard::MergeFrom(const CalibrationStandard& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:claros.instrument.CalibrationStandard)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  secondaryvalues_.MergeFrom(from.secondaryvalues_);
  if (from.has_knownvalue()) {
    mutable_knownvalue()->::claros::instrument::CalibrationValue::MergeFrom(from.knownvalue());
  }
  if (from.has_measuredvalue()) {
    mutable_measuredvalue()->::claros::instrument::CalibrationValue::MergeFrom(from.measuredvalue());
  }
}

void CalibrationStandard::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:claros.instrument.CalibrationStandard)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void CalibrationStandard::CopyFrom(const CalibrationStandard& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:claros.instrument.CalibrationStandard)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool CalibrationStandard::IsInitialized() const {
  return true;
}

void CalibrationStandard::Swap(CalibrationStandard* other) {
  if (other == this) return;
  InternalSwap(other);
}
void CalibrationStandard::InternalSwap(CalibrationStandard* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  CastToBase(&secondaryvalues_)->InternalSwap(CastToBase(&other->secondaryvalues_));
  swap(knownvalue_, other->knownvalue_);
  swap(measuredvalue_, other->measuredvalue_);
}

::google::protobuf::Metadata CalibrationStandard::GetMetadata() const {
  ::google::protobuf::internal::AssignDescriptors(&::assign_descriptors_table_claros_5finstrument_5fcalibration_5fstandard_2eproto);
  return ::file_level_metadata_claros_5finstrument_5fcalibration_5fstandard_2eproto[kIndexInFileMessages];
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace instrument
}  // namespace claros
namespace google {
namespace protobuf {
template<> PROTOBUF_NOINLINE ::claros::instrument::CalibrationStandard* Arena::CreateMaybeMessage< ::claros::instrument::CalibrationStandard >(Arena* arena) {
  return Arena::CreateInternal< ::claros::instrument::CalibrationStandard >(arena);
}
}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
