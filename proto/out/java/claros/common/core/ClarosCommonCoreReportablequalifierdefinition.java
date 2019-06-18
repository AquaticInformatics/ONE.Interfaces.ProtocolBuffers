// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_core_reportablequalifierdefinition.proto

package claros.common.core;

public final class ClarosCommonCoreReportablequalifierdefinition {
  private ClarosCommonCoreReportablequalifierdefinition() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  public interface ReportableQualifierDefinitionOrBuilder extends
      // @@protoc_insertion_point(interface_extends:claros.common.core.ReportableQualifierDefinition)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <pre>
     * The type of reportable qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     */
    int getReportableQualifierTypeValue();
    /**
     * <pre>
     * The type of reportable qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     */
    claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType getReportableQualifierType();

    /**
     * <pre>
     * How to interpret the qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     */
    int getReportableQualifierDefinitionTypeValue();
    /**
     * <pre>
     * How to interpret the qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     */
    claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType getReportableQualifierDefinitionType();

    /**
     * <pre>
     * The value if the interpretation is a constant
     * </pre>
     *
     * <code>double constantValue = 3;</code>
     */
    double getConstantValue();
  }
  /**
   * Protobuf type {@code claros.common.core.ReportableQualifierDefinition}
   */
  public  static final class ReportableQualifierDefinition extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:claros.common.core.ReportableQualifierDefinition)
      ReportableQualifierDefinitionOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use ReportableQualifierDefinition.newBuilder() to construct.
    private ReportableQualifierDefinition(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private ReportableQualifierDefinition() {
      reportableQualifierType_ = 0;
      reportableQualifierDefinitionType_ = 0;
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private ReportableQualifierDefinition(
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
            case 8: {
              int rawValue = input.readEnum();

              reportableQualifierType_ = rawValue;
              break;
            }
            case 16: {
              int rawValue = input.readEnum();

              reportableQualifierDefinitionType_ = rawValue;
              break;
            }
            case 25: {

              constantValue_ = input.readDouble();
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
      return claros.common.core.ClarosCommonCoreReportablequalifierdefinition.internal_static_claros_common_core_ReportableQualifierDefinition_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return claros.common.core.ClarosCommonCoreReportablequalifierdefinition.internal_static_claros_common_core_ReportableQualifierDefinition_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.class, claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.Builder.class);
    }

    public static final int REPORTABLEQUALIFIERTYPE_FIELD_NUMBER = 1;
    private int reportableQualifierType_;
    /**
     * <pre>
     * The type of reportable qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     */
    public int getReportableQualifierTypeValue() {
      return reportableQualifierType_;
    }
    /**
     * <pre>
     * The type of reportable qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
     */
    public claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType getReportableQualifierType() {
      @SuppressWarnings("deprecation")
      claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType result = claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType.valueOf(reportableQualifierType_);
      return result == null ? claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType.UNRECOGNIZED : result;
    }

    public static final int REPORTABLEQUALIFIERDEFINITIONTYPE_FIELD_NUMBER = 2;
    private int reportableQualifierDefinitionType_;
    /**
     * <pre>
     * How to interpret the qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     */
    public int getReportableQualifierDefinitionTypeValue() {
      return reportableQualifierDefinitionType_;
    }
    /**
     * <pre>
     * How to interpret the qualifer
     * </pre>
     *
     * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
     */
    public claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType getReportableQualifierDefinitionType() {
      @SuppressWarnings("deprecation")
      claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType result = claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType.valueOf(reportableQualifierDefinitionType_);
      return result == null ? claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType.UNRECOGNIZED : result;
    }

    public static final int CONSTANTVALUE_FIELD_NUMBER = 3;
    private double constantValue_;
    /**
     * <pre>
     * The value if the interpretation is a constant
     * </pre>
     *
     * <code>double constantValue = 3;</code>
     */
    public double getConstantValue() {
      return constantValue_;
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
      if (reportableQualifierType_ != claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType.REPORTABLE_QUALIFIER_UNKNOWN.getNumber()) {
        output.writeEnum(1, reportableQualifierType_);
      }
      if (reportableQualifierDefinitionType_ != claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType.REPORTABLE_QUALIFIER_DEFINITION_UNKNOWN.getNumber()) {
        output.writeEnum(2, reportableQualifierDefinitionType_);
      }
      if (constantValue_ != 0D) {
        output.writeDouble(3, constantValue_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (reportableQualifierType_ != claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType.REPORTABLE_QUALIFIER_UNKNOWN.getNumber()) {
        size += com.google.protobuf.CodedOutputStream
          .computeEnumSize(1, reportableQualifierType_);
      }
      if (reportableQualifierDefinitionType_ != claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType.REPORTABLE_QUALIFIER_DEFINITION_UNKNOWN.getNumber()) {
        size += com.google.protobuf.CodedOutputStream
          .computeEnumSize(2, reportableQualifierDefinitionType_);
      }
      if (constantValue_ != 0D) {
        size += com.google.protobuf.CodedOutputStream
          .computeDoubleSize(3, constantValue_);
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
      if (!(obj instanceof claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition)) {
        return super.equals(obj);
      }
      claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition other = (claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition) obj;

      if (reportableQualifierType_ != other.reportableQualifierType_) return false;
      if (reportableQualifierDefinitionType_ != other.reportableQualifierDefinitionType_) return false;
      if (java.lang.Double.doubleToLongBits(getConstantValue())
          != java.lang.Double.doubleToLongBits(
              other.getConstantValue())) return false;
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
      hash = (37 * hash) + REPORTABLEQUALIFIERTYPE_FIELD_NUMBER;
      hash = (53 * hash) + reportableQualifierType_;
      hash = (37 * hash) + REPORTABLEQUALIFIERDEFINITIONTYPE_FIELD_NUMBER;
      hash = (53 * hash) + reportableQualifierDefinitionType_;
      hash = (37 * hash) + CONSTANTVALUE_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashLong(
          java.lang.Double.doubleToLongBits(getConstantValue()));
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parseFrom(
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
    public static Builder newBuilder(claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition prototype) {
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
     * Protobuf type {@code claros.common.core.ReportableQualifierDefinition}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:claros.common.core.ReportableQualifierDefinition)
        claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinitionOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return claros.common.core.ClarosCommonCoreReportablequalifierdefinition.internal_static_claros_common_core_ReportableQualifierDefinition_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return claros.common.core.ClarosCommonCoreReportablequalifierdefinition.internal_static_claros_common_core_ReportableQualifierDefinition_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.class, claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.Builder.class);
      }

      // Construct using claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.newBuilder()
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
        reportableQualifierType_ = 0;

        reportableQualifierDefinitionType_ = 0;

        constantValue_ = 0D;

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return claros.common.core.ClarosCommonCoreReportablequalifierdefinition.internal_static_claros_common_core_ReportableQualifierDefinition_descriptor;
      }

      @java.lang.Override
      public claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition getDefaultInstanceForType() {
        return claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.getDefaultInstance();
      }

      @java.lang.Override
      public claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition build() {
        claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition buildPartial() {
        claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition result = new claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition(this);
        result.reportableQualifierType_ = reportableQualifierType_;
        result.reportableQualifierDefinitionType_ = reportableQualifierDefinitionType_;
        result.constantValue_ = constantValue_;
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
        if (other instanceof claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition) {
          return mergeFrom((claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition other) {
        if (other == claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition.getDefaultInstance()) return this;
        if (other.reportableQualifierType_ != 0) {
          setReportableQualifierTypeValue(other.getReportableQualifierTypeValue());
        }
        if (other.reportableQualifierDefinitionType_ != 0) {
          setReportableQualifierDefinitionTypeValue(other.getReportableQualifierDefinitionTypeValue());
        }
        if (other.getConstantValue() != 0D) {
          setConstantValue(other.getConstantValue());
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
        claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private int reportableQualifierType_ = 0;
      /**
       * <pre>
       * The type of reportable qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
       */
      public int getReportableQualifierTypeValue() {
        return reportableQualifierType_;
      }
      /**
       * <pre>
       * The type of reportable qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
       */
      public Builder setReportableQualifierTypeValue(int value) {
        reportableQualifierType_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The type of reportable qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
       */
      public claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType getReportableQualifierType() {
        @SuppressWarnings("deprecation")
        claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType result = claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType.valueOf(reportableQualifierType_);
        return result == null ? claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType.UNRECOGNIZED : result;
      }
      /**
       * <pre>
       * The type of reportable qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
       */
      public Builder setReportableQualifierType(claros.common.core.ClarosCommonCoreReportablequalifierType.ReportableQualifierType value) {
        if (value == null) {
          throw new NullPointerException();
        }
        
        reportableQualifierType_ = value.getNumber();
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The type of reportable qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierType reportableQualifierType = 1;</code>
       */
      public Builder clearReportableQualifierType() {
        
        reportableQualifierType_ = 0;
        onChanged();
        return this;
      }

      private int reportableQualifierDefinitionType_ = 0;
      /**
       * <pre>
       * How to interpret the qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
       */
      public int getReportableQualifierDefinitionTypeValue() {
        return reportableQualifierDefinitionType_;
      }
      /**
       * <pre>
       * How to interpret the qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
       */
      public Builder setReportableQualifierDefinitionTypeValue(int value) {
        reportableQualifierDefinitionType_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * How to interpret the qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
       */
      public claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType getReportableQualifierDefinitionType() {
        @SuppressWarnings("deprecation")
        claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType result = claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType.valueOf(reportableQualifierDefinitionType_);
        return result == null ? claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType.UNRECOGNIZED : result;
      }
      /**
       * <pre>
       * How to interpret the qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
       */
      public Builder setReportableQualifierDefinitionType(claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.ReportableQualifierDefinitionType value) {
        if (value == null) {
          throw new NullPointerException();
        }
        
        reportableQualifierDefinitionType_ = value.getNumber();
        onChanged();
        return this;
      }
      /**
       * <pre>
       * How to interpret the qualifer
       * </pre>
       *
       * <code>.claros.common.core.ReportableQualifierDefinitionType reportableQualifierDefinitionType = 2;</code>
       */
      public Builder clearReportableQualifierDefinitionType() {
        
        reportableQualifierDefinitionType_ = 0;
        onChanged();
        return this;
      }

      private double constantValue_ ;
      /**
       * <pre>
       * The value if the interpretation is a constant
       * </pre>
       *
       * <code>double constantValue = 3;</code>
       */
      public double getConstantValue() {
        return constantValue_;
      }
      /**
       * <pre>
       * The value if the interpretation is a constant
       * </pre>
       *
       * <code>double constantValue = 3;</code>
       */
      public Builder setConstantValue(double value) {
        
        constantValue_ = value;
        onChanged();
        return this;
      }
      /**
       * <pre>
       * The value if the interpretation is a constant
       * </pre>
       *
       * <code>double constantValue = 3;</code>
       */
      public Builder clearConstantValue() {
        
        constantValue_ = 0D;
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


      // @@protoc_insertion_point(builder_scope:claros.common.core.ReportableQualifierDefinition)
    }

    // @@protoc_insertion_point(class_scope:claros.common.core.ReportableQualifierDefinition)
    private static final claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition();
    }

    public static claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<ReportableQualifierDefinition>
        PARSER = new com.google.protobuf.AbstractParser<ReportableQualifierDefinition>() {
      @java.lang.Override
      public ReportableQualifierDefinition parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new ReportableQualifierDefinition(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<ReportableQualifierDefinition> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<ReportableQualifierDefinition> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public claros.common.core.ClarosCommonCoreReportablequalifierdefinition.ReportableQualifierDefinition getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_claros_common_core_ReportableQualifierDefinition_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_claros_common_core_ReportableQualifierDefinition_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n6claros_common_core_reportablequalifier" +
      "definition.proto\022\022claros.common.core\0321cl" +
      "aros_common_core_reportablequalifier_typ" +
      "e.proto\032;claros_common_core_reportablequ" +
      "alifierdefinition_type.proto\"\346\001\n\035Reporta" +
      "bleQualifierDefinition\022L\n\027reportableQual" +
      "ifierType\030\001 \001(\0162+.claros.common.core.Rep" +
      "ortableQualifierType\022`\n!reportableQualif" +
      "ierDefinitionType\030\002 \001(\01625.claros.common." +
      "core.ReportableQualifierDefinitionType\022\025" +
      "\n\rconstantValue\030\003 \001(\001b\006proto3"
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
          claros.common.core.ClarosCommonCoreReportablequalifierType.getDescriptor(),
          claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.getDescriptor(),
        }, assigner);
    internal_static_claros_common_core_ReportableQualifierDefinition_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_claros_common_core_ReportableQualifierDefinition_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_claros_common_core_ReportableQualifierDefinition_descriptor,
        new java.lang.String[] { "ReportableQualifierType", "ReportableQualifierDefinitionType", "ConstantValue", });
    claros.common.core.ClarosCommonCoreReportablequalifierType.getDescriptor();
    claros.common.core.ClarosCommonCoreReportablequalifierdefinitionType.getDescriptor();
  }

  // @@protoc_insertion_point(outer_class_scope)
}
