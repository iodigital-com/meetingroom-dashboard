//using IO.MeetinRoomApp.Models;
//using Microsoft.Azure.Functions.Extensions.DependencyInjection;
//using Microsoft.Extensions.Configuration;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.Graph.ExternalConnectors;

//[assembly: FunctionsStartup(typeof(IO.MeetinRoomApp.Startup))]

//namespace IO.MeetinRoomApp
//{
//    public class Startup : FunctionsStartup
//    {
//        public override void ConfigureAppConfiguration(IFunctionsConfigurationBuilder builder)
//        {
//            FunctionsHostBuilderContext context = builder.GetContext();
//            var configuration = BuildConfiguration(context.ApplicationRootPath);

//            base.ConfigureAppConfiguration(builder);
//        }
//        public override void Configure(IFunctionsHostBuilder builder)
//        {

//            builder.Services.Configure<Setting>(configuration.GetSection(""));
//        }
//        private IConfiguration BuildConfiguration(string applicationRootPath)
//        {
//            var config =
//                new ConfigurationBuilder()
//                    .SetBasePath(applicationRootPath)
//                    .AddJsonFile("local.settings.json", optional: true, reloadOnChange: true)
//                    .AddEnvironmentVariables()
//                    .Build();

//            return config;
//        }
      
//    }
//}

