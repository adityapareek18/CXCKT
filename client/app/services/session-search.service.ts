import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Session }  from '../Session';

@Injectable()
export class SessionSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Session[]> {
    return this.http
               .get(`api/sessions/?name=${term}`)
               .map(response => response.json().data as Session[]);
  }
}
