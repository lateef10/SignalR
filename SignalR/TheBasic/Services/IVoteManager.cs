using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBasic.Services
{
    public interface IVoteManager
    {
        Task CastVote(string voteFor);
        Dictionary<string, int> GetCurrentVotes();
    }
}
