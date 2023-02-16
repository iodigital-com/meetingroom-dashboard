using IO.MeetinRoomApp.Models;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;

namespace IO.MeetinRoomApp.Services;

internal class RoomService
{
    internal static List<Room> GetRooms(string campus = "Amsterdam")
    {
        var json = @"
[
        {
            ""name"": ""Campus Amsterdam - Alexanderplein"",
            ""address"": ""alexanderplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Beukenplein"",
            ""address"": ""beukenplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - De Dam"",
            ""address"": ""dedam.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Europaplein"",
            ""address"": ""europaplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Mercatorplein"",
            ""address"": ""mercatorplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Muntplein"",
            ""address"": ""muntplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Museumplein"",
            ""address"": ""museumplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Nieuwmarkt"",
            ""address"": ""nieuwmarkt.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Noordermarkt"",
            ""address"": ""noordermarkt.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Raamplein"",
            ""address"": ""raamplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Rembrandtplein"",
            ""address"": ""rembrandtplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Stadionplein"",
            ""address"": ""stadionplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Surinameplein"",
            ""address"": ""surinameplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Victorieplein"",
            ""address"": ""victorieplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Waterlooplein"",
            ""address"": ""waterlooplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Amsterdam - Weesperplein"",
            ""address"": ""weesperplein.amsterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Abraham Ortelius"",
            ""address"": ""abrahamortelius.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Agatha Gijzen"",
            ""address"": ""agathagijzen.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Christoffel Plantijn"",
            ""address"": ""christoffelplantijn.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Jeanne Brabants"",
            ""address"": ""jeannebrabants.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Nicole Van Goethem(Studio)"",
            ""address"": ""nicolevangoethem.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Panamarenko(Gameroom)"",
            ""address"": ""panamarenko.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Paul Van Ostaijen"",
            ""address"": ""paulvanostaijen.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Pieter Paul Rubens"",
            ""address"": ""pieterpaulrubens.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Renaat Braems"",
            ""address"": ""renaatbraems.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Terry Van Ginderen"",
            ""address"": ""terryvanginderen.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Walter Van Beirendonck"",
            ""address"": ""waltervanbeirendonck.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Wannes Van de Velde"",
            ""address"": ""wannesvandevelde.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Antwerp - 1 - Willy Vandersteen"",
            ""address"": ""willyvandersteen.antwerp@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (BRAINSTORM) Pitch porn island"",
            ""address"": ""pitchpornisland.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (CLIENTS MEETING) The Arena"",
            ""address"": ""thearena.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (CLIENTS MEETING) The Pit"",
            ""address"": ""thepit.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (INTERNAL MEETING) The Bakery"",
            ""address"": ""thebakery.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (INTERNAL MEETING) The Butchery"",
            ""address"": ""thebutchery.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (INTERNAL MEETING) The Dungeon"",
            ""address"": ""thedungeon.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (INTERNAL MEETING) The Hives"",
            ""address"": ""thehives.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (INTERNAL MEETING) The Swamp"",
            ""address"": ""theswamp.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (SHORT MEETING) The Bat Cave"",
            ""address"": ""thebatcave.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Brussels - 1 - (SHORT MEETING) The Time Machine"",
            ""address"": ""thetimemachine.brussels@iodigital.com""
        },
        {
            ""name"": ""Campus Den Bosch - Klantafspraken"",
            ""address"": ""klantafspraken.denbosch@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 0 - Bar"",
            ""address"": ""bar.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 0 - Kantine"",
            ""address"": ""0-kantine.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 1 - audiO"",
            ""address"": ""audiO.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 1 - biOloog"",
            ""address"": ""biOloog.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 1 - piOnier"",
            ""address"": ""piOnier.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 1 - radiO"",
            ""address"": ""radiO.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 1 - viOlist"",
            ""address"": ""viOlist.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 2 - iOn"",
            ""address"": ""iOn.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 2 - piOn"",
            ""address"": ""piOn.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 2 - ratiO"",
            ""address"": ""ratiO.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 2e - Lab - Innovatie"",
            ""address"": ""2e-lab-innovatie.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 3 - Ananke - Jupiter XII"",
            ""address"": ""Ananke.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 3 - Carme - Jupiter XI"",
            ""address"": ""Carme.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 3 - Leda - Jupiter XIII"",
            ""address"": ""Leda.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 3 - Lysithea - Jupiter X"",
            ""address"": ""Lysithea.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 3 - The Holodeck"",
            ""address"": ""holodeck.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 4 - Elara - Jupiter VII"",
            ""address"": ""Elara.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 4 - Pasiphae - Jupiter VIII"",
            ""address"": ""Pasiphae.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 4 - Sinope - Jupiter IX"",
            ""address"": ""Sinope.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 5 - Amalthea - Jupiter V"",
            ""address"": ""Amalthea.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 5 - Europa - Jupiter II"",
            ""address"": ""Europa.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 5 - Ganymede - Jupiter III"",
            ""address"": ""Ganymede.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 5 - Himalia - Jupiter VI"",
            ""address"": ""Himalia.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Eindhoven - 5 - Jupiter"",
            ""address"": ""jupiter.eindhoven@iodigital.com""
        },
        {
            ""name"": ""Campus Ghent - 2 - 't Stropke (4p)"",
            ""address"": ""stropke.ghent@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals - 1 - Jeff's room"",
            ""address"": ""blackbox.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -1- Arena"",
            ""address"": ""arena.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -1- Boardroom"",
            ""address"": ""boardroom.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -1- Color-Room"",
            ""address"": ""colorroom.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -1- Disco"",
            ""address"": ""disco.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -1- Jungle"",
            ""address"": ""jungle.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -1- War-room"",
            ""address"": ""warroom.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -2- Eetzaal"",
            ""address"": ""eetzaal.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -2- Seminarieruimte"",
            ""address"": ""seminarieruimte.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG-  Popup"",
            ""address"": ""popup.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG- Bibliotheek"",
            ""address"": ""bibliotheek.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG- Helsinki"",
            ""address"": ""helsinki.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG- Koffiebar"",
            ""address"": ""koffiebar.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG- Mancave"",
            ""address"": ""mancave.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG- Studio"",
            ""address"": ""studioroom.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Herentals -BG- Whitespace"",
            ""address"": ""whitespace.herentals@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Bokito"",
            ""address"": ""bokito.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - De Kantine"",
            ""address"": ""dekantine.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - De Zwaan"",
            ""address"": ""dezwaan.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Fotostudio"",
            ""address"": ""fotostudio.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Het Ding"",
            ""address"": ""hetding.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Hollywood"",
            ""address"": ""hollywood.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Jules"",
            ""address"": ""jules.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Patricia"",
            ""address"": ""patricia.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 1"",
            ""address"": ""phonebooth1.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 2"",
            ""address"": ""phonebooth2.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 3"",
            ""address"": ""phonebooth3.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 4"",
            ""address"": ""phonebooth4.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 5"",
            ""address"": ""phonebooth5.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 6"",
            ""address"": ""phonebooth6.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 7"",
            ""address"": ""phonebooth7.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - PhoneBooth 8"",
            ""address"": ""phonebooth8.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - Roffa"",
            ""address"": ""roffa.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Campus Rotterdam - UX Lab"",
            ""address"": ""uxlab.rotterdam@iodigital.com""
        },
        {
            ""name"": ""Kapsalon"",
            ""address"": ""kapsalon.rotterdam@iodigital.com""
        }
    ]
";

        return JsonConvert.DeserializeObject<List<Room>>(json)
            .Where(x => x.Name.Contains(campus, System.StringComparison.InvariantCultureIgnoreCase))
            .ToList();
    }
}
