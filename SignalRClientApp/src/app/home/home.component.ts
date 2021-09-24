import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import * as signalR from "@microsoft/signalr";
import { CustomLoggerService } from '../services/custom-logger.service';
import { CustomRetryPolicyService } from '../services/custom-retry-policy.service';

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
    let connection = new signalR.HubConnectionBuilder()
                      //.configureLogging(signalR.LogLevel.Trace)
                      .configureLogging(new CustomLoggerService())
                      .withAutomaticReconnect(new CustomRetryPolicyService())
                      .withUrl("https://localhost:44347/viewhub").build();


  //this is for button click event
  let btn = <HTMLButtonElement>document.getElementById("incrementView");
  btn.addEventListener("click", function (evt) {
    // send to hub
    connection.invoke("notifyWatching");
});

    // on view update message from client
    connection.on("viewCountUpdate", (value: number) => {
        let counter = <HTMLSpanElement>document.getElementById("viewCounter");
        counter.innerText = value.toString();
    });


    // start the connection
    function startSuccess(){
        console.log("Connected.");
        connection.send("notifyWatching");

        connection.invoke("notifyWatching"); //this is for button click event
    }
    function startFail(){
        console.log("Connection failed.");
    }

    connection.start().then(startSuccess, startFail);
  }

}
