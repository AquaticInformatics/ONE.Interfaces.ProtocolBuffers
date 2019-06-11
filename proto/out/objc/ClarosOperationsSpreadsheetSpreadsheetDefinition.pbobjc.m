// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_operations_spreadsheet_spreadsheet_definition.proto

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

#import "ClarosOperationsSpreadsheetSpreadsheetDefinition.pbobjc.h"
#import "ClarosCommonCoreTimewindow.pbobjc.h"
#import "ClarosCommonCoreTimezone.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosOperationsSpreadsheetSpreadsheetDefinitionRoot

@implementation ClarosOperationsSpreadsheetSpreadsheetDefinitionRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosOperationsSpreadsheetSpreadsheetDefinitionRoot_FileDescriptor

static GPBFileDescriptor *ClarosOperationsSpreadsheetSpreadsheetDefinitionRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.operations.spreadsheet"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - SpreadsheetDefinition

@implementation SpreadsheetDefinition

@dynamic version;
@dynamic hasTimewindow, timewindow;
@dynamic timezone;
@dynamic timeWindowOffset;

typedef struct SpreadsheetDefinition__storage_ {
  uint32_t _has_storage_[1];
  TimeZone timezone;
  uint32_t timeWindowOffset;
  NSString *version;
  TimeWindow *timewindow;
} SpreadsheetDefinition__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "version",
        .dataTypeSpecific.className = NULL,
        .number = SpreadsheetDefinition_FieldNumber_Version,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(SpreadsheetDefinition__storage_, version),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeString,
      },
      {
        .name = "timewindow",
        .dataTypeSpecific.className = GPBStringifySymbol(TimeWindow),
        .number = SpreadsheetDefinition_FieldNumber_Timewindow,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(SpreadsheetDefinition__storage_, timewindow),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "timezone",
        .dataTypeSpecific.enumDescFunc = TimeZone_EnumDescriptor,
        .number = SpreadsheetDefinition_FieldNumber_Timezone,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(SpreadsheetDefinition__storage_, timezone),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldHasEnumDescriptor),
        .dataType = GPBDataTypeEnum,
      },
      {
        .name = "timeWindowOffset",
        .dataTypeSpecific.className = NULL,
        .number = SpreadsheetDefinition_FieldNumber_TimeWindowOffset,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(SpreadsheetDefinition__storage_, timeWindowOffset),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeUInt32,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[SpreadsheetDefinition class]
                                     rootClass:[ClarosOperationsSpreadsheetSpreadsheetDefinitionRoot class]
                                          file:ClarosOperationsSpreadsheetSpreadsheetDefinitionRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(SpreadsheetDefinition__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\001\004\020\000";
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

int32_t SpreadsheetDefinition_Timezone_RawValue(SpreadsheetDefinition *message) {
  GPBDescriptor *descriptor = [SpreadsheetDefinition descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:SpreadsheetDefinition_FieldNumber_Timezone];
  return GPBGetMessageInt32Field(message, field);
}

void SetSpreadsheetDefinition_Timezone_RawValue(SpreadsheetDefinition *message, int32_t value) {
  GPBDescriptor *descriptor = [SpreadsheetDefinition descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:SpreadsheetDefinition_FieldNumber_Timezone];
  GPBSetInt32IvarWithFieldInternal(message, field, value, descriptor.file.syntax);
}


#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
