using Azure.Identity;
using IO.MeetinRoomApp.Models;
using IO.MeetinRoomApp.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;
using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Enums;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.Graph;
using Microsoft.Graph.Extensions;
using Microsoft.Identity.Client;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;

namespace IO.MeetinRoomApp;

public partial class MeetingRoom
{
    private readonly ILogger<MeetingRoom> _logger;
    private readonly Setting setting = new Setting();

    public MeetingRoom(ILogger<MeetingRoom> log, IConfiguration configuration)
    {
        _logger = log;
        configuration.Bind(setting);
    }

    [FunctionName("GetAllRooms")]
    [OpenApiOperation(operationId: "Run", tags: new[] { "name" })]
    [OpenApiSecurity("function_key", SecuritySchemeType.ApiKey, Name = "code", In = OpenApiSecurityLocationType.Query)]
    [OpenApiRequestBody(contentType: "application/json", bodyType: typeof(SearchParameters), Required = true)]
    [OpenApiResponseWithBody(statusCode: HttpStatusCode.OK, contentType: "application/json", bodyType: typeof(string), Description = "The OK response")]
    public async Task<IActionResult> Run(
        [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
        CancellationToken cancellationToken
        )
    {
        _logger.LogInformation("Meeting room processed a request {}");
        

        string requestBody = string.Empty;
        using (StreamReader streamReader = new StreamReader(req.Body))
        {
            requestBody = await streamReader.ReadToEndAsync();
        }
        var parameters = JsonConvert.DeserializeObject<SearchParameters>(requestBody);


        var app = ConfidentialClientApplicationBuilder.Create(setting.ClientId)
                                                  .WithTenantId(setting.TenantId)
                                                  .WithClientSecret(setting.ClientSecret)
                                                  .Build();

        var authProvider = new ClientSecretCredential(setting.TenantId, setting.ClientId, setting.ClientSecret);

        IEnumerable<string> rooms = RoomService.GetRooms().Select(x => x.Address);


        var graphServiceClient = new GraphServiceClient(authProvider);


        var result = await graphServiceClient.Users[rooms.First()]
            .Calendar
            .GetSchedule(rooms,
                    StartTime: parameters.Start.ToDateTimeTimeZone(),
                     EndTime: parameters.End.ToDateTimeTimeZone(),
                     AvailabilityViewInterval: parameters.Intervals).Request().PostAsync(cancellationToken: cancellationToken);

        _logger.LogInformation("Meeting room processed a request.");

        return new OkObjectResult(result);
    }
}

