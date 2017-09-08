import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SessionsComponent }      from './sessions/sessions.component';
import { SessionDetailComponent }  from './session-detail/session-detail.component';
import { SessionService }          from './services/session.service';
import { SessionSearchComponent }  from './session-search/session-search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SessionDetailComponent,
    SessionsComponent,
    SessionSearchComponent,
    NavbarComponent
  ],
  providers: [ SessionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
