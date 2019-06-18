using System;
using System.Net.Http;
using claros.protogen.common.configuration;
using claros.protogen.common.form;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProtogenController : ControllerBase
    {
        private readonly ILogger<ProtogenController> _logger;

        public ProtogenController(ILogger<ProtogenController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        // GET api/values
        [HttpGet]
        public IActionResult Get()
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(ProtogenController), nameof(HttpMethod.Get));
            var result = new FormTemplate();

            result.Id = "CF99650B-3AC9-4D79-A67E-0E979EE4E254";
            result.Public = false;
            result.ownerId = "3CFDCBB6-6031-4887-9FBA-44860394FE62";
            result.Version = 2;
            result.formTemplateConfiguration = new FormTemplateConfiguration{formTemplateType = FormTemplateType.FtPlant};
            result.Privileges.Add("SuperSecure", new Rights
            {
                Create = false,
                Delete = false,
                Edit = false,
                View = false
            } );
            

            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody] FormTemplate value)
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(ProtogenController), nameof(HttpMethod.Post));

            return Ok(value);
        }
    }
}
