// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_instrument_event.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Instrument {

  /// <summary>Holder for reflection information generated from claros_instrument_event.proto</summary>
  public static partial class ClarosInstrumentEventReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_instrument_event.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosInstrumentEventReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch1jbGFyb3NfaW5zdHJ1bWVudF9ldmVudC5wcm90bxIRY2xhcm9zLmluc3Ry",
            "dW1lbnQaJ2NsYXJvc19jb21tb25fY29yZV9jbGFyb3NkYXRldGltZS5wcm90",
            "bxomY2xhcm9zX2luc3RydW1lbnRfZXZlbnRfbWV0YWRhdGEucHJvdG8aI2Ns",
            "YXJvc19pbnN0cnVtZW50X2NhbGlicmF0aW9uLnByb3RvGiFjbGFyb3NfaW5z",
            "dHJ1bWVudF9wcm9nbm9zeXMucHJvdG8itAMKD0luc3RydW1lbnRFdmVudBI0",
            "CgxjYWxpYnJhdGlvbnMYASADKAsyHi5jbGFyb3MuaW5zdHJ1bWVudC5DYWxp",
            "YnJhdGlvbhIwCgZlcnJvcnMYAiADKAsyIC5jbGFyb3MuaW5zdHJ1bWVudC5F",
            "dmVudE1ldGFEYXRhEi4KBGluZm8YAyADKAsyIC5jbGFyb3MuaW5zdHJ1bWVu",
            "dC5FdmVudE1ldGFEYXRhEjAKBmxpbWl0cxgEIAMoCzIgLmNsYXJvcy5pbnN0",
            "cnVtZW50LkV2ZW50TWV0YURhdGESMwoJcmVtaW5kZXJzGAUgAygLMiAuY2xh",
            "cm9zLmluc3RydW1lbnQuRXZlbnRNZXRhRGF0YRIyCgh3YXJuaW5ncxgGIAMo",
            "CzIgLmNsYXJvcy5pbnN0cnVtZW50LkV2ZW50TWV0YURhdGESMwoJcHJvZ25v",
            "c3lzGAcgAygLMiAuY2xhcm9zLmluc3RydW1lbnQuUHJvZ25vc3lzRGF0YRI5",
            "Cg1ldmVudERhdGVUaW1lGAggASgLMiIuY2xhcm9zLmNvbW1vbi5jb3JlLkNs",
            "YXJvc0RhdGVUaW1lYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Common.Core.ClarosCommonCoreClarosdatetimeReflection.Descriptor, global::Claros.Instrument.ClarosInstrumentEventMetadataReflection.Descriptor, global::Claros.Instrument.ClarosInstrumentCalibrationReflection.Descriptor, global::Claros.Instrument.ClarosInstrumentPrognosysReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Instrument.InstrumentEvent), global::Claros.Instrument.InstrumentEvent.Parser, new[]{ "Calibrations", "Errors", "Info", "Limits", "Reminders", "Warnings", "Prognosys", "EventDateTime" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class InstrumentEvent : pb::IMessage<InstrumentEvent> {
    private static readonly pb::MessageParser<InstrumentEvent> _parser = new pb::MessageParser<InstrumentEvent>(() => new InstrumentEvent());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<InstrumentEvent> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Instrument.ClarosInstrumentEventReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public InstrumentEvent() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public InstrumentEvent(InstrumentEvent other) : this() {
      calibrations_ = other.calibrations_.Clone();
      errors_ = other.errors_.Clone();
      info_ = other.info_.Clone();
      limits_ = other.limits_.Clone();
      reminders_ = other.reminders_.Clone();
      warnings_ = other.warnings_.Clone();
      prognosys_ = other.prognosys_.Clone();
      eventDateTime_ = other.eventDateTime_ != null ? other.eventDateTime_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public InstrumentEvent Clone() {
      return new InstrumentEvent(this);
    }

    /// <summary>Field number for the "calibrations" field.</summary>
    public const int CalibrationsFieldNumber = 1;
    private static readonly pb::FieldCodec<global::Claros.Instrument.Calibration> _repeated_calibrations_codec
        = pb::FieldCodec.ForMessage(10, global::Claros.Instrument.Calibration.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.Calibration> calibrations_ = new pbc::RepeatedField<global::Claros.Instrument.Calibration>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.Calibration> Calibrations {
      get { return calibrations_; }
    }

    /// <summary>Field number for the "errors" field.</summary>
    public const int ErrorsFieldNumber = 2;
    private static readonly pb::FieldCodec<global::Claros.Instrument.EventMetaData> _repeated_errors_codec
        = pb::FieldCodec.ForMessage(18, global::Claros.Instrument.EventMetaData.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.EventMetaData> errors_ = new pbc::RepeatedField<global::Claros.Instrument.EventMetaData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.EventMetaData> Errors {
      get { return errors_; }
    }

    /// <summary>Field number for the "info" field.</summary>
    public const int InfoFieldNumber = 3;
    private static readonly pb::FieldCodec<global::Claros.Instrument.EventMetaData> _repeated_info_codec
        = pb::FieldCodec.ForMessage(26, global::Claros.Instrument.EventMetaData.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.EventMetaData> info_ = new pbc::RepeatedField<global::Claros.Instrument.EventMetaData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.EventMetaData> Info {
      get { return info_; }
    }

    /// <summary>Field number for the "limits" field.</summary>
    public const int LimitsFieldNumber = 4;
    private static readonly pb::FieldCodec<global::Claros.Instrument.EventMetaData> _repeated_limits_codec
        = pb::FieldCodec.ForMessage(34, global::Claros.Instrument.EventMetaData.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.EventMetaData> limits_ = new pbc::RepeatedField<global::Claros.Instrument.EventMetaData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.EventMetaData> Limits {
      get { return limits_; }
    }

    /// <summary>Field number for the "reminders" field.</summary>
    public const int RemindersFieldNumber = 5;
    private static readonly pb::FieldCodec<global::Claros.Instrument.EventMetaData> _repeated_reminders_codec
        = pb::FieldCodec.ForMessage(42, global::Claros.Instrument.EventMetaData.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.EventMetaData> reminders_ = new pbc::RepeatedField<global::Claros.Instrument.EventMetaData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.EventMetaData> Reminders {
      get { return reminders_; }
    }

    /// <summary>Field number for the "warnings" field.</summary>
    public const int WarningsFieldNumber = 6;
    private static readonly pb::FieldCodec<global::Claros.Instrument.EventMetaData> _repeated_warnings_codec
        = pb::FieldCodec.ForMessage(50, global::Claros.Instrument.EventMetaData.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.EventMetaData> warnings_ = new pbc::RepeatedField<global::Claros.Instrument.EventMetaData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.EventMetaData> Warnings {
      get { return warnings_; }
    }

    /// <summary>Field number for the "prognosys" field.</summary>
    public const int PrognosysFieldNumber = 7;
    private static readonly pb::FieldCodec<global::Claros.Instrument.PrognosysData> _repeated_prognosys_codec
        = pb::FieldCodec.ForMessage(58, global::Claros.Instrument.PrognosysData.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.PrognosysData> prognosys_ = new pbc::RepeatedField<global::Claros.Instrument.PrognosysData>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.PrognosysData> Prognosys {
      get { return prognosys_; }
    }

    /// <summary>Field number for the "eventDateTime" field.</summary>
    public const int EventDateTimeFieldNumber = 8;
    private global::Claros.Common.Core.ClarosDateTime eventDateTime_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.ClarosDateTime EventDateTime {
      get { return eventDateTime_; }
      set {
        eventDateTime_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as InstrumentEvent);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(InstrumentEvent other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if(!calibrations_.Equals(other.calibrations_)) return false;
      if(!errors_.Equals(other.errors_)) return false;
      if(!info_.Equals(other.info_)) return false;
      if(!limits_.Equals(other.limits_)) return false;
      if(!reminders_.Equals(other.reminders_)) return false;
      if(!warnings_.Equals(other.warnings_)) return false;
      if(!prognosys_.Equals(other.prognosys_)) return false;
      if (!object.Equals(EventDateTime, other.EventDateTime)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      hash ^= calibrations_.GetHashCode();
      hash ^= errors_.GetHashCode();
      hash ^= info_.GetHashCode();
      hash ^= limits_.GetHashCode();
      hash ^= reminders_.GetHashCode();
      hash ^= warnings_.GetHashCode();
      hash ^= prognosys_.GetHashCode();
      if (eventDateTime_ != null) hash ^= EventDateTime.GetHashCode();
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
      calibrations_.WriteTo(output, _repeated_calibrations_codec);
      errors_.WriteTo(output, _repeated_errors_codec);
      info_.WriteTo(output, _repeated_info_codec);
      limits_.WriteTo(output, _repeated_limits_codec);
      reminders_.WriteTo(output, _repeated_reminders_codec);
      warnings_.WriteTo(output, _repeated_warnings_codec);
      prognosys_.WriteTo(output, _repeated_prognosys_codec);
      if (eventDateTime_ != null) {
        output.WriteRawTag(66);
        output.WriteMessage(EventDateTime);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      size += calibrations_.CalculateSize(_repeated_calibrations_codec);
      size += errors_.CalculateSize(_repeated_errors_codec);
      size += info_.CalculateSize(_repeated_info_codec);
      size += limits_.CalculateSize(_repeated_limits_codec);
      size += reminders_.CalculateSize(_repeated_reminders_codec);
      size += warnings_.CalculateSize(_repeated_warnings_codec);
      size += prognosys_.CalculateSize(_repeated_prognosys_codec);
      if (eventDateTime_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(EventDateTime);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(InstrumentEvent other) {
      if (other == null) {
        return;
      }
      calibrations_.Add(other.calibrations_);
      errors_.Add(other.errors_);
      info_.Add(other.info_);
      limits_.Add(other.limits_);
      reminders_.Add(other.reminders_);
      warnings_.Add(other.warnings_);
      prognosys_.Add(other.prognosys_);
      if (other.eventDateTime_ != null) {
        if (eventDateTime_ == null) {
          EventDateTime = new global::Claros.Common.Core.ClarosDateTime();
        }
        EventDateTime.MergeFrom(other.EventDateTime);
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
            calibrations_.AddEntriesFrom(input, _repeated_calibrations_codec);
            break;
          }
          case 18: {
            errors_.AddEntriesFrom(input, _repeated_errors_codec);
            break;
          }
          case 26: {
            info_.AddEntriesFrom(input, _repeated_info_codec);
            break;
          }
          case 34: {
            limits_.AddEntriesFrom(input, _repeated_limits_codec);
            break;
          }
          case 42: {
            reminders_.AddEntriesFrom(input, _repeated_reminders_codec);
            break;
          }
          case 50: {
            warnings_.AddEntriesFrom(input, _repeated_warnings_codec);
            break;
          }
          case 58: {
            prognosys_.AddEntriesFrom(input, _repeated_prognosys_codec);
            break;
          }
          case 66: {
            if (eventDateTime_ == null) {
              EventDateTime = new global::Claros.Common.Core.ClarosDateTime();
            }
            input.ReadMessage(EventDateTime);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
