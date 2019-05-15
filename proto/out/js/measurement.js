/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.common.Measurement');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.common.DateTime');

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
proto.claros.common.Measurement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.claros.common.Measurement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.common.Measurement.displayName = 'proto.claros.common.Measurement';
}



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
proto.claros.common.Measurement.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.common.Measurement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.common.Measurement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.Measurement.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: (f = msg.getTimestamp()) && proto.claros.common.DateTime.toObject(includeInstance, f),
    parameterid: jspb.Message.getFieldWithDefault(msg, 2, 0),
    parameterguid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    unitid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    unitguid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    value: +jspb.Message.getFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.claros.common.Measurement}
 */
proto.claros.common.Measurement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.common.Measurement;
  return proto.claros.common.Measurement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.common.Measurement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.common.Measurement}
 */
proto.claros.common.Measurement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.claros.common.DateTime;
      reader.readMessage(value,proto.claros.common.DateTime.deserializeBinaryFromReader);
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setParameterid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameterguid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUnitid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnitguid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.claros.common.Measurement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.common.Measurement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.common.Measurement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.Measurement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.claros.common.DateTime.serializeBinaryToWriter
    );
  }
  f = message.getParameterid();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getParameterguid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUnitid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUnitguid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional DateTime timestamp = 1;
 * @return {?proto.claros.common.DateTime}
 */
proto.claros.common.Measurement.prototype.getTimestamp = function() {
  return /** @type{?proto.claros.common.DateTime} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.DateTime, 1));
};


/** @param {?proto.claros.common.DateTime|undefined} value */
proto.claros.common.Measurement.prototype.setTimestamp = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.Measurement.prototype.clearTimestamp = function() {
  this.setTimestamp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.Measurement.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 parameterId = 2;
 * @return {number}
 */
proto.claros.common.Measurement.prototype.getParameterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.claros.common.Measurement.prototype.setParameterid = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string parameterGuid = 3;
 * @return {string}
 */
proto.claros.common.Measurement.prototype.getParameterguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.claros.common.Measurement.prototype.setParameterguid = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 unitId = 4;
 * @return {number}
 */
proto.claros.common.Measurement.prototype.getUnitid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.claros.common.Measurement.prototype.setUnitid = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string unitGuid = 5;
 * @return {string}
 */
proto.claros.common.Measurement.prototype.getUnitguid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.claros.common.Measurement.prototype.setUnitguid = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional float value = 6;
 * @return {number}
 */
proto.claros.common.Measurement.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.claros.common.Measurement.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 6, value);
};


