import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { HubmethodComponent } from './hubmethod/hubmethod.component';

const routes: Routes = [
          { path: '',     component: HomeComponent},
          {path: 'home', component: HomeComponent},
          {path: 'hubmethod', component: HubmethodComponent},
          {path: 'groups', component: GroupsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
