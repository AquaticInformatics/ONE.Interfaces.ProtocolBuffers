// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_auditevent.proto

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
GPB_ENUM_FWD_DECLARE(AuditEventType);
GPB_ENUM_FWD_DECLARE(DataSourceType);

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosCommonCoreAuditeventRoot

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
@interface ClarosCommonCoreAuditeventRoot : GPBRootObject
@end

#pragma mark - AuditEvent

typedef GPB_ENUM(AuditEvent_FieldNumber) {
  AuditEvent_FieldNumber_Id_p = 1,
  AuditEvent_FieldNumber_UserId = 2,
  AuditEvent_FieldNumber_DataSourceType = 3,
  AuditEvent_FieldNumber_EventType = 4,
  AuditEvent_FieldNumber_TimeStamp = 5,
};

@interface AuditEvent : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *id_p;

@property(nonatomic, readwrite, copy, null_resettable) NSString *userId;

@property(nonatomic, readwrite) enum DataSourceType dataSourceType;

@property(nonatomic, readwrite) enum AuditEventType eventType;

@property(nonatomic, readwrite, strong, null_resettable) ClarosDateTime *timeStamp;
/** Test to see if @c timeStamp has been set. */
@property(nonatomic, readwrite) BOOL hasTimeStamp;

@end

/**
 * Fetches the raw value of a @c AuditEvent's @c dataSourceType property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t AuditEvent_DataSourceType_RawValue(AuditEvent *message);
/**
 * Sets the raw value of an @c AuditEvent's @c dataSourceType property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetAuditEvent_DataSourceType_RawValue(AuditEvent *message, int32_t value);

/**
 * Fetches the raw value of a @c AuditEvent's @c eventType property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t AuditEvent_EventType_RawValue(AuditEvent *message);
/**
 * Sets the raw value of an @c AuditEvent's @c eventType property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetAuditEvent_EventType_RawValue(AuditEvent *message, int32_t value);

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
