using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheBasic.Hubs;
using TheBasic.Services;

namespace TheBasic
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<IVoteManager, VoteManager>();

            services.AddCors(o => o.AddPolicy("AllowAnyOriginPolicy", builder =>
            {
                builder.WithOrigins("http://localhost:4200")
                       .AllowAnyMethod()
                       .AllowAnyHeader()
                       .AllowCredentials();
            }));

            //You can use just AddSignalR....Redis was added for scaling to multiple server
            //while SignalR distributes the messages to the servers
            //you can run this application on multiple server using "dotnet run --urls=localhost:44348
            //to see the action on Angular homepage and clientconn page.
            services.AddSignalR().AddStackExchangeRedis("localhost:30001");

            //Instead of letting your server handles all load to send messages to other servers,
            //you can use Azure SignalR instead of redis cache. This will act like a gateway
            //to your servers where messages will be sent and distributed to all your servers.
            //services.AddSignalR().AddAzureSignalR(connectionStringFromAzureSignalrPortal);

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "TheBasic", Version = "v1" });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TheBasic v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseCors("AllowAnyOriginPolicy");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<ViewHub>("/viewhub");
                endpoints.MapHub<StringToolsHub>("/stringtoolshub");
                endpoints.MapHub<ColorHub>("/colorhub");
                endpoints.MapHub<VoteHub>("/votehub");
                endpoints.MapHub<ServerConnEventHub>("/serverconnhub");
                endpoints.MapHub<StronglyTypedHub>("/stronglytypedhub");
            });
        }
    }
}
