// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_calibration.proto

#include "claros_instrument_calibration.pb.h"

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

extern PROTOBUF_INTERNAL_EXPORT_claros_5finstrument_5fcalibration_5fstandard_2eproto ::google::protobuf::internal::SCCInfo<1> scc_info_CalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto;
namespace claros {
namespace instrument {
class CalibrationDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<Calibration> _instance;
} _Calibration_default_instance_;
}  // namespace instrument
}  // namespace claros
static void InitDefaultsCalibration_claros_5finstrument_5fcalibration_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::claros::instrument::_Calibration_default_instance_;
    new (ptr) ::claros::instrument::Calibration();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::claros::instrument::Calibration::InitAsDefaultInstance();
}

::google::protobuf::internal::SCCInfo<1> scc_info_Calibration_claros_5finstrument_5fcalibration_2eproto =
    {{ATOMIC_VAR_INIT(::google::protobuf::internal::SCCInfoBase::kUninitialized), 1, InitDefaultsCalibration_claros_5finstrument_5fcalibration_2eproto}, {
      &scc_info_CalibrationStandard_claros_5finstrument_5fcalibration_5fstandard_2eproto.base,}};

void InitDefaults_claros_5finstrument_5fcalibration_2eproto() {
  ::google::protobuf::internal::InitSCC(&scc_info_Calibration_claros_5finstrument_5fcalibration_2eproto.base);
}

::google::protobuf::Metadata file_level_metadata_claros_5finstrument_5fcalibration_2eproto[1];
constexpr ::google::protobuf::EnumDescriptor const** file_level_enum_descriptors_claros_5finstrument_5fcalibration_2eproto = nullptr;
constexpr ::google::protobuf::ServiceDescriptor const** file_level_service_descriptors_claros_5finstrument_5fcalibration_2eproto = nullptr;

const ::google::protobuf::uint32 TableStruct_claros_5finstrument_5fcalibration_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, _internal_metadata_),
  ~0u,  // no _extensions_
  ~0u,  // no _oneof_case_
  ~0u,  // no _weak_field_map_
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, id_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, userid_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, time_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, status_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, offsetunits_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, slopeunits_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, slope_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, slopeaux_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, offset_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, r2_),
  PROTOBUF_FIELD_OFFSET(::claros::instrument::Calibration, calibrationstandards_),
};
static const ::google::protobuf::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::claros::instrument::Calibration)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&::claros::instrument::_Calibration_default_instance_),
};

::google::protobuf::internal::AssignDescriptorsTable assign_descriptors_table_claros_5finstrument_5fcalibration_2eproto = {
  {}, AddDescriptors_claros_5finstrument_5fcalibration_2eproto, "claros_instrument_calibration.proto", schemas,
  file_default_instances, TableStruct_claros_5finstrument_5fcalibration_2eproto::offsets,
  file_level_metadata_claros_5finstrument_5fcalibration_2eproto, 1, file_level_enum_descriptors_claros_5finstrument_5fcalibration_2eproto, file_level_service_descriptors_claros_5finstrument_5fcalibration_2eproto,
};

const char descriptor_table_protodef_claros_5finstrument_5fcalibration_2eproto[] =
  "\n#claros_instrument_calibration.proto\022\021c"
  "laros.instrument\032,claros_instrument_cali"
  "bration_standard.proto\"\363\001\n\013Calibration\022\n"
  "\n\002ID\030\001 \001(\t\022\016\n\006userID\030\002 \001(\t\022\014\n\004time\030\003 \001(\004"
  "\022\016\n\006status\030\004 \001(\r\022\023\n\013offsetUnits\030\005 \001(\r\022\022\n"
  "\nslopeUnits\030\006 \001(\r\022\r\n\005slope\030\007 \001(\002\022\020\n\010slop"
  "eAux\030\010 \001(\002\022\016\n\006offset\030\t \001(\002\022\n\n\002r2\030\n \001(\002\022D"
  "\n\024calibrationStandards\030\013 \003(\0132&.claros.in"
  "strument.CalibrationStandardb\006proto3"
  ;
::google::protobuf::internal::DescriptorTable descriptor_table_claros_5finstrument_5fcalibration_2eproto = {
  false, InitDefaults_claros_5finstrument_5fcalibration_2eproto, 
  descriptor_table_protodef_claros_5finstrument_5fcalibration_2eproto,
  "claros_instrument_calibration.proto", &assign_descriptors_table_claros_5finstrument_5fcalibration_2eproto, 356,
};

void AddDescriptors_claros_5finstrument_5fcalibration_2eproto() {
  static constexpr ::google::protobuf::internal::InitFunc deps[1] =
  {
    ::AddDescriptors_claros_5finstrument_5fcalibration_5fstandard_2eproto,
  };
 ::google::protobuf::internal::AddDescriptors(&descriptor_table_claros_5finstrument_5fcalibration_2eproto, deps, 1);
}

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_claros_5finstrument_5fcalibration_2eproto = []() { AddDescriptors_claros_5finstrument_5fcalibration_2eproto(); return true; }();
namespace claros {
namespace instrument {

// ===================================================================

void Calibration::InitAsDefaultInstance() {
}
class Calibration::HasBitSetters {
 public:
};

void Calibration::clear_calibrationstandards() {
  calibrationstandards_.Clear();
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int Calibration::kIDFieldNumber;
const int Calibration::kUserIDFieldNumber;
const int Calibration::kTimeFieldNumber;
const int Calibration::kStatusFieldNumber;
const int Calibration::kOffsetUnitsFieldNumber;
const int Calibration::kSlopeUnitsFieldNumber;
const int Calibration::kSlopeFieldNumber;
const int Calibration::kSlopeAuxFieldNumber;
const int Calibration::kOffsetFieldNumber;
const int Calibration::kR2FieldNumber;
const int Calibration::kCalibrationStandardsFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

Calibration::Calibration()
  : ::google::protobuf::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:claros.instrument.Calibration)
}
Calibration::Calibration(const Calibration& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(nullptr),
      calibrationstandards_(from.calibrationstandards_) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  id_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.id().size() > 0) {
    id_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.id_);
  }
  userid_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  if (from.userid().size() > 0) {
    userid_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.userid_);
  }
  ::memcpy(&time_, &from.time_,
    static_cast<size_t>(reinterpret_cast<char*>(&r2_) -
    reinterpret_cast<char*>(&time_)) + sizeof(r2_));
  // @@protoc_insertion_point(copy_constructor:claros.instrument.Calibration)
}

void Calibration::SharedCtor() {
  ::google::protobuf::internal::InitSCC(
      &scc_info_Calibration_claros_5finstrument_5fcalibration_2eproto.base);
  id_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  userid_.UnsafeSetDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  ::memset(&time_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&r2_) -
      reinterpret_cast<char*>(&time_)) + sizeof(r2_));
}

Calibration::~Calibration() {
  // @@protoc_insertion_point(destructor:claros.instrument.Calibration)
  SharedDtor();
}

void Calibration::SharedDtor() {
  id_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  userid_.DestroyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
}

void Calibration::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const Calibration& Calibration::default_instance() {
  ::google::protobuf::internal::InitSCC(&::scc_info_Calibration_claros_5finstrument_5fcalibration_2eproto.base);
  return *internal_default_instance();
}


void Calibration::Clear() {
// @@protoc_insertion_point(message_clear_start:claros.instrument.Calibration)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  calibrationstandards_.Clear();
  id_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  userid_.ClearToEmptyNoArena(&::google::protobuf::internal::GetEmptyStringAlreadyInited());
  ::memset(&time_, 0, static_cast<size_t>(
      reinterpret_cast<char*>(&r2_) -
      reinterpret_cast<char*>(&time_)) + sizeof(r2_));
  _internal_metadata_.Clear();
}

#if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
const char* Calibration::_InternalParse(const char* begin, const char* end, void* object,
                  ::google::protobuf::internal::ParseContext* ctx) {
  auto msg = static_cast<Calibration*>(object);
  ::google::protobuf::int32 size; (void)size;
  int depth; (void)depth;
  ::google::protobuf::uint32 tag;
  ::google::protobuf::internal::ParseFunc parser_till_end; (void)parser_till_end;
  auto ptr = begin;
  while (ptr < end) {
    ptr = ::google::protobuf::io::Parse32(ptr, &tag);
    GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
    switch (tag >> 3) {
      // string ID = 1;
      case 1: {
        if (static_cast<::google::protobuf::uint8>(tag) != 10) goto handle_unusual;
        ptr = ::google::protobuf::io::ReadSize(ptr, &size);
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        ctx->extra_parse_data().SetFieldName("claros.instrument.Calibration.ID");
        object = msg->mutable_id();
        if (size > end - ptr + ::google::protobuf::internal::ParseContext::kSlopBytes) {
          parser_till_end = ::google::protobuf::internal::GreedyStringParserUTF8;
          goto string_till_end;
        }
        GOOGLE_PROTOBUF_PARSER_ASSERT(::google::protobuf::internal::StringCheckUTF8(ptr, size, ctx));
        ::google::protobuf::internal::InlineGreedyStringParser(object, ptr, size, ctx);
        ptr += size;
        break;
      }
      // string userID = 2;
      case 2: {
        if (static_cast<::google::protobuf::uint8>(tag) != 18) goto handle_unusual;
        ptr = ::google::protobuf::io::ReadSize(ptr, &size);
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        ctx->extra_parse_data().SetFieldName("claros.instrument.Calibration.userID");
        object = msg->mutable_userid();
        if (size > end - ptr + ::google::protobuf::internal::ParseContext::kSlopBytes) {
          parser_till_end = ::google::protobuf::internal::GreedyStringParserUTF8;
          goto string_till_end;
        }
        GOOGLE_PROTOBUF_PARSER_ASSERT(::google::protobuf::internal::StringCheckUTF8(ptr, size, ctx));
        ::google::protobuf::internal::InlineGreedyStringParser(object, ptr, size, ctx);
        ptr += size;
        break;
      }
      // uint64 time = 3;
      case 3: {
        if (static_cast<::google::protobuf::uint8>(tag) != 24) goto handle_unusual;
        msg->set_time(::google::protobuf::internal::ReadVarint(&ptr));
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        break;
      }
      // uint32 status = 4;
      case 4: {
        if (static_cast<::google::protobuf::uint8>(tag) != 32) goto handle_unusual;
        msg->set_status(::google::protobuf::internal::ReadVarint(&ptr));
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        break;
      }
      // uint32 offsetUnits = 5;
      case 5: {
        if (static_cast<::google::protobuf::uint8>(tag) != 40) goto handle_unusual;
        msg->set_offsetunits(::google::protobuf::internal::ReadVarint(&ptr));
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        break;
      }
      // uint32 slopeUnits = 6;
      case 6: {
        if (static_cast<::google::protobuf::uint8>(tag) != 48) goto handle_unusual;
        msg->set_slopeunits(::google::protobuf::internal::ReadVarint(&ptr));
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        break;
      }
      // float slope = 7;
      case 7: {
        if (static_cast<::google::protobuf::uint8>(tag) != 61) goto handle_unusual;
        msg->set_slope(::google::protobuf::io::UnalignedLoad<float>(ptr));
        ptr += sizeof(float);
        break;
      }
      // float slopeAux = 8;
      case 8: {
        if (static_cast<::google::protobuf::uint8>(tag) != 69) goto handle_unusual;
        msg->set_slopeaux(::google::protobuf::io::UnalignedLoad<float>(ptr));
        ptr += sizeof(float);
        break;
      }
      // float offset = 9;
      case 9: {
        if (static_cast<::google::protobuf::uint8>(tag) != 77) goto handle_unusual;
        msg->set_offset(::google::protobuf::io::UnalignedLoad<float>(ptr));
        ptr += sizeof(float);
        break;
      }
      // float r2 = 10;
      case 10: {
        if (static_cast<::google::protobuf::uint8>(tag) != 85) goto handle_unusual;
        msg->set_r2(::google::protobuf::io::UnalignedLoad<float>(ptr));
        ptr += sizeof(float);
        break;
      }
      // repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;
      case 11: {
        if (static_cast<::google::protobuf::uint8>(tag) != 90) goto handle_unusual;
        do {
          ptr = ::google::protobuf::io::ReadSize(ptr, &size);
          GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
          parser_till_end = ::claros::instrument::CalibrationStandard::_InternalParse;
          object = msg->add_calibrationstandards();
          if (size > end - ptr) goto len_delim_till_end;
          ptr += size;
          GOOGLE_PROTOBUF_PARSER_ASSERT(ctx->ParseExactRange(
              {parser_till_end, object}, ptr - size, ptr));
          if (ptr >= end) break;
        } while ((::google::protobuf::io::UnalignedLoad<::google::protobuf::uint64>(ptr) & 255) == 90 && (ptr += 1));
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
string_till_end:
  static_cast<::std::string*>(object)->clear();
  static_cast<::std::string*>(object)->reserve(size);
  goto len_delim_till_end;
len_delim_till_end:
  return ctx->StoreAndTailCall(ptr, end, {_InternalParse, msg},
                               {parser_till_end, object}, size);
}
#else  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
bool Calibration::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!PROTOBUF_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:claros.instrument.Calibration)
  for (;;) {
    ::std::pair<::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // string ID = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (10 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_id()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->id().data(), static_cast<int>(this->id().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "claros.instrument.Calibration.ID"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // string userID = 2;
      case 2: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (18 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadString(
                input, this->mutable_userid()));
          DO_(::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
            this->userid().data(), static_cast<int>(this->userid().length()),
            ::google::protobuf::internal::WireFormatLite::PARSE,
            "claros.instrument.Calibration.userID"));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // uint64 time = 3;
      case 3: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (24 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::uint64, ::google::protobuf::internal::WireFormatLite::TYPE_UINT64>(
                 input, &time_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // uint32 status = 4;
      case 4: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (32 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::uint32, ::google::protobuf::internal::WireFormatLite::TYPE_UINT32>(
                 input, &status_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // uint32 offsetUnits = 5;
      case 5: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (40 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::uint32, ::google::protobuf::internal::WireFormatLite::TYPE_UINT32>(
                 input, &offsetunits_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // uint32 slopeUnits = 6;
      case 6: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (48 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   ::google::protobuf::uint32, ::google::protobuf::internal::WireFormatLite::TYPE_UINT32>(
                 input, &slopeunits_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // float slope = 7;
      case 7: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (61 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   float, ::google::protobuf::internal::WireFormatLite::TYPE_FLOAT>(
                 input, &slope_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // float slopeAux = 8;
      case 8: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (69 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   float, ::google::protobuf::internal::WireFormatLite::TYPE_FLOAT>(
                 input, &slopeaux_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // float offset = 9;
      case 9: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (77 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   float, ::google::protobuf::internal::WireFormatLite::TYPE_FLOAT>(
                 input, &offset_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // float r2 = 10;
      case 10: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (85 & 0xFF)) {

          DO_((::google::protobuf::internal::WireFormatLite::ReadPrimitive<
                   float, ::google::protobuf::internal::WireFormatLite::TYPE_FLOAT>(
                 input, &r2_)));
        } else {
          goto handle_unusual;
        }
        break;
      }

      // repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;
      case 11: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (90 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessage(
                input, add_calibrationstandards()));
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
  // @@protoc_insertion_point(parse_success:claros.instrument.Calibration)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:claros.instrument.Calibration)
  return false;
#undef DO_
}
#endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER

void Calibration::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:claros.instrument.Calibration)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string ID = 1;
  if (this->id().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->id().data(), static_cast<int>(this->id().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "claros.instrument.Calibration.ID");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      1, this->id(), output);
  }

  // string userID = 2;
  if (this->userid().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->userid().data(), static_cast<int>(this->userid().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "claros.instrument.Calibration.userID");
    ::google::protobuf::internal::WireFormatLite::WriteStringMaybeAliased(
      2, this->userid(), output);
  }

  // uint64 time = 3;
  if (this->time() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteUInt64(3, this->time(), output);
  }

  // uint32 status = 4;
  if (this->status() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteUInt32(4, this->status(), output);
  }

  // uint32 offsetUnits = 5;
  if (this->offsetunits() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteUInt32(5, this->offsetunits(), output);
  }

  // uint32 slopeUnits = 6;
  if (this->slopeunits() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteUInt32(6, this->slopeunits(), output);
  }

  // float slope = 7;
  if (this->slope() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteFloat(7, this->slope(), output);
  }

  // float slopeAux = 8;
  if (this->slopeaux() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteFloat(8, this->slopeaux(), output);
  }

  // float offset = 9;
  if (this->offset() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteFloat(9, this->offset(), output);
  }

  // float r2 = 10;
  if (this->r2() != 0) {
    ::google::protobuf::internal::WireFormatLite::WriteFloat(10, this->r2(), output);
  }

  // repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->calibrationstandards_size()); i < n; i++) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      11,
      this->calibrationstandards(static_cast<int>(i)),
      output);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        _internal_metadata_.unknown_fields(), output);
  }
  // @@protoc_insertion_point(serialize_end:claros.instrument.Calibration)
}

::google::protobuf::uint8* Calibration::InternalSerializeWithCachedSizesToArray(
    ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:claros.instrument.Calibration)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // string ID = 1;
  if (this->id().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->id().data(), static_cast<int>(this->id().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "claros.instrument.Calibration.ID");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        1, this->id(), target);
  }

  // string userID = 2;
  if (this->userid().size() > 0) {
    ::google::protobuf::internal::WireFormatLite::VerifyUtf8String(
      this->userid().data(), static_cast<int>(this->userid().length()),
      ::google::protobuf::internal::WireFormatLite::SERIALIZE,
      "claros.instrument.Calibration.userID");
    target =
      ::google::protobuf::internal::WireFormatLite::WriteStringToArray(
        2, this->userid(), target);
  }

  // uint64 time = 3;
  if (this->time() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteUInt64ToArray(3, this->time(), target);
  }

  // uint32 status = 4;
  if (this->status() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteUInt32ToArray(4, this->status(), target);
  }

  // uint32 offsetUnits = 5;
  if (this->offsetunits() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteUInt32ToArray(5, this->offsetunits(), target);
  }

  // uint32 slopeUnits = 6;
  if (this->slopeunits() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteUInt32ToArray(6, this->slopeunits(), target);
  }

  // float slope = 7;
  if (this->slope() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteFloatToArray(7, this->slope(), target);
  }

  // float slopeAux = 8;
  if (this->slopeaux() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteFloatToArray(8, this->slopeaux(), target);
  }

  // float offset = 9;
  if (this->offset() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteFloatToArray(9, this->offset(), target);
  }

  // float r2 = 10;
  if (this->r2() != 0) {
    target = ::google::protobuf::internal::WireFormatLite::WriteFloatToArray(10, this->r2(), target);
  }

  // repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;
  for (unsigned int i = 0,
      n = static_cast<unsigned int>(this->calibrationstandards_size()); i < n; i++) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageToArray(
        11, this->calibrationstandards(static_cast<int>(i)), target);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:claros.instrument.Calibration)
  return target;
}

size_t Calibration::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:claros.instrument.Calibration)
  size_t total_size = 0;

  if (_internal_metadata_.have_unknown_fields()) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        _internal_metadata_.unknown_fields());
  }
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  // repeated .claros.instrument.CalibrationStandard calibrationStandards = 11;
  {
    unsigned int count = static_cast<unsigned int>(this->calibrationstandards_size());
    total_size += 1UL * count;
    for (unsigned int i = 0; i < count; i++) {
      total_size +=
        ::google::protobuf::internal::WireFormatLite::MessageSize(
          this->calibrationstandards(static_cast<int>(i)));
    }
  }

  // string ID = 1;
  if (this->id().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->id());
  }

  // string userID = 2;
  if (this->userid().size() > 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::StringSize(
        this->userid());
  }

  // uint64 time = 3;
  if (this->time() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::UInt64Size(
        this->time());
  }

  // uint32 status = 4;
  if (this->status() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::UInt32Size(
        this->status());
  }

  // uint32 offsetUnits = 5;
  if (this->offsetunits() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::UInt32Size(
        this->offsetunits());
  }

  // uint32 slopeUnits = 6;
  if (this->slopeunits() != 0) {
    total_size += 1 +
      ::google::protobuf::internal::WireFormatLite::UInt32Size(
        this->slopeunits());
  }

  // float slope = 7;
  if (this->slope() != 0) {
    total_size += 1 + 4;
  }

  // float slopeAux = 8;
  if (this->slopeaux() != 0) {
    total_size += 1 + 4;
  }

  // float offset = 9;
  if (this->offset() != 0) {
    total_size += 1 + 4;
  }

  // float r2 = 10;
  if (this->r2() != 0) {
    total_size += 1 + 4;
  }

  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void Calibration::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:claros.instrument.Calibration)
  GOOGLE_DCHECK_NE(&from, this);
  const Calibration* source =
      ::google::protobuf::DynamicCastToGenerated<Calibration>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:claros.instrument.Calibration)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:claros.instrument.Calibration)
    MergeFrom(*source);
  }
}

void Calibration::MergeFrom(const Calibration& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:claros.instrument.Calibration)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  calibrationstandards_.MergeFrom(from.calibrationstandards_);
  if (from.id().size() > 0) {

    id_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.id_);
  }
  if (from.userid().size() > 0) {

    userid_.AssignWithDefault(&::google::protobuf::internal::GetEmptyStringAlreadyInited(), from.userid_);
  }
  if (from.time() != 0) {
    set_time(from.time());
  }
  if (from.status() != 0) {
    set_status(from.status());
  }
  if (from.offsetunits() != 0) {
    set_offsetunits(from.offsetunits());
  }
  if (from.slopeunits() != 0) {
    set_slopeunits(from.slopeunits());
  }
  if (from.slope() != 0) {
    set_slope(from.slope());
  }
  if (from.slopeaux() != 0) {
    set_slopeaux(from.slopeaux());
  }
  if (from.offset() != 0) {
    set_offset(from.offset());
  }
  if (from.r2() != 0) {
    set_r2(from.r2());
  }
}

void Calibration::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:claros.instrument.Calibration)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void Calibration::CopyFrom(const Calibration& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:claros.instrument.Calibration)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool Calibration::IsInitialized() const {
  return true;
}

void Calibration::Swap(Calibration* other) {
  if (other == this) return;
  InternalSwap(other);
}
void Calibration::InternalSwap(Calibration* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  CastToBase(&calibrationstandards_)->InternalSwap(CastToBase(&other->calibrationstandards_));
  id_.Swap(&other->id_, &::google::protobuf::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  userid_.Swap(&other->userid_, &::google::protobuf::internal::GetEmptyStringAlreadyInited(),
    GetArenaNoVirtual());
  swap(time_, other->time_);
  swap(status_, other->status_);
  swap(offsetunits_, other->offsetunits_);
  swap(slopeunits_, other->slopeunits_);
  swap(slope_, other->slope_);
  swap(slopeaux_, other->slopeaux_);
  swap(offset_, other->offset_);
  swap(r2_, other->r2_);
}

::google::protobuf::Metadata Calibration::GetMetadata() const {
  ::google::protobuf::internal::AssignDescriptors(&::assign_descriptors_table_claros_5finstrument_5fcalibration_2eproto);
  return ::file_level_metadata_claros_5finstrument_5fcalibration_2eproto[kIndexInFileMessages];
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace instrument
}  // namespace claros
namespace google {
namespace protobuf {
template<> PROTOBUF_NOINLINE ::claros::instrument::Calibration* Arena::CreateMaybeMessage< ::claros::instrument::Calibration >(Arena* arena) {
  return Arena::CreateInternal< ::claros::instrument::Calibration >(arena);
}
}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
