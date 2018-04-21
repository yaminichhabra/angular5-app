import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username, password) : Observable<any> {
    return this.http.post('/login', {username, password})
  }

  logout() : Observable<any> {
    return this.http.get('/logout');
  }
}
