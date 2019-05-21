// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_event.proto

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

@class Calibration;
@class DateTime;
@class EventMetaData;
@class PrognosysData;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosInstrumentEventRoot

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
@interface ClarosInstrumentEventRoot : GPBRootObject
@end

#pragma mark - InstrumentEvent

typedef GPB_ENUM(InstrumentEvent_FieldNumber) {
  InstrumentEvent_FieldNumber_CalibrationsArray = 1,
  InstrumentEvent_FieldNumber_ErrorsArray = 2,
  InstrumentEvent_FieldNumber_InfoArray = 3,
  InstrumentEvent_FieldNumber_LimitsArray = 4,
  InstrumentEvent_FieldNumber_RemindersArray = 5,
  InstrumentEvent_FieldNumber_WarningsArray = 6,
  InstrumentEvent_FieldNumber_PrognosysArray = 7,
  InstrumentEvent_FieldNumber_EventDateTime = 8,
};

@interface InstrumentEvent : GPBMessage

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<Calibration*> *calibrationsArray;
/** The number of items in @c calibrationsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger calibrationsArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<EventMetaData*> *errorsArray;
/** The number of items in @c errorsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger errorsArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<EventMetaData*> *infoArray;
/** The number of items in @c infoArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger infoArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<EventMetaData*> *limitsArray;
/** The number of items in @c limitsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger limitsArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<EventMetaData*> *remindersArray;
/** The number of items in @c remindersArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger remindersArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<EventMetaData*> *warningsArray;
/** The number of items in @c warningsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger warningsArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<PrognosysData*> *prognosysArray;
/** The number of items in @c prognosysArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger prognosysArray_Count;

@property(nonatomic, readwrite, strong, null_resettable) DateTime *eventDateTime;
/** Test to see if @c eventDateTime has been set. */
@property(nonatomic, readwrite) BOOL hasEventDateTime;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)