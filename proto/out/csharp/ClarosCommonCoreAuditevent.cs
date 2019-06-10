// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_common_core_auditevent.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Common.Core {

  /// <summary>Holder for reflection information generated from claros_common_core_auditevent.proto</summary>
  public static partial class ClarosCommonCoreAuditeventReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_common_core_auditevent.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosCommonCoreAuditeventReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiNjbGFyb3NfY29tbW9uX2NvcmVfYXVkaXRldmVudC5wcm90bxISY2xhcm9z",
            "LmNvbW1vbi5jb3JlGihjbGFyb3NfY29tbW9uX2NvcmVfYXVkaXRldmVudF90",
            "eXBlLnByb3RvGidjbGFyb3NfY29tbW9uX2NvcmVfY2xhcm9zZGF0ZXRpbWUu",
            "cHJvdG8aKGNsYXJvc19jb21tb25fY29yZV9kYXRhc291cmNlX3R5cGUucHJv",
            "dG8i0gEKCkF1ZGl0RXZlbnQSCgoCaWQYASABKAkSDgoGdXNlcklkGAIgASgJ",
            "EjoKDmRhdGFTb3VyY2VUeXBlGAMgASgOMiIuY2xhcm9zLmNvbW1vbi5jb3Jl",
            "LkRhdGFTb3VyY2VUeXBlEjUKCWV2ZW50VHlwZRgEIAEoDjIiLmNsYXJvcy5j",
            "b21tb24uY29yZS5BdWRpdEV2ZW50VHlwZRI1Cgl0aW1lU3RhbXAYBSABKAsy",
            "Ii5jbGFyb3MuY29tbW9uLmNvcmUuQ2xhcm9zRGF0ZVRpbWViBnByb3RvMw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Common.Core.ClarosCommonCoreAuditeventTypeReflection.Descriptor, global::Claros.Common.Core.ClarosCommonCoreClarosdatetimeReflection.Descriptor, global::Claros.Common.Core.ClarosCommonCoreDatasourceTypeReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Common.Core.AuditEvent), global::Claros.Common.Core.AuditEvent.Parser, new[]{ "Id", "UserId", "DataSourceType", "EventType", "TimeStamp" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class AuditEvent : pb::IMessage<AuditEvent> {
    private static readonly pb::MessageParser<AuditEvent> _parser = new pb::MessageParser<AuditEvent>(() => new AuditEvent());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<AuditEvent> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Common.Core.ClarosCommonCoreAuditeventReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AuditEvent() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AuditEvent(AuditEvent other) : this() {
      id_ = other.id_;
      userId_ = other.userId_;
      dataSourceType_ = other.dataSourceType_;
      eventType_ = other.eventType_;
      timeStamp_ = other.timeStamp_ != null ? other.timeStamp_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public AuditEvent Clone() {
      return new AuditEvent(this);
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

    /// <summary>Field number for the "userId" field.</summary>
    public const int UserIdFieldNumber = 2;
    private string userId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string UserId {
      get { return userId_; }
      set {
        userId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "dataSourceType" field.</summary>
    public const int DataSourceTypeFieldNumber = 3;
    private global::Claros.Common.Core.DataSourceType dataSourceType_ = 0;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.DataSourceType DataSourceType {
      get { return dataSourceType_; }
      set {
        dataSourceType_ = value;
      }
    }

    /// <summary>Field number for the "eventType" field.</summary>
    public const int EventTypeFieldNumber = 4;
    private global::Claros.Common.Core.AuditEventType eventType_ = 0;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.AuditEventType EventType {
      get { return eventType_; }
      set {
        eventType_ = value;
      }
    }

    /// <summary>Field number for the "timeStamp" field.</summary>
    public const int TimeStampFieldNumber = 5;
    private global::Claros.Common.Core.ClarosDateTime timeStamp_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.ClarosDateTime TimeStamp {
      get { return timeStamp_; }
      set {
        timeStamp_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as AuditEvent);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(AuditEvent other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Id != other.Id) return false;
      if (UserId != other.UserId) return false;
      if (DataSourceType != other.DataSourceType) return false;
      if (EventType != other.EventType) return false;
      if (!object.Equals(TimeStamp, other.TimeStamp)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Id.Length != 0) hash ^= Id.GetHashCode();
      if (UserId.Length != 0) hash ^= UserId.GetHashCode();
      if (DataSourceType != 0) hash ^= DataSourceType.GetHashCode();
      if (EventType != 0) hash ^= EventType.GetHashCode();
      if (timeStamp_ != null) hash ^= TimeStamp.GetHashCode();
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
      if (UserId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(UserId);
      }
      if (DataSourceType != 0) {
        output.WriteRawTag(24);
        output.WriteEnum((int) DataSourceType);
      }
      if (EventType != 0) {
        output.WriteRawTag(32);
        output.WriteEnum((int) EventType);
      }
      if (timeStamp_ != null) {
        output.WriteRawTag(42);
        output.WriteMessage(TimeStamp);
      }
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
      if (UserId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(UserId);
      }
      if (DataSourceType != 0) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) DataSourceType);
      }
      if (EventType != 0) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) EventType);
      }
      if (timeStamp_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TimeStamp);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(AuditEvent other) {
      if (other == null) {
        return;
      }
      if (other.Id.Length != 0) {
        Id = other.Id;
      }
      if (other.UserId.Length != 0) {
        UserId = other.UserId;
      }
      if (other.DataSourceType != 0) {
        DataSourceType = other.DataSourceType;
      }
      if (other.EventType != 0) {
        EventType = other.EventType;
      }
      if (other.timeStamp_ != null) {
        if (timeStamp_ == null) {
          TimeStamp = new global::Claros.Common.Core.ClarosDateTime();
        }
        TimeStamp.MergeFrom(other.TimeStamp);
      }
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
            UserId = input.ReadString();
            break;
          }
          case 24: {
            DataSourceType = (global::Claros.Common.Core.DataSourceType) input.ReadEnum();
            break;
          }
          case 32: {
            EventType = (global::Claros.Common.Core.AuditEventType) input.ReadEnum();
            break;
          }
          case 42: {
            if (timeStamp_ == null) {
              TimeStamp = new global::Claros.Common.Core.ClarosDateTime();
            }
            input.ReadMessage(TimeStamp);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
