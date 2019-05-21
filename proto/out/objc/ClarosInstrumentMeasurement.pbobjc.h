// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_measurement.proto

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

@class GIS;
@class InstrumentEvent;
@class InstrumentMeasurement;
@class Measurement;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - ClarosInstrumentMeasurementRoot

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
@interface ClarosInstrumentMeasurementRoot : GPBRootObject
@end

#pragma mark - InstrumentMeasurement

typedef GPB_ENUM(InstrumentMeasurement_FieldNumber) {
  InstrumentMeasurement_FieldNumber_InstrumentMeasurementId = 1,
  InstrumentMeasurement_FieldNumber_Channel = 2,
  InstrumentMeasurement_FieldNumber_FusionId = 3,
  InstrumentMeasurement_FieldNumber_Measurement = 4,
  InstrumentMeasurement_FieldNumber_SupportingMeasurements = 5,
  InstrumentMeasurement_FieldNumber_Gis = 6,
  InstrumentMeasurement_FieldNumber_MeasurementDataExtended = 7,
  InstrumentMeasurement_FieldNumber_MeasurementEvent = 8,
};

@interface InstrumentMeasurement : GPBMessage

/** This is nullable.  In the case of Instrument Data this would be null until it reaches Claros.Instrument.Measurement */
@property(nonatomic, readwrite, copy, null_resettable) NSString *instrumentMeasurementId;

@property(nonatomic, readwrite) int32_t channel;

/** This is optional and may be populated to */
@property(nonatomic, readwrite, copy, null_resettable) NSString *fusionId;

@property(nonatomic, readwrite, strong, null_resettable) Measurement *measurement;
/** Test to see if @c measurement has been set. */
@property(nonatomic, readwrite) BOOL hasMeasurement;

@property(nonatomic, readwrite, strong, null_resettable) InstrumentMeasurement *supportingMeasurements;
/** Test to see if @c supportingMeasurements has been set. */
@property(nonatomic, readwrite) BOOL hasSupportingMeasurements;

@property(nonatomic, readwrite, strong, null_resettable) GIS *gis;
/** Test to see if @c gis has been set. */
@property(nonatomic, readwrite) BOOL hasGis;

@property(nonatomic, readwrite, copy, null_resettable) NSString *measurementDataExtended;

/** Clean up */
@property(nonatomic, readwrite, strong, null_resettable) InstrumentEvent *measurementEvent;
/** Test to see if @c measurementEvent has been set. */
@property(nonatomic, readwrite) BOOL hasMeasurementEvent;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)