// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: claros_operations_spreadsheet_timedefinition.proto

#pragma warning disable CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace claros.instrument.spreadsheet
{

    [global::ProtoBuf.ProtoContract()]
    public partial class SpreadsheetTimeDefinition : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, Name = @"timewindow")]
        public global::claros.common.TimeWindow Timewindow { get; set; }

        [global::ProtoBuf.ProtoMember(2, Name = @"timezone")]
        public global::claros.common.TimeZone Timezone { get; set; }

        [global::ProtoBuf.ProtoMember(3)]
        public uint timeWindowOffset { get; set; }

    }

}

#pragma warning restore CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
