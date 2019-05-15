// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_configuration_configuration.proto

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

#import "ClarosCommonConfigurationConfiguration.pbobjc.h"
#import "ClarosCommonDatetime.pbobjc.h"
#import "ClarosCommonEnumEntitytype.pbobjc.h"
#import "ClarosCommonPrivileges.pbobjc.h"
// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

#pragma mark - ClarosCommonConfigurationConfigurationRoot

@implementation ClarosCommonConfigurationConfigurationRoot

// No extensions in the file and none of the imports (direct or indirect)
// defined extensions, so no need to generate +extensionRegistry.

@end

#pragma mark - ClarosCommonConfigurationConfigurationRoot_FileDescriptor

static GPBFileDescriptor *ClarosCommonConfigurationConfigurationRoot_FileDescriptor(void) {
  // This is called by +initialize so there is no need to worry
  // about thread safety of the singleton.
  static GPBFileDescriptor *descriptor = NULL;
  if (!descriptor) {
    GPB_DEBUG_CHECK_RUNTIME_VERSIONS();
    descriptor = [[GPBFileDescriptor alloc] initWithPackage:@"claros.common.configuration"
                                                     syntax:GPBFileSyntaxProto3];
  }
  return descriptor;
}

#pragma mark - Configuration

@implementation Configuration

@dynamic id_p;
@dynamic createdById;
@dynamic hasCreatedOn, createdOn;
@dynamic modifiedById;
@dynamic hasModifiedOn, modifiedOn;
@dynamic configurationData;
@dynamic entityTypeId;
@dynamic filterById;
@dynamic tenantId;
@dynamic ownerId;
@dynamic public_p;
@dynamic version;
@dynamic privilegesArray, privilegesArray_Count;

typedef struct Configuration__storage_ {
  uint32_t _has_storage_[1];
  EntityType entityTypeId;
  uint32_t version;
  NSString *id_p;
  NSString *createdById;
  DateTime *createdOn;
  NSString *modifiedById;
  DateTime *modifiedOn;
  NSString *configurationData;
  NSString *filterById;
  NSString *tenantId;
  NSString *ownerId;
  NSMutableArray *privilegesArray;
} Configuration__storage_;

// This method is threadsafe because it is initially called
// in +initialize for each subclass.
+ (GPBDescriptor *)descriptor {
  static GPBDescriptor *descriptor = nil;
  if (!descriptor) {
    static GPBMessageFieldDescription fields[] = {
      {
        .name = "id_p",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_Id_p,
        .hasIndex = 0,
        .offset = (uint32_t)offsetof(Configuration__storage_, id_p),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeString,
      },
      {
        .name = "createdById",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_CreatedById,
        .hasIndex = 1,
        .offset = (uint32_t)offsetof(Configuration__storage_, createdById),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "createdOn",
        .dataTypeSpecific.className = GPBStringifySymbol(DateTime),
        .number = Configuration_FieldNumber_CreatedOn,
        .hasIndex = 2,
        .offset = (uint32_t)offsetof(Configuration__storage_, createdOn),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "modifiedById",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_ModifiedById,
        .hasIndex = 3,
        .offset = (uint32_t)offsetof(Configuration__storage_, modifiedById),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "modifiedOn",
        .dataTypeSpecific.className = GPBStringifySymbol(DateTime),
        .number = Configuration_FieldNumber_ModifiedOn,
        .hasIndex = 4,
        .offset = (uint32_t)offsetof(Configuration__storage_, modifiedOn),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeMessage,
      },
      {
        .name = "configurationData",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_ConfigurationData,
        .hasIndex = 5,
        .offset = (uint32_t)offsetof(Configuration__storage_, configurationData),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "entityTypeId",
        .dataTypeSpecific.enumDescFunc = EntityType_EnumDescriptor,
        .number = Configuration_FieldNumber_EntityTypeId,
        .hasIndex = 6,
        .offset = (uint32_t)offsetof(Configuration__storage_, entityTypeId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom | GPBFieldHasEnumDescriptor),
        .dataType = GPBDataTypeEnum,
      },
      {
        .name = "filterById",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_FilterById,
        .hasIndex = 7,
        .offset = (uint32_t)offsetof(Configuration__storage_, filterById),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "tenantId",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_TenantId,
        .hasIndex = 8,
        .offset = (uint32_t)offsetof(Configuration__storage_, tenantId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "ownerId",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_OwnerId,
        .hasIndex = 9,
        .offset = (uint32_t)offsetof(Configuration__storage_, ownerId),
        .flags = (GPBFieldFlags)(GPBFieldOptional | GPBFieldTextFormatNameCustom),
        .dataType = GPBDataTypeString,
      },
      {
        .name = "public_p",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_Public_p,
        .hasIndex = 10,
        .offset = 11,  // Stored in _has_storage_ to save space.
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeBool,
      },
      {
        .name = "version",
        .dataTypeSpecific.className = NULL,
        .number = Configuration_FieldNumber_Version,
        .hasIndex = 12,
        .offset = (uint32_t)offsetof(Configuration__storage_, version),
        .flags = GPBFieldOptional,
        .dataType = GPBDataTypeUInt32,
      },
      {
        .name = "privilegesArray",
        .dataTypeSpecific.className = GPBStringifySymbol(Privileges),
        .number = Configuration_FieldNumber_PrivilegesArray,
        .hasIndex = GPBNoHasBit,
        .offset = (uint32_t)offsetof(Configuration__storage_, privilegesArray),
        .flags = GPBFieldRepeated,
        .dataType = GPBDataTypeMessage,
      },
    };
    GPBDescriptor *localDescriptor =
        [GPBDescriptor allocDescriptorForClass:[Configuration class]
                                     rootClass:[ClarosCommonConfigurationConfigurationRoot class]
                                          file:ClarosCommonConfigurationConfigurationRoot_FileDescriptor()
                                        fields:fields
                                    fieldCount:(uint32_t)(sizeof(fields) / sizeof(GPBMessageFieldDescription))
                                   storageSize:sizeof(Configuration__storage_)
                                         flags:GPBDescriptorInitializationFlag_None];
#if !GPBOBJC_SKIP_MESSAGE_TEXTFORMAT_EXTRAS
    static const char *extraTextFormatInfo =
        "\t\002\013\000\003\t\000\004\014\000\005\n\000\006\021\000\007\014\000\010\n\000\t\010\000\n\007\000";
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

int32_t Configuration_EntityTypeId_RawValue(Configuration *message) {
  GPBDescriptor *descriptor = [Configuration descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:Configuration_FieldNumber_EntityTypeId];
  return GPBGetMessageInt32Field(message, field);
}

void SetConfiguration_EntityTypeId_RawValue(Configuration *message, int32_t value) {
  GPBDescriptor *descriptor = [Configuration descriptor];
  GPBFieldDescriptor *field = [descriptor fieldWithNumber:Configuration_FieldNumber_EntityTypeId];
  GPBSetInt32IvarWithFieldInternal(message, field, value, descriptor.file.syntax);
}


#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
