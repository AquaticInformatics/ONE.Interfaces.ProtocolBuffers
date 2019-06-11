/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.claros.common.configuration.Configuration');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.claros.common.configuration.Rights');
goog.require('proto.claros.common.core.ClarosDateTime');

goog.forwardDeclare('proto.claros.common.configuration.EntityType');
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
proto.claros.common.configuration.Configuration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.claros.common.configuration.Configuration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.claros.common.configuration.Configuration.displayName = 'proto.claros.common.configuration.Configuration';
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
proto.claros.common.configuration.Configuration.prototype.toObject = function(opt_includeInstance) {
  return proto.claros.common.configuration.Configuration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.claros.common.configuration.Configuration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.configuration.Configuration.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdbyid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdon: (f = msg.getCreatedon()) && proto.claros.common.core.ClarosDateTime.toObject(includeInstance, f),
    modifiedbyid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modifiedon: (f = msg.getModifiedon()) && proto.claros.common.core.ClarosDateTime.toObject(includeInstance, f),
    configurationdata: jspb.Message.getFieldWithDefault(msg, 6, ""),
    entitytypeid: jspb.Message.getFieldWithDefault(msg, 7, 0),
    filterbyid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    tenantid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    ownerid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    pb_public: jspb.Message.getFieldWithDefault(msg, 11, false),
    version: jspb.Message.getFieldWithDefault(msg, 12, 0),
    privilegeMap: (f = msg.getPrivilegeMap()) ? f.toObject(includeInstance, proto.claros.common.configuration.Rights.toObject) : []
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
 * @return {!proto.claros.common.configuration.Configuration}
 */
proto.claros.common.configuration.Configuration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.claros.common.configuration.Configuration;
  return proto.claros.common.configuration.Configuration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.claros.common.configuration.Configuration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.claros.common.configuration.Configuration}
 */
proto.claros.common.configuration.Configuration.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCreatedbyid(value);
      break;
    case 3:
      var value = new proto.claros.common.core.ClarosDateTime;
      reader.readMessage(value,proto.claros.common.core.ClarosDateTime.deserializeBinaryFromReader);
      msg.setCreatedon(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModifiedbyid(value);
      break;
    case 5:
      var value = new proto.claros.common.core.ClarosDateTime;
      reader.readMessage(value,proto.claros.common.core.ClarosDateTime.deserializeBinaryFromReader);
      msg.setModifiedon(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigurationdata(value);
      break;
    case 7:
      var value = /** @type {!proto.claros.common.configuration.EntityType} */ (reader.readEnum());
      msg.setEntitytypeid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilterbyid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTenantid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerid(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 13:
      var value = msg.getPrivilegeMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.claros.common.configuration.Rights.deserializeBinaryFromReader, "");
         });
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
proto.claros.common.configuration.Configuration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.claros.common.configuration.Configuration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.claros.common.configuration.Configuration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.claros.common.configuration.Configuration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedbyid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedon();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.claros.common.core.ClarosDateTime.serializeBinaryToWriter
    );
  }
  f = message.getModifiedbyid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModifiedon();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.claros.common.core.ClarosDateTime.serializeBinaryToWriter
    );
  }
  f = message.getConfigurationdata();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEntitytypeid();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getFilterbyid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTenantid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOwnerid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getVersion();
  if (f !== 0) {
    writer.writeUint32(
      12,
      f
    );
  }
  f = message.getPrivilegeMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.claros.common.configuration.Rights.serializeBinaryToWriter);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string createdById = 2;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getCreatedbyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setCreatedbyid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional claros.common.core.ClarosDateTime createdOn = 3;
 * @return {?proto.claros.common.core.ClarosDateTime}
 */
proto.claros.common.configuration.Configuration.prototype.getCreatedon = function() {
  return /** @type{?proto.claros.common.core.ClarosDateTime} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.core.ClarosDateTime, 3));
};


/** @param {?proto.claros.common.core.ClarosDateTime|undefined} value */
proto.claros.common.configuration.Configuration.prototype.setCreatedon = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.configuration.Configuration.prototype.clearCreatedon = function() {
  this.setCreatedon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.configuration.Configuration.prototype.hasCreatedon = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string modifiedById = 4;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getModifiedbyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setModifiedbyid = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional claros.common.core.ClarosDateTime modifiedOn = 5;
 * @return {?proto.claros.common.core.ClarosDateTime}
 */
proto.claros.common.configuration.Configuration.prototype.getModifiedon = function() {
  return /** @type{?proto.claros.common.core.ClarosDateTime} */ (
    jspb.Message.getWrapperField(this, proto.claros.common.core.ClarosDateTime, 5));
};


/** @param {?proto.claros.common.core.ClarosDateTime|undefined} value */
proto.claros.common.configuration.Configuration.prototype.setModifiedon = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.claros.common.configuration.Configuration.prototype.clearModifiedon = function() {
  this.setModifiedon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.claros.common.configuration.Configuration.prototype.hasModifiedon = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string configurationData = 6;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getConfigurationdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setConfigurationdata = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional EntityType entityTypeId = 7;
 * @return {!proto.claros.common.configuration.EntityType}
 */
proto.claros.common.configuration.Configuration.prototype.getEntitytypeid = function() {
  return /** @type {!proto.claros.common.configuration.EntityType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {!proto.claros.common.configuration.EntityType} value */
proto.claros.common.configuration.Configuration.prototype.setEntitytypeid = function(value) {
  jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional string filterById = 8;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getFilterbyid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setFilterbyid = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string tenantId = 9;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getTenantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setTenantid = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string ownerId = 10;
 * @return {string}
 */
proto.claros.common.configuration.Configuration.prototype.getOwnerid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.claros.common.configuration.Configuration.prototype.setOwnerid = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool public = 11;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.claros.common.configuration.Configuration.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 11, false));
};


/** @param {boolean} value */
proto.claros.common.configuration.Configuration.prototype.setPublic = function(value) {
  jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional uint32 version = 12;
 * @return {number}
 */
proto.claros.common.configuration.Configuration.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.claros.common.configuration.Configuration.prototype.setVersion = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * map<string, Rights> privilege = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.claros.common.configuration.Rights>}
 */
proto.claros.common.configuration.Configuration.prototype.getPrivilegeMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.claros.common.configuration.Rights>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      proto.claros.common.configuration.Rights));
};


/**
 * Clears values from the map. The map will be non-null.
 */
proto.claros.common.configuration.Configuration.prototype.clearPrivilegeMap = function() {
  this.getPrivilegeMap().clear();
};


