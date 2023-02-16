using System;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace IO.MeetinRoomApp;


public class SearchParameters
{
    public DateTimeOffset Start { get; set; }
    public DateTimeOffset End { get; set; }
    [JsonConverter(typeof(StringEnumConverter))]
    public Campuses Campus { get; set; }
    public int Intervals { get; set; }
}


