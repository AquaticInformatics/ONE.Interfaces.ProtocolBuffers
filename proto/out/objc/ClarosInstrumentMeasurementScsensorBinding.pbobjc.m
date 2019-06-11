// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_measurement_scsensor_binding.proto

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

#import "ClarosInstrumentMeasurementScsensorBinding.pbobjc.h"
#import "ClarosCommonCoreClarosdatetime.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosInstrumentMeasurementScsensorBindingRoot

@implementation ClarosInstrumentMeasurementScsensorBindingRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosInstrumentMeasurementScsensorBindingRoot_FileDescriptor

static GPBFileDescriptor *ClarosInstrumentMeasurementScsensorBindingRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.instrument"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - SCSensorBinding

@implementation SCSensorBinding

@dynamic channel;
@dynamic tag;
@dynamic hasValidFrom, validFrom;
@dynamic hasValidTo, validTo;

typedef struct SCSensorBinding__storage_ {
  uint32_t _has_storage_[1];
  uint32_t channel;
  NSString *tag;
  ClarosDateTime *validFrom;
  ClarosDateTime *validTo;
} SCSensorBinding__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "channel",
        .dataTypeSpecific.className = NULL,
        .number = SCSensorBinding_FieldNumber_Channel,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(SCSensorBinding__storage_, channel),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeUInt32,
      },
      {
        .name = "tag",
        .dataTypeSpecific.className = NULL,
        .number = SCSensorBinding_FieldNumber_Tag,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(SCSensorBinding__storage_, tag),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeString,
      },
      {
        .name = "validFrom",
        .dataTypeSpecific.className = GPBStringifySymbol(ClarosDateTime),
        .number = SCSensorBinding_FieldNumber_ValidFrom,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(SCSensorBinding__storage_, validFrom),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "validTo",
        .dataTypeSpecific.className = GPBStringifySymbol(ClarosDateTime),
        .number = SCSensorBinding_FieldNumber_ValidTo,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(SCSensorBinding__storage_, validTo),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[SCSensorBinding class]
                                     rootClass:[ClarosInstrumentMeasurementScsensorBindingRoot class]
                                          file:ClarosInstrumentMeasurementScsensorBindingRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(SCSensorBinding__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\002\004\t\000\005\007\000";
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
