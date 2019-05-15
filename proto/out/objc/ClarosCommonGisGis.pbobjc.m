// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_gis_gis.proto

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

#import "ClarosCommonGisGis.pbobjc.h"
#import "ClarosCommonGisPoint2D.pbobjc.h"
#import "ClarosCommonGisPoint3D.pbobjc.h"
#import "ClarosCommonGisMultiPoint2D.pbobjc.h"
#import "ClarosCommonGisMultiPoint3D.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosCommonGisGisRoot

@implementation ClarosCommonGisGisRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosCommonGisGisRoot_FileDescriptor

static GPBFileDescriptor *ClarosCommonGisGisRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.common.gis"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - GIS

@implementation GIS

@dynamic hasPoint2D, point2D;
@dynamic hasPoint3D, point3D;
@dynamic hasMultiPoint2D, multiPoint2D;
@dynamic hasMultiPoint3D, multiPoint3D;

typedef struct GIS__storage_ {
  uint32_t _has_storage_[1];
  Point2D *point2D;
  Point3D *point3D;
  MultiPoint2D *multiPoint2D;
  MultiPoint3D *multiPoint3D;
} GIS__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "point2D",
        .dataTypeSpecific.className = GPBStringifySymbol(Point2D),
        .number = GIS_FieldNumber_Point2D,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(GIS__storage_, point2D),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "point3D",
        .dataTypeSpecific.className = GPBStringifySymbol(Point3D),
        .number = GIS_FieldNumber_Point3D,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(GIS__storage_, point3D),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "multiPoint2D",
        .dataTypeSpecific.className = GPBStringifySymbol(MultiPoint2D),
        .number = GIS_FieldNumber_MultiPoint2D,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(GIS__storage_, multiPoint2D),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "multiPoint3D",
        .dataTypeSpecific.className = GPBStringifySymbol(MultiPoint3D),
        .number = GIS_FieldNumber_MultiPoint3D,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(GIS__storage_, multiPoint3D),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[GIS class]
                                     rootClass:[ClarosCommonGisGisRoot class]
                                          file:ClarosCommonGisGisRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(GIS__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\004\001\006!\000\002\006!\000\003\005\246!\000\004\005\246!\000";
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
