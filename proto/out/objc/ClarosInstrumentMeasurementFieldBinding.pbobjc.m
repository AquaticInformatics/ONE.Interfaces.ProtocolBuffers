// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_measurement_field_binding.proto

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

#import "ClarosInstrumentMeasurementFieldBinding.pbobjc.h"
#import "ClarosCommonCoreClarosdatetime.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosInstrumentMeasurementFieldBindingRoot

@implementation ClarosInstrumentMeasurementFieldBindingRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosInstrumentMeasurementFieldBindingRoot_FileDescriptor

static GPBFileDescriptor *ClarosInstrumentMeasurementFieldBindingRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.instrument.measurement"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - InstrumentMeasurementFieldBinding

@implementation InstrumentMeasurementFieldBinding

@dynamic instrumentMeasurementId;
@dynamic hasTimestamp, timestamp;
@dynamic unitId;

typedef struct InstrumentMeasurementFieldBinding__storage_ {
  uint32_t _has_storage_[1];
  uint32_t unitId;
  NSString *instrumentMeasurementId;
  ClarosDateTime *timestamp;
} InstrumentMeasurementFieldBinding__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "instrumentMeasurementId",
        .dataTypeSpecific.className = NULL,
        .number = InstrumentMeasurementFieldBinding_FieldNumber_InstrumentMeasurementId,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(InstrumentMeasurementFieldBinding__storage_, instrumentMeasurementId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "timestamp",
        .dataTypeSpecific.className = GPBStringifySymbol(ClarosDateTime),
        .number = InstrumentMeasurementFieldBinding_FieldNumber_Timestamp,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(InstrumentMeasurementFieldBinding__storage_, timestamp),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "unitId",
        .dataTypeSpecific.className = NULL,
        .number = InstrumentMeasurementFieldBinding_FieldNumber_UnitId,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(InstrumentMeasurementFieldBinding__storage_, unitId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeUInt32,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[InstrumentMeasurementFieldBinding class]
                                     rootClass:[ClarosInstrumentMeasurementFieldBindingRoot class]
                                          file:ClarosInstrumentMeasurementFieldBindingRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(InstrumentMeasurementFieldBinding__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\002\001\027\000\003\006\000";
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
