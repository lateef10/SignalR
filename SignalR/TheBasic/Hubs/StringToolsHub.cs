using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBasic.Hubs
{
    public class StringToolsHub : Hub
    {
        //Method Hub: Calling the invoke method from the client app
        public string GetFullName(string fName, string lName)
        {
            return $"{fName} {lName}";
        }
    }
}
