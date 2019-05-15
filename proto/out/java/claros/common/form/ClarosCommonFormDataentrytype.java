// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_form_dataentrytype.proto

package claros.common.form;

public final class ClarosCommonFormDataentrytype {
  private ClarosCommonFormDataentrytype() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * Protobuf enum {@code claros.common.form.DataEntryType}
   */
  public enum DataEntryType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>DATAENTRYTYPE_UNSPECIFIED = 0;</code>
     */
    DATAENTRYTYPE_UNSPECIFIED(0),
    /**
     * <code>DATAENTRYTYPE_INSTRUMENT = 1;</code>
     */
    DATAENTRYTYPE_INSTRUMENT(1),
    /**
     * <code>DATAENTRYTYPE_TOTALIZER = 2;</code>
     */
    DATAENTRYTYPE_TOTALIZER(2),
    /**
     * <code>DATAENTRYTYPE_CONSUMPTION = 3;</code>
     */
    DATAENTRYTYPE_CONSUMPTION(3),
    /**
     * <code>DATAENTRYTYPE_TEXT = 4;</code>
     */
    DATAENTRYTYPE_TEXT(4),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>DATAENTRYTYPE_UNSPECIFIED = 0;</code>
     */
    public static final int DATAENTRYTYPE_UNSPECIFIED_VALUE = 0;
    /**
     * <code>DATAENTRYTYPE_INSTRUMENT = 1;</code>
     */
    public static final int DATAENTRYTYPE_INSTRUMENT_VALUE = 1;
    /**
     * <code>DATAENTRYTYPE_TOTALIZER = 2;</code>
     */
    public static final int DATAENTRYTYPE_TOTALIZER_VALUE = 2;
    /**
     * <code>DATAENTRYTYPE_CONSUMPTION = 3;</code>
     */
    public static final int DATAENTRYTYPE_CONSUMPTION_VALUE = 3;
    /**
     * <code>DATAENTRYTYPE_TEXT = 4;</code>
     */
    public static final int DATAENTRYTYPE_TEXT_VALUE = 4;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static DataEntryType valueOf(int value) {
      return forNumber(value);
    }

    public static DataEntryType forNumber(int value) {
      switch (value) {
        case 0: return DATAENTRYTYPE_UNSPECIFIED;
        case 1: return DATAENTRYTYPE_INSTRUMENT;
        case 2: return DATAENTRYTYPE_TOTALIZER;
        case 3: return DATAENTRYTYPE_CONSUMPTION;
        case 4: return DATAENTRYTYPE_TEXT;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<DataEntryType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        DataEntryType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<DataEntryType>() {
            public DataEntryType findValueByNumber(int number) {
              return DataEntryType.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return claros.common.form.ClarosCommonFormDataentrytype.getDescriptor().getEnumTypes().get(0);
    }

    private static final DataEntryType[] VALUES = values();

    public static DataEntryType valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private DataEntryType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:claros.common.form.DataEntryType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n&claros_common_form_dataentrytype.proto" +
      "\022\022claros.common.form*\240\001\n\rDataEntryType\022\035" +
      "\n\031DATAENTRYTYPE_UNSPECIFIED\020\000\022\034\n\030DATAENT" +
      "RYTYPE_INSTRUMENT\020\001\022\033\n\027DATAENTRYTYPE_TOT" +
      "ALIZER\020\002\022\035\n\031DATAENTRYTYPE_CONSUMPTION\020\003\022" +
      "\026\n\022DATAENTRYTYPE_TEXT\020\004b\006proto3"
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
        }, assigner);
  }

  // @@protoc_insertion_point(outer_class_scope)
}
