using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.Net.Http.Headers;
using ProtoBuf.Meta;
using Google.Protobuf;

namespace AspNetCoreProtobuf.Formatters
{
    // Thank you to Damien Bod! https://damienbod.com/2015/06/03/asp-net-5-mvc-6-custom-protobuf-formatters/
    // https://github.com/damienpontifex/ProtobufFormatter/tree/master/src/ProtobufFormatter
    public class ProtobufOutputFormatter : OutputFormatter
    {
        private static Lazy<RuntimeTypeModel> model = new Lazy<RuntimeTypeModel>(CreateTypeModel);

        public string ContentType { get; private set; }

        public static RuntimeTypeModel Model
        {
            get { return model.Value; }
        }

        public ProtobufOutputFormatter()
        {
            ContentType = "application/x-protobuf";
            SupportedMediaTypes.Add(MediaTypeHeaderValue.Parse("application/x-protobuf"));
        }

        private static RuntimeTypeModel CreateTypeModel()
        {
            var typeModel = TypeModel.Create();
            typeModel.UseImplicitZeroDefaults = false;
            return typeModel;
        }

        public override Task WriteResponseBodyAsync(OutputFormatterWriteContext context)
        {
            var response = context.HttpContext.Response;

            try
            {
                Model.Serialize(response.Body, context.Object);
            }
            catch (InvalidOperationException)
            {
                (context.Object as ProtocSample).WriteTo(response.Body);
            }
            return Task.FromResult(response);
        }
    }
}