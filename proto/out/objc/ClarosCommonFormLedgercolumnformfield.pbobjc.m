// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_form_ledgercolumnformfield.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers_RuntimeSupport.h>
#else
 #import "GPBProtocolBuffers_RuntimeSupport.h"
#endif

#import "ClarosCommonFormLedgercolumnformfield.pbobjc.h"
#import "ClarosCommonRecurrenceRecurrence.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosCommonFormLedgercolumnformfieldRoot

@implementation ClarosCommonFormLedgercolumnformfieldRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosCommonFormLedgercolumnformfieldRoot_FileDescriptor

static GPBFileDescriptor *ClarosCommonFormLedgercolumnformfieldRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.common.form"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - LedgerColumnFormField

@implementation LedgerColumnFormField

@dynamic ledgerColumnGuid;
@dynamic unit;
@dynamic upLimit;
@dynamic lowLimit;
@dynamic hasTimeWindow, timeWindow;
@dynamic parameter;

typedef struct LedgerColumnFormField__storage_ {
  uint32_t _has_storage_[1];
  NSString *ledgerColumnGuid;
  NSString *unit;
  NSString *upLimit;
  NSString *lowLimit;
  Recurrence *timeWindow;
  NSString *parameter;
} LedgerColumnFormField__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "ledgerColumnGuid",
        .dataTypeSpecific.className = NULL,
        .number = LedgerColumnFormField_FieldNumber_LedgerColumnGuid,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(LedgerColumnFormField__storage_, ledgerColumnGuid),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "unit",
        .dataTypeSpecific.className = NULL,
        .number = LedgerColumnFormField_FieldNumber_Unit,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(LedgerColumnFormField__storage_, unit),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeString,
      },
      {
        .name = "upLimit",
        .dataTypeSpecific.className = NULL,
        .number = LedgerColumnFormField_FieldNumber_UpLimit,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(LedgerColumnFormField__storage_, upLimit),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "lowLimit",
        .dataTypeSpecific.className = NULL,
        .number = LedgerColumnFormField_FieldNumber_LowLimit,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(LedgerColumnFormField__storage_, lowLimit),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "timeWindow",
        .dataTypeSpecific.className = GPBStringifySymbol(Recurrence),
        .number = LedgerColumnFormField_FieldNumber_TimeWindow,
        .hasIndex = 4,
        .offset = (uint32_t)offsetof(LedgerColumnFormField__storage_, timeWindow),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "parameter",
        .dataTypeSpecific.className = NULL,
        .number = LedgerColumnFormField_FieldNumber_Parameter,
        .hasIndex = 5,
        .offset = (uint32_t)offsetof(LedgerColumnFormField__storage_, parameter),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeString,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[LedgerColumnFormField class]
                                     rootClass:[ClarosCommonFormLedgercolumnformfieldRoot class]
                                          file:ClarosCommonFormLedgercolumnformfieldRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(LedgerColumnFormField__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\004\001\rc\000\003\007\000\004\010\000\005\n\000";
    [localDescriptor setupExtraTextInfo:extraTextFormatInfo];
#endif  // !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    #if defined(DEBUG) && DEBUG
      NSAssert(descriptor == nil, @"Startup recursed!");
    #endif  // DEBUG
    descriptor = localDescriptor;
  }
  return descriptor;
}

@end


#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
