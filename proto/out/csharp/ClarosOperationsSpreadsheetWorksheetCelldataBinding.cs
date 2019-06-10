// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_operations_spreadsheet_worksheet_celldata_binding.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Operations.Spreadsheet {

  /// <summary>Holder for reflection information generated from claros_operations_spreadsheet_worksheet_celldata_binding.proto</summary>
  public static partial class ClarosOperationsSpreadsheetWorksheetCelldataBindingReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_operations_spreadsheet_worksheet_celldata_binding.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosOperationsSpreadsheetWorksheetCelldataBindingReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Cj5jbGFyb3Nfb3BlcmF0aW9uc19zcHJlYWRzaGVldF93b3Jrc2hlZXRfY2Vs",
            "bGRhdGFfYmluZGluZy5wcm90bxIdY2xhcm9zLm9wZXJhdGlvbnMuc3ByZWFk",
            "c2hlZXQaIGNsYXJvc19jb21tb25fZm9ybV9iaW5kaW5nLnByb3RvGidjbGFy",
            "b3NfY29tbW9uX2NvbXB1dGF0aW9uX2JpbmRpbmcucHJvdG8aK2NsYXJvc19p",
            "bnN0cnVtZW50X21lYXN1cmVtZW50X2JpbmRpbmcucHJvdG8aMWNsYXJvc19p",
            "bnN0cnVtZW50X21lYXN1cmVtZW50X2ZpZWxkX2JpbmRpbmcucHJvdG8aK2Ns",
            "YXJvc19vcGVyYXRpb25zX3NwcmVhZHNoZWV0X2JpbmRpbmcucHJvdG8irgMK",
            "D0NlbGxEYXRhQmluZGluZxJXChxpbnN0cnVtZW50TWVhc3VyZW1lbnRCaW5k",
            "aW5nGAcgASgLMi8uY2xhcm9zLmluc3RydW1lbnQuSW5zdHJ1bWVudE1lYXN1",
            "cmVtZW50QmluZGluZ0gAEksKEmNvbXB1dGF0aW9uQmluZGluZxgIIAEoCzIt",
            "LmNsYXJvcy5jb21tb24uY29tcHV0YXRpb24uQ29tcHV0YXRpb25CaW5kaW5n",
            "SAASNgoLZm9ybUJpbmRpbmcYCSABKAsyHy5jbGFyb3MuY29tbW9uLmZvcm0u",
            "Rm9ybUJpbmRpbmdIABJPChJzcHJlYWRzaGVldEJpbmRpbmcYCiABKAsyMS5j",
            "bGFyb3Mub3BlcmF0aW9ucy5zcHJlYWRzaGVldC5TcHJlYWRzaGVldEJpbmRp",
            "bmdIABJhCiFmaWVsZEluc3RydW1lbnRNZWFzdXJlbWVudEJpbmRpbmcYCyAB",
            "KAsyNC5jbGFyb3MuaW5zdHJ1bWVudC5JbnN0cnVtZW50TWVhc3VyZW1lbnRG",
            "aWVsZEJpbmRpbmdIAEIJCgdiaW5kaW5nYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Common.Form.ClarosCommonFormBindingReflection.Descriptor, global::Claros.Common.Computation.ClarosCommonComputationBindingReflection.Descriptor, global::Claros.Instrument.ClarosInstrumentMeasurementBindingReflection.Descriptor, global::Claros.Instrument.ClarosInstrumentMeasurementFieldBindingReflection.Descriptor, global::Claros.Operations.Spreadsheet.ClarosOperationsSpreadsheetBindingReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Operations.Spreadsheet.CellDataBinding), global::Claros.Operations.Spreadsheet.CellDataBinding.Parser, new[]{ "InstrumentMeasurementBinding", "ComputationBinding", "FormBinding", "SpreadsheetBinding", "FieldInstrumentMeasurementBinding" }, new[]{ "Binding" }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class CellDataBinding : pb::IMessage<CellDataBinding> {
    private static readonly pb::MessageParser<CellDataBinding> _parser = new pb::MessageParser<CellDataBinding>(() => new CellDataBinding());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<CellDataBinding> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Operations.Spreadsheet.ClarosOperationsSpreadsheetWorksheetCelldataBindingReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CellDataBinding() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CellDataBinding(CellDataBinding other) : this() {
      switch (other.BindingCase) {
        case BindingOneofCase.InstrumentMeasurementBinding:
          InstrumentMeasurementBinding = other.InstrumentMeasurementBinding.Clone();
          break;
        case BindingOneofCase.ComputationBinding:
          ComputationBinding = other.ComputationBinding.Clone();
          break;
        case BindingOneofCase.FormBinding:
          FormBinding = other.FormBinding.Clone();
          break;
        case BindingOneofCase.SpreadsheetBinding:
          SpreadsheetBinding = other.SpreadsheetBinding.Clone();
          break;
        case BindingOneofCase.FieldInstrumentMeasurementBinding:
          FieldInstrumentMeasurementBinding = other.FieldInstrumentMeasurementBinding.Clone();
          break;
      }

      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public CellDataBinding Clone() {
      return new CellDataBinding(this);
    }

    /// <summary>Field number for the "instrumentMeasurementBinding" field.</summary>
    public const int InstrumentMeasurementBindingFieldNumber = 7;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Instrument.InstrumentMeasurementBinding InstrumentMeasurementBinding {
      get { return bindingCase_ == BindingOneofCase.InstrumentMeasurementBinding ? (global::Claros.Instrument.InstrumentMeasurementBinding) binding_ : null; }
      set {
        binding_ = value;
        bindingCase_ = value == null ? BindingOneofCase.None : BindingOneofCase.InstrumentMeasurementBinding;
      }
    }

    /// <summary>Field number for the "computationBinding" field.</summary>
    public const int ComputationBindingFieldNumber = 8;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Computation.ComputationBinding ComputationBinding {
      get { return bindingCase_ == BindingOneofCase.ComputationBinding ? (global::Claros.Common.Computation.ComputationBinding) binding_ : null; }
      set {
        binding_ = value;
        bindingCase_ = value == null ? BindingOneofCase.None : BindingOneofCase.ComputationBinding;
      }
    }

    /// <summary>Field number for the "formBinding" field.</summary>
    public const int FormBindingFieldNumber = 9;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Form.FormBinding FormBinding {
      get { return bindingCase_ == BindingOneofCase.FormBinding ? (global::Claros.Common.Form.FormBinding) binding_ : null; }
      set {
        binding_ = value;
        bindingCase_ = value == null ? BindingOneofCase.None : BindingOneofCase.FormBinding;
      }
    }

    /// <summary>Field number for the "spreadsheetBinding" field.</summary>
    public const int SpreadsheetBindingFieldNumber = 10;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Operations.Spreadsheet.SpreadsheetBinding SpreadsheetBinding {
      get { return bindingCase_ == BindingOneofCase.SpreadsheetBinding ? (global::Claros.Operations.Spreadsheet.SpreadsheetBinding) binding_ : null; }
      set {
        binding_ = value;
        bindingCase_ = value == null ? BindingOneofCase.None : BindingOneofCase.SpreadsheetBinding;
      }
    }

    /// <summary>Field number for the "fieldInstrumentMeasurementBinding" field.</summary>
    public const int FieldInstrumentMeasurementBindingFieldNumber = 11;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Instrument.InstrumentMeasurementFieldBinding FieldInstrumentMeasurementBinding {
      get { return bindingCase_ == BindingOneofCase.FieldInstrumentMeasurementBinding ? (global::Claros.Instrument.InstrumentMeasurementFieldBinding) binding_ : null; }
      set {
        binding_ = value;
        bindingCase_ = value == null ? BindingOneofCase.None : BindingOneofCase.FieldInstrumentMeasurementBinding;
      }
    }

    private object binding_;
    /// <summary>Enum of possible cases for the "binding" oneof.</summary>
    public enum BindingOneofCase {
      None = 0,
      InstrumentMeasurementBinding = 7,
      ComputationBinding = 8,
      FormBinding = 9,
      SpreadsheetBinding = 10,
      FieldInstrumentMeasurementBinding = 11,
    }
    private BindingOneofCase bindingCase_ = BindingOneofCase.None;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public BindingOneofCase BindingCase {
      get { return bindingCase_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearBinding() {
      bindingCase_ = BindingOneofCase.None;
      binding_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as CellDataBinding);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(CellDataBinding other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(InstrumentMeasurementBinding, other.InstrumentMeasurementBinding)) return false;
      if (!object.Equals(ComputationBinding, other.ComputationBinding)) return false;
      if (!object.Equals(FormBinding, other.FormBinding)) return false;
      if (!object.Equals(SpreadsheetBinding, other.SpreadsheetBinding)) return false;
      if (!object.Equals(FieldInstrumentMeasurementBinding, other.FieldInstrumentMeasurementBinding)) return false;
      if (BindingCase != other.BindingCase) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (bindingCase_ == BindingOneofCase.InstrumentMeasurementBinding) hash ^= InstrumentMeasurementBinding.GetHashCode();
      if (bindingCase_ == BindingOneofCase.ComputationBinding) hash ^= ComputationBinding.GetHashCode();
      if (bindingCase_ == BindingOneofCase.FormBinding) hash ^= FormBinding.GetHashCode();
      if (bindingCase_ == BindingOneofCase.SpreadsheetBinding) hash ^= SpreadsheetBinding.GetHashCode();
      if (bindingCase_ == BindingOneofCase.FieldInstrumentMeasurementBinding) hash ^= FieldInstrumentMeasurementBinding.GetHashCode();
      hash ^= (int) bindingCase_;
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
      if (bindingCase_ == BindingOneofCase.InstrumentMeasurementBinding) {
        output.WriteRawTag(58);
        output.WriteMessage(InstrumentMeasurementBinding);
      }
      if (bindingCase_ == BindingOneofCase.ComputationBinding) {
        output.WriteRawTag(66);
        output.WriteMessage(ComputationBinding);
      }
      if (bindingCase_ == BindingOneofCase.FormBinding) {
        output.WriteRawTag(74);
        output.WriteMessage(FormBinding);
      }
      if (bindingCase_ == BindingOneofCase.SpreadsheetBinding) {
        output.WriteRawTag(82);
        output.WriteMessage(SpreadsheetBinding);
      }
      if (bindingCase_ == BindingOneofCase.FieldInstrumentMeasurementBinding) {
        output.WriteRawTag(90);
        output.WriteMessage(FieldInstrumentMeasurementBinding);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (bindingCase_ == BindingOneofCase.InstrumentMeasurementBinding) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(InstrumentMeasurementBinding);
      }
      if (bindingCase_ == BindingOneofCase.ComputationBinding) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(ComputationBinding);
      }
      if (bindingCase_ == BindingOneofCase.FormBinding) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(FormBinding);
      }
      if (bindingCase_ == BindingOneofCase.SpreadsheetBinding) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(SpreadsheetBinding);
      }
      if (bindingCase_ == BindingOneofCase.FieldInstrumentMeasurementBinding) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(FieldInstrumentMeasurementBinding);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(CellDataBinding other) {
      if (other == null) {
        return;
      }
      switch (other.BindingCase) {
        case BindingOneofCase.InstrumentMeasurementBinding:
          if (InstrumentMeasurementBinding == null) {
            InstrumentMeasurementBinding = new global::Claros.Instrument.InstrumentMeasurementBinding();
          }
          InstrumentMeasurementBinding.MergeFrom(other.InstrumentMeasurementBinding);
          break;
        case BindingOneofCase.ComputationBinding:
          if (ComputationBinding == null) {
            ComputationBinding = new global::Claros.Common.Computation.ComputationBinding();
          }
          ComputationBinding.MergeFrom(other.ComputationBinding);
          break;
        case BindingOneofCase.FormBinding:
          if (FormBinding == null) {
            FormBinding = new global::Claros.Common.Form.FormBinding();
          }
          FormBinding.MergeFrom(other.FormBinding);
          break;
        case BindingOneofCase.SpreadsheetBinding:
          if (SpreadsheetBinding == null) {
            SpreadsheetBinding = new global::Claros.Operations.Spreadsheet.SpreadsheetBinding();
          }
          SpreadsheetBinding.MergeFrom(other.SpreadsheetBinding);
          break;
        case BindingOneofCase.FieldInstrumentMeasurementBinding:
          if (FieldInstrumentMeasurementBinding == null) {
            FieldInstrumentMeasurementBinding = new global::Claros.Instrument.InstrumentMeasurementFieldBinding();
          }
          FieldInstrumentMeasurementBinding.MergeFrom(other.FieldInstrumentMeasurementBinding);
          break;
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
          case 58: {
            global::Claros.Instrument.InstrumentMeasurementBinding subBuilder = new global::Claros.Instrument.InstrumentMeasurementBinding();
            if (bindingCase_ == BindingOneofCase.InstrumentMeasurementBinding) {
              subBuilder.MergeFrom(InstrumentMeasurementBinding);
            }
            input.ReadMessage(subBuilder);
            InstrumentMeasurementBinding = subBuilder;
            break;
          }
          case 66: {
            global::Claros.Common.Computation.ComputationBinding subBuilder = new global::Claros.Common.Computation.ComputationBinding();
            if (bindingCase_ == BindingOneofCase.ComputationBinding) {
              subBuilder.MergeFrom(ComputationBinding);
            }
            input.ReadMessage(subBuilder);
            ComputationBinding = subBuilder;
            break;
          }
          case 74: {
            global::Claros.Common.Form.FormBinding subBuilder = new global::Claros.Common.Form.FormBinding();
            if (bindingCase_ == BindingOneofCase.FormBinding) {
              subBuilder.MergeFrom(FormBinding);
            }
            input.ReadMessage(subBuilder);
            FormBinding = subBuilder;
            break;
          }
          case 82: {
            global::Claros.Operations.Spreadsheet.SpreadsheetBinding subBuilder = new global::Claros.Operations.Spreadsheet.SpreadsheetBinding();
            if (bindingCase_ == BindingOneofCase.SpreadsheetBinding) {
              subBuilder.MergeFrom(SpreadsheetBinding);
            }
            input.ReadMessage(subBuilder);
            SpreadsheetBinding = subBuilder;
            break;
          }
          case 90: {
            global::Claros.Instrument.InstrumentMeasurementFieldBinding subBuilder = new global::Claros.Instrument.InstrumentMeasurementFieldBinding();
            if (bindingCase_ == BindingOneofCase.FieldInstrumentMeasurementBinding) {
              subBuilder.MergeFrom(FieldInstrumentMeasurementBinding);
            }
            input.ReadMessage(subBuilder);
            FieldInstrumentMeasurementBinding = subBuilder;
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
