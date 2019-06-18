/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.common.task.Task');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.claros.common.core.AuditEvent');
goog.require('proto.claros.common.task.TaskData');
goog.require('proto.claros.common.task.TaskDefinition');

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
proto.claros.common.task.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.claros.common.task.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.common.task.Task.displayName = 'proto.claros.common.task.Task';
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
proto.claros.common.task.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.common.task.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.common.task.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.task.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    assignee: jspb.Message.getFieldWithDefault(msg, 4, ""),
    reporter: jspb.Message.getFieldWithDefault(msg, 5, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 6, 0),
    instrumentid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    taskdefinition: (f = msg.getTaskdefinition()) && proto.claros.common.task.TaskDefinition.toObject(includeInstance, f),
    taskdata: (f = msg.getTaskdata()) && proto.claros.common.task.TaskData.toObject(includeInstance, f),
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
 * @return {!proto.claros.common.task.Task}
 */
proto.claros.common.task.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.common.task.Task;
  return proto.claros.common.task.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.common.task.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.common.task.Task}
 */
proto.claros.common.task.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
      var value = /** @type {string} */ (reader.readString());
      msg.setAssignee(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporter(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPriority(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstrumentid(value);
      break;
    case 8:
      var value = new proto.claros.common.task.TaskDefinition;
      reader.readMessage(value,proto.claros.common.task.TaskDefinition.deserializeBinaryFromReader);
      msg.setTaskdefinition(value);
      break;
    case 9:
      var value = new proto.claros.common.task.TaskData;
      reader.readMessage(value,proto.claros.common.task.TaskData.deserializeBinaryFromReader);
      msg.setTaskdata(value);
      break;
    case 10:
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
proto.claros.common.task.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.common.task.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.common.task.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.task.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getAssignee();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReporter();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getInstrumentid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTaskdefinition();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.claros.common.task.TaskDefinition.serializeBinaryToWriter
    );
  }
  f = message.getTaskdata();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.claros.common.task.TaskData.serializeBinaryToWriter
    );
  }
  f = message.getAuditevent();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.claros.common.core.AuditEvent.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.claros.common.task.Task.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.claros.common.task.Task.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.claros.common.task.Task.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.common.task.Task.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.claros.common.task.Task.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.claros.common.task.Task.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string assignee = 4;
 * @return {string}
 */
proto.claros.common.task.Task.prototype.getAssignee = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.claros.common.task.Task.prototype.setAssignee = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reporter = 5;
 * @return {string}
 */
proto.claros.common.task.Task.prototype.getReporter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.claros.common.task.Task.prototype.setReporter = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 priority = 6;
 * @return {number}
 */
proto.claros.common.task.Task.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.claros.common.task.Task.prototype.setPriority = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string instrumentId = 7;
 * @return {string}
 */
proto.claros.common.task.Task.prototype.getInstrumentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.claros.common.task.Task.prototype.setInstrumentid = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional TaskDefinition taskDefinition = 8;
 * @return {?proto.claros.common.task.TaskDefinition}
 */
proto.claros.common.task.Task.prototype.getTaskdefinition = function() {
  return /** @type{?proto.claros.common.task.TaskDefinition} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.task.TaskDefinition, 8));
};


/** @param {?proto.claros.common.task.TaskDefinition|undefined} value */
proto.claros.common.task.Task.prototype.setTaskdefinition = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.task.Task.prototype.clearTaskdefinition = function() {
  this.setTaskdefinition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.task.Task.prototype.hasTaskdefinition = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional TaskData taskdata = 9;
 * @return {?proto.claros.common.task.TaskData}
 */
proto.claros.common.task.Task.prototype.getTaskdata = function() {
  return /** @type{?proto.claros.common.task.TaskData} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.task.TaskData, 9));
};


/** @param {?proto.claros.common.task.TaskData|undefined} value */
proto.claros.common.task.Task.prototype.setTaskdata = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.task.Task.prototype.clearTaskdata = function() {
  this.setTaskdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.task.Task.prototype.hasTaskdata = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional claros.common.core.AuditEvent auditEvent = 10;
 * @return {?proto.claros.common.core.AuditEvent}
 */
proto.claros.common.task.Task.prototype.getAuditevent = function() {
  return /** @type{?proto.claros.common.core.AuditEvent} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.core.AuditEvent, 10));
};


/** @param {?proto.claros.common.core.AuditEvent|undefined} value */
proto.claros.common.task.Task.prototype.setAuditevent = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.task.Task.prototype.clearAuditevent = function() {
  this.setAuditevent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.task.Task.prototype.hasAuditevent = function() {
  return jspb.Message.getField(this, 10) != null;
};


