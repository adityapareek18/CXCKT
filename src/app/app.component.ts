import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <app-navbar></app-navbar>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/sessions" routerLinkActive="active">Sessions</a>
      <a routerLink="/create-sessions" routerLinkActive="active">Create Session</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KT-Station';
}
