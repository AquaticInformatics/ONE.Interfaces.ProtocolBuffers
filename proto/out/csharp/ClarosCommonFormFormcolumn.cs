// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_common_form_formcolumn.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Common.Form {

  /// <summary>Holder for reflection information generated from claros_common_form_formcolumn.proto</summary>
  public static partial class ClarosCommonFormFormcolumnReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_common_form_formcolumn.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosCommonFormFormcolumnReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiNjbGFyb3NfY29tbW9uX2Zvcm1fZm9ybWNvbHVtbi5wcm90bxISY2xhcm9z",
            "LmNvbW1vbi5mb3JtIjIKCkZvcm1Db2x1bW4SDgoGbnVtYmVyGAEgASgNEhQK",
            "DGZvcm1GaWVsZElkcxgCIAMoCWIGcHJvdG8z"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Common.Form.FormColumn), global::Claros.Common.Form.FormColumn.Parser, new[]{ "Number", "FormFieldIds" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class FormColumn : pb::IMessage<FormColumn> {
    private static readonly pb::MessageParser<FormColumn> _parser = new pb::MessageParser<FormColumn>(() => new FormColumn());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<FormColumn> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Common.Form.ClarosCommonFormFormcolumnReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public FormColumn() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public FormColumn(FormColumn other) : this() {
      number_ = other.number_;
      formFieldIds_ = other.formFieldIds_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public FormColumn Clone() {
      return new FormColumn(this);
    }

    /// <summary>Field number for the "number" field.</summary>
    public const int NumberFieldNumber = 1;
    private uint number_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Number {
      get { return number_; }
      set {
        number_ = value;
      }
    }

    /// <summary>Field number for the "formFieldIds" field.</summary>
    public const int FormFieldIdsFieldNumber = 2;
    private static readonly pb::FieldCodec<string> _repeated_formFieldIds_codec
        = pb::FieldCodec.ForString(18);
    private readonly pbc::RepeatedField<string> formFieldIds_ = new pbc::RepeatedField<string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<string> FormFieldIds {
      get { return formFieldIds_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as FormColumn);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(FormColumn other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Number != other.Number) return false;
      if(!formFieldIds_.Equals(other.formFieldIds_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Number != 0) hash ^= Number.GetHashCode();
      hash ^= formFieldIds_.GetHashCode();
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
      if (Number != 0) {
        output.WriteRawTag(8);
        output.WriteUInt32(Number);
      }
      formFieldIds_.WriteTo(output, _repeated_formFieldIds_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Number != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Number);
      }
      size += formFieldIds_.CalculateSize(_repeated_formFieldIds_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(FormColumn other) {
      if (other == null) {
        return;
      }
      if (other.Number != 0) {
        Number = other.Number;
      }
      formFieldIds_.Add(other.formFieldIds_);
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
            Number = input.ReadUInt32();
            break;
          }
          case 18: {
            formFieldIds_.AddEntriesFrom(input, _repeated_formFieldIds_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
