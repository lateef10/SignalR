import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Component({
  selector: 'app-client-connection-event',
  templateUrl: './client-connection-event.component.html',
  styleUrls: ['./client-connection-event.component.css']
})
export class ClientConnectionEventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var counter = <HTMLSpanElement>document.getElementById("viewCounter");

    // create connection
    let connection = new signalR.HubConnectionBuilder()
        .withAutomaticReconnect()
         //this use a different server url, to test multiple server scaling feature
         //using redis cache to distribute the messages
         //You can see the result between homepage and this page.
         //Even though they have different server url, they still return same result to the browser.
        .withUrl("https://localhost:44348/viewhub")
        .build();

    // on view update message from client
    connection.on("viewCountUpdate", (value: number) => {
        counter.innerText = value.toString();
    });

    // notify server we're watching
    function notify() {
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

    // *** CONNECTION EVENTS ***
    let body = document.getElementsByTagName("body")[0];

    connection.onreconnected((connectionId) => {
        body.style.backgroundColor = "green";

        setTimeout(() => {
            body.style.backgroundColor = "white";
        }, 5000);
    });

    connection.onreconnecting(() => {
      //you want to notify the user that it is trying to reconnect
        body.style.backgroundColor = "yellow";
    });

    connection.onclose(() => {
      //you want to notify the user that connection failed and they need to refresh the page
      //or check their internet connection
        body.style.backgroundColor = "red";
    });
  }

}
