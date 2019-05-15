// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: claros_common_configuration.proto

#pragma warning disable CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace claros.common.configuration
{

    [global::ProtoBuf.ProtoContract()]
    public partial class Configuration : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, Name = @"id")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Id { get; set; } = "";

        [global::ProtoBuf.ProtoMember(2)]
        [global::System.ComponentModel.DefaultValue("")]
        public string createdById { get; set; } = "";

        [global::ProtoBuf.ProtoMember(3)]
        public global::Claros.Common.DateTime createdOn { get; set; }

        [global::ProtoBuf.ProtoMember(4)]
        [global::System.ComponentModel.DefaultValue("")]
        public string modifiedById { get; set; } = "";

        [global::ProtoBuf.ProtoMember(5)]
        public global::Claros.Common.DateTime modifiedOn { get; set; }

        [global::ProtoBuf.ProtoMember(6)]
        [global::System.ComponentModel.DefaultValue("")]
        public string configurationData { get; set; } = "";

        [global::ProtoBuf.ProtoMember(7)]
        public EntityType entityTypeId { get; set; }

        [global::ProtoBuf.ProtoMember(8)]
        [global::System.ComponentModel.DefaultValue("")]
        public string filterById { get; set; } = "";

        [global::ProtoBuf.ProtoMember(9)]
        [global::System.ComponentModel.DefaultValue("")]
        public string tenantId { get; set; } = "";

        [global::ProtoBuf.ProtoMember(10)]
        [global::System.ComponentModel.DefaultValue("")]
        public string ownerId { get; set; } = "";

        [global::ProtoBuf.ProtoMember(11, Name = @"public")]
        public bool Public { get; set; }

        [global::ProtoBuf.ProtoMember(12, Name = @"version")]
        public uint Version { get; set; }

        [global::ProtoBuf.ProtoMember(13, Name = @"privileges")]
        public global::System.Collections.Generic.List<Privileges> Privileges { get; } = new global::System.Collections.Generic.List<Privileges>();

    }

}

#pragma warning restore CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
