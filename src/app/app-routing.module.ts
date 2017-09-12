import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { SessionsComponent }      from './sessions/sessions.component';
import { SessionDetailComponent }  from './session-detail/session-detail.component';
import { CreateSessionComponent }  from './create-session/create-session.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: SessionDetailComponent },
  { path: 'sessions',     component: SessionsComponent },
  { path: 'create-sessions', component: CreateSessionComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
