// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_report_report_data.proto

#include "claros_common_report_report_data.pb.h"

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

extern PROTOBUF_INTERNAL_EXPORT_claros_5foperations_5fspreadsheet_5fspreadsheet_2eproto ::google::protobuf::internal::SCCInfo<2> scc_info_Spreadsheet_claros_5foperations_5fspreadsheet_5fspreadsheet_2eproto;
namespace claros {
namespace common {
namespace report {
class ReportDataDefaultTypeInternal {
 public:
  ::google::protobuf::internal::ExplicitlyConstructed<ReportData> _instance;
  const ::claros::operations::spreadsheet::Spreadsheet* spreadsheet_;
} _ReportData_default_instance_;
}  // namespace report
}  // namespace common
}  // namespace claros
static void InitDefaultsReportData_claros_5fcommon_5freport_5freport_5fdata_2eproto() {
  GOOGLE_PROTOBUF_VERIFY_VERSION;

  {
    void* ptr = &::claros::common::report::_ReportData_default_instance_;
    new (ptr) ::claros::common::report::ReportData();
    ::google::protobuf::internal::OnShutdownDestroyMessage(ptr);
  }
  ::claros::common::report::ReportData::InitAsDefaultInstance();
}

::google::protobuf::internal::SCCInfo<1> scc_info_ReportData_claros_5fcommon_5freport_5freport_5fdata_2eproto =
    {{ATOMIC_VAR_INIT(::google::protobuf::internal::SCCInfoBase::kUninitialized), 1, InitDefaultsReportData_claros_5fcommon_5freport_5freport_5fdata_2eproto}, {
      &scc_info_Spreadsheet_claros_5foperations_5fspreadsheet_5fspreadsheet_2eproto.base,}};

void InitDefaults_claros_5fcommon_5freport_5freport_5fdata_2eproto() {
  ::google::protobuf::internal::InitSCC(&scc_info_ReportData_claros_5fcommon_5freport_5freport_5fdata_2eproto.base);
}

::google::protobuf::Metadata file_level_metadata_claros_5fcommon_5freport_5freport_5fdata_2eproto[1];
constexpr ::google::protobuf::EnumDescriptor const** file_level_enum_descriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto = nullptr;
constexpr ::google::protobuf::ServiceDescriptor const** file_level_service_descriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto = nullptr;

const ::google::protobuf::uint32 TableStruct_claros_5fcommon_5freport_5freport_5fdata_2eproto::offsets[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  ~0u,  // no _has_bits_
  PROTOBUF_FIELD_OFFSET(::claros::common::report::ReportData, _internal_metadata_),
  ~0u,  // no _extensions_
  PROTOBUF_FIELD_OFFSET(::claros::common::report::ReportData, _oneof_case_[0]),
  ~0u,  // no _weak_field_map_
  offsetof(::claros::common::report::ReportDataDefaultTypeInternal, spreadsheet_),
  PROTOBUF_FIELD_OFFSET(::claros::common::report::ReportData, reportDataSet_),
};
static const ::google::protobuf::internal::MigrationSchema schemas[] PROTOBUF_SECTION_VARIABLE(protodesc_cold) = {
  { 0, -1, sizeof(::claros::common::report::ReportData)},
};

static ::google::protobuf::Message const * const file_default_instances[] = {
  reinterpret_cast<const ::google::protobuf::Message*>(&::claros::common::report::_ReportData_default_instance_),
};

::google::protobuf::internal::AssignDescriptorsTable assign_descriptors_table_claros_5fcommon_5freport_5freport_5fdata_2eproto = {
  {}, AddDescriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto, "claros_common_report_report_data.proto", schemas,
  file_default_instances, TableStruct_claros_5fcommon_5freport_5freport_5fdata_2eproto::offsets,
  file_level_metadata_claros_5fcommon_5freport_5freport_5fdata_2eproto, 1, file_level_enum_descriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto, file_level_service_descriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto,
};

const char descriptor_table_protodef_claros_5fcommon_5freport_5freport_5fdata_2eproto[] =
  "\n&claros_common_report_report_data.proto"
  "\022\024claros.common.report\032/claros_operation"
  "s_spreadsheet_spreadsheet.proto\"`\n\nRepor"
  "tData\022A\n\013spreadsheet\030\001 \001(\0132*.claros.oper"
  "ations.spreadsheet.SpreadsheetH\000B\017\n\rrepo"
  "rtDataSetb\006proto3"
  ;
::google::protobuf::internal::DescriptorTable descriptor_table_claros_5fcommon_5freport_5freport_5fdata_2eproto = {
  false, InitDefaults_claros_5fcommon_5freport_5freport_5fdata_2eproto, 
  descriptor_table_protodef_claros_5fcommon_5freport_5freport_5fdata_2eproto,
  "claros_common_report_report_data.proto", &assign_descriptors_table_claros_5fcommon_5freport_5freport_5fdata_2eproto, 217,
};

void AddDescriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto() {
  static constexpr ::google::protobuf::internal::InitFunc deps[1] =
  {
    ::AddDescriptors_claros_5foperations_5fspreadsheet_5fspreadsheet_2eproto,
  };
 ::google::protobuf::internal::AddDescriptors(&descriptor_table_claros_5fcommon_5freport_5freport_5fdata_2eproto, deps, 1);
}

// Force running AddDescriptors() at dynamic initialization time.
static bool dynamic_init_dummy_claros_5fcommon_5freport_5freport_5fdata_2eproto = []() { AddDescriptors_claros_5fcommon_5freport_5freport_5fdata_2eproto(); return true; }();
namespace claros {
namespace common {
namespace report {

// ===================================================================

void ReportData::InitAsDefaultInstance() {
  ::claros::common::report::_ReportData_default_instance_.spreadsheet_ = const_cast< ::claros::operations::spreadsheet::Spreadsheet*>(
      ::claros::operations::spreadsheet::Spreadsheet::internal_default_instance());
}
class ReportData::HasBitSetters {
 public:
  static const ::claros::operations::spreadsheet::Spreadsheet& spreadsheet(const ReportData* msg);
};

const ::claros::operations::spreadsheet::Spreadsheet&
ReportData::HasBitSetters::spreadsheet(const ReportData* msg) {
  return *msg->reportDataSet_.spreadsheet_;
}
void ReportData::set_allocated_spreadsheet(::claros::operations::spreadsheet::Spreadsheet* spreadsheet) {
  ::google::protobuf::Arena* message_arena = GetArenaNoVirtual();
  clear_reportDataSet();
  if (spreadsheet) {
    ::google::protobuf::Arena* submessage_arena = nullptr;
    if (message_arena != submessage_arena) {
      spreadsheet = ::google::protobuf::internal::GetOwnedMessage(
          message_arena, spreadsheet, submessage_arena);
    }
    set_has_spreadsheet();
    reportDataSet_.spreadsheet_ = spreadsheet;
  }
  // @@protoc_insertion_point(field_set_allocated:claros.common.report.ReportData.spreadsheet)
}
void ReportData::clear_spreadsheet() {
  if (has_spreadsheet()) {
    delete reportDataSet_.spreadsheet_;
    clear_has_reportDataSet();
  }
}
#if !defined(_MSC_VER) || _MSC_VER >= 1900
const int ReportData::kSpreadsheetFieldNumber;
#endif  // !defined(_MSC_VER) || _MSC_VER >= 1900

ReportData::ReportData()
  : ::google::protobuf::Message(), _internal_metadata_(nullptr) {
  SharedCtor();
  // @@protoc_insertion_point(constructor:claros.common.report.ReportData)
}
ReportData::ReportData(const ReportData& from)
  : ::google::protobuf::Message(),
      _internal_metadata_(nullptr) {
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  clear_has_reportDataSet();
  switch (from.reportDataSet_case()) {
    case kSpreadsheet: {
      mutable_spreadsheet()->::claros::operations::spreadsheet::Spreadsheet::MergeFrom(from.spreadsheet());
      break;
    }
    case REPORTDATASET_NOT_SET: {
      break;
    }
  }
  // @@protoc_insertion_point(copy_constructor:claros.common.report.ReportData)
}

void ReportData::SharedCtor() {
  ::google::protobuf::internal::InitSCC(
      &scc_info_ReportData_claros_5fcommon_5freport_5freport_5fdata_2eproto.base);
  clear_has_reportDataSet();
}

ReportData::~ReportData() {
  // @@protoc_insertion_point(destructor:claros.common.report.ReportData)
  SharedDtor();
}

void ReportData::SharedDtor() {
  if (has_reportDataSet()) {
    clear_reportDataSet();
  }
}

void ReportData::SetCachedSize(int size) const {
  _cached_size_.Set(size);
}
const ReportData& ReportData::default_instance() {
  ::google::protobuf::internal::InitSCC(&::scc_info_ReportData_claros_5fcommon_5freport_5freport_5fdata_2eproto.base);
  return *internal_default_instance();
}


void ReportData::clear_reportDataSet() {
// @@protoc_insertion_point(one_of_clear_start:claros.common.report.ReportData)
  switch (reportDataSet_case()) {
    case kSpreadsheet: {
      delete reportDataSet_.spreadsheet_;
      break;
    }
    case REPORTDATASET_NOT_SET: {
      break;
    }
  }
  _oneof_case_[0] = REPORTDATASET_NOT_SET;
}


void ReportData::Clear() {
// @@protoc_insertion_point(message_clear_start:claros.common.report.ReportData)
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  clear_reportDataSet();
  _internal_metadata_.Clear();
}

#if GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER
const char* ReportData::_InternalParse(const char* begin, const char* end, void* object,
                  ::google::protobuf::internal::ParseContext* ctx) {
  auto msg = static_cast<ReportData*>(object);
  ::google::protobuf::int32 size; (void)size;
  int depth; (void)depth;
  ::google::protobuf::uint32 tag;
  ::google::protobuf::internal::ParseFunc parser_till_end; (void)parser_till_end;
  auto ptr = begin;
  while (ptr < end) {
    ptr = ::google::protobuf::io::Parse32(ptr, &tag);
    GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
    switch (tag >> 3) {
      // .claros.operations.spreadsheet.Spreadsheet spreadsheet = 1;
      case 1: {
        if (static_cast<::google::protobuf::uint8>(tag) != 10) goto handle_unusual;
        ptr = ::google::protobuf::io::ReadSize(ptr, &size);
        GOOGLE_PROTOBUF_PARSER_ASSERT(ptr);
        parser_till_end = ::claros::operations::spreadsheet::Spreadsheet::_InternalParse;
        object = msg->mutable_spreadsheet();
        if (size > end - ptr) goto len_delim_till_end;
        ptr += size;
        GOOGLE_PROTOBUF_PARSER_ASSERT(ctx->ParseExactRange(
            {parser_till_end, object}, ptr - size, ptr));
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
bool ReportData::MergePartialFromCodedStream(
    ::google::protobuf::io::CodedInputStream* input) {
#define DO_(EXPRESSION) if (!PROTOBUF_PREDICT_TRUE(EXPRESSION)) goto failure
  ::google::protobuf::uint32 tag;
  // @@protoc_insertion_point(parse_start:claros.common.report.ReportData)
  for (;;) {
    ::std::pair<::google::protobuf::uint32, bool> p = input->ReadTagWithCutoffNoLastTag(127u);
    tag = p.first;
    if (!p.second) goto handle_unusual;
    switch (::google::protobuf::internal::WireFormatLite::GetTagFieldNumber(tag)) {
      // .claros.operations.spreadsheet.Spreadsheet spreadsheet = 1;
      case 1: {
        if (static_cast< ::google::protobuf::uint8>(tag) == (10 & 0xFF)) {
          DO_(::google::protobuf::internal::WireFormatLite::ReadMessage(
               input, mutable_spreadsheet()));
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
  // @@protoc_insertion_point(parse_success:claros.common.report.ReportData)
  return true;
failure:
  // @@protoc_insertion_point(parse_failure:claros.common.report.ReportData)
  return false;
#undef DO_
}
#endif  // GOOGLE_PROTOBUF_ENABLE_EXPERIMENTAL_PARSER

void ReportData::SerializeWithCachedSizes(
    ::google::protobuf::io::CodedOutputStream* output) const {
  // @@protoc_insertion_point(serialize_start:claros.common.report.ReportData)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .claros.operations.spreadsheet.Spreadsheet spreadsheet = 1;
  if (has_spreadsheet()) {
    ::google::protobuf::internal::WireFormatLite::WriteMessageMaybeToArray(
      1, HasBitSetters::spreadsheet(this), output);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    ::google::protobuf::internal::WireFormat::SerializeUnknownFields(
        _internal_metadata_.unknown_fields(), output);
  }
  // @@protoc_insertion_point(serialize_end:claros.common.report.ReportData)
}

::google::protobuf::uint8* ReportData::InternalSerializeWithCachedSizesToArray(
    ::google::protobuf::uint8* target) const {
  // @@protoc_insertion_point(serialize_to_array_start:claros.common.report.ReportData)
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  // .claros.operations.spreadsheet.Spreadsheet spreadsheet = 1;
  if (has_spreadsheet()) {
    target = ::google::protobuf::internal::WireFormatLite::
      InternalWriteMessageToArray(
        1, HasBitSetters::spreadsheet(this), target);
  }

  if (_internal_metadata_.have_unknown_fields()) {
    target = ::google::protobuf::internal::WireFormat::SerializeUnknownFieldsToArray(
        _internal_metadata_.unknown_fields(), target);
  }
  // @@protoc_insertion_point(serialize_to_array_end:claros.common.report.ReportData)
  return target;
}

size_t ReportData::ByteSizeLong() const {
// @@protoc_insertion_point(message_byte_size_start:claros.common.report.ReportData)
  size_t total_size = 0;

  if (_internal_metadata_.have_unknown_fields()) {
    total_size +=
      ::google::protobuf::internal::WireFormat::ComputeUnknownFieldsSize(
        _internal_metadata_.unknown_fields());
  }
  ::google::protobuf::uint32 cached_has_bits = 0;
  // Prevent compiler warnings about cached_has_bits being unused
  (void) cached_has_bits;

  switch (reportDataSet_case()) {
    // .claros.operations.spreadsheet.Spreadsheet spreadsheet = 1;
    case kSpreadsheet: {
      total_size += 1 +
        ::google::protobuf::internal::WireFormatLite::MessageSize(
          *reportDataSet_.spreadsheet_);
      break;
    }
    case REPORTDATASET_NOT_SET: {
      break;
    }
  }
  int cached_size = ::google::protobuf::internal::ToCachedSize(total_size);
  SetCachedSize(cached_size);
  return total_size;
}

void ReportData::MergeFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_merge_from_start:claros.common.report.ReportData)
  GOOGLE_DCHECK_NE(&from, this);
  const ReportData* source =
      ::google::protobuf::DynamicCastToGenerated<ReportData>(
          &from);
  if (source == nullptr) {
  // @@protoc_insertion_point(generalized_merge_from_cast_fail:claros.common.report.ReportData)
    ::google::protobuf::internal::ReflectionOps::Merge(from, this);
  } else {
  // @@protoc_insertion_point(generalized_merge_from_cast_success:claros.common.report.ReportData)
    MergeFrom(*source);
  }
}

void ReportData::MergeFrom(const ReportData& from) {
// @@protoc_insertion_point(class_specific_merge_from_start:claros.common.report.ReportData)
  GOOGLE_DCHECK_NE(&from, this);
  _internal_metadata_.MergeFrom(from._internal_metadata_);
  ::google::protobuf::uint32 cached_has_bits = 0;
  (void) cached_has_bits;

  switch (from.reportDataSet_case()) {
    case kSpreadsheet: {
      mutable_spreadsheet()->::claros::operations::spreadsheet::Spreadsheet::MergeFrom(from.spreadsheet());
      break;
    }
    case REPORTDATASET_NOT_SET: {
      break;
    }
  }
}

void ReportData::CopyFrom(const ::google::protobuf::Message& from) {
// @@protoc_insertion_point(generalized_copy_from_start:claros.common.report.ReportData)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

void ReportData::CopyFrom(const ReportData& from) {
// @@protoc_insertion_point(class_specific_copy_from_start:claros.common.report.ReportData)
  if (&from == this) return;
  Clear();
  MergeFrom(from);
}

bool ReportData::IsInitialized() const {
  return true;
}

void ReportData::Swap(ReportData* other) {
  if (other == this) return;
  InternalSwap(other);
}
void ReportData::InternalSwap(ReportData* other) {
  using std::swap;
  _internal_metadata_.Swap(&other->_internal_metadata_);
  swap(reportDataSet_, other->reportDataSet_);
  swap(_oneof_case_[0], other->_oneof_case_[0]);
}

::google::protobuf::Metadata ReportData::GetMetadata() const {
  ::google::protobuf::internal::AssignDescriptors(&::assign_descriptors_table_claros_5fcommon_5freport_5freport_5fdata_2eproto);
  return ::file_level_metadata_claros_5fcommon_5freport_5freport_5fdata_2eproto[kIndexInFileMessages];
}


// @@protoc_insertion_point(namespace_scope)
}  // namespace report
}  // namespace common
}  // namespace claros
namespace google {
namespace protobuf {
template<> PROTOBUF_NOINLINE ::claros::common::report::ReportData* Arena::CreateMaybeMessage< ::claros::common::report::ReportData >(Arena* arena) {
  return Arena::CreateInternal< ::claros::common::report::ReportData >(arena);
}
}  // namespace protobuf
}  // namespace google

// @@protoc_insertion_point(global_scope)
#include <google/protobuf/port_undef.inc>
