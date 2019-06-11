// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_operations_spreadsheet_worksheet_type.proto

package claros.operations.spreadsheet;

public final class ClarosOperationsSpreadsheetWorksheetType {
  private ClarosOperationsSpreadsheetWorksheetType() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * Protobuf enum {@code claros.operations.spreadsheet.WorksheetType}
   */
  public enum WorksheetType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>W_UNKNOWN = 0;</code>
     */
    W_UNKNOWN(0),
    /**
     * <code>W_FIFTEEN_MINUTE = 1;</code>
     */
    W_FIFTEEN_MINUTE(1),
    /**
     * <code>W_FOUR_HOUR = 2;</code>
     */
    W_FOUR_HOUR(2),
    /**
     * <code>W_DAILY = 3;</code>
     */
    W_DAILY(3),
    /**
     * <code>W_MONTHLY = 4;</code>
     */
    W_MONTHLY(4),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>W_UNKNOWN = 0;</code>
     */
    public static final int W_UNKNOWN_VALUE = 0;
    /**
     * <code>W_FIFTEEN_MINUTE = 1;</code>
     */
    public static final int W_FIFTEEN_MINUTE_VALUE = 1;
    /**
     * <code>W_FOUR_HOUR = 2;</code>
     */
    public static final int W_FOUR_HOUR_VALUE = 2;
    /**
     * <code>W_DAILY = 3;</code>
     */
    public static final int W_DAILY_VALUE = 3;
    /**
     * <code>W_MONTHLY = 4;</code>
     */
    public static final int W_MONTHLY_VALUE = 4;


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
    public static WorksheetType valueOf(int value) {
      return forNumber(value);
    }

    public static WorksheetType forNumber(int value) {
      switch (value) {
        case 0: return W_UNKNOWN;
        case 1: return W_FIFTEEN_MINUTE;
        case 2: return W_FOUR_HOUR;
        case 3: return W_DAILY;
        case 4: return W_MONTHLY;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<WorksheetType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        WorksheetType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<WorksheetType>() {
            public WorksheetType findValueByNumber(int number) {
              return WorksheetType.forNumber(number);
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
      return claros.operations.spreadsheet.ClarosOperationsSpreadsheetWorksheetType.getDescriptor().getEnumTypes().get(0);
    }

    private static final WorksheetType[] VALUES = values();

    public static WorksheetType valueOf(
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

    private WorksheetType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:claros.operations.spreadsheet.WorksheetType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n2claros_operations_spreadsheet_workshee" +
      "t_type.proto\022\035claros.operations.spreadsh" +
      "eet*a\n\rWorksheetType\022\r\n\tW_UNKNOWN\020\000\022\024\n\020W" +
      "_FIFTEEN_MINUTE\020\001\022\017\n\013W_FOUR_HOUR\020\002\022\013\n\007W_" +
      "DAILY\020\003\022\r\n\tW_MONTHLY\020\004b\006proto3"
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
