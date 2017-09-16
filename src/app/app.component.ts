import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
}
