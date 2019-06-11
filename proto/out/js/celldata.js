/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.operations.spreadsheet.CellData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.common.core.AuditEvent');
goog.require('proto.claros.common.core.ReportableQualifier');
goog.require('proto.claros.operations.spreadsheet.CellDataBinding');

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
proto.claros.operations.spreadsheet.CellData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.claros.operations.spreadsheet.CellData.repeatedFields_, null);
};
goog.inherits(proto.claros.operations.spreadsheet.CellData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.operations.spreadsheet.CellData.displayName = 'proto.claros.operations.spreadsheet.CellData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.claros.operations.spreadsheet.CellData.repeatedFields_ = [7];



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
proto.claros.operations.spreadsheet.CellData.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.operations.spreadsheet.CellData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.operations.spreadsheet.CellData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.operations.spreadsheet.CellData.toObject = function(includeInstance, msg) {
  var f, obj = {
    value: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    islocked: jspb.Message.getFieldWithDefault(msg, 3, false),
    unitid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    justification: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reportablequalifier: (f = msg.getReportablequalifier()) && proto.claros.common.core.ReportableQualifier.toObject(includeInstance, f),
    celldatabindingsList: jspb.Message.toObjectList(msg.getCelldatabindingsList(),
    proto.claros.operations.spreadsheet.CellDataBinding.toObject, includeInstance),
    auditevent: (f = msg.getAuditevent()) && proto.claros.common.core.AuditEvent.toObject(includeInstance, f)
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
 * @return {!proto.claros.operations.spreadsheet.CellData}
 */
proto.claros.operations.spreadsheet.CellData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.operations.spreadsheet.CellData;
  return proto.claros.operations.spreadsheet.CellData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.operations.spreadsheet.CellData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.operations.spreadsheet.CellData}
 */
proto.claros.operations.spreadsheet.CellData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslocked(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setUnitid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setJustification(value);
      break;
    case 6:
      var value = new proto.claros.common.core.ReportableQualifier;
      reader.readMessage(value,proto.claros.common.core.ReportableQualifier.deserializeBinaryFromReader);
      msg.setReportablequalifier(value);
      break;
    case 7:
      var value = new proto.claros.operations.spreadsheet.CellDataBinding;
      reader.readMessage(value,proto.claros.operations.spreadsheet.CellDataBinding.deserializeBinaryFromReader);
      msg.addCelldatabindings(value);
      break;
    case 99:
      var value = new proto.claros.common.core.AuditEvent;
      reader.readMessage(value,proto.claros.common.core.AuditEvent.deserializeBinaryFromReader);
      msg.setAuditevent(value);
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
proto.claros.operations.spreadsheet.CellData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.operations.spreadsheet.CellData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.operations.spreadsheet.CellData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.operations.spreadsheet.CellData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIslocked();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getUnitid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getJustification();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReportablequalifier();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.claros.common.core.ReportableQualifier.serializeBinaryToWriter
    );
  }
  f = message.getCelldatabindingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.claros.operations.spreadsheet.CellDataBinding.serializeBinaryToWriter
    );
  }
  f = message.getAuditevent();
  if (f != null) {
    writer.writeMessage(
      99,
      f,
      proto.claros.common.core.AuditEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional double value = 1;
 * @return {number}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getValue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.claros.operations.spreadsheet.CellData.prototype.setValue = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.CellData.prototype.setStringvalue = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool isLocked = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getIslocked = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.claros.operations.spreadsheet.CellData.prototype.setIslocked = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional uint32 unitId = 4;
 * @return {number}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getUnitid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.claros.operations.spreadsheet.CellData.prototype.setUnitid = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string justification = 5;
 * @return {string}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getJustification = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.CellData.prototype.setJustification = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional claros.common.core.ReportableQualifier reportableQualifier = 6;
 * @return {?proto.claros.common.core.ReportableQualifier}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getReportablequalifier = function() {
  return /** @type{?proto.claros.common.core.ReportableQualifier} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.core.ReportableQualifier, 6));
};


/** @param {?proto.claros.common.core.ReportableQualifier|undefined} value */
proto.claros.operations.spreadsheet.CellData.prototype.setReportablequalifier = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.operations.spreadsheet.CellData.prototype.clearReportablequalifier = function() {
  this.setReportablequalifier(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.operations.spreadsheet.CellData.prototype.hasReportablequalifier = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated CellDataBinding cellDataBindings = 7;
 * @return {!Array<!proto.claros.operations.spreadsheet.CellDataBinding>}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getCelldatabindingsList = function() {
  return /** @type{!Array<!proto.claros.operations.spreadsheet.CellDataBinding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.operations.spreadsheet.CellDataBinding, 7));
};


/** @param {!Array<!proto.claros.operations.spreadsheet.CellDataBinding>} value */
proto.claros.operations.spreadsheet.CellData.prototype.setCelldatabindingsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.claros.operations.spreadsheet.CellDataBinding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.operations.spreadsheet.CellDataBinding}
 */
proto.claros.operations.spreadsheet.CellData.prototype.addCelldatabindings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.claros.operations.spreadsheet.CellDataBinding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.operations.spreadsheet.CellData.prototype.clearCelldatabindingsList = function() {
  this.setCelldatabindingsList([]);
};


/**
 * optional claros.common.core.AuditEvent auditEvent = 99;
 * @return {?proto.claros.common.core.AuditEvent}
 */
proto.claros.operations.spreadsheet.CellData.prototype.getAuditevent = function() {
  return /** @type{?proto.claros.common.core.AuditEvent} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.core.AuditEvent, 99));
};


/** @param {?proto.claros.common.core.AuditEvent|undefined} value */
proto.claros.operations.spreadsheet.CellData.prototype.setAuditevent = function(value) {
  jspb.Message.setWrapperField(this, 99, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.operations.spreadsheet.CellData.prototype.clearAuditevent = function() {
  this.setAuditevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.operations.spreadsheet.CellData.prototype.hasAuditevent = function() {
  return jspb.Message.getField(this, 99) != null;
};


