// This file was generated by a tool; you should avoid making direct changes.
// Consider using 'partial classes' to extend these types
// Input: claros_common_task_task.proto

#pragma warning disable CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
namespace Claros.Common.Task
{

    [global::ProtoBuf.ProtoContract()]
    public partial class Task : global::ProtoBuf.IExtensible
    {
        private global::ProtoBuf.IExtension __pbn__extensionData;
        global::ProtoBuf.IExtension global::ProtoBuf.IExtensible.GetExtensionObject(bool createIfMissing)
            => global::ProtoBuf.Extensible.GetExtensionObject(ref __pbn__extensionData, createIfMissing);

        [global::ProtoBuf.ProtoMember(1, Name = @"id")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Id { get; set; } = "";

        [global::ProtoBuf.ProtoMember(2, Name = @"name")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Name { get; set; } = "";

        [global::ProtoBuf.ProtoMember(3, Name = @"description")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Description { get; set; } = "";

        [global::ProtoBuf.ProtoMember(4, Name = @"assignee")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Assignee { get; set; } = "";

        [global::ProtoBuf.ProtoMember(5, Name = @"reporter")]
        [global::System.ComponentModel.DefaultValue("")]
        public string Reporter { get; set; } = "";

        [global::ProtoBuf.ProtoMember(6, Name = @"priority")]
        public uint Priority { get; set; }

        [global::ProtoBuf.ProtoMember(7)]
        [global::System.ComponentModel.DefaultValue("")]
        public string instrumentId { get; set; } = "";

        [global::ProtoBuf.ProtoMember(8)]
        public TaskDefinition taskDefinition { get; set; }

        [global::ProtoBuf.ProtoMember(9, Name = @"taskdata")]
        public TaskData Taskdata { get; set; }

        [global::ProtoBuf.ProtoMember(10)]
        public global::Claros.Common.Core.AuditEvent auditEvent { get; set; }

    }

}

#pragma warning restore CS0612, CS1591, CS3021, IDE1006, RCS1036, RCS1057, RCS1085, RCS1192
