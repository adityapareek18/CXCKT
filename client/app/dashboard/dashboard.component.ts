import { Component, OnInit } from '@angular/core';

import { Session }        from '../Session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.getSessions()
      .then(sessions => this.sessions = sessions.slice(1,5));
  }
}
