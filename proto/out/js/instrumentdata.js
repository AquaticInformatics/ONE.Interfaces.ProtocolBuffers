/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.instrument.InstrumentData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.claros.common.DateTime');
goog.require('proto.claros.instrument.InstrumentEvent');
goog.require('proto.claros.instrument.InstrumentMeasurement');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.claros.instrument.InstrumentData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.claros.instrument.InstrumentData.repeatedFields_, null);
};
goog.inherits(proto.claros.instrument.InstrumentData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.instrument.InstrumentData.displayName = 'proto.claros.instrument.InstrumentData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.claros.instrument.InstrumentData.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.claros.instrument.InstrumentData.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.instrument.InstrumentData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.instrument.InstrumentData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.instrument.InstrumentData.toObject = function(includeInstance, msg) {
  var f, obj = {
    tenantid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fusionid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    events: (f = msg.getEvents()) && proto.claros.instrument.InstrumentEvent.toObject(includeInstance, f),
    measurementsList: jspb.Message.toObjectList(msg.getMeasurementsList(),
    proto.claros.instrument.InstrumentMeasurement.toObject, includeInstance),
    settingsMap: (f = msg.getSettingsMap()) ? f.toObject(includeInstance, undefined) : [],
    statesMap: (f = msg.getStatesMap()) ? f.toObject(includeInstance, undefined) : [],
    instrumentdatadatetime: (f = msg.getInstrumentdatadatetime()) && proto.claros.common.DateTime.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.claros.instrument.InstrumentData}
 */
proto.claros.instrument.InstrumentData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.instrument.InstrumentData;
  return proto.claros.instrument.InstrumentData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.instrument.InstrumentData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.instrument.InstrumentData}
 */
proto.claros.instrument.InstrumentData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFusionid(value);
      break;
    case 3:
      var value = new proto.claros.instrument.InstrumentEvent;
      reader.readMessage(value,proto.claros.instrument.InstrumentEvent.deserializeBinaryFromReader);
      msg.setEvents(value);
      break;
    case 4:
      var value = new proto.claros.instrument.InstrumentMeasurement;
      reader.readMessage(value,proto.claros.instrument.InstrumentMeasurement.deserializeBinaryFromReader);
      msg.addMeasurements(value);
      break;
    case 5:
      var value = msg.getSettingsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 6:
      var value = msg.getStatesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 7:
      var value = new proto.claros.common.DateTime;
      reader.readMessage(value,proto.claros.common.DateTime.deserializeBinaryFromReader);
      msg.setInstrumentdatadatetime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.claros.instrument.InstrumentData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.instrument.InstrumentData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.instrument.InstrumentData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.instrument.InstrumentData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTenantid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFusionid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEvents();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.claros.instrument.InstrumentEvent.serializeBinaryToWriter
    );
  }
  f = message.getMeasurementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.claros.instrument.InstrumentMeasurement.serializeBinaryToWriter
    );
  }
  f = message.getSettingsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getStatesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(6, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getInstrumentdatadatetime();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.claros.common.DateTime.serializeBinaryToWriter
    );
  }
};


/**
 * optional string tenantId = 1;
 * @return {string}
 */
proto.claros.instrument.InstrumentData.prototype.getTenantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.claros.instrument.InstrumentData.prototype.setTenantid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fusionId = 2;
 * @return {string}
 */
proto.claros.instrument.InstrumentData.prototype.getFusionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.instrument.InstrumentData.prototype.setFusionid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional InstrumentEvent events = 3;
 * @return {?proto.claros.instrument.InstrumentEvent}
 */
proto.claros.instrument.InstrumentData.prototype.getEvents = function() {
  return /** @type{?proto.claros.instrument.InstrumentEvent} */ (
    jspb.Message.getWrapperField(this, proto.claros.instrument.InstrumentEvent, 3));
};


/** @param {?proto.claros.instrument.InstrumentEvent|undefined} value */
proto.claros.instrument.InstrumentData.prototype.setEvents = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.instrument.InstrumentData.prototype.clearEvents = function() {
  this.setEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.instrument.InstrumentData.prototype.hasEvents = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated InstrumentMeasurement measurements = 4;
 * @return {!Array<!proto.claros.instrument.InstrumentMeasurement>}
 */
proto.claros.instrument.InstrumentData.prototype.getMeasurementsList = function() {
  return /** @type{!Array<!proto.claros.instrument.InstrumentMeasurement>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.instrument.InstrumentMeasurement, 4));
};


/** @param {!Array<!proto.claros.instrument.InstrumentMeasurement>} value */
proto.claros.instrument.InstrumentData.prototype.setMeasurementsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.claros.instrument.InstrumentMeasurement=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.instrument.InstrumentMeasurement}
 */
proto.claros.instrument.InstrumentData.prototype.addMeasurements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.claros.instrument.InstrumentMeasurement, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.instrument.InstrumentData.prototype.clearMeasurementsList = function() {
  this.setMeasurementsList([]);
};


/**
 * map<string, string> settings = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.claros.instrument.InstrumentData.prototype.getSettingsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.claros.instrument.InstrumentData.prototype.clearSettingsMap = function() {
  this.getSettingsMap().clear();
};


/**
 * map<string, string> states = 6;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.claros.instrument.InstrumentData.prototype.getStatesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 6, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.claros.instrument.InstrumentData.prototype.clearStatesMap = function() {
  this.getStatesMap().clear();
};


/**
 * optional claros.common.DateTime instrumentDataDateTime = 7;
 * @return {?proto.claros.common.DateTime}
 */
proto.claros.instrument.InstrumentData.prototype.getInstrumentdatadatetime = function() {
  return /** @type{?proto.claros.common.DateTime} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.DateTime, 7));
};


/** @param {?proto.claros.common.DateTime|undefined} value */
proto.claros.instrument.InstrumentData.prototype.setInstrumentdatadatetime = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.instrument.InstrumentData.prototype.clearInstrumentdatadatetime = function() {
  this.setInstrumentdatadatetime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.instrument.InstrumentData.prototype.hasInstrumentdatadatetime = function() {
  return jspb.Message.getField(this, 7) != null;
};


