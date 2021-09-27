using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBasic.Hubs
{
    public class StronglyTypedHub : Hub<IStronglyTypedHub>
    {
        public static int ViewCount { get; set; } = 0;

        public async Task NotifyWatching()
        {
            ViewCount++;

            await this.Clients.All.viewCountUpdate(ViewCount);
        }
    }

        public interface IStronglyTypedHub
        {
            Task viewCountUpdate(int viewCount);
        }
}
