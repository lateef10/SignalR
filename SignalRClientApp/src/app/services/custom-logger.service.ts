import { Injectable } from '@angular/core';
import { ILogger, LogLevel } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class CustomLoggerService implements ILogger {

  constructor() { }

  log(LogLevel: LogLevel, message: string){
    //you can write your logs to a third party service
    console.log(LogLevel, message);
  }


}
