// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_operations_spreadsheet_worksheet_definition.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Operations.Spreadsheet {

  /// <summary>Holder for reflection information generated from claros_operations_spreadsheet_worksheet_definition.proto</summary>
  public static partial class ClarosOperationsSpreadsheetWorksheetDefinitionReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_operations_spreadsheet_worksheet_definition.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosOperationsSpreadsheetWorksheetDefinitionReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjhjbGFyb3Nfb3BlcmF0aW9uc19zcHJlYWRzaGVldF93b3Jrc2hlZXRfZGVm",
            "aW5pdGlvbi5wcm90bxIdY2xhcm9zLm9wZXJhdGlvbnMuc3ByZWFkc2hlZXQa",
            "NGNsYXJvc19vcGVyYXRpb25zX3NwcmVhZHNoZWV0X3dvcmtzaGVldF9jb2x1",
            "bW4ucHJvdG8aI2NsYXJvc19jb21tb25fY29yZV9hdWRpdGV2ZW50LnByb3Rv",
            "IrQBChNXb3Jrc2hlZXREZWZpbml0aW9uEg8KB3ZlcnNpb24YASABKA0SEAoI",
            "c3RhcnRSb3cYAiABKA0SDgoGZW5kUm93GAMgASgNEjYKB2NvbHVtbnMYBCAD",
            "KAsyJS5jbGFyb3Mub3BlcmF0aW9ucy5zcHJlYWRzaGVldC5Db2x1bW4SMgoK",
            "YXVkaXRFdmVudBhjIAEoCzIeLmNsYXJvcy5jb21tb24uY29yZS5BdWRpdEV2",
            "ZW50YgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Operations.Spreadsheet.ClarosOperationsSpreadsheetWorksheetColumnReflection.Descriptor, global::Claros.Common.Core.ClarosCommonCoreAuditeventReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Operations.Spreadsheet.WorksheetDefinition), global::Claros.Operations.Spreadsheet.WorksheetDefinition.Parser, new[]{ "Version", "StartRow", "EndRow", "Columns", "AuditEvent" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class WorksheetDefinition : pb::IMessage<WorksheetDefinition> {
    private static readonly pb::MessageParser<WorksheetDefinition> _parser = new pb::MessageParser<WorksheetDefinition>(() => new WorksheetDefinition());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<WorksheetDefinition> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Operations.Spreadsheet.ClarosOperationsSpreadsheetWorksheetDefinitionReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public WorksheetDefinition() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public WorksheetDefinition(WorksheetDefinition other) : this() {
      version_ = other.version_;
      startRow_ = other.startRow_;
      endRow_ = other.endRow_;
      columns_ = other.columns_.Clone();
      auditEvent_ = other.auditEvent_ != null ? other.auditEvent_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public WorksheetDefinition Clone() {
      return new WorksheetDefinition(this);
    }

    /// <summary>Field number for the "version" field.</summary>
    public const int VersionFieldNumber = 1;
    private uint version_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Version {
      get { return version_; }
      set {
        version_ = value;
      }
    }

    /// <summary>Field number for the "startRow" field.</summary>
    public const int StartRowFieldNumber = 2;
    private uint startRow_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint StartRow {
      get { return startRow_; }
      set {
        startRow_ = value;
      }
    }

    /// <summary>Field number for the "endRow" field.</summary>
    public const int EndRowFieldNumber = 3;
    private uint endRow_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint EndRow {
      get { return endRow_; }
      set {
        endRow_ = value;
      }
    }

    /// <summary>Field number for the "columns" field.</summary>
    public const int ColumnsFieldNumber = 4;
    private static readonly pb::FieldCodec<global::Claros.Operations.Spreadsheet.Column> _repeated_columns_codec
        = pb::FieldCodec.ForMessage(34, global::Claros.Operations.Spreadsheet.Column.Parser);
    private readonly pbc::RepeatedField<global::Claros.Operations.Spreadsheet.Column> columns_ = new pbc::RepeatedField<global::Claros.Operations.Spreadsheet.Column>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Operations.Spreadsheet.Column> Columns {
      get { return columns_; }
    }

    /// <summary>Field number for the "auditEvent" field.</summary>
    public const int AuditEventFieldNumber = 99;
    private global::Claros.Common.Core.AuditEvent auditEvent_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.AuditEvent AuditEvent {
      get { return auditEvent_; }
      set {
        auditEvent_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as WorksheetDefinition);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(WorksheetDefinition other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Version != other.Version) return false;
      if (StartRow != other.StartRow) return false;
      if (EndRow != other.EndRow) return false;
      if(!columns_.Equals(other.columns_)) return false;
      if (!object.Equals(AuditEvent, other.AuditEvent)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Version != 0) hash ^= Version.GetHashCode();
      if (StartRow != 0) hash ^= StartRow.GetHashCode();
      if (EndRow != 0) hash ^= EndRow.GetHashCode();
      hash ^= columns_.GetHashCode();
      if (auditEvent_ != null) hash ^= AuditEvent.GetHashCode();
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
      if (Version != 0) {
        output.WriteRawTag(8);
        output.WriteUInt32(Version);
      }
      if (StartRow != 0) {
        output.WriteRawTag(16);
        output.WriteUInt32(StartRow);
      }
      if (EndRow != 0) {
        output.WriteRawTag(24);
        output.WriteUInt32(EndRow);
      }
      columns_.WriteTo(output, _repeated_columns_codec);
      if (auditEvent_ != null) {
        output.WriteRawTag(154, 6);
        output.WriteMessage(AuditEvent);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Version != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Version);
      }
      if (StartRow != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(StartRow);
      }
      if (EndRow != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(EndRow);
      }
      size += columns_.CalculateSize(_repeated_columns_codec);
      if (auditEvent_ != null) {
        size += 2 + pb::CodedOutputStream.ComputeMessageSize(AuditEvent);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(WorksheetDefinition other) {
      if (other == null) {
        return;
      }
      if (other.Version != 0) {
        Version = other.Version;
      }
      if (other.StartRow != 0) {
        StartRow = other.StartRow;
      }
      if (other.EndRow != 0) {
        EndRow = other.EndRow;
      }
      columns_.Add(other.columns_);
      if (other.auditEvent_ != null) {
        if (auditEvent_ == null) {
          AuditEvent = new global::Claros.Common.Core.AuditEvent();
        }
        AuditEvent.MergeFrom(other.AuditEvent);
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
          case 8: {
            Version = input.ReadUInt32();
            break;
          }
          case 16: {
            StartRow = input.ReadUInt32();
            break;
          }
          case 24: {
            EndRow = input.ReadUInt32();
            break;
          }
          case 34: {
            columns_.AddEntriesFrom(input, _repeated_columns_codec);
            break;
          }
          case 794: {
            if (auditEvent_ == null) {
              AuditEvent = new global::Claros.Common.Core.AuditEvent();
            }
            input.ReadMessage(AuditEvent);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
