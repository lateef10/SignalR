import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Component({
  selector: 'app-strongly-typed',
  templateUrl: './strongly-typed.component.html',
  styleUrls: ['./strongly-typed.component.css']
})
export class StronglyTypedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var counter = <HTMLSpanElement>document.getElementById("viewCounter");

    // create connection
    let connection = new signalR.HubConnectionBuilder()
        .withAutomaticReconnect()
        .withUrl("https://localhost:44347/stronglytypedhub")
        .build();

    // on view update message from client
    connection.on("viewCountUpdate", (value: number) => {
        counter.innerText = value.toString();
    });

    // notify server we're watching
    function notify(){
        connection.send("notifyWatching");
    }

    // start the connection
    function startSuccess() {
        console.log("Connected.");
        notify();
    }
    function startFail() {
        console.log("Connection failed.");
    }

    connection.start().then(startSuccess, startFail);
  }

}
