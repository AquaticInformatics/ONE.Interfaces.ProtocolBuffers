// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: claros_common_computation_computation.proto

#pragma warning disable CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace claros.protogen.common.computation
{

    [global::ProtoBuf.ProtoContract()]
    public partial class Computation : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1)]
        [global::System.ComponentModel.DefaultValue("")]
        public string i18nKey { get; set; } = "";

        [global::ProtoBuf.ProtoMember(2, Name = @"name")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Name { get; set; } = "";

        [global::ProtoBuf.ProtoMember(3, Name = @"description")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Description { get; set; } = "";

        [global::ProtoBuf.ProtoMember(4)]
        public global::System.Collections.Generic.List<Variable> inputVariables { get; } = new global::System.Collections.Generic.List<Variable>();

        [global::ProtoBuf.ProtoMember(5)]
        public global::System.Collections.Generic.List<Variable> outputVariables { get; } = new global::System.Collections.Generic.List<Variable>();

        [global::ProtoBuf.ProtoMember(6)]
        public global::System.Collections.Generic.List<ExpressionLine> expressionLines { get; } = new global::System.Collections.Generic.List<ExpressionLine>();

        [global::ProtoBuf.ProtoMember(7)]
        public bool isActive { get; set; }

        [global::ProtoBuf.ProtoMember(8)]
        public bool isValid { get; set; }

        [global::ProtoBuf.ProtoMember(9)]
        [global::System.ComponentModel.DefaultValue("")]
        public string ledgerId
        {
            get { return __pbn__binding.Is(9) ? ((string)__pbn__binding.Object) : ""; }
            set { __pbn__binding = new global::ProtoBuf.DiscriminatedUnionObject(9, value); }
        }
        public bool ShouldSerializeledgerId() => __pbn__binding.Is(9);
        public void ResetledgerId() => global::ProtoBuf.DiscriminatedUnionObject.Reset(ref __pbn__binding, 9);

        private global::ProtoBuf.DiscriminatedUnionObject __pbn__binding;

        [global::ProtoBuf.ProtoMember(10)]
        [global::System.ComponentModel.DefaultValue("")]
        public string formId
        {
            get { return __pbn__binding.Is(10) ? ((string)__pbn__binding.Object) : ""; }
            set { __pbn__binding = new global::ProtoBuf.DiscriminatedUnionObject(10, value); }
        }
        public bool ShouldSerializeformId() => __pbn__binding.Is(10);
        public void ResetformId() => global::ProtoBuf.DiscriminatedUnionObject.Reset(ref __pbn__binding, 10);

    }

}

#pragma warning restore CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
