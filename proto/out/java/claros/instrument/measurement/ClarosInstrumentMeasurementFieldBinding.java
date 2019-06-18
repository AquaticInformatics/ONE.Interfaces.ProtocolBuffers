// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_measurement_field_binding.proto

package claros.instrument.measurement;

public final class ClarosInstrumentMeasurementFieldBinding {
  private ClarosInstrumentMeasurementFieldBinding() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface InstrumentMeasurementFieldBindingOrBuilder extends
      // @@protoc_insertion_point(interface_extends:claros.instrument.measurement.InstrumentMeasurementFieldBinding)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string instrumentMeasurementId = 1;</code>
     */
    java.lang.String getInstrumentMeasurementId();
    /**
     * <code>string instrumentMeasurementId = 1;</code>
     */
    com.google.protobuf.ByteString
        getInstrumentMeasurementIdBytes();

    /**
     * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
     */
    boolean hasTimestamp();
    /**
     * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
     */
    claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getTimestamp();
    /**
     * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
     */
    claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getTimestampOrBuilder();

    /**
     * <code>uint32 unitId = 3;</code>
     */
    int getUnitId();
  }
  /**
   * Protobuf type {@code claros.instrument.measurement.InstrumentMeasurementFieldBinding}
   */
  public  static final class InstrumentMeasurementFieldBinding extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:claros.instrument.measurement.InstrumentMeasurementFieldBinding)
      InstrumentMeasurementFieldBindingOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use InstrumentMeasurementFieldBinding.newBuilder() to construct.
    private InstrumentMeasurementFieldBinding(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private InstrumentMeasurementFieldBinding() {
      instrumentMeasurementId_ = "";
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private InstrumentMeasurementFieldBinding(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 10: {
              java.lang.String s = input.readStringRequireUtf8();

              instrumentMeasurementId_ = s;
              break;
            }
            case 18: {
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder subBuilder = null;
              if (timestamp_ != null) {
                subBuilder = timestamp_.toBuilder();
              }
              timestamp_ = input.readMessage(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(timestamp_);
                timestamp_ = subBuilder.buildPartial();
              }

              break;
            }
            case 24: {

              unitId_ = input.readUInt32();
              break;
            }
            default: {
              if (!parseUnknownField(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.class, claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.Builder.class);
    }

    public static final int INSTRUMENTMEASUREMENTID_FIELD_NUMBER = 1;
    private volatile java.lang.Object instrumentMeasurementId_;
    /**
     * <code>string instrumentMeasurementId = 1;</code>
     */
    public java.lang.String getInstrumentMeasurementId() {
      java.lang.Object ref = instrumentMeasurementId_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        instrumentMeasurementId_ = s;
        return s;
      }
    }
    /**
     * <code>string instrumentMeasurementId = 1;</code>
     */
    public com.google.protobuf.ByteString
        getInstrumentMeasurementIdBytes() {
      java.lang.Object ref = instrumentMeasurementId_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        instrumentMeasurementId_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int TIMESTAMP_FIELD_NUMBER = 2;
    private claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime timestamp_;
    /**
     * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
     */
    public boolean hasTimestamp() {
      return timestamp_ != null;
    }
    /**
     * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
     */
    public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getTimestamp() {
      return timestamp_ == null ? claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : timestamp_;
    }
    /**
     * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
     */
    public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getTimestampOrBuilder() {
      return getTimestamp();
    }

    public static final int UNITID_FIELD_NUMBER = 3;
    private int unitId_;
    /**
     * <code>uint32 unitId = 3;</code>
     */
    public int getUnitId() {
      return unitId_;
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (!getInstrumentMeasurementIdBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, instrumentMeasurementId_);
      }
      if (timestamp_ != null) {
        output.writeMessage(2, getTimestamp());
      }
      if (unitId_ != 0) {
        output.writeUInt32(3, unitId_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getInstrumentMeasurementIdBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, instrumentMeasurementId_);
      }
      if (timestamp_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(2, getTimestamp());
      }
      if (unitId_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeUInt32Size(3, unitId_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding)) {
        return super.equals(obj);
      }
      claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding other = (claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding) obj;

      if (!getInstrumentMeasurementId()
          .equals(other.getInstrumentMeasurementId())) return false;
      if (hasTimestamp() != other.hasTimestamp()) return false;
      if (hasTimestamp()) {
        if (!getTimestamp()
            .equals(other.getTimestamp())) return false;
      }
      if (getUnitId()
          != other.getUnitId()) return false;
      if (!unknownFields.equals(other.unknownFields)) return false;
      return true;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + INSTRUMENTMEASUREMENTID_FIELD_NUMBER;
      hash = (53 * hash) + getInstrumentMeasurementId().hashCode();
      if (hasTimestamp()) {
        hash = (37 * hash) + TIMESTAMP_FIELD_NUMBER;
        hash = (53 * hash) + getTimestamp().hashCode();
      }
      hash = (37 * hash) + UNITID_FIELD_NUMBER;
      hash = (53 * hash) + getUnitId();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * Protobuf type {@code claros.instrument.measurement.InstrumentMeasurementFieldBinding}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:claros.instrument.measurement.InstrumentMeasurementFieldBinding)
        claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBindingOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.class, claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.Builder.class);
      }

      // Construct using claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        instrumentMeasurementId_ = "";

        if (timestampBuilder_ == null) {
          timestamp_ = null;
        } else {
          timestamp_ = null;
          timestampBuilder_ = null;
        }
        unitId_ = 0;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_descriptor;
      }

      @java.lang.Override
      public claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding getDefaultInstanceForType() {
        return claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.getDefaultInstance();
      }

      @java.lang.Override
      public claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding build() {
        claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding buildPartial() {
        claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding result = new claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding(this);
        result.instrumentMeasurementId_ = instrumentMeasurementId_;
        if (timestampBuilder_ == null) {
          result.timestamp_ = timestamp_;
        } else {
          result.timestamp_ = timestampBuilder_.build();
        }
        result.unitId_ = unitId_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding) {
          return mergeFrom((claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding other) {
        if (other == claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding.getDefaultInstance()) return this;
        if (!other.getInstrumentMeasurementId().isEmpty()) {
          instrumentMeasurementId_ = other.instrumentMeasurementId_;
          onChanged();
        }
        if (other.hasTimestamp()) {
          mergeTimestamp(other.getTimestamp());
        }
        if (other.getUnitId() != 0) {
          setUnitId(other.getUnitId());
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object instrumentMeasurementId_ = "";
      /**
       * <code>string instrumentMeasurementId = 1;</code>
       */
      public java.lang.String getInstrumentMeasurementId() {
        java.lang.Object ref = instrumentMeasurementId_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          instrumentMeasurementId_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string instrumentMeasurementId = 1;</code>
       */
      public com.google.protobuf.ByteString
          getInstrumentMeasurementIdBytes() {
        java.lang.Object ref = instrumentMeasurementId_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          instrumentMeasurementId_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string instrumentMeasurementId = 1;</code>
       */
      public Builder setInstrumentMeasurementId(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        instrumentMeasurementId_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string instrumentMeasurementId = 1;</code>
       */
      public Builder clearInstrumentMeasurementId() {
        
        instrumentMeasurementId_ = getDefaultInstance().getInstrumentMeasurementId();
        onChanged();
        return this;
      }
      /**
       * <code>string instrumentMeasurementId = 1;</code>
       */
      public Builder setInstrumentMeasurementIdBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        instrumentMeasurementId_ = value;
        onChanged();
        return this;
      }

      private claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime timestamp_;
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder> timestampBuilder_;
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public boolean hasTimestamp() {
        return timestampBuilder_ != null || timestamp_ != null;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getTimestamp() {
        if (timestampBuilder_ == null) {
          return timestamp_ == null ? claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : timestamp_;
        } else {
          return timestampBuilder_.getMessage();
        }
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public Builder setTimestamp(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime value) {
        if (timestampBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          timestamp_ = value;
          onChanged();
        } else {
          timestampBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public Builder setTimestamp(
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder builderForValue) {
        if (timestampBuilder_ == null) {
          timestamp_ = builderForValue.build();
          onChanged();
        } else {
          timestampBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public Builder mergeTimestamp(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime value) {
        if (timestampBuilder_ == null) {
          if (timestamp_ != null) {
            timestamp_ =
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.newBuilder(timestamp_).mergeFrom(value).buildPartial();
          } else {
            timestamp_ = value;
          }
          onChanged();
        } else {
          timestampBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public Builder clearTimestamp() {
        if (timestampBuilder_ == null) {
          timestamp_ = null;
          onChanged();
        } else {
          timestamp_ = null;
          timestampBuilder_ = null;
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder getTimestampBuilder() {
        
        onChanged();
        return getTimestampFieldBuilder().getBuilder();
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getTimestampOrBuilder() {
        if (timestampBuilder_ != null) {
          return timestampBuilder_.getMessageOrBuilder();
        } else {
          return timestamp_ == null ?
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : timestamp_;
        }
      }
      /**
       * <code>.claros.common.core.ClarosDateTime timestamp = 2;</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder> 
          getTimestampFieldBuilder() {
        if (timestampBuilder_ == null) {
          timestampBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder>(
                  getTimestamp(),
                  getParentForChildren(),
                  isClean());
          timestamp_ = null;
        }
        return timestampBuilder_;
      }

      private int unitId_ ;
      /**
       * <code>uint32 unitId = 3;</code>
       */
      public int getUnitId() {
        return unitId_;
      }
      /**
       * <code>uint32 unitId = 3;</code>
       */
      public Builder setUnitId(int value) {
        
        unitId_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>uint32 unitId = 3;</code>
       */
      public Builder clearUnitId() {
        
        unitId_ = 0;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFields(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:claros.instrument.measurement.InstrumentMeasurementFieldBinding)
    }

    // @@protoc_insertion_point(class_scope:claros.instrument.measurement.InstrumentMeasurementFieldBinding)
    private static final claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding();
    }

    public static claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<InstrumentMeasurementFieldBinding>
        PARSER = new com.google.protobuf.AbstractParser<InstrumentMeasurementFieldBinding>() {
      @java.lang.Override
      public InstrumentMeasurementFieldBinding parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new InstrumentMeasurementFieldBinding(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<InstrumentMeasurementFieldBinding> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<InstrumentMeasurementFieldBinding> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public claros.instrument.measurement.ClarosInstrumentMeasurementFieldBinding.InstrumentMeasurementFieldBinding getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n1claros_instrument_measurement_field_bi" +
      "nding.proto\022\035claros.instrument.measureme" +
      "nt\032\'claros_common_core_clarosdatetime.pr" +
      "oto\"\213\001\n!InstrumentMeasurementFieldBindin" +
      "g\022\037\n\027instrumentMeasurementId\030\001 \001(\t\0225\n\tti" +
      "mestamp\030\002 \001(\0132\".claros.common.core.Claro" +
      "sDateTime\022\016\n\006unitId\030\003 \001(\rb\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
          claros.common.core.ClarosCommonCoreClarosdatetime.getDescriptor(),
        }, assigner);
    internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_claros_instrument_measurement_InstrumentMeasurementFieldBinding_descriptor,
        new java.lang.String[] { "InstrumentMeasurementId", "Timestamp", "UnitId", });
    claros.common.core.ClarosCommonCoreClarosdatetime.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
