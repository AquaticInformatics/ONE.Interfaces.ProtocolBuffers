// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_unit.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers.h>
#else
 #import "GPBProtocolBuffers.h"
#endif

#if GOOGLE_PROTOBUF_OBJC_VERSION < 30002
#error This file was generated by a newer version of protoc which is incompatible with your Protocol Buffer library sources.
#endif
#if 30002 < GOOGLE_PROTOBUF_OBJC_MIN_SUPPORTED_VERSION
#error This file was generated by an older version of protoc which is incompatible with your Protocol Buffer library sources.
#endif

// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

CF_EXTERN_C_BEGIN

@class ClarosDateTime;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosCommonCoreUnitRoot

/**
 * Exposes the extension registry for this file.
 *
 * The base class provides:
 * @code
 *   + (GPBExtensionRegistry *)extensionRegistry;
 * @endcode
 * which is a @c GPBExtensionRegistry that includes all the extensions defined by
 * this file and all files that it depends on.
 **/
@interface ClarosCommonCoreUnitRoot : GPBRootObject
@end

#pragma mark - Unit

typedef GPB_ENUM(Unit_FieldNumber) {
  Unit_FieldNumber_Id_p = 1,
  Unit_FieldNumber_IntId = 2,
  Unit_FieldNumber_I18NKey = 3,
  Unit_FieldNumber_UnitName = 4,
  Unit_FieldNumber_QuantityTypeId = 5,
  Unit_FieldNumber_Description_p = 6,
  Unit_FieldNumber_CreatedById = 7,
  Unit_FieldNumber_CreatedOn = 8,
  Unit_FieldNumber_ModifiedById = 9,
  Unit_FieldNumber_ModifiedOn = 10,
};

@interface Unit : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *id_p;

@property(nonatomic, readwrite) uint32_t intId;

@property(nonatomic, readwrite, copy, null_resettable) NSString *i18NKey;

@property(nonatomic, readwrite, copy, null_resettable) NSString *unitName;

@property(nonatomic, readwrite, copy, null_resettable) NSString *quantityTypeId;

@property(nonatomic, readwrite, copy, null_resettable) NSString *description_p;

@property(nonatomic, readwrite, copy, null_resettable) NSString *createdById;

@property(nonatomic, readwrite, strong, null_resettable) ClarosDateTime *createdOn;
/** Test to see if @c createdOn has been set. */
@property(nonatomic, readwrite) BOOL hasCreatedOn;

@property(nonatomic, readwrite, copy, null_resettable) NSString *modifiedById;

@property(nonatomic, readwrite, strong, null_resettable) ClarosDateTime *modifiedOn;
/** Test to see if @c modifiedOn has been set. */
@property(nonatomic, readwrite) BOOL hasModifiedOn;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
