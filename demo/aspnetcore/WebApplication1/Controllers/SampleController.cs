using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Google.Protobuf.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Protobuf_Demo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        private readonly ILogger _logger;

        public SampleController(ILogger<SampleController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }


        [Route("protogen")]
        [HttpGet]
        public IActionResult GetProtogen()
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(SampleController), nameof(HttpMethod.Get));

            var result = new Sample
            {
                sampleEnumType = Sample.enumType.EnumOne,
                sampleString = "A String",
                sampleUint32 = 12,
                sampleRepeatedStrings = { "ABC", "aBC", "123" },
                repeatableOneOfs =
                {
                    new Sample.RepeatableOneOf{ repeatableOneOfUint32 = 123 },
                    new Sample.RepeatableOneOf{repeatableOneOfString = "string time!"},
                    new Sample.RepeatableOneOf
                    {
                        repeatableCustomMessage = new Sample.customMessage { messageBody = "100 Bad days make 100 good stories" }
                    },

                }
            };

            result.sampleMaps.Add("Key1", "Val1");
            result.sampleMaps.Add("Key2", "Val2");

            return Ok(result);
        }

        [Route("protoc")]
        [HttpGet]
        public IActionResult GetProtoc()
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(SampleController), nameof(HttpMethod.Get));

            var result = new ProtocSample
            {
                SampleEnumType = ProtocSample.Types.enumType.EnumOne,
                SampleString = "A String",
                SampleUint32 = 12,
                SampleRepeatedString = { "ABC", "aBC", "123" },
                RepeatableOneOf =
                {
                    new ProtocSample.Types.RepeatableOneOf{RepeatableOneOfUint32 = 123},
                    new ProtocSample.Types.RepeatableOneOf{RepeatableOneOfString = "string time!"},
                    new ProtocSample.Types.RepeatableOneOf
                    {
                        RepeatableCustomMessage = new ProtocSample.Types.customMessage{MessageBody =  "100 Bad days make 100 good stories" }
                    }
                }
            };

            result.SampleMap.Add("Key1", "Value1");
            result.SampleMap.Add("Key2", "Value2");


            return Ok(result);
        }
    }
}
