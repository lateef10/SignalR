using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBasic.Hubs
{
    public class ServerConnEventHub :Hub
    {
        public static int ViewCount { get; set; } = 0;

        public async override Task OnConnectedAsync()
        {
            ViewCount++;

            await this.Clients.All.SendAsync("viewCountUpdate", ViewCount);

            await base.OnConnectedAsync();
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            ViewCount--;

            await this.Clients.All.SendAsync("viewCountUpdate", ViewCount);

            await base.OnDisconnectedAsync(exception);
        }
    }
}
