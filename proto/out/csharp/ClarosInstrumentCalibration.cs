// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_instrument_calibration.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Instrument {

  /// <summary>Holder for reflection information generated from claros_instrument_calibration.proto</summary>
  public static partial class ClarosInstrumentCalibrationReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_instrument_calibration.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosInstrumentCalibrationReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CiNjbGFyb3NfaW5zdHJ1bWVudF9jYWxpYnJhdGlvbi5wcm90bxIRY2xhcm9z",
            "Lmluc3RydW1lbnQaLGNsYXJvc19pbnN0cnVtZW50X2NhbGlicmF0aW9uX3N0",
            "YW5kYXJkLnByb3RvIvMBCgtDYWxpYnJhdGlvbhIKCgJJRBgBIAEoCRIOCgZ1",
            "c2VySUQYAiABKAkSDAoEdGltZRgDIAEoBBIOCgZzdGF0dXMYBCABKA0SEwoL",
            "b2Zmc2V0VW5pdHMYBSABKA0SEgoKc2xvcGVVbml0cxgGIAEoDRINCgVzbG9w",
            "ZRgHIAEoAhIQCghzbG9wZUF1eBgIIAEoAhIOCgZvZmZzZXQYCSABKAISCgoC",
            "cjIYCiABKAISRAoUY2FsaWJyYXRpb25TdGFuZGFyZHMYCyADKAsyJi5jbGFy",
            "b3MuaW5zdHJ1bWVudC5DYWxpYnJhdGlvblN0YW5kYXJkYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { global::Claros.Instrument.ClarosInstrumentCalibrationStandardReflection.Descriptor, },
          new pbr::GeneratedClrTypeInfo(null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Claros.Instrument.Calibration), global::Claros.Instrument.Calibration.Parser, new[]{ "ID", "UserID", "Time", "Status", "OffsetUnits", "SlopeUnits", "Slope", "SlopeAux", "Offset", "R2", "CalibrationStandards" }, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class Calibration : pb::IMessage<Calibration> {
    private static readonly pb::MessageParser<Calibration> _parser = new pb::MessageParser<Calibration>(() => new Calibration());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Calibration> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Claros.Instrument.ClarosInstrumentCalibrationReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Calibration() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Calibration(Calibration other) : this() {
      iD_ = other.iD_;
      userID_ = other.userID_;
      time_ = other.time_;
      status_ = other.status_;
      offsetUnits_ = other.offsetUnits_;
      slopeUnits_ = other.slopeUnits_;
      slope_ = other.slope_;
      slopeAux_ = other.slopeAux_;
      offset_ = other.offset_;
      r2_ = other.r2_;
      calibrationStandards_ = other.calibrationStandards_.Clone();
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Calibration Clone() {
      return new Calibration(this);
    }

    /// <summary>Field number for the "ID" field.</summary>
    public const int IDFieldNumber = 1;
    private string iD_ = "";
    /// <summary>
    /// unique identifier of the calibration.  Could be a hash.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ID {
      get { return iD_; }
      set {
        iD_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "userID" field.</summary>
    public const int UserIDFieldNumber = 2;
    private string userID_ = "";
    /// <summary>
    /// User who performed the calibration
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string UserID {
      get { return userID_; }
      set {
        userID_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }

    /// <summary>Field number for the "time" field.</summary>
    public const int TimeFieldNumber = 3;
    private ulong time_;
    /// <summary>
    /// Calibration Time
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public ulong Time {
      get { return time_; }
      set {
        time_ = value;
      }
    }

    /// <summary>Field number for the "status" field.</summary>
    public const int StatusFieldNumber = 4;
    private uint status_;
    /// <summary>
    /// Status enumeration specific to the device
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint Status {
      get { return status_; }
      set {
        status_ = value;
      }
    }

    /// <summary>Field number for the "offsetUnits" field.</summary>
    public const int OffsetUnitsFieldNumber = 5;
    private uint offsetUnits_;
    /// <summary>
    /// Unit for the calibration
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint OffsetUnits {
      get { return offsetUnits_; }
      set {
        offsetUnits_ = value;
      }
    }

    /// <summary>Field number for the "slopeUnits" field.</summary>
    public const int SlopeUnitsFieldNumber = 6;
    private uint slopeUnits_;
    /// <summary>
    /// Unit for the slope
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public uint SlopeUnits {
      get { return slopeUnits_; }
      set {
        slopeUnits_ = value;
      }
    }

    /// <summary>Field number for the "slope" field.</summary>
    public const int SlopeFieldNumber = 7;
    private float slope_;
    /// <summary>
    /// Slope of the Calibration
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float Slope {
      get { return slope_; }
      set {
        slope_ = value;
      }
    }

    /// <summary>Field number for the "slopeAux" field.</summary>
    public const int SlopeAuxFieldNumber = 8;
    private float slopeAux_;
    /// <summary>
    /// Auxiliary way of displaying slope.  Used by pH to give the percent of the nominal slope    
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float SlopeAux {
      get { return slopeAux_; }
      set {
        slopeAux_ = value;
      }
    }

    /// <summary>Field number for the "offset" field.</summary>
    public const int OffsetFieldNumber = 9;
    private float offset_;
    /// <summary>
    /// offset of the calibration curve
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float Offset {
      get { return offset_; }
      set {
        offset_ = value;
      }
    }

    /// <summary>Field number for the "r2" field.</summary>
    public const int R2FieldNumber = 10;
    private float r2_;
    /// <summary>
    /// r-squared of the calibration curve
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public float R2 {
      get { return r2_; }
      set {
        r2_ = value;
      }
    }

    /// <summary>Field number for the "calibrationStandards" field.</summary>
    public const int CalibrationStandardsFieldNumber = 11;
    private static readonly pb::FieldCodec<global::Claros.Instrument.CalibrationStandard> _repeated_calibrationStandards_codec
        = pb::FieldCodec.ForMessage(90, global::Claros.Instrument.CalibrationStandard.Parser);
    private readonly pbc::RepeatedField<global::Claros.Instrument.CalibrationStandard> calibrationStandards_ = new pbc::RepeatedField<global::Claros.Instrument.CalibrationStandard>();
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pbc::RepeatedField<global::Claros.Instrument.CalibrationStandard> CalibrationStandards {
      get { return calibrationStandards_; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Calibration);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Calibration other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ID != other.ID) return false;
      if (UserID != other.UserID) return false;
      if (Time != other.Time) return false;
      if (Status != other.Status) return false;
      if (OffsetUnits != other.OffsetUnits) return false;
      if (SlopeUnits != other.SlopeUnits) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(Slope, other.Slope)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(SlopeAux, other.SlopeAux)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(Offset, other.Offset)) return false;
      if (!pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.Equals(R2, other.R2)) return false;
      if(!calibrationStandards_.Equals(other.calibrationStandards_)) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (ID.Length != 0) hash ^= ID.GetHashCode();
      if (UserID.Length != 0) hash ^= UserID.GetHashCode();
      if (Time != 0UL) hash ^= Time.GetHashCode();
      if (Status != 0) hash ^= Status.GetHashCode();
      if (OffsetUnits != 0) hash ^= OffsetUnits.GetHashCode();
      if (SlopeUnits != 0) hash ^= SlopeUnits.GetHashCode();
      if (Slope != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(Slope);
      if (SlopeAux != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(SlopeAux);
      if (Offset != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(Offset);
      if (R2 != 0F) hash ^= pbc::ProtobufEqualityComparers.BitwiseSingleEqualityComparer.GetHashCode(R2);
      hash ^= calibrationStandards_.GetHashCode();
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
      if (ID.Length != 0) {
        output.WriteRawTag(10);
        output.WriteString(ID);
      }
      if (UserID.Length != 0) {
        output.WriteRawTag(18);
        output.WriteString(UserID);
      }
      if (Time != 0UL) {
        output.WriteRawTag(24);
        output.WriteUInt64(Time);
      }
      if (Status != 0) {
        output.WriteRawTag(32);
        output.WriteUInt32(Status);
      }
      if (OffsetUnits != 0) {
        output.WriteRawTag(40);
        output.WriteUInt32(OffsetUnits);
      }
      if (SlopeUnits != 0) {
        output.WriteRawTag(48);
        output.WriteUInt32(SlopeUnits);
      }
      if (Slope != 0F) {
        output.WriteRawTag(61);
        output.WriteFloat(Slope);
      }
      if (SlopeAux != 0F) {
        output.WriteRawTag(69);
        output.WriteFloat(SlopeAux);
      }
      if (Offset != 0F) {
        output.WriteRawTag(77);
        output.WriteFloat(Offset);
      }
      if (R2 != 0F) {
        output.WriteRawTag(85);
        output.WriteFloat(R2);
      }
      calibrationStandards_.WriteTo(output, _repeated_calibrationStandards_codec);
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (ID.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ID);
      }
      if (UserID.Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(UserID);
      }
      if (Time != 0UL) {
        size += 1 + pb::CodedOutputStream.ComputeUInt64Size(Time);
      }
      if (Status != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(Status);
      }
      if (OffsetUnits != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(OffsetUnits);
      }
      if (SlopeUnits != 0) {
        size += 1 + pb::CodedOutputStream.ComputeUInt32Size(SlopeUnits);
      }
      if (Slope != 0F) {
        size += 1 + 4;
      }
      if (SlopeAux != 0F) {
        size += 1 + 4;
      }
      if (Offset != 0F) {
        size += 1 + 4;
      }
      if (R2 != 0F) {
        size += 1 + 4;
      }
      size += calibrationStandards_.CalculateSize(_repeated_calibrationStandards_codec);
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Calibration other) {
      if (other == null) {
        return;
      }
      if (other.ID.Length != 0) {
        ID = other.ID;
      }
      if (other.UserID.Length != 0) {
        UserID = other.UserID;
      }
      if (other.Time != 0UL) {
        Time = other.Time;
      }
      if (other.Status != 0) {
        Status = other.Status;
      }
      if (other.OffsetUnits != 0) {
        OffsetUnits = other.OffsetUnits;
      }
      if (other.SlopeUnits != 0) {
        SlopeUnits = other.SlopeUnits;
      }
      if (other.Slope != 0F) {
        Slope = other.Slope;
      }
      if (other.SlopeAux != 0F) {
        SlopeAux = other.SlopeAux;
      }
      if (other.Offset != 0F) {
        Offset = other.Offset;
      }
      if (other.R2 != 0F) {
        R2 = other.R2;
      }
      calibrationStandards_.Add(other.calibrationStandards_);
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
            ID = input.ReadString();
            break;
          }
          case 18: {
            UserID = input.ReadString();
            break;
          }
          case 24: {
            Time = input.ReadUInt64();
            break;
          }
          case 32: {
            Status = input.ReadUInt32();
            break;
          }
          case 40: {
            OffsetUnits = input.ReadUInt32();
            break;
          }
          case 48: {
            SlopeUnits = input.ReadUInt32();
            break;
          }
          case 61: {
            Slope = input.ReadFloat();
            break;
          }
          case 69: {
            SlopeAux = input.ReadFloat();
            break;
          }
          case 77: {
            Offset = input.ReadFloat();
            break;
          }
          case 85: {
            R2 = input.ReadFloat();
            break;
          }
          case 90: {
            calibrationStandards_.AddEntriesFrom(input, _repeated_calibrationStandards_codec);
            break;
          }
        }
      }
    }

  }

  #endregion

}

#endregion Designer generated code
