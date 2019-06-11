// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_operations_spreadsheet_spreadsheet_definition.proto

package claros.operations.spreadsheet;

public final class ClarosOperationsSpreadsheetSpreadsheetDefinition {
  private ClarosOperationsSpreadsheetSpreadsheetDefinition() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface SpreadsheetDefinitionOrBuilder extends
      // @@protoc_insertion_point(interface_extends:claros.operations.spreadsheet.SpreadsheetDefinition)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>string version = 1;</code>
     */
    java.lang.String getVersion();
    /**
     * <code>string version = 1;</code>
     */
    com.google.protobuf.ByteString
        getVersionBytes();

    /**
     * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
     */
    boolean hasTimewindow();
    /**
     * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
     */
    claros.common.core.ClarosCommonCoreTimewindow.TimeWindow getTimewindow();
    /**
     * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
     */
    claros.common.core.ClarosCommonCoreTimewindow.TimeWindowOrBuilder getTimewindowOrBuilder();

    /**
     * <code>.claros.common.core.TimeZone timezone = 3;</code>
     */
    int getTimezoneValue();
    /**
     * <code>.claros.common.core.TimeZone timezone = 3;</code>
     */
    claros.common.core.ClarosCommonCoreTimezone.TimeZone getTimezone();

    /**
     * <code>uint32 timeWindowOffset = 4;</code>
     */
    int getTimeWindowOffset();
  }
  /**
   * Protobuf type {@code claros.operations.spreadsheet.SpreadsheetDefinition}
   */
  public  static final class SpreadsheetDefinition extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:claros.operations.spreadsheet.SpreadsheetDefinition)
      SpreadsheetDefinitionOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use SpreadsheetDefinition.newBuilder() to construct.
    private SpreadsheetDefinition(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private SpreadsheetDefinition() {
      version_ = "";
      timezone_ = 0;
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private SpreadsheetDefinition(
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

              version_ = s;
              break;
            }
            case 18: {
              claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.Builder subBuilder = null;
              if (timewindow_ != null) {
                subBuilder = timewindow_.toBuilder();
              }
              timewindow_ = input.readMessage(claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.parser(), extensionRegistry);
              if (subBuilder != null) {
                subBuilder.mergeFrom(timewindow_);
                timewindow_ = subBuilder.buildPartial();
              }

              break;
            }
            case 24: {
              int rawValue = input.readEnum();

              timezone_ = rawValue;
              break;
            }
            case 32: {

              timeWindowOffset_ = input.readUInt32();
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
      return claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.class, claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.Builder.class);
    }

    public static final int VERSION_FIELD_NUMBER = 1;
    private volatile java.lang.Object version_;
    /**
     * <code>string version = 1;</code>
     */
    public java.lang.String getVersion() {
      java.lang.Object ref = version_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        version_ = s;
        return s;
      }
    }
    /**
     * <code>string version = 1;</code>
     */
    public com.google.protobuf.ByteString
        getVersionBytes() {
      java.lang.Object ref = version_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        version_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int TIMEWINDOW_FIELD_NUMBER = 2;
    private claros.common.core.ClarosCommonCoreTimewindow.TimeWindow timewindow_;
    /**
     * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
     */
    public boolean hasTimewindow() {
      return timewindow_ != null;
    }
    /**
     * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
     */
    public claros.common.core.ClarosCommonCoreTimewindow.TimeWindow getTimewindow() {
      return timewindow_ == null ? claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.getDefaultInstance() : timewindow_;
    }
    /**
     * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
     */
    public claros.common.core.ClarosCommonCoreTimewindow.TimeWindowOrBuilder getTimewindowOrBuilder() {
      return getTimewindow();
    }

    public static final int TIMEZONE_FIELD_NUMBER = 3;
    private int timezone_;
    /**
     * <code>.claros.common.core.TimeZone timezone = 3;</code>
     */
    public int getTimezoneValue() {
      return timezone_;
    }
    /**
     * <code>.claros.common.core.TimeZone timezone = 3;</code>
     */
    public claros.common.core.ClarosCommonCoreTimezone.TimeZone getTimezone() {
      @SuppressWarnings("deprecation")
      claros.common.core.ClarosCommonCoreTimezone.TimeZone result = claros.common.core.ClarosCommonCoreTimezone.TimeZone.valueOf(timezone_);
      return result == null ? claros.common.core.ClarosCommonCoreTimezone.TimeZone.UNRECOGNIZED : result;
    }

    public static final int TIMEWINDOWOFFSET_FIELD_NUMBER = 4;
    private int timeWindowOffset_;
    /**
     * <code>uint32 timeWindowOffset = 4;</code>
     */
    public int getTimeWindowOffset() {
      return timeWindowOffset_;
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
      if (!getVersionBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 1, version_);
      }
      if (timewindow_ != null) {
        output.writeMessage(2, getTimewindow());
      }
      if (timezone_ != claros.common.core.ClarosCommonCoreTimezone.TimeZone.TZ_UNKNOWN.getNumber()) {
        output.writeEnum(3, timezone_);
      }
      if (timeWindowOffset_ != 0) {
        output.writeUInt32(4, timeWindowOffset_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (!getVersionBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(1, version_);
      }
      if (timewindow_ != null) {
        size += com.google.protobuf.CodedOutputStream
          .computeMessageSize(2, getTimewindow());
      }
      if (timezone_ != claros.common.core.ClarosCommonCoreTimezone.TimeZone.TZ_UNKNOWN.getNumber()) {
        size += com.google.protobuf.CodedOutputStream
          .computeEnumSize(3, timezone_);
      }
      if (timeWindowOffset_ != 0) {
        size += com.google.protobuf.CodedOutputStream
          .computeUInt32Size(4, timeWindowOffset_);
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
      if (!(obj instanceof claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition)) {
        return super.equals(obj);
      }
      claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition other = (claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition) obj;

      if (!getVersion()
          .equals(other.getVersion())) return false;
      if (hasTimewindow() != other.hasTimewindow()) return false;
      if (hasTimewindow()) {
        if (!getTimewindow()
            .equals(other.getTimewindow())) return false;
      }
      if (timezone_ != other.timezone_) return false;
      if (getTimeWindowOffset()
          != other.getTimeWindowOffset()) return false;
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
      hash = (37 * hash) + VERSION_FIELD_NUMBER;
      hash = (53 * hash) + getVersion().hashCode();
      if (hasTimewindow()) {
        hash = (37 * hash) + TIMEWINDOW_FIELD_NUMBER;
        hash = (53 * hash) + getTimewindow().hashCode();
      }
      hash = (37 * hash) + TIMEZONE_FIELD_NUMBER;
      hash = (53 * hash) + timezone_;
      hash = (37 * hash) + TIMEWINDOWOFFSET_FIELD_NUMBER;
      hash = (53 * hash) + getTimeWindowOffset();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parseFrom(
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
    public static Builder newBuilder(claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition prototype) {
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
     * Protobuf type {@code claros.operations.spreadsheet.SpreadsheetDefinition}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:claros.operations.spreadsheet.SpreadsheetDefinition)
        claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinitionOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.class, claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.Builder.class);
      }

      // Construct using claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.newBuilder()
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
        version_ = "";

        if (timewindowBuilder_ == null) {
          timewindow_ = null;
        } else {
          timewindow_ = null;
          timewindowBuilder_ = null;
        }
        timezone_ = 0;

        timeWindowOffset_ = 0;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_descriptor;
      }

      @java.lang.Override
      public claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition getDefaultInstanceForType() {
        return claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.getDefaultInstance();
      }

      @java.lang.Override
      public claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition build() {
        claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition buildPartial() {
        claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition result = new claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition(this);
        result.version_ = version_;
        if (timewindowBuilder_ == null) {
          result.timewindow_ = timewindow_;
        } else {
          result.timewindow_ = timewindowBuilder_.build();
        }
        result.timezone_ = timezone_;
        result.timeWindowOffset_ = timeWindowOffset_;
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
        if (other instanceof claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition) {
          return mergeFrom((claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition other) {
        if (other == claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition.getDefaultInstance()) return this;
        if (!other.getVersion().isEmpty()) {
          version_ = other.version_;
          onChanged();
        }
        if (other.hasTimewindow()) {
          mergeTimewindow(other.getTimewindow());
        }
        if (other.timezone_ != 0) {
          setTimezoneValue(other.getTimezoneValue());
        }
        if (other.getTimeWindowOffset() != 0) {
          setTimeWindowOffset(other.getTimeWindowOffset());
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
        claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private java.lang.Object version_ = "";
      /**
       * <code>string version = 1;</code>
       */
      public java.lang.String getVersion() {
        java.lang.Object ref = version_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          version_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string version = 1;</code>
       */
      public com.google.protobuf.ByteString
          getVersionBytes() {
        java.lang.Object ref = version_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          version_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string version = 1;</code>
       */
      public Builder setVersion(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        version_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string version = 1;</code>
       */
      public Builder clearVersion() {
        
        version_ = getDefaultInstance().getVersion();
        onChanged();
        return this;
      }
      /**
       * <code>string version = 1;</code>
       */
      public Builder setVersionBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        version_ = value;
        onChanged();
        return this;
      }

      private claros.common.core.ClarosCommonCoreTimewindow.TimeWindow timewindow_;
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreTimewindow.TimeWindow, claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.Builder, claros.common.core.ClarosCommonCoreTimewindow.TimeWindowOrBuilder> timewindowBuilder_;
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public boolean hasTimewindow() {
        return timewindowBuilder_ != null || timewindow_ != null;
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreTimewindow.TimeWindow getTimewindow() {
        if (timewindowBuilder_ == null) {
          return timewindow_ == null ? claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.getDefaultInstance() : timewindow_;
        } else {
          return timewindowBuilder_.getMessage();
        }
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public Builder setTimewindow(claros.common.core.ClarosCommonCoreTimewindow.TimeWindow value) {
        if (timewindowBuilder_ == null) {
          if (value == null) {
            throw new NullPointerException();
          }
          timewindow_ = value;
          onChanged();
        } else {
          timewindowBuilder_.setMessage(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public Builder setTimewindow(
          claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.Builder builderForValue) {
        if (timewindowBuilder_ == null) {
          timewindow_ = builderForValue.build();
          onChanged();
        } else {
          timewindowBuilder_.setMessage(builderForValue.build());
        }

        return this;
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public Builder mergeTimewindow(claros.common.core.ClarosCommonCoreTimewindow.TimeWindow value) {
        if (timewindowBuilder_ == null) {
          if (timewindow_ != null) {
            timewindow_ =
              claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.newBuilder(timewindow_).mergeFrom(value).buildPartial();
          } else {
            timewindow_ = value;
          }
          onChanged();
        } else {
          timewindowBuilder_.mergeFrom(value);
        }

        return this;
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public Builder clearTimewindow() {
        if (timewindowBuilder_ == null) {
          timewindow_ = null;
          onChanged();
        } else {
          timewindow_ = null;
          timewindowBuilder_ = null;
        }

        return this;
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.Builder getTimewindowBuilder() {
        
        onChanged();
        return getTimewindowFieldBuilder().getBuilder();
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreTimewindow.TimeWindowOrBuilder getTimewindowOrBuilder() {
        if (timewindowBuilder_ != null) {
          return timewindowBuilder_.getMessageOrBuilder();
        } else {
          return timewindow_ == null ?
              claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.getDefaultInstance() : timewindow_;
        }
      }
      /**
       * <code>.claros.common.core.TimeWindow timewindow = 2;</code>
       */
      private com.google.protobuf.SingleFieldBuilderV3<
          claros.common.core.ClarosCommonCoreTimewindow.TimeWindow, claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.Builder, claros.common.core.ClarosCommonCoreTimewindow.TimeWindowOrBuilder> 
          getTimewindowFieldBuilder() {
        if (timewindowBuilder_ == null) {
          timewindowBuilder_ = new com.google.protobuf.SingleFieldBuilderV3<
              claros.common.core.ClarosCommonCoreTimewindow.TimeWindow, claros.common.core.ClarosCommonCoreTimewindow.TimeWindow.Builder, claros.common.core.ClarosCommonCoreTimewindow.TimeWindowOrBuilder>(
                  getTimewindow(),
                  getParentForChildren(),
                  isClean());
          timewindow_ = null;
        }
        return timewindowBuilder_;
      }

      private int timezone_ = 0;
      /**
       * <code>.claros.common.core.TimeZone timezone = 3;</code>
       */
      public int getTimezoneValue() {
        return timezone_;
      }
      /**
       * <code>.claros.common.core.TimeZone timezone = 3;</code>
       */
      public Builder setTimezoneValue(int value) {
        timezone_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>.claros.common.core.TimeZone timezone = 3;</code>
       */
      public claros.common.core.ClarosCommonCoreTimezone.TimeZone getTimezone() {
        @SuppressWarnings("deprecation")
        claros.common.core.ClarosCommonCoreTimezone.TimeZone result = claros.common.core.ClarosCommonCoreTimezone.TimeZone.valueOf(timezone_);
        return result == null ? claros.common.core.ClarosCommonCoreTimezone.TimeZone.UNRECOGNIZED : result;
      }
      /**
       * <code>.claros.common.core.TimeZone timezone = 3;</code>
       */
      public Builder setTimezone(claros.common.core.ClarosCommonCoreTimezone.TimeZone value) {
        if (value == null) {
          throw new NullPointerException();
        }
        
        timezone_ = value.getNumber();
        onChanged();
        return this;
      }
      /**
       * <code>.claros.common.core.TimeZone timezone = 3;</code>
       */
      public Builder clearTimezone() {
        
        timezone_ = 0;
        onChanged();
        return this;
      }

      private int timeWindowOffset_ ;
      /**
       * <code>uint32 timeWindowOffset = 4;</code>
       */
      public int getTimeWindowOffset() {
        return timeWindowOffset_;
      }
      /**
       * <code>uint32 timeWindowOffset = 4;</code>
       */
      public Builder setTimeWindowOffset(int value) {
        
        timeWindowOffset_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>uint32 timeWindowOffset = 4;</code>
       */
      public Builder clearTimeWindowOffset() {
        
        timeWindowOffset_ = 0;
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


      // @@protoc_insertion_point(builder_scope:claros.operations.spreadsheet.SpreadsheetDefinition)
    }

    // @@protoc_insertion_point(class_scope:claros.operations.spreadsheet.SpreadsheetDefinition)
    private static final claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition();
    }

    public static claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<SpreadsheetDefinition>
        PARSER = new com.google.protobuf.AbstractParser<SpreadsheetDefinition>() {
      @java.lang.Override
      public SpreadsheetDefinition parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new SpreadsheetDefinition(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<SpreadsheetDefinition> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<SpreadsheetDefinition> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public claros.operations.spreadsheet.ClarosOperationsSpreadsheetSpreadsheetDefinition.SpreadsheetDefinition getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n:claros_operations_spreadsheet_spreadsh" +
      "eet_definition.proto\022\035claros.operations." +
      "spreadsheet\032#claros_common_core_timewind" +
      "ow.proto\032!claros_common_core_timezone.pr" +
      "oto\"\246\001\n\025SpreadsheetDefinition\022\017\n\007version" +
      "\030\001 \001(\t\0222\n\ntimewindow\030\002 \001(\0132\036.claros.comm" +
      "on.core.TimeWindow\022.\n\010timezone\030\003 \001(\0162\034.c" +
      "laros.common.core.TimeZone\022\030\n\020timeWindow" +
      "Offset\030\004 \001(\rb\006proto3"
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
          claros.common.core.ClarosCommonCoreTimewindow.getDescriptor(),
          claros.common.core.ClarosCommonCoreTimezone.getDescriptor(),
        }, assigner);
    internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_claros_operations_spreadsheet_SpreadsheetDefinition_descriptor,
        new java.lang.String[] { "Version", "Timewindow", "Timezone", "TimeWindowOffset", });
    claros.common.core.ClarosCommonCoreTimewindow.getDescriptor();
    claros.common.core.ClarosCommonCoreTimezone.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
