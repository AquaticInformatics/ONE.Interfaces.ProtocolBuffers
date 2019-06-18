using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using claros.protogen.common.core;
using Google.Protobuf.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DayOfWeek = claros.protogen.common.core.DayOfWeek;

namespace Protobuf_Demo.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecurrenceController : ControllerBase
    {
        private readonly ILogger _logger;

        public RecurrenceController(ILogger<RecurrenceController> logger)
        {
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        [HttpGet]
        [Route("{pattern}")]
        public IActionResult Get(string pattern)
        {
            _logger.LogInformation("{controllerName} - {verb} called", nameof(RecurrenceController), nameof(HttpMethod.Get));

            var result = new Recurrance
            {
                endDate = new ClarosDateTime {jsonDateTime = "json datetime"},
                rangeOfRecurrence = new RangeOfRecurrence
                {
                    noEnd = false,
                    endDate = new ClarosDateTime {Ticks = 199999},
                    recurranceSartDate = new ClarosDateTime
                    {
                        mobileDateTime = new MobileDateTime
                        {
                            mobileDate = new MobileDate {Day = 1, Month = 1, Year = 1900}
                        }
                    },
                    Occurances = 9001
                }
            };

            SetRecurrencePattern(result, pattern);

            return Ok(result);
        }

        private void SetRecurrencePattern(Recurrance dto, string pattern)
        {
            dto.recurrencePattern = new RecurrencePattern();
            switch (pattern.ToLower())
            {
                case "daily":
                    dto.recurrencePattern.Daily = new Daily
                    {
                        Interval = 1,
                        everyWeekday = true
                    };
                    break;
                case "weekly":
                    dto.recurrencePattern.Weekly = new Weekly{ Interval = 1};
                    dto.recurrencePattern.Weekly.daysOfWeeks.Add(DayOfWeek.DowMonday);
                    dto.recurrencePattern.Weekly.daysOfWeeks.Add(DayOfWeek.DowWednesday);
                    dto.recurrencePattern.Weekly.daysOfWeeks.Add(DayOfWeek.DowFriday);

                    break;
                case "monthly":
                    dto.recurrencePattern.Monthly = new Monthly{dayOfWeekInterval = new DayOfWeekInterval
                    {
                        dayType = DayType.DayMonday,
                        ordinalType = OrdinalType.OrdinalFirst,
                        weekInterval = 2
                    }};
                    break;
                case "yearly":
                    dto.recurrencePattern.Yearly = new Yearly
                    {
                        Interval = 1,
                        monthOfYearInterval = new MonthOfYearInterval
                        {
                            ordinalType = OrdinalType.OrdinalFirst,
                            dayType = DayType.DayMonday,
                            monthType = MonthType.MonthAugust
                        }
                    };
                    break;
            }
        }
    }
}