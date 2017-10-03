import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Session } from '../Session';

@Injectable()
export class SessionService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private sessionsUrl = 'api/sessions';  // URL to web api

  constructor(private http: Http) { }

  getSessions(): Promise<Session[]> {
    return this.http.get(this.sessionsUrl)
               .toPromise()
               .then(response => response.json().data as Session[])
               .catch(this.handleError);
  }

  getSession(id: number): Promise<Session> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Session)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.sessionsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string, desc:string, ddate: Date): Promise<Session> {
    return this.http
      .post(this.sessionsUrl, JSON.stringify({name: name, desc: desc, ddate: ddate}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Session)
      .catch(this.handleError);
  }

  update(session: Session): Promise<Session> {
    const url = `${this.sessionsUrl}/${session.id}`;
    return this.http
      .put(url, JSON.stringify(session), {headers: this.headers})
      .toPromise()
      .then(() => session)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

