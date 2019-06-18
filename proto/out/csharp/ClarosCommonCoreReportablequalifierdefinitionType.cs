// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: claros_common_core_reportablequalifierdefinition_type.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Claros.Common.Core {

  /// <summary>Holder for reflection information generated from claros_common_core_reportablequalifierdefinition_type.proto</summary>
  public static partial class ClarosCommonCoreReportablequalifierdefinitionTypeReflection {

    #region Descriptor
    /// <summary>File descriptor for claros_common_core_reportablequalifierdefinition_type.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static ClarosCommonCoreReportablequalifierdefinitionTypeReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "CjtjbGFyb3NfY29tbW9uX2NvcmVfcmVwb3J0YWJsZXF1YWxpZmllcmRlZmlu",
            "aXRpb25fdHlwZS5wcm90bxISY2xhcm9zLmNvbW1vbi5jb3JlKosCCiFSZXBv",
            "cnRhYmxlUXVhbGlmaWVyRGVmaW5pdGlvblR5cGUSKwonUkVQT1JUQUJMRV9R",
            "VUFMSUZJRVJfREVGSU5JVElPTl9VTktOT1dOEAASMAosUkVQT1JUQUJMRV9R",
            "VUFMSUZJRVJfREVGSU5JVElPTl9FTlRFUkVEVkFMVUUQARIoCiRSRVBPUlRB",
            "QkxFX1FVQUxJRklFUl9ERUZJTklUSU9OX1pFUk8QAhIvCitSRVBPUlRBQkxF",
            "X1FVQUxJRklFUl9ERUZJTklUSU9OX0hBTEZFTlRFUkVEEAMSLAooUkVQT1JU",
            "QUJMRV9RVUFMSUZJRVJfREVGSU5JVElPTl9DT05TVEFOVBAEYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(new[] {typeof(global::Claros.Common.Core.ReportableQualifierDefinitionType), }, null));
    }
    #endregion

  }
  #region Enums
  public enum ReportableQualifierDefinitionType {
    [pbr::OriginalName("REPORTABLE_QUALIFIER_DEFINITION_UNKNOWN")] ReportableQualifierDefinitionUnknown = 0,
    /// <summary>
    /// The value is taken from the qualified value.  Example &lt; 2 becomes 2
    /// </summary>
    [pbr::OriginalName("REPORTABLE_QUALIFIER_DEFINITION_ENTEREDVALUE")] ReportableQualifierDefinitionEnteredvalue = 1,
    /// <summary>
    /// The value is set to zero (0) in this case
    /// </summary>
    [pbr::OriginalName("REPORTABLE_QUALIFIER_DEFINITION_ZERO")] ReportableQualifierDefinitionZero = 2,
    /// <summary>
    /// The value is set to half of the entered value.  Example &lt; 2 becomes 1
    /// </summary>
    [pbr::OriginalName("REPORTABLE_QUALIFIER_DEFINITION_HALFENTERED")] ReportableQualifierDefinitionHalfentered = 3,
    /// <summary>
    /// The value is set to a constant value that is entered by the customer.  For example &lt; 2 may be set to a customer value of 1.5
    /// </summary>
    [pbr::OriginalName("REPORTABLE_QUALIFIER_DEFINITION_CONSTANT")] ReportableQualifierDefinitionConstant = 4,
  }

  #endregion

}

#endregion Designer generated code
