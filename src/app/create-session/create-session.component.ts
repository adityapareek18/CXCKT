import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Session } from '../Session';
import { SessionService } from '../services/session.service';
@Component({
    selector: 'create-session',
    templateUrl: `./create-session.component.html`,
    //styleUrls: ['./create-session.component.css']
})

export class CreateSessionComponent {
    selectedSession: Session;
    
      constructor(
        private sessionService: SessionService,
        private router: Router) { }
    
      add(name: string, desc: string): void {
        name = name.trim();
        desc = desc.trim();
        if (!name || !desc) { return; }
        this.sessionService.create(name, desc)
          .then(session => {
            this.selectedSession = null;
          });
      }
}