// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_instrument_measurement_scsensor_binding.proto

package claros.instrument;

public final class ClarosInstrumentMeasurementScsensorBinding {
  private ClarosInstrumentMeasurementScsensorBinding() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface SCSensorBindingOrBuilder extends
      // @@protoc_insertion_point(interface_extends:claros.instrument.SCSensorBinding)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>uint32 channel = 2;</code>
     */
    int getChannel();

    /**
     * <code>string tag = 3;</code>
     */
    java.lang.String getTag();
    /**
     * <code>string tag = 3;</code>
     */
    com.google.protobuf.ByteString
        getTagBytes();

    /**
     * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
     */
    boolean hasValidFrom();
    /**
     * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
     */
    claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getValidFrom();
    /**
     * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
     */
    claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getValidFromOrBuilder();

    /**
     * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
     */
    boolean hasValidTo();
    /**
     * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
     */
    claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getValidTo();
    /**
     * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
     */
    claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getValidToOrBuilder();
  }
  /**
   * Protobuf type {@code claros.instrument.SCSensorBinding}
   */
  public  static final class SCSensorBinding extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:claros.instrument.SCSensorBinding)
      SCSensorBindingOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use SCSensorBinding.newBuilder() to construct.
    private SCSensorBinding(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private SCSensorBinding() {
      tag_ = "";
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private SCSensorBinding(
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
            case 16: {

              channel_ = input.readUInt32();
              break;
            }
            case 26: {
              java.lang.String s = input.readStringRequireUtf8();

              tag_ = s;
              break;
            }
            case 34: {
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder subBuilder = null;
              if (validFrom_ != null) {
                subBuilder = validFrom_.toBuilder();
              }
              validFrom_ = input.readMessage(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(validFrom_);
                validFrom_ = subBuilder.buildPartial();
              }

              break;
            }
            case 42: {
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder subBuilder = null;
              if (validTo_ != null) {
                subBuilder = validTo_.toBuilder();
              }
              validTo_ = input.readMessage(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(validTo_);
                validTo_ = subBuilder.buildPartial();
              }

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
      return claros.instrument.ClarosInstrumentMeasurementScsensorBinding.internal_static_claros_instrument_SCSensorBinding_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return claros.instrument.ClarosInstrumentMeasurementScsensorBinding.internal_static_claros_instrument_SCSensorBinding_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.class, claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.Builder.class);
    }

    public static final int CHANNEL_FIELD_NUMBER = 2;
    private int channel_;
    /**
     * <code>uint32 channel = 2;</code>
     */
    public int getChannel() {
      return channel_;
    }

    public static final int TAG_FIELD_NUMBER = 3;
    private volatile java.lang.Object tag_;
    /**
     * <code>string tag = 3;</code>
     */
    public java.lang.String getTag() {
      java.lang.Object ref = tag_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        tag_ = s;
        return s;
      }
    }
    /**
     * <code>string tag = 3;</code>
     */
    public com.google.protobuf.ByteString
        getTagBytes() {
      java.lang.Object ref = tag_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        tag_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int VALIDFROM_FIELD_NUMBER = 4;
    private claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime validFrom_;
    /**
     * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
     */
    public boolean hasValidFrom() {
      return validFrom_ != null;
    }
    /**
     * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
     */
    public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getValidFrom() {
      return validFrom_ == null ? claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : validFrom_;
    }
    /**
     * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
     */
    public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getValidFromOrBuilder() {
      return getValidFrom();
    }

    public static final int VALIDTO_FIELD_NUMBER = 5;
    private claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime validTo_;
    /**
     * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
     */
    public boolean hasValidTo() {
      return validTo_ != null;
    }
    /**
     * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
     */
    public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getValidTo() {
      return validTo_ == null ? claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : validTo_;
    }
    /**
     * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
     */
    public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getValidToOrBuilder() {
      return getValidTo();
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
      if (channel_ != 0) {
        output.writeUInt32(2, channel_);
      }
      if (!getTagBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 3, tag_);
      }
      if (validFrom_ != null) {
        output.writeMessage(4, getValidFrom());
      }
      if (validTo_ != null) {
        output.writeMessage(5, getValidTo());
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (channel_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeUInt32Size(2, channel_);
      }
      if (!getTagBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(3, tag_);
      }
      if (validFrom_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(4, getValidFrom());
      }
      if (validTo_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(5, getValidTo());
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
      if (!(obj instanceof claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding)) {
        return super.equals(obj);
      }
      claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding other = (claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding) obj;

      if (getChannel()
          != other.getChannel()) return false;
      if (!getTag()
          .equals(other.getTag())) return false;
      if (hasValidFrom() != other.hasValidFrom()) return false;
      if (hasValidFrom()) {
        if (!getValidFrom()
            .equals(other.getValidFrom())) return false;
      }
      if (hasValidTo() != other.hasValidTo()) return false;
      if (hasValidTo()) {
        if (!getValidTo()
            .equals(other.getValidTo())) return false;
      }
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
      hash = (37 * hash) + CHANNEL_FIELD_NUMBER;
      hash = (53 * hash) + getChannel();
      hash = (37 * hash) + TAG_FIELD_NUMBER;
      hash = (53 * hash) + getTag().hashCode();
      if (hasValidFrom()) {
        hash = (37 * hash) + VALIDFROM_FIELD_NUMBER;
        hash = (53 * hash) + getValidFrom().hashCode();
      }
      if (hasValidTo()) {
        hash = (37 * hash) + VALIDTO_FIELD_NUMBER;
        hash = (53 * hash) + getValidTo().hashCode();
      }
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parseFrom(
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
    public static Builder newBuilder(claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding prototype) {
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
     * Protobuf type {@code claros.instrument.SCSensorBinding}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:claros.instrument.SCSensorBinding)
        claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBindingOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return claros.instrument.ClarosInstrumentMeasurementScsensorBinding.internal_static_claros_instrument_SCSensorBinding_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return claros.instrument.ClarosInstrumentMeasurementScsensorBinding.internal_static_claros_instrument_SCSensorBinding_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.class, claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.Builder.class);
      }

      // Construct using claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.newBuilder()
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
        channel_ = 0;

        tag_ = "";

        if (validFromBuilder_ == null) {
          validFrom_ = null;
        } else {
          validFrom_ = null;
          validFromBuilder_ = null;
        }
        if (validToBuilder_ == null) {
          validTo_ = null;
        } else {
          validTo_ = null;
          validToBuilder_ = null;
        }
        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return claros.instrument.ClarosInstrumentMeasurementScsensorBinding.internal_static_claros_instrument_SCSensorBinding_descriptor;
      }

      @java.lang.Override
      public claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding getDefaultInstanceForType() {
        return claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.getDefaultInstance();
      }

      @java.lang.Override
      public claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding build() {
        claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding buildPartial() {
        claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding result = new claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding(this);
        result.channel_ = channel_;
        result.tag_ = tag_;
        if (validFromBuilder_ == null) {
          result.validFrom_ = validFrom_;
        } else {
          result.validFrom_ = validFromBuilder_.build();
        }
        if (validToBuilder_ == null) {
          result.validTo_ = validTo_;
        } else {
          result.validTo_ = validToBuilder_.build();
        }
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
        if (other instanceof claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding) {
          return mergeFrom((claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding other) {
        if (other == claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding.getDefaultInstance()) return this;
        if (other.getChannel() != 0) {
          setChannel(other.getChannel());
        }
        if (!other.getTag().isEmpty()) {
          tag_ = other.tag_;
          onChanged();
        }
        if (other.hasValidFrom()) {
          mergeValidFrom(other.getValidFrom());
        }
        if (other.hasValidTo()) {
          mergeValidTo(other.getValidTo());
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
        claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private int channel_ ;
      /**
       * <code>uint32 channel = 2;</code>
       */
      public int getChannel() {
        return channel_;
      }
      /**
       * <code>uint32 channel = 2;</code>
       */
      public Builder setChannel(int value) {
        
        channel_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>uint32 channel = 2;</code>
       */
      public Builder clearChannel() {
        
        channel_ = 0;
        onChanged();
        return this;
      }

      private java.lang.Object tag_ = "";
      /**
       * <code>string tag = 3;</code>
       */
      public java.lang.String getTag() {
        java.lang.Object ref = tag_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          tag_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string tag = 3;</code>
       */
      public com.google.protobuf.ByteString
          getTagBytes() {
        java.lang.Object ref = tag_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          tag_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string tag = 3;</code>
       */
      public Builder setTag(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        tag_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string tag = 3;</code>
       */
      public Builder clearTag() {
        
        tag_ = getDefaultInstance().getTag();
        onChanged();
        return this;
      }
      /**
       * <code>string tag = 3;</code>
       */
      public Builder setTagBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        tag_ = value;
        onChanged();
        return this;
      }

      private claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime validFrom_;
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder> validFromBuilder_;
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public boolean hasValidFrom() {
        return validFromBuilder_ != null || validFrom_ != null;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getValidFrom() {
        if (validFromBuilder_ == null) {
          return validFrom_ == null ? claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : validFrom_;
        } else {
          return validFromBuilder_.getMessage();
        }
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public Builder setValidFrom(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime value) {
        if (validFromBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          validFrom_ = value;
          onChanged();
        } else {
          validFromBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public Builder setValidFrom(
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder builderForValue) {
        if (validFromBuilder_ == null) {
          validFrom_ = builderForValue.build();
          onChanged();
        } else {
          validFromBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public Builder mergeValidFrom(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime value) {
        if (validFromBuilder_ == null) {
          if (validFrom_ != null) {
            validFrom_ =
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.newBuilder(validFrom_).mergeFrom(value).buildPartial();
          } else {
            validFrom_ = value;
          }
          onChanged();
        } else {
          validFromBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public Builder clearValidFrom() {
        if (validFromBuilder_ == null) {
          validFrom_ = null;
          onChanged();
        } else {
          validFrom_ = null;
          validFromBuilder_ = null;
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder getValidFromBuilder() {
        
        onChanged();
        return getValidFromFieldBuilder().getBuilder();
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getValidFromOrBuilder() {
        if (validFromBuilder_ != null) {
          return validFromBuilder_.getMessageOrBuilder();
        } else {
          return validFrom_ == null ?
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : validFrom_;
        }
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validFrom = 4;</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder> 
          getValidFromFieldBuilder() {
        if (validFromBuilder_ == null) {
          validFromBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder>(
                  getValidFrom(),
                  getParentForChildren(),
                  isClean());
          validFrom_ = null;
        }
        return validFromBuilder_;
      }

      private claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime validTo_;
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder> validToBuilder_;
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public boolean hasValidTo() {
        return validToBuilder_ != null || validTo_ != null;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime getValidTo() {
        if (validToBuilder_ == null) {
          return validTo_ == null ? claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : validTo_;
        } else {
          return validToBuilder_.getMessage();
        }
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public Builder setValidTo(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime value) {
        if (validToBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          validTo_ = value;
          onChanged();
        } else {
          validToBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public Builder setValidTo(
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder builderForValue) {
        if (validToBuilder_ == null) {
          validTo_ = builderForValue.build();
          onChanged();
        } else {
          validToBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public Builder mergeValidTo(claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime value) {
        if (validToBuilder_ == null) {
          if (validTo_ != null) {
            validTo_ =
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.newBuilder(validTo_).mergeFrom(value).buildPartial();
          } else {
            validTo_ = value;
          }
          onChanged();
        } else {
          validToBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public Builder clearValidTo() {
        if (validToBuilder_ == null) {
          validTo_ = null;
          onChanged();
        } else {
          validTo_ = null;
          validToBuilder_ = null;
        }

        return this;
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder getValidToBuilder() {
        
        onChanged();
        return getValidToFieldBuilder().getBuilder();
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      public claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder getValidToOrBuilder() {
        if (validToBuilder_ != null) {
          return validToBuilder_.getMessageOrBuilder();
        } else {
          return validTo_ == null ?
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.getDefaultInstance() : validTo_;
        }
      }
      /**
       * <code>.claros.common.core.ClarosDateTime validTo = 5;</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder> 
          getValidToFieldBuilder() {
        if (validToBuilder_ == null) {
          validToBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTime.Builder, claros.common.core.ClarosCommonCoreClarosdatetime.ClarosDateTimeOrBuilder>(
                  getValidTo(),
                  getParentForChildren(),
                  isClean());
          validTo_ = null;
        }
        return validToBuilder_;
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


      // @@protoc_insertion_point(builder_scope:claros.instrument.SCSensorBinding)
    }

    // @@protoc_insertion_point(class_scope:claros.instrument.SCSensorBinding)
    private static final claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding();
    }

    public static claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<SCSensorBinding>
        PARSER = new com.google.protobuf.AbstractParser<SCSensorBinding>() {
      @java.lang.Override
      public SCSensorBinding parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new SCSensorBinding(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<SCSensorBinding> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<SCSensorBinding> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public claros.instrument.ClarosInstrumentMeasurementScsensorBinding.SCSensorBinding getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_claros_instrument_SCSensorBinding_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_claros_instrument_SCSensorBinding_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n4claros_instrument_measurement_scsensor" +
      "_binding.proto\022\021claros.instrument\032\'claro" +
      "s_common_core_clarosdatetime.proto\"\233\001\n\017S" +
      "CSensorBinding\022\017\n\007channel\030\002 \001(\r\022\013\n\003tag\030\003" +
      " \001(\t\0225\n\tvalidFrom\030\004 \001(\0132\".claros.common." +
      "core.ClarosDateTime\0223\n\007validTo\030\005 \001(\0132\".c" +
      "laros.common.core.ClarosDateTimeb\006proto3"
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
    internal_static_claros_instrument_SCSensorBinding_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_claros_instrument_SCSensorBinding_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_claros_instrument_SCSensorBinding_descriptor,
        new java.lang.String[] { "Channel", "Tag", "ValidFrom", "ValidTo", });
    claros.common.core.ClarosCommonCoreClarosdatetime.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
