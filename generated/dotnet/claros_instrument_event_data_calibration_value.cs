// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: claros_instrument_event_data_calibration_value.proto

#pragma warning disable CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace claros.instrument.event
{

    [global::ProtoBuf.ProtoContract()]
    public partial class EventDataCalibrationValue : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, Name = @"value")]
        public float Value { get; set; }

        [global::ProtoBuf.ProtoMember(2, Name = @"unit")]
        public uint Unit { get; set; }

        [global::ProtoBuf.ProtoMember(3)]
        public uint chemicalForm { get; set; }

    }

}

#pragma warning restore CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
