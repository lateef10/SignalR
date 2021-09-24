using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheBasic.Services;

namespace TheBasic.Controllers
{
    public class VoteController : ControllerBase
    {
        private readonly IVoteManager voteManager;

        public VoteController(IVoteManager voteManager)
        {
            this.voteManager = voteManager;
        }
        [HttpPost("/vote/pie")]
        public async Task<IActionResult> VotePie()
        {
            // save vote
            await voteManager.CastVote("pie");

            return Ok();
        }

        [HttpPost("/vote/bacon")]
        public async Task<IActionResult> VoteBacon()
        {
            // save vote
            await voteManager.CastVote("bacon");

            return Ok();
        }
    }
}
