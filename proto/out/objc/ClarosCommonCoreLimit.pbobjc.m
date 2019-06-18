// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_limit.proto

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

#import "ClarosCommonCoreLimit.pbobjc.h"
#import "ClarosCommonCoreLimitType.pbobjc.h"
#import "ClarosCommonRecurrenceRecurrence.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosCommonCoreLimitRoot

@implementation ClarosCommonCoreLimitRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosCommonCoreLimitRoot_FileDescriptor

static GPBFileDescriptor *ClarosCommonCoreLimitRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.common.core"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - Limit

@implementation Limit

@dynamic i18NKey;
@dynamic limitType;
@dynamic value;
@dynamic unitId;
@dynamic hasRecurrence, recurrence;

typedef struct Limit__storage_ {
  uint32_t _has_storage_[1];
  LimitType limitType;
  uint32_t unitId;
  NSString *i18NKey;
  Recurrence *recurrence;
  double value;
} Limit__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "i18NKey",
        .dataTypeSpecific.className = NULL,
        .number = Limit_FieldNumber_I18NKey,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(Limit__storage_, i18NKey),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "limitType",
        .dataTypeSpecific.enumDescFunc = LimitType_EnumDescriptor,
        .number = Limit_FieldNumber_LimitType,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(Limit__storage_, limitType),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom | GPBFieldHasEnumDescriptor),
        .dataType = GPBDataTypeEnum,
      },
      {
        .name = "value",
        .dataTypeSpecific.className = NULL,
        .number = Limit_FieldNumber_Value,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(Limit__storage_, value),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeDouble,
      },
      {
        .name = "unitId",
        .dataTypeSpecific.className = NULL,
        .number = Limit_FieldNumber_UnitId,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(Limit__storage_, unitId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeUInt32,
      },
      {
        .name = "recurrence",
        .dataTypeSpecific.className = GPBStringifySymbol(Recurrence),
        .number = Limit_FieldNumber_Recurrence,
        .hasIndex = 4,
        .offset = (uint32_t)offsetof(Limit__storage_, recurrence),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[Limit class]
                                     rootClass:[ClarosCommonCoreLimitRoot class]
                                          file:ClarosCommonCoreLimitRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(Limit__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\003\001\003$\000\002\t\000\004\006\000";
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

int32_t Limit_LimitType_RawValue(Limit *message) {
  GPBDescriptor *descriptor = [Limit descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:Limit_FieldNumber_LimitType];
  return GPBGetMessageInt32Field(message, field);
}

void SetLimit_LimitType_RawValue(Limit *message, int32_t value) {
  GPBDescriptor *descriptor = [Limit descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:Limit_FieldNumber_LimitType];
  GPBSetInt32IvarWithFieldInternal(message, field, value, descriptor.file.syntax);
}


#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
