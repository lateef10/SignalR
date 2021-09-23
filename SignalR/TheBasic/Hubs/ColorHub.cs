using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBasic.Hubs
{
    public class ColorHub : Hub
    {
        public async Task JoinGroup(string groupName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
        }

        public Task TriggerGroup(string groupName)
        {
            return Clients.Group(groupName).SendAsync("TriggerColor", groupName);
        }
    }
}
