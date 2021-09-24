import { Component, OnInit } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { CustomRetryPolicyService } from '../services/custom-retry-policy.service';

@Component({
  selector: 'app-hubmethod',
  templateUrl: './hubmethod.component.html',
  styleUrls: ['./hubmethod.component.css']
})
export class HubmethodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let btn = <HTMLButtonElement>document.getElementById("btnGetFullName");

    // create connection
    let connection = new signalR.HubConnectionBuilder()
        .withUrl("https://localhost:44347/stringtoolshub")
        .withAutomaticReconnect(new CustomRetryPolicyService())
        .build();

    btn.addEventListener("click", function (evt) {
        var firstName = (document.getElementById("inputFirstName") as HTMLInputElement).value;
        var lastName = (document.getElementById("inputLastName") as HTMLInputElement).value;

        //The invoke is used to excute a method in the server Hub
        connection
            .invoke("getFullName", firstName, lastName)
            .then((name: string) => { alert(name); });
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
