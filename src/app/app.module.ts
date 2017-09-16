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
import { CreateSessionComponent } from './create-session/create-session.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdFormFieldModule, MdInputModule, MdDialogModule, MdButtonModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MdFormFieldModule,
    MdInputModule,
    MdDialogModule,
    MdButtonModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SessionDetailComponent,
    SessionsComponent,
    SessionSearchComponent,
    NavbarComponent,
    CreateSessionComponent   
  ],
  providers: [ SessionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
