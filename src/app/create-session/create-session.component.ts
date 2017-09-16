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
    session: Session = new Session();
    
      constructor(
        private sessionService: SessionService,
        private router: Router) { }

    saveSession(): void
    {
      this.add(this.session.name, this.session.desc, this.session.ddate);
    }
      add(name: string, desc: string, ddate: Date): void {
        name = name.trim();
        desc = desc.trim();
        if (!name || !desc) { return; }
        this.sessionService.create(name, desc, ddate)
          .then(session => {
            this.session = new Session();
          });
      }
}