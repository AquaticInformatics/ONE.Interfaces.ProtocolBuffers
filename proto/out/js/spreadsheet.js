/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.operations.spreadsheet.Spreadsheet');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.operations.spreadsheet.SpreadsheetDefinition');
goog.require('proto.claros.operations.spreadsheet.Worksheet');

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
proto.claros.operations.spreadsheet.Spreadsheet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.claros.operations.spreadsheet.Spreadsheet.repeatedFields_, null);
};
goog.inherits(proto.claros.operations.spreadsheet.Spreadsheet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.operations.spreadsheet.Spreadsheet.displayName = 'proto.claros.operations.spreadsheet.Spreadsheet';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.claros.operations.spreadsheet.Spreadsheet.repeatedFields_ = [3,4];



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
proto.claros.operations.spreadsheet.Spreadsheet.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.operations.spreadsheet.Spreadsheet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.operations.spreadsheet.Spreadsheet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.operations.spreadsheet.Spreadsheet.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timedefinitionList: jspb.Message.toObjectList(msg.getTimedefinitionList(),
    proto.claros.operations.spreadsheet.SpreadsheetDefinition.toObject, includeInstance),
    worksheetList: jspb.Message.toObjectList(msg.getWorksheetList(),
    proto.claros.operations.spreadsheet.Worksheet.toObject, includeInstance)
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
 * @return {!proto.claros.operations.spreadsheet.Spreadsheet}
 */
proto.claros.operations.spreadsheet.Spreadsheet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.operations.spreadsheet.Spreadsheet;
  return proto.claros.operations.spreadsheet.Spreadsheet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.operations.spreadsheet.Spreadsheet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.operations.spreadsheet.Spreadsheet}
 */
proto.claros.operations.spreadsheet.Spreadsheet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationid(value);
      break;
    case 3:
      var value = new proto.claros.operations.spreadsheet.SpreadsheetDefinition;
      reader.readMessage(value,proto.claros.operations.spreadsheet.SpreadsheetDefinition.deserializeBinaryFromReader);
      msg.addTimedefinition(value);
      break;
    case 4:
      var value = new proto.claros.operations.spreadsheet.Worksheet;
      reader.readMessage(value,proto.claros.operations.spreadsheet.Worksheet.deserializeBinaryFromReader);
      msg.addWorksheet(value);
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
proto.claros.operations.spreadsheet.Spreadsheet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.operations.spreadsheet.Spreadsheet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.operations.spreadsheet.Spreadsheet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.operations.spreadsheet.Spreadsheet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimedefinitionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.claros.operations.spreadsheet.SpreadsheetDefinition.serializeBinaryToWriter
    );
  }
  f = message.getWorksheetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.claros.operations.spreadsheet.Worksheet.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string locationId = 2;
 * @return {string}
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.getLocationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.setLocationid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated SpreadsheetDefinition timeDefinition = 3;
 * @return {!Array<!proto.claros.operations.spreadsheet.SpreadsheetDefinition>}
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.getTimedefinitionList = function() {
  return /** @type{!Array<!proto.claros.operations.spreadsheet.SpreadsheetDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.operations.spreadsheet.SpreadsheetDefinition, 3));
};


/** @param {!Array<!proto.claros.operations.spreadsheet.SpreadsheetDefinition>} value */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.setTimedefinitionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.claros.operations.spreadsheet.SpreadsheetDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.operations.spreadsheet.SpreadsheetDefinition}
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.addTimedefinition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.claros.operations.spreadsheet.SpreadsheetDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.clearTimedefinitionList = function() {
  this.setTimedefinitionList([]);
};


/**
 * repeated Worksheet worksheet = 4;
 * @return {!Array<!proto.claros.operations.spreadsheet.Worksheet>}
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.getWorksheetList = function() {
  return /** @type{!Array<!proto.claros.operations.spreadsheet.Worksheet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.operations.spreadsheet.Worksheet, 4));
};


/** @param {!Array<!proto.claros.operations.spreadsheet.Worksheet>} value */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.setWorksheetList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.claros.operations.spreadsheet.Worksheet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.operations.spreadsheet.Worksheet}
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.addWorksheet = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.claros.operations.spreadsheet.Worksheet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.operations.spreadsheet.Spreadsheet.prototype.clearWorksheetList = function() {
  this.setWorksheetList([]);
};


