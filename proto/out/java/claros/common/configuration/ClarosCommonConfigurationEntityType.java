// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: claros_common_configuration_entity_type.proto

package claros.common.configuration;

public final class ClarosCommonConfigurationEntityType {
  private ClarosCommonConfigurationEntityType() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * Protobuf enum {@code claros.common.configuration.EntityType}
   */
  public enum EntityType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>ENTITY_UNKNOWN = 0;</code>
     */
    ENTITY_UNKNOWN(0),
    /**
     * <code>ENTITY_FORMTEMPLATE = 1;</code>
     */
    ENTITY_FORMTEMPLATE(1),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>ENTITY_UNKNOWN = 0;</code>
     */
    public static final int ENTITY_UNKNOWN_VALUE = 0;
    /**
     * <code>ENTITY_FORMTEMPLATE = 1;</code>
     */
    public static final int ENTITY_FORMTEMPLATE_VALUE = 1;


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
    public static EntityType valueOf(int value) {
      return forNumber(value);
    }

    public static EntityType forNumber(int value) {
      switch (value) {
        case 0: return ENTITY_UNKNOWN;
        case 1: return ENTITY_FORMTEMPLATE;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<EntityType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        EntityType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<EntityType>() {
            public EntityType findValueByNumber(int number) {
              return EntityType.forNumber(number);
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
      return claros.common.configuration.ClarosCommonConfigurationEntityType.getDescriptor().getEnumTypes().get(0);
    }

    private static final EntityType[] VALUES = values();

    public static EntityType valueOf(
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

    private EntityType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:claros.common.configuration.EntityType)
  }


  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n-claros_common_configuration_entity_typ" +
      "e.proto\022\033claros.common.configuration*9\n\n" +
      "EntityType\022\022\n\016ENTITY_UNKNOWN\020\000\022\027\n\023ENTITY" +
      "_FORMTEMPLATE\020\001b\006proto3"
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
