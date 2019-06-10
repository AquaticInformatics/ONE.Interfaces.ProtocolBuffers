// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_instrument_data.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Instrument {

  /// <summary>Holder for reflection information generated from claros_instrument_data.proto</summary>
  public static partial class ClarosInstrumentDataReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_instrument_data.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosInstrumentDataReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "ChxjbGFyb3NfaW5zdHJ1bWVudF9kYXRhLnByb3RvEhFjbGFyb3MuaW5zdHJ1",
            "bWVudBodY2xhcm9zX2luc3RydW1lbnRfZXZlbnQucHJvdG8aI2NsYXJvc19p",
            "bnN0cnVtZW50X21lYXN1cmVtZW50LnByb3RvGidjbGFyb3NfY29tbW9uX2Nv",
            "cmVfY2xhcm9zZGF0ZXRpbWUucHJvdG8izgMKDkluc3RydW1lbnREYXRhEhAK",
            "CHRlbmFudElkGAEgASgJEhAKCGZ1c2lvbklkGAIgASgJEjIKBmV2ZW50cxgD",
            "IAEoCzIiLmNsYXJvcy5pbnN0cnVtZW50Lkluc3RydW1lbnRFdmVudBI+Cgxt",
            "ZWFzdXJlbWVudHMYBCADKAsyKC5jbGFyb3MuaW5zdHJ1bWVudC5JbnN0cnVt",
            "ZW50TWVhc3VyZW1lbnQSQQoIc2V0dGluZ3MYBSADKAsyLy5jbGFyb3MuaW5z",
            "dHJ1bWVudC5JbnN0cnVtZW50RGF0YS5TZXR0aW5nc0VudHJ5Ej0KBnN0YXRl",
            "cxgGIAMoCzItLmNsYXJvcy5pbnN0cnVtZW50Lkluc3RydW1lbnREYXRhLlN0",
            "YXRlc0VudHJ5EkIKFmluc3RydW1lbnREYXRhRGF0ZVRpbWUYByABKAsyIi5j",
            "bGFyb3MuY29tbW9uLmNvcmUuQ2xhcm9zRGF0ZVRpbWUaLwoNU2V0dGluZ3NF",
            "bnRyeRILCgNrZXkYASABKAkSDQoFdmFsdWUYAiABKAk6AjgBGi0KC1N0YXRl",
            "c0VudHJ5EgsKA2tleRgBIAEoCRINCgV2YWx1ZRgCIAEoCToCOAFiBnByb3Rv",
            "Mw=="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Instrument.ClarosInstrumentEventReflection.Descriptor, global::Claros.Instrument.ClarosInstrumentMeasurementReflection.Descriptor, global::Claros.Common.Core.ClarosCommonCoreClarosdatetimeReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Instrument.InstrumentData), global::Claros.Instrument.InstrumentData.Parser, new[]{ "TenantId", "FusionId", "Events", "Measurements", "Settings", "States", "InstrumentDataDateTime" }, null, null, new pbr::GeneratedClrTypeInfo[] { null, null, })
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class InstrumentData : pb::IMessage<InstrumentData> {
    private static readonly pb::MessageParser<InstrumentData> _parser = new pb::MessageParser<InstrumentData>(() => new InstrumentData());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<InstrumentData> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Instrument.ClarosInstrumentDataReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public InstrumentData() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public InstrumentData(InstrumentData other) : this() {
      tenantId_ = other.tenantId_;
      fusionId_ = other.fusionId_;
      events_ = other.events_ != null ? other.events_.Clone() : null;
      measurements_ = other.measurements_.Clone();
      settings_ = other.settings_.Clone();
      states_ = other.states_.Clone();
      instrumentDataDateTime_ = other.instrumentDataDateTime_ != null ? other.instrumentDataDateTime_.Clone() : null;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public InstrumentData Clone() {
      return new InstrumentData(this);
    }

    /// <summary>Field number for the "tenantId" field.</summary>
    public const int TenantIdFieldNumber = 1;
    private string tenantId_ = "";
    /// <summary>
    /// In header
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string TenantId {
      get { return tenantId_; }
      set {
        tenantId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "fusionId" field.</summary>
    public const int FusionIdFieldNumber = 2;
    private string fusionId_ = "";
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string FusionId {
      get { return fusionId_; }
      set {
        fusionId_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "events" field.</summary>
    public const int EventsFieldNumber = 3;
    private global::Claros.Instrument.InstrumentEvent events_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Instrument.InstrumentEvent Events {
      get { return events_; }
      set {
        events_ = value;
      }
    }

    /// <summary>Field number for the "measurements" field.</summary>
    public const int MeasurementsFieldNumber = 4;
    private static readonly pb::FieldCodec<global::Claros.Instrument.InstrumentMeasurement> _repeated_measurements_codec
        = pb::FieldCodec.ForMessage(34, global::Claros.Instrument.InstrumentMeasurement.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.InstrumentMeasurement> measurements_ = new pbc::RepeatedField<global::Claros.Instrument.InstrumentMeasurement>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.InstrumentMeasurement> Measurements {
      get { return measurements_; }
    }

    /// <summary>Field number for the "settings" field.</summary>
    public const int SettingsFieldNumber = 5;
    private static readonly pbc::MapField<string, string>.Codec _map_settings_codec
        = new pbc::MapField<string, string>.Codec(pb::FieldCodec.ForString(10), pb::FieldCodec.ForString(18), 42);
    private readonly pbc::MapField<string, string> settings_ = new pbc::MapField<string, string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, string> Settings {
      get { return settings_; }
    }

    /// <summary>Field number for the "states" field.</summary>
    public const int StatesFieldNumber = 6;
    private static readonly pbc::MapField<string, string>.Codec _map_states_codec
        = new pbc::MapField<string, string>.Codec(pb::FieldCodec.ForString(10), pb::FieldCodec.ForString(18), 50);
    private readonly pbc::MapField<string, string> states_ = new pbc::MapField<string, string>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::MapField<string, string> States {
      get { return states_; }
    }

    /// <summary>Field number for the "instrumentDataDateTime" field.</summary>
    public const int InstrumentDataDateTimeFieldNumber = 7;
    private global::Claros.Common.Core.ClarosDateTime instrumentDataDateTime_;
    /// <summary>
    /// this is optionally set if all children share the same time
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Claros.Common.Core.ClarosDateTime InstrumentDataDateTime {
      get { return instrumentDataDateTime_; }
      set {
        instrumentDataDateTime_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as InstrumentData);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(InstrumentData other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (TenantId != other.TenantId) return false;
      if (FusionId != other.FusionId) return false;
      if (!object.Equals(Events, other.Events)) return false;
      if(!measurements_.Equals(other.measurements_)) return false;
      if (!Settings.Equals(other.Settings)) return false;
      if (!States.Equals(other.States)) return false;
      if (!object.Equals(InstrumentDataDateTime, other.InstrumentDataDateTime)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (TenantId.Length != 0) hash ^= TenantId.GetHashCode();
      if (FusionId.Length != 0) hash ^= FusionId.GetHashCode();
      if (events_ != null) hash ^= Events.GetHashCode();
      hash ^= measurements_.GetHashCode();
      hash ^= Settings.GetHashCode();
      hash ^= States.GetHashCode();
      if (instrumentDataDateTime_ != null) hash ^= InstrumentDataDateTime.GetHashCode();
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
      if (TenantId.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(TenantId);
      }
      if (FusionId.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(FusionId);
      }
      if (events_ != null) {
        output.WriteRawTag(26);
        output.WriteMessage(Events);
      }
      measurements_.WriteTo(output, _repeated_measurements_codec);
      settings_.WriteTo(output, _map_settings_codec);
      states_.WriteTo(output, _map_states_codec);
      if (instrumentDataDateTime_ != null) {
        output.WriteRawTag(58);
        output.WriteMessage(InstrumentDataDateTime);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (TenantId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(TenantId);
      }
      if (FusionId.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(FusionId);
      }
      if (events_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(Events);
      }
      size += measurements_.CalculateSize(_repeated_measurements_codec);
      size += settings_.CalculateSize(_map_settings_codec);
      size += states_.CalculateSize(_map_states_codec);
      if (instrumentDataDateTime_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(InstrumentDataDateTime);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(InstrumentData other) {
      if (other == null) {
        return;
      }
      if (other.TenantId.Length != 0) {
        TenantId = other.TenantId;
      }
      if (other.FusionId.Length != 0) {
        FusionId = other.FusionId;
      }
      if (other.events_ != null) {
        if (events_ == null) {
          Events = new global::Claros.Instrument.InstrumentEvent();
        }
        Events.MergeFrom(other.Events);
      }
      measurements_.Add(other.measurements_);
      settings_.Add(other.settings_);
      states_.Add(other.states_);
      if (other.instrumentDataDateTime_ != null) {
        if (instrumentDataDateTime_ == null) {
          InstrumentDataDateTime = new global::Claros.Common.Core.ClarosDateTime();
        }
        InstrumentDataDateTime.MergeFrom(other.InstrumentDataDateTime);
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
            TenantId = input.ReadString();
            break;
          }
          case 18: {
            FusionId = input.ReadString();
            break;
          }
          case 26: {
            if (events_ == null) {
              Events = new global::Claros.Instrument.InstrumentEvent();
            }
            input.ReadMessage(Events);
            break;
          }
          case 34: {
            measurements_.AddEntriesFrom(input, _repeated_measurements_codec);
            break;
          }
          case 42: {
            settings_.AddEntriesFrom(input, _map_settings_codec);
            break;
          }
          case 50: {
            states_.AddEntriesFrom(input, _map_states_codec);
            break;
          }
          case 58: {
            if (instrumentDataDateTime_ == null) {
              InstrumentDataDateTime = new global::Claros.Common.Core.ClarosDateTime();
            }
            input.ReadMessage(InstrumentDataDateTime);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
