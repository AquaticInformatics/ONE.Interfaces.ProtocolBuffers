using System;
using System.Net.Http;
using claros.protoc.Common.Form;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProtocController : ControllerBase
    {
        private readonly ILogger<ProtocController> _logger;

        public ProtocController(ILogger<ProtocController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }
        // GET api/values
        [HttpGet]
        public ActionResult<FormTemplate> Get()
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(ProtocController), nameof(HttpMethod.Get));
            var result = new FormTemplate();

            result.Id = "581F4F37-E160-43FA-8FF8-008E9091E173";
            result.Public = true;
            result.OwnerId = "9ED5A778-0059-4ADA-AC8A-7BF56A3D95FA";
            result.Version = 1;

            return Ok(result);
        }

        // POST api/values
        [HttpPost]
        public ActionResult<FormTemplate> Post([FromBody] FormTemplate value)
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(ProtocController), nameof(HttpMethod.Post));
            return Ok(value);
        }
    }
}
