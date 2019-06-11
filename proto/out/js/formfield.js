/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.common.form.FormField');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.instrument.InstrumentData');
goog.require('proto.claros.operations.spreadsheet.Cell');

goog.forwardDeclare('proto.claros.common.form.FormDataEntryType');
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
proto.claros.common.form.FormField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.claros.common.form.FormField.repeatedFields_, proto.claros.common.form.FormField.oneofGroups_);
};
goog.inherits(proto.claros.common.form.FormField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.common.form.FormField.displayName = 'proto.claros.common.form.FormField';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.claros.common.form.FormField.repeatedFields_ = [7];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.claros.common.form.FormField.oneofGroups_ = [[6]];

/**
 * @enum {number}
 */
proto.claros.common.form.FormField.FormfielddataCase = {
  FORMFIELDDATA_NOT_SET: 0,
  CELL: 6
};

/**
 * @return {proto.claros.common.form.FormField.FormfielddataCase}
 */
proto.claros.common.form.FormField.prototype.getFormfielddataCase = function() {
  return /** @type {proto.claros.common.form.FormField.FormfielddataCase} */(jspb.Message.computeOneofCase(this, proto.claros.common.form.FormField.oneofGroups_[0]));
};



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
proto.claros.common.form.FormField.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.common.form.FormField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.common.form.FormField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.form.FormField.toObject = function(includeInstance, msg) {
  var f, obj = {
    guid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    formfielddefinitionid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    formdataentrytype: jspb.Message.getFieldWithDefault(msg, 3, 0),
    isdataentrytypelocked: jspb.Message.getFieldWithDefault(msg, 4, false),
    name: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cell: (f = msg.getCell()) && proto.claros.operations.spreadsheet.Cell.toObject(includeInstance, f),
    instrumentdataList: jspb.Message.toObjectList(msg.getInstrumentdataList(),
    proto.claros.instrument.InstrumentData.toObject, includeInstance)
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
 * @return {!proto.claros.common.form.FormField}
 */
proto.claros.common.form.FormField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.common.form.FormField;
  return proto.claros.common.form.FormField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.common.form.FormField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.common.form.FormField}
 */
proto.claros.common.form.FormField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormfielddefinitionid(value);
      break;
    case 3:
      var value = /** @type {!proto.claros.common.form.FormDataEntryType} */ (reader.readEnum());
      msg.setFormdataentrytype(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsdataentrytypelocked(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 6:
      var value = new proto.claros.operations.spreadsheet.Cell;
      reader.readMessage(value,proto.claros.operations.spreadsheet.Cell.deserializeBinaryFromReader);
      msg.setCell(value);
      break;
    case 7:
      var value = new proto.claros.instrument.InstrumentData;
      reader.readMessage(value,proto.claros.instrument.InstrumentData.deserializeBinaryFromReader);
      msg.addInstrumentdata(value);
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
proto.claros.common.form.FormField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.common.form.FormField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.common.form.FormField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.form.FormField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormfielddefinitionid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFormdataentrytype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getIsdataentrytypelocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCell();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.claros.operations.spreadsheet.Cell.serializeBinaryToWriter
    );
  }
  f = message.getInstrumentdataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.claros.instrument.InstrumentData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string guid = 1;
 * @return {string}
 */
proto.claros.common.form.FormField.prototype.getGuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.claros.common.form.FormField.prototype.setGuid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string formFieldDefinitionId = 2;
 * @return {string}
 */
proto.claros.common.form.FormField.prototype.getFormfielddefinitionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.common.form.FormField.prototype.setFormfielddefinitionid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional FormDataEntryType formDataEntryType = 3;
 * @return {!proto.claros.common.form.FormDataEntryType}
 */
proto.claros.common.form.FormField.prototype.getFormdataentrytype = function() {
  return /** @type {!proto.claros.common.form.FormDataEntryType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.claros.common.form.FormDataEntryType} value */
proto.claros.common.form.FormField.prototype.setFormdataentrytype = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool isDataEntryTypeLocked = 4;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.claros.common.form.FormField.prototype.getIsdataentrytypelocked = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 4, false));
};


/** @param {boolean} value */
proto.claros.common.form.FormField.prototype.setIsdataentrytypelocked = function(value) {
  jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string name = 5;
 * @return {string}
 */
proto.claros.common.form.FormField.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.claros.common.form.FormField.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional claros.operations.spreadsheet.Cell cell = 6;
 * @return {?proto.claros.operations.spreadsheet.Cell}
 */
proto.claros.common.form.FormField.prototype.getCell = function() {
  return /** @type{?proto.claros.operations.spreadsheet.Cell} */ (
    jspb.Message.getWrapperField(this, proto.claros.operations.spreadsheet.Cell, 6));
};


/** @param {?proto.claros.operations.spreadsheet.Cell|undefined} value */
proto.claros.common.form.FormField.prototype.setCell = function(value) {
  jspb.Message.setOneofWrapperField(this, 6, proto.claros.common.form.FormField.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.form.FormField.prototype.clearCell = function() {
  this.setCell(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.form.FormField.prototype.hasCell = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated claros.instrument.InstrumentData instrumentData = 7;
 * @return {!Array<!proto.claros.instrument.InstrumentData>}
 */
proto.claros.common.form.FormField.prototype.getInstrumentdataList = function() {
  return /** @type{!Array<!proto.claros.instrument.InstrumentData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.instrument.InstrumentData, 7));
};


/** @param {!Array<!proto.claros.instrument.InstrumentData>} value */
proto.claros.common.form.FormField.prototype.setInstrumentdataList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.claros.instrument.InstrumentData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.instrument.InstrumentData}
 */
proto.claros.common.form.FormField.prototype.addInstrumentdata = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.claros.instrument.InstrumentData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.common.form.FormField.prototype.clearInstrumentdataList = function() {
  this.setInstrumentdataList([]);
};


