import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomLoggerService } from './services/custom-logger.service';
import { HubmethodComponent } from './hubmethod/hubmethod.component';
import { GroupsComponent } from './groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HubmethodComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomLoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
