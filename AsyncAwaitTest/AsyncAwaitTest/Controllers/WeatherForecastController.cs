using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace AsyncAwaitTest.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }

        private void Run10Seconds()
        {
            Task.Delay(10 * 1000).Wait(); //10 seconds
        }

        [HttpGet, Route("Get10SecondsApi")]
        public string Get10SecondsApi()
        {
            var sb = new System.Text.StringBuilder();
            sb.AppendLine($"Start Time {DateTime.Now.ToLongTimeString()}");
            Run10Seconds();
            Run10Seconds();
            sb.AppendLine($"End time {DateTime.Now.ToLongTimeString()}");
            return sb.ToString();
        }

        private async Task Run10SecondsAsync()
        {
            await Task.Delay(10 * 1000); //10 seconds
        }

        [HttpGet, Route("Get10SecondsApiAsync")]
        public async Task<string> Get10SecondsApiAsync()
        {
            var sb = new System.Text.StringBuilder();
            sb.AppendLine($"Start Time {DateTime.Now.ToLongTimeString()}");

            var task1 = Run10SecondsAsync();
            var task2 = Run10SecondsAsync();
            //await task1;
            //await task2;

            sb.AppendLine($"End time {DateTime.Now.ToLongTimeString()}");
            return sb.ToString();
        }

       

        
    }
}
