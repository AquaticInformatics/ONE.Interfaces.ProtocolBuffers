/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.operations.spreadsheet.Column');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.common.computation.ComputationBinding');
goog.require('proto.claros.common.core.Limit');
goog.require('proto.claros.common.core.ReportableQualifierDefinition');
goog.require('proto.claros.instrument.measurement.InstrumentMeasurementBinding');

goog.forwardDeclare('proto.claros.common.core.DataSourceType');
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
proto.claros.operations.spreadsheet.Column = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.claros.operations.spreadsheet.Column.repeatedFields_, proto.claros.operations.spreadsheet.Column.oneofGroups_);
};
goog.inherits(proto.claros.operations.spreadsheet.Column, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.operations.spreadsheet.Column.displayName = 'proto.claros.operations.spreadsheet.Column';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.claros.operations.spreadsheet.Column.repeatedFields_ = [8,12];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.claros.operations.spreadsheet.Column.oneofGroups_ = [[10,11]];

/**
 * @enum {number}
 */
proto.claros.operations.spreadsheet.Column.BindingCase = {
  BINDING_NOT_SET: 0,
  INSTRUMENTMEASUREMENTBINDING: 10,
  COMPUTATIONBINDING: 11
};

/**
 * @return {proto.claros.operations.spreadsheet.Column.BindingCase}
 */
proto.claros.operations.spreadsheet.Column.prototype.getBindingCase = function() {
  return /** @type {proto.claros.operations.spreadsheet.Column.BindingCase} */(jspb.Message.computeOneofCase(this, proto.claros.operations.spreadsheet.Column.oneofGroups_[0]));
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
proto.claros.operations.spreadsheet.Column.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.operations.spreadsheet.Column.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.operations.spreadsheet.Column} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.operations.spreadsheet.Column.toObject = function(includeInstance, msg) {
  var f, obj = {
    columnnumber: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parameterid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    displayunitid: jspb.Message.getFieldWithDefault(msg, 5, 0),
    locationid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    isactive: jspb.Message.getFieldWithDefault(msg, 7, false),
    limitsList: jspb.Message.toObjectList(msg.getLimitsList(),
    proto.claros.common.core.Limit.toObject, includeInstance),
    datasourcetype: jspb.Message.getFieldWithDefault(msg, 9, 0),
    instrumentmeasurementbinding: (f = msg.getInstrumentmeasurementbinding()) && proto.claros.instrument.measurement.InstrumentMeasurementBinding.toObject(includeInstance, f),
    computationbinding: (f = msg.getComputationbinding()) && proto.claros.common.computation.ComputationBinding.toObject(includeInstance, f),
    reportablequaliferdefinitionList: jspb.Message.toObjectList(msg.getReportablequaliferdefinitionList(),
    proto.claros.common.core.ReportableQualifierDefinition.toObject, includeInstance)
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
 * @return {!proto.claros.operations.spreadsheet.Column}
 */
proto.claros.operations.spreadsheet.Column.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.operations.spreadsheet.Column;
  return proto.claros.operations.spreadsheet.Column.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.operations.spreadsheet.Column} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.operations.spreadsheet.Column}
 */
proto.claros.operations.spreadsheet.Column.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setColumnnumber(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setParameterid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDisplayunitid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationid(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
      break;
    case 8:
      var value = new proto.claros.common.core.Limit;
      reader.readMessage(value,proto.claros.common.core.Limit.deserializeBinaryFromReader);
      msg.addLimits(value);
      break;
    case 9:
      var value = /** @type {!proto.claros.common.core.DataSourceType} */ (reader.readEnum());
      msg.setDatasourcetype(value);
      break;
    case 10:
      var value = new proto.claros.instrument.measurement.InstrumentMeasurementBinding;
      reader.readMessage(value,proto.claros.instrument.measurement.InstrumentMeasurementBinding.deserializeBinaryFromReader);
      msg.setInstrumentmeasurementbinding(value);
      break;
    case 11:
      var value = new proto.claros.common.computation.ComputationBinding;
      reader.readMessage(value,proto.claros.common.computation.ComputationBinding.deserializeBinaryFromReader);
      msg.setComputationbinding(value);
      break;
    case 12:
      var value = new proto.claros.common.core.ReportableQualifierDefinition;
      reader.readMessage(value,proto.claros.common.core.ReportableQualifierDefinition.deserializeBinaryFromReader);
      msg.addReportablequaliferdefinition(value);
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
proto.claros.operations.spreadsheet.Column.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.operations.spreadsheet.Column.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.operations.spreadsheet.Column} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.operations.spreadsheet.Column.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColumnnumber();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParameterid();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getDisplayunitid();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getLocationid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.claros.common.core.Limit.serializeBinaryToWriter
    );
  }
  f = message.getDatasourcetype();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getInstrumentmeasurementbinding();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.claros.instrument.measurement.InstrumentMeasurementBinding.serializeBinaryToWriter
    );
  }
  f = message.getComputationbinding();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.claros.common.computation.ComputationBinding.serializeBinaryToWriter
    );
  }
  f = message.getReportablequaliferdefinitionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.claros.common.core.ReportableQualifierDefinition.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 columnNumber = 1;
 * @return {number}
 */
proto.claros.operations.spreadsheet.Column.prototype.getColumnnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.claros.operations.spreadsheet.Column.prototype.setColumnnumber = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.claros.operations.spreadsheet.Column.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.Column.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.claros.operations.spreadsheet.Column.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.Column.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 parameterId = 4;
 * @return {number}
 */
proto.claros.operations.spreadsheet.Column.prototype.getParameterid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.claros.operations.spreadsheet.Column.prototype.setParameterid = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 displayUnitId = 5;
 * @return {number}
 */
proto.claros.operations.spreadsheet.Column.prototype.getDisplayunitid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.claros.operations.spreadsheet.Column.prototype.setDisplayunitid = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string locationId = 6;
 * @return {string}
 */
proto.claros.operations.spreadsheet.Column.prototype.getLocationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.claros.operations.spreadsheet.Column.prototype.setLocationid = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool isActive = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.claros.operations.spreadsheet.Column.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.claros.operations.spreadsheet.Column.prototype.setIsactive = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated claros.common.core.Limit limits = 8;
 * @return {!Array<!proto.claros.common.core.Limit>}
 */
proto.claros.operations.spreadsheet.Column.prototype.getLimitsList = function() {
  return /** @type{!Array<!proto.claros.common.core.Limit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.common.core.Limit, 8));
};


/** @param {!Array<!proto.claros.common.core.Limit>} value */
proto.claros.operations.spreadsheet.Column.prototype.setLimitsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.claros.common.core.Limit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.common.core.Limit}
 */
proto.claros.operations.spreadsheet.Column.prototype.addLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.claros.common.core.Limit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.operations.spreadsheet.Column.prototype.clearLimitsList = function() {
  this.setLimitsList([]);
};


/**
 * optional claros.common.core.DataSourceType dataSourceType = 9;
 * @return {!proto.claros.common.core.DataSourceType}
 */
proto.claros.operations.spreadsheet.Column.prototype.getDatasourcetype = function() {
  return /** @type {!proto.claros.common.core.DataSourceType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.claros.common.core.DataSourceType} value */
proto.claros.operations.spreadsheet.Column.prototype.setDatasourcetype = function(value) {
  jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional claros.instrument.measurement.InstrumentMeasurementBinding instrumentMeasurementBinding = 10;
 * @return {?proto.claros.instrument.measurement.InstrumentMeasurementBinding}
 */
proto.claros.operations.spreadsheet.Column.prototype.getInstrumentmeasurementbinding = function() {
  return /** @type{?proto.claros.instrument.measurement.InstrumentMeasurementBinding} */ (
    jspb.Message.getWrapperField(this, proto.claros.instrument.measurement.InstrumentMeasurementBinding, 10));
};


/** @param {?proto.claros.instrument.measurement.InstrumentMeasurementBinding|undefined} value */
proto.claros.operations.spreadsheet.Column.prototype.setInstrumentmeasurementbinding = function(value) {
  jspb.Message.setOneofWrapperField(this, 10, proto.claros.operations.spreadsheet.Column.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.operations.spreadsheet.Column.prototype.clearInstrumentmeasurementbinding = function() {
  this.setInstrumentmeasurementbinding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.operations.spreadsheet.Column.prototype.hasInstrumentmeasurementbinding = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional claros.common.computation.ComputationBinding computationBinding = 11;
 * @return {?proto.claros.common.computation.ComputationBinding}
 */
proto.claros.operations.spreadsheet.Column.prototype.getComputationbinding = function() {
  return /** @type{?proto.claros.common.computation.ComputationBinding} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.computation.ComputationBinding, 11));
};


/** @param {?proto.claros.common.computation.ComputationBinding|undefined} value */
proto.claros.operations.spreadsheet.Column.prototype.setComputationbinding = function(value) {
  jspb.Message.setOneofWrapperField(this, 11, proto.claros.operations.spreadsheet.Column.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.operations.spreadsheet.Column.prototype.clearComputationbinding = function() {
  this.setComputationbinding(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.operations.spreadsheet.Column.prototype.hasComputationbinding = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated claros.common.core.ReportableQualifierDefinition reportableQualiferDefinition = 12;
 * @return {!Array<!proto.claros.common.core.ReportableQualifierDefinition>}
 */
proto.claros.operations.spreadsheet.Column.prototype.getReportablequaliferdefinitionList = function() {
  return /** @type{!Array<!proto.claros.common.core.ReportableQualifierDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.claros.common.core.ReportableQualifierDefinition, 12));
};


/** @param {!Array<!proto.claros.common.core.ReportableQualifierDefinition>} value */
proto.claros.operations.spreadsheet.Column.prototype.setReportablequaliferdefinitionList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.claros.common.core.ReportableQualifierDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.claros.common.core.ReportableQualifierDefinition}
 */
proto.claros.operations.spreadsheet.Column.prototype.addReportablequaliferdefinition = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.claros.common.core.ReportableQualifierDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.claros.operations.spreadsheet.Column.prototype.clearReportablequaliferdefinitionList = function() {
  this.setReportablequaliferdefinitionList([]);
};


