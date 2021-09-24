import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { CustomRetryPolicyService } from '../services/custom-retry-policy.service';

@Component({
  selector: 'app-vote-outside-hub',
  templateUrl: './vote-outside-hub.component.html',
  styleUrls: ['./vote-outside-hub.component.css']
})
export class VoteOutsideHubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pieVotes = <HTMLSpanElement>document.getElementById("pieVotes");
    let baconVotes = <HTMLSpanElement>document.getElementById("baconVotes");

    // create connection
    let connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:44347/votehub")
        .withAutomaticReconnect(new CustomRetryPolicyService())
        .build();

    // client events
    connection.on("updateVotes", (votes) => {
        pieVotes.innerText = votes.pie;
        baconVotes.innerText = votes.bacon;
    });

    // start the connection
    function startSuccess() {
        console.log("Connected.");
        connection.invoke("GetCurrentVotes").then((votes) => {
            pieVotes.innerText = votes.pie;
            baconVotes.innerText = votes.bacon;
        });
    }
    function startFail() {
        console.log("Connection failed.");
    }

    connection.start().then(startSuccess, startFail);
  }

}
