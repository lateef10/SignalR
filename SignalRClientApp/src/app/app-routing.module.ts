import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientConnectionEventComponent } from './client-connection-event/client-connection-event.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { HubmethodComponent } from './hubmethod/hubmethod.component';
import { ServerConnectionEventComponent } from './server-connection-event/server-connection-event.component';
import { StronglyTypedComponent } from './strongly-typed/strongly-typed.component';
import { VoteOutsideHubComponent } from './vote-outside-hub/vote-outside-hub.component';

const routes: Routes = [
          { path: '',     component: HomeComponent},
          {path: 'home', component: HomeComponent},
          {path: 'hubmethod', component: HubmethodComponent},
          {path: 'groups', component: GroupsComponent},
          {path: 'votes', component: VoteOutsideHubComponent},
          {path: 'clientconn', component: ClientConnectionEventComponent},
          {path: 'serverconn', component: ServerConnectionEventComponent},
          {path: 'stronglytype', component: StronglyTypedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
