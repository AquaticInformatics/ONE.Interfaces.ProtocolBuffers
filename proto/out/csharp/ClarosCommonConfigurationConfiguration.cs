// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_common_configuration_configuration.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Common.Configuration {

  /// <summary>Holder for reflection information generated from claros_common_configuration_configuration.proto</summary>
  public static partial class ClarosCommonConfigurationConfigurationReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_common_configuration_configuration.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosCommonConfigurationConfigurationReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci9jbGFyb3NfY29tbW9uX2NvbmZpZ3VyYXRpb25fY29uZmlndXJhdGlvbi5w",
            "cm90bxIbY2xhcm9zLmNvbW1vbi5jb25maWd1cmF0aW9uGidjbGFyb3NfY29t",
            "bW9uX2NvcmVfY2xhcm9zZGF0ZXRpbWUucHJvdG8aLWNsYXJvc19jb21tb25f",
            "Y29uZmlndXJhdGlvbl9lbnRpdHlfdHlwZS5wcm90bxooY2xhcm9zX2NvbW1v",
            "bl9jb25maWd1cmF0aW9uX3JpZ2h0cy5wcm90byKMBAoNQ29uZmlndXJhdGlv",
            "bhIKCgJpZBgBIAEoCRITCgtjcmVhdGVkQnlJZBgCIAEoCRI1CgljcmVhdGVk",
            "T24YAyABKAsyIi5jbGFyb3MuY29tbW9uLmNvcmUuQ2xhcm9zRGF0ZVRpbWUS",
            "FAoMbW9kaWZpZWRCeUlkGAQgASgJEjYKCm1vZGlmaWVkT24YBSABKAsyIi5j",
            "bGFyb3MuY29tbW9uLmNvcmUuQ2xhcm9zRGF0ZVRpbWUSGQoRY29uZmlndXJh",
            "dGlvbkRhdGEYBiABKAkSPQoMZW50aXR5VHlwZUlkGAcgASgOMicuY2xhcm9z",
            "LmNvbW1vbi5jb25maWd1cmF0aW9uLkVudGl0eVR5cGUSEgoKZmlsdGVyQnlJ",
            "ZBgIIAEoCRIQCgh0ZW5hbnRJZBgJIAEoCRIPCgdvd25lcklkGAogASgJEg4K",
            "BnB1YmxpYxgLIAEoCBIPCgd2ZXJzaW9uGAwgASgNEkwKCXByaXZpbGVnZRgN",
            "IAMoCzI5LmNsYXJvcy5jb21tb24uY29uZmlndXJhdGlvbi5Db25maWd1cmF0",
            "aW9uLlByaXZpbGVnZUVudHJ5GlUKDlByaXZpbGVnZUVudHJ5EgsKA2tleRgB",
            "IAEoCRIyCgV2YWx1ZRgCIAEoCzIjLmNsYXJvcy5jb21tb24uY29uZmlndXJh",
            "dGlvbi5SaWdodHM6AjgBYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Common.Core.ClarosCommonCoreClarosdatetimeReflection.Descriptor, global::Claros.Common.Configuration.ClarosCommonConfigurationEntityTypeReflection.Descriptor, global::Claros.Common.Configuration.ClarosCommonConfigurationRightsReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Common.Configuration.Configuration), global::Claros.Common.Configuration.Configuration.Parser, new[]{ "Id", "CreatedById", "CreatedOn", "ModifiedById", "ModifiedOn", "ConfigurationData", "EntityTypeId", "FilterById", "TenantId", "OwnerId", "Public", "Version", "Privilege" }, null, null, new pbr::GeneratedClrTypeInfo[] { null, })
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Configuration : pb::IMessage<Configuration> {
    private static readonly pb::MessageParser<Configuration> _parser = new pb::MessageParser<Configuration>(() => new Configuration());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Configuration> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Common.Configuration.ClarosCommonConfigurationConfigurationReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Configuration() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Configuration(Configuration other) : this() {
      id_ = other.id_;
      createdById_ = other.createdById_;
      createdOn_ = other.createdOn_ != null ? other.createdOn_.Clone() : null;
      modifiedById_ = other.modifiedById_;
      modifiedOn_ = other.modifiedOn_ != null ? other.modifiedOn_.Clone() : null;
      configurationData_ = other.configurationData_;
      entityTypeId_ = other.entityTypeId_;
      filterById_ = other.filterById_;
      tenantId_ = other.tenantId_;
      ownerId_ = other.ownerId_;
      public_ = other.public_;
      version_ = other.version_;
      privilege_ = other.privilege_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Configuration Clone() {
      return new Configuration(this);
    }

    /// <summary>Field number for the "id" field.</summary>
    public const int IdFieldNumber = 1;
    private string id_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Id {
      get { return id_; }
      set {
        id_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "createdById" field.</summary>
    public const int CreatedByIdFieldNumber = 2;
    private string createdById_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string CreatedById {
      get { return createdById_; }
      set {
        createdById_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "createdOn" field.</summary>
    public const int CreatedOnFieldNumber = 3;
    private global::Claros.Common.Core.ClarosDateTime createdOn_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.ClarosDateTime CreatedOn {
      get { return createdOn_; }
      set {
        createdOn_ = value;
      }
    }

    /// <summary>Field number for the "modifiedById" field.</summary>
    public const int ModifiedByIdFieldNumber = 4;
    private string modifiedById_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ModifiedById {
      get { return modifiedById_; }
      set {
        modifiedById_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "modifiedOn" field.</summary>
    public const int ModifiedOnFieldNumber = 5;
    private global::Claros.Common.Core.ClarosDateTime modifiedOn_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.ClarosDateTime ModifiedOn {
      get { return modifiedOn_; }
      set {
        modifiedOn_ = value;
      }
    }

    /// <summary>Field number for the "configurationData" field.</summary>
    public const int ConfigurationDataFieldNumber = 6;
    private string configurationData_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ConfigurationData {
      get { return configurationData_; }
      set {
        configurationData_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "entityTypeId" field.</summary>
    public const int EntityTypeIdFieldNumber = 7;
    private global::Claros.Common.Configuration.EntityType entityTypeId_ = 0;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Configuration.EntityType EntityTypeId {
      get { return entityTypeId_; }
      set {
        entityTypeId_ = value;
      }
    }

    /// <summary>Field number for the "filterById" field.</summary>
    public const int FilterByIdFieldNumber = 8;
    private string filterById_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string FilterById {
      get { return filterById_; }
      set {
        filterById_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "tenantId" field.</summary>
    public const int TenantIdFieldNumber = 9;
    private string tenantId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string TenantId {
      get { return tenantId_; }
      set {
        tenantId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "ownerId" field.</summary>
    public const int OwnerIdFieldNumber = 10;
    private string ownerId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string OwnerId {
      get { return ownerId_; }
      set {
        ownerId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "public" field.</summary>
    public const int PublicFieldNumber = 11;
    private bool public_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Public {
      get { return public_; }
      set {
        public_ = value;
      }
    }

    /// <summary>Field number for the "version" field.</summary>
    public const int VersionFieldNumber = 12;
    private uint version_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Version {
      get { return version_; }
      set {
        version_ = value;
      }
    }

    /// <summary>Field number for the "privilege" field.</summary>
    public const int PrivilegeFieldNumber = 13;
    private static readonly pbc::MapField<string, global::Claros.Common.Configuration.Rights>.Codec _map_privilege_codec
        = new pbc::MapField<string, global::Claros.Common.Configuration.Rights>.Codec(pb::FieldCodec.ForString(10), pb::FieldCodec.ForMessage(18, global::Claros.Common.Configuration.Rights.Parser), 106);
    private readonly pbc::MapField<string, global::Claros.Common.Configuration.Rights> privilege_ = new pbc::MapField<string, global::Claros.Common.Configuration.Rights>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, global::Claros.Common.Configuration.Rights> Privilege {
      get { return privilege_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Configuration);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Configuration other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (CreatedById != other.CreatedById) return false;
      if (!object.Equals(CreatedOn, other.CreatedOn)) return false;
      if (ModifiedById != other.ModifiedById) return false;
      if (!object.Equals(ModifiedOn, other.ModifiedOn)) return false;
      if (ConfigurationData != other.ConfigurationData) return false;
      if (EntityTypeId != other.EntityTypeId) return false;
      if (FilterById != other.FilterById) return false;
      if (TenantId != other.TenantId) return false;
      if (OwnerId != other.OwnerId) return false;
      if (Public != other.Public) return false;
      if (Version != other.Version) return false;
      if (!Privilege.Equals(other.Privilege)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (CreatedById.Length != 0) hash ^= CreatedById.GetHashCode();
      if (createdOn_ != null) hash ^= CreatedOn.GetHashCode();
      if (ModifiedById.Length != 0) hash ^= ModifiedById.GetHashCode();
      if (modifiedOn_ != null) hash ^= ModifiedOn.GetHashCode();
      if (ConfigurationData.Length != 0) hash ^= ConfigurationData.GetHashCode();
      if (EntityTypeId != 0) hash ^= EntityTypeId.GetHashCode();
      if (FilterById.Length != 0) hash ^= FilterById.GetHashCode();
      if (TenantId.Length != 0) hash ^= TenantId.GetHashCode();
      if (OwnerId.Length != 0) hash ^= OwnerId.GetHashCode();
      if (Public != false) hash ^= Public.GetHashCode();
      if (Version != 0) hash ^= Version.GetHashCode();
      hash ^= Privilege.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
      if (Id.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(Id);
      }
      if (CreatedById.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(CreatedById);
      }
      if (createdOn_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(CreatedOn);
      }
      if (ModifiedById.Length != 0) {
        output.WriteRawTag(34);
        output.WriteString(ModifiedById);
      }
      if (modifiedOn_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(ModifiedOn);
      }
      if (ConfigurationData.Length != 0) {
        output.WriteRawTag(50);
        output.WriteString(ConfigurationData);
      }
      if (EntityTypeId != 0) {
        output.WriteRawTag(56);
        output.WriteEnum((int) EntityTypeId);
      }
      if (FilterById.Length != 0) {
        output.WriteRawTag(66);
        output.WriteString(FilterById);
      }
      if (TenantId.Length != 0) {
        output.WriteRawTag(74);
        output.WriteString(TenantId);
      }
      if (OwnerId.Length != 0) {
        output.WriteRawTag(82);
        output.WriteString(OwnerId);
      }
      if (Public != false) {
        output.WriteRawTag(88);
        output.WriteBool(Public);
      }
      if (Version != 0) {
        output.WriteRawTag(96);
        output.WriteUInt32(Version);
      }
      privilege_.WriteTo(output, _map_privilege_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Id.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Id);
      }
      if (CreatedById.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(CreatedById);
      }
      if (createdOn_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(CreatedOn);
      }
      if (ModifiedById.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ModifiedById);
      }
      if (modifiedOn_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(ModifiedOn);
      }
      if (ConfigurationData.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ConfigurationData);
      }
      if (EntityTypeId != 0) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) EntityTypeId);
      }
      if (FilterById.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(FilterById);
      }
      if (TenantId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(TenantId);
      }
      if (OwnerId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(OwnerId);
      }
      if (Public != false) {
        size += 1 + 1;
      }
      if (Version != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Version);
      }
      size += privilege_.CalculateSize(_map_privilege_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Configuration other) {
      if (other == null) {
        return;
      }
      if (other.Id.Length != 0) {
        Id = other.Id;
      }
      if (other.CreatedById.Length != 0) {
        CreatedById = other.CreatedById;
      }
      if (other.createdOn_ != null) {
        if (createdOn_ == null) {
          CreatedOn = new global::Claros.Common.Core.ClarosDateTime();
        }
        CreatedOn.MergeFrom(other.CreatedOn);
      }
      if (other.ModifiedById.Length != 0) {
        ModifiedById = other.ModifiedById;
      }
      if (other.modifiedOn_ != null) {
        if (modifiedOn_ == null) {
          ModifiedOn = new global::Claros.Common.Core.ClarosDateTime();
        }
        ModifiedOn.MergeFrom(other.ModifiedOn);
      }
      if (other.ConfigurationData.Length != 0) {
        ConfigurationData = other.ConfigurationData;
      }
      if (other.EntityTypeId != 0) {
        EntityTypeId = other.EntityTypeId;
      }
      if (other.FilterById.Length != 0) {
        FilterById = other.FilterById;
      }
      if (other.TenantId.Length != 0) {
        TenantId = other.TenantId;
      }
      if (other.OwnerId.Length != 0) {
        OwnerId = other.OwnerId;
      }
      if (other.Public != false) {
        Public = other.Public;
      }
      if (other.Version != 0) {
        Version = other.Version;
      }
      privilege_.Add(other.privilege_);
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Id = input.ReadString();
            break;
          }
          case 18: {
            CreatedById = input.ReadString();
            break;
          }
          case 26: {
            if (createdOn_ == null) {
              CreatedOn = new global::Claros.Common.Core.ClarosDateTime();
            }
            input.ReadMessage(CreatedOn);
            break;
          }
          case 34: {
            ModifiedById = input.ReadString();
            break;
          }
          case 42: {
            if (modifiedOn_ == null) {
              ModifiedOn = new global::Claros.Common.Core.ClarosDateTime();
            }
            input.ReadMessage(ModifiedOn);
            break;
          }
          case 50: {
            ConfigurationData = input.ReadString();
            break;
          }
          case 56: {
            EntityTypeId = (global::Claros.Common.Configuration.EntityType) input.ReadEnum();
            break;
          }
          case 66: {
            FilterById = input.ReadString();
            break;
          }
          case 74: {
            TenantId = input.ReadString();
            break;
          }
          case 82: {
            OwnerId = input.ReadString();
            break;
          }
          case 88: {
            Public = input.ReadBool();
            break;
          }
          case 96: {
            Version = input.ReadUInt32();
            break;
          }
          case 106: {
            privilege_.AddEntriesFrom(input, _map_privilege_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
