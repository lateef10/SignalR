import { Component, OnInit } from '@angular/core';   
import * as signalR from "@microsoft/signalr";
import { CustomRetryPolicyService } from '../services/custom-retry-policy.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let btnJoinYellow = <HTMLButtonElement>document.getElementById("btnJoinYellow");
    let btnJoinBlue = <HTMLButtonElement>document.getElementById("btnJoinBlue");
    let btnJoinOrange = <HTMLButtonElement>document.getElementById("btnJoinOrange");
    let btnTriggerYellow = <HTMLButtonElement>document.getElementById("btnTriggerYellow");
    let btnTriggerBlue = <HTMLButtonElement>document.getElementById("btnTriggerBlue");
    let btnTriggerOrange = <HTMLButtonElement>document.getElementById("btnTriggerOrange");

    // create connection
    let connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:44347/colorhub")
        .withAutomaticReconnect(new CustomRetryPolicyService())
        .build();

    btnJoinYellow.addEventListener("click", () => { connection.invoke("JoinGroup", "Yellow"); });
    btnJoinBlue.addEventListener("click", () => { connection.invoke("JoinGroup", "Blue"); });
    btnJoinOrange.addEventListener("click", () => { connection.invoke("JoinGroup", "Orange"); });

    btnTriggerYellow.addEventListener("click", () => { connection.invoke("TriggerGroup", "Yellow"); });
    btnTriggerBlue.addEventListener("click", () => { connection.invoke("TriggerGroup", "Blue"); });
    btnTriggerOrange.addEventListener("click", () => { connection.invoke("TriggerGroup", "Orange"); });

    // client events
    connection.on("triggerColor", (color) => {
        document.getElementsByTagName("body")[0].style.backgroundColor = color;
    });

    // start the connection
    function startSuccess() {
        console.log("Connected.");
    }
    function startFail() {
        console.log("Connection failed.");
    }

    connection.start().then(startSuccess, startFail);
  }

}
