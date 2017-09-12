import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Session }         from '../Session';
import { SessionService }       from '../services/session.service';

@Component({
  selector: 'my-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: [ './sessions.component.css' ]
})
export class SessionsComponent implements OnInit {
  sessions: Session[];
  selectedSession: Session;

  constructor(
    private sessionService: SessionService,
    private router: Router) { }

  getSessions(): void {
    this.sessionService
        .getSessions()
        .then(sessions => this.sessions = sessions);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.sessionService.create(name,"")
      .then(session => {
        this.sessions.push(session);
        this.selectedSession = null;
      });
  }

  delete(session: Session): void {
    this.sessionService
        .delete(session.id)
        .then(() => {
          this.sessions = this.sessions.filter(h => h !== session);
          if (this.selectedSession === session) { this.selectedSession = null; }
        });
  }

  ngOnInit(): void {
    this.getSessions();
  }

  onSelect(session: Session): void {
    this.selectedSession = session;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSession.id]);
  }
}
