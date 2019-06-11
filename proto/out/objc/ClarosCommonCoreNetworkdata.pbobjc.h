// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_networkdata.proto

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
@class Form;
@class FormTemplate;
@class NetworkData_Response;
@class Note;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosCommonCoreNetworkdataRoot

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
@interface ClarosCommonCoreNetworkdataRoot : GPBRootObject
@end

#pragma mark - NetworkData

typedef GPB_ENUM(NetworkData_FieldNumber) {
  NetworkData_FieldNumber_ResponsesArray = 1,
};

@interface NetworkData : GPBMessage

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<NetworkData_Response*> *responsesArray;
/** The number of items in @c responsesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger responsesArray_Count;

@end

#pragma mark - NetworkData_Response

typedef GPB_ENUM(NetworkData_Response_FieldNumber) {
  NetworkData_Response_FieldNumber_FormTemplate = 2,
  NetworkData_Response_FieldNumber_Form = 3,
  NetworkData_Response_FieldNumber_DateTime = 4,
  NetworkData_Response_FieldNumber_Note = 5,
};

typedef GPB_ENUM(NetworkData_Response_ResponseOneOf_OneOfCase) {
  NetworkData_Response_ResponseOneOf_OneOfCase_GPBUnsetOneOfCase = 0,
  NetworkData_Response_ResponseOneOf_OneOfCase_FormTemplate = 2,
  NetworkData_Response_ResponseOneOf_OneOfCase_Form = 3,
  NetworkData_Response_ResponseOneOf_OneOfCase_DateTime = 4,
  NetworkData_Response_ResponseOneOf_OneOfCase_Note = 5,
};

@interface NetworkData_Response : GPBMessage

@property(nonatomic, readonly) NetworkData_Response_ResponseOneOf_OneOfCase responseOneOfOneOfCase;

@property(nonatomic, readwrite, strong, null_resettable) FormTemplate *formTemplate;

@property(nonatomic, readwrite, strong, null_resettable) Form *form;

@property(nonatomic, readwrite, strong, null_resettable) ClarosDateTime *dateTime;

@property(nonatomic, readwrite, strong, null_resettable) Note *note;

@end

/**
 * Clears whatever value was set for the oneof 'responseOneOf'.
 **/
void NetworkData_Response_ClearResponseOneOfOneOfCase(NetworkData_Response *message);

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
