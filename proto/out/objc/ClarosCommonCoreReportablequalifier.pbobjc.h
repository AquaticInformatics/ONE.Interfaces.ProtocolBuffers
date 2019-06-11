// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_reportablequalifier.proto

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

GPB_ENUM_FWD_DECLARE(ReportableQualifierType);

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosCommonCoreReportablequalifierRoot

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
@interface ClarosCommonCoreReportablequalifierRoot : GPBRootObject
@end

#pragma mark - ReportableQualifier

typedef GPB_ENUM(ReportableQualifier_FieldNumber) {
  ReportableQualifier_FieldNumber_ReportableQualifierType = 1,
  ReportableQualifier_FieldNumber_QualifiedValue = 2,
};

@interface ReportableQualifier : GPBMessage

@property(nonatomic, readwrite) enum ReportableQualifierType reportableQualifierType;

@property(nonatomic, readwrite, copy, null_resettable) NSString *qualifiedValue;

@end

/**
 * Fetches the raw value of a @c ReportableQualifier's @c reportableQualifierType property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t ReportableQualifier_ReportableQualifierType_RawValue(ReportableQualifier *message);
/**
 * Sets the raw value of an @c ReportableQualifier's @c reportableQualifierType property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetReportableQualifier_ReportableQualifierType_RawValue(ReportableQualifier *message, int32_t value);

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
