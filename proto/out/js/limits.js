/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.common.Limits');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.common.Limit');

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
proto.claros.common.Limits = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.claros.common.Limits.repeatedFields_, null);
};
goog.inherits(proto.claros.common.Limits, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.common.Limits.displayName = 'proto.claros.common.Limits';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.claros.common.Limits.repeatedFields_ = [1];



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
proto.claros.common.Limits.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.common.Limits.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.common.Limits} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.Limits.toObject = function(includeInstance, msg) {
  var f, obj = {
    limitsList: jspb.Message.toObjectList(msg.getLimitsList(),
    proto.claros.common.Limit.toObject, includeInstance)
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
 * @return {!proto.claros.common.Limits}
 */
proto.claros.common.Limits.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.common.Limits;
  return proto.claros.common.Limits.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.common.Limits} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.common.Limits}
 */
proto.claros.common.Limits.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.claros.common.Limit;
      reader.readMessage(value,proto.claros.common.Limit.deserializeBinaryFromReader);
      msg.addLimits(value);
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
proto.claros.common.Limits.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.common.Limits.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.common.Limits} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.Limits.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.claros.common.Limit.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Limit limits = 1;
 * @return {!Array<!proto.claros.common.Limit>}
 */
proto.claros.common.Limits.prototype.getLimitsList = function() {
  return /** @type{!Array<!proto.claros.common.Limit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.common.Limit, 1));
};


/** @param {!Array<!proto.claros.common.Limit>} value */
proto.claros.common.Limits.prototype.setLimitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.claros.common.Limit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.common.Limit}
 */
proto.claros.common.Limits.prototype.addLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.claros.common.Limit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.common.Limits.prototype.clearLimitsList = function() {
  this.setLimitsList([]);
};


