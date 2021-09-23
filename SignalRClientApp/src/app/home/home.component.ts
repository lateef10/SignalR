import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as signalR from "@microsoft/signalr";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //this.http.get("https://localhost:44347/WeatherForecast").subscribe(data=>{console.log(data)});

// create connection
let connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44347/viewhub").build();

// on view update message from client
connection.on("viewCountUpdate", (value: number) => {
    let counter = <HTMLVideoElement>document.getElementById("viewCounter");
    counter.innerText = value.toString();
});

// notify server we're watching
function notify(){
    connection.send("notifyWatching");
}

// start the connection
function startSuccess(){
    console.log("Connected.");
    notify();
}
function startFail(){
    console.log("Connection failed.");
}

connection.start().then(startSuccess, startFail);
  }

}
