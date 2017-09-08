import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Session }        from '../Session';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: [ './session-detail.component.css' ]
})
export class SessionDetailComponent implements OnInit {
  session: Session;

  constructor(
    private sessionService: SessionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.sessionService.getSession(+params.get('id')))
      .subscribe(session => this.session = session);
  }

  save(): void {
    this.sessionService.update(this.session)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
