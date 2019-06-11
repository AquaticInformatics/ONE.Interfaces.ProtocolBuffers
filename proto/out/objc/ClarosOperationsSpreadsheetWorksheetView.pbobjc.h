// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_operations_spreadsheet_worksheet_view.proto

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

GPB_ENUM_FWD_DECLARE(WorksheetType);

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosOperationsSpreadsheetWorksheetViewRoot

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
@interface ClarosOperationsSpreadsheetWorksheetViewRoot : GPBRootObject
@end

#pragma mark - WorksheetView

typedef GPB_ENUM(WorksheetView_FieldNumber) {
  WorksheetView_FieldNumber_WorksheetType = 1,
  WorksheetView_FieldNumber_ColumnMasks = 2,
  WorksheetView_FieldNumber_Layout = 3,
};

@interface WorksheetView : GPBMessage

@property(nonatomic, readwrite) enum WorksheetType worksheetType;

@property(nonatomic, readwrite, strong, null_resettable) GPBUInt32ObjectDictionary<NSString*> *columnMasks;
/** The number of items in @c columnMasks without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger columnMasks_Count;

@property(nonatomic, readwrite, copy, null_resettable) NSString *layout;

@end

/**
 * Fetches the raw value of a @c WorksheetView's @c worksheetType property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t WorksheetView_WorksheetType_RawValue(WorksheetView *message);
/**
 * Sets the raw value of an @c WorksheetView's @c worksheetType property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetWorksheetView_WorksheetType_RawValue(WorksheetView *message, int32_t value);

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
