import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Component({
  selector: 'app-server-connection-event',
  templateUrl: './server-connection-event.component.html',
  styleUrls: ['./server-connection-event.component.css']
})
export class ServerConnectionEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var counter = <HTMLSpanElement>document.getElementById("viewCounter");

    // create connection
    let connection = new signalR.HubConnectionBuilder()
        .withAutomaticReconnect()
        .withUrl("https://localhost:44347/serverconn")
        .build();

    // on view update message from client
    connection.on("viewCountUpdate", (value: number) => {
        counter.innerText = value.toString();
    });

    // start the connection
    function startSuccess() {
        console.log("Connected.");
    }
    function startFail() {
        console.log("Connection failed.");
    }

    connection.start().then(startSuccess, startFail);

    // *** CONNECTION EVENTS ***
    let body = document.getElementsByTagName("body")[0];
    
  }

}
