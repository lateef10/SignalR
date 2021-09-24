using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheBasic.Services;

namespace TheBasic.Hubs
{
    public class VoteHub : Hub
    {
        private readonly IVoteManager voteManager;

        public VoteHub(IVoteManager voteManager)
        {
            this.voteManager = voteManager;
        }

        public Dictionary<string, int> GetCurrentVotes()
        {
            return voteManager.GetCurrentVotes();
        }
    }
}
