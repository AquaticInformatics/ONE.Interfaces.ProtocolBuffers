// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: claros_instrument_limit_data.proto

#pragma warning disable CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace claros.instrument
{

    [global::ProtoBuf.ProtoContract()]
    public partial class LimitData : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, Name = @"limits")]
        public global::System.Collections.Generic.List<Limit> Limits { get; } = new global::System.Collections.Generic.List<Limit>();

        [global::ProtoBuf.ProtoContract()]
        public partial class Limit : global::ProtoBuf.IExtensible
        {
            private global::ProtoBuf.IExtension __pbn__extensionData;
            global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
                => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

            [global::ProtoBuf.ProtoMember(1, Name = @"severity")]
            public uint Severity { get; set; }

            [global::ProtoBuf.ProtoMember(2, Name = @"polarity")]
            public uint Polarity { get; set; }

            [global::ProtoBuf.ProtoMember(3)]
            [global::System.ComponentModel.DefaultValue("")]
            public string i18nKey { get; set; } = "";

        }

    }

}

#pragma warning restore CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192