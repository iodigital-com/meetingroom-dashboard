using Microsoft.Azure.WebJobs.Extensions.OpenApi.Core.Attributes;

namespace IO.MeetinRoomApp;


public enum Campuses
{

    [Display(nameof(Amsterdam))] Amsterdam = 1,
    [Display(nameof(Antwerp))] Antwerp = 2,
    [Display(nameof(Brussels))] Brussels = 3,
    [Display(nameof(Eindhoven))] Eindhoven = 4,
    [Display(nameof(Ghent))] Ghent = 5,
    [Display(nameof(Herentals))] Herentals = 6,
    [Display(nameof(Rotterdam))] Rotterdam = 7
}

