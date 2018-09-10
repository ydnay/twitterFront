import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class AuthService {
  mainURL: String = environment.BASE_URL;
  constructor(private http: Http) {}

  handleError(e) {
    return throwError(e.json().message);
  }

  signup(user) {
    return this.http.post(`${this.mainURL}/auth/signup`, user)
    .pipe(map(res => res.json()), catchError(this.handleError));
  }

  login(user) {
    return this.http.post(`${this.mainURL}/auth/login`, user, { withCredentials: true })
    .pipe(map(res => res.json()), catchError(this.handleError));
  }

  logout() {
    return this.http.post(`${this.mainURL}/auth/logout`, { withCredentials: true })
    .pipe(map(res => res.json()), catchError(this.handleError));
  }

  isLoggedIn() {
    return this.http.get(`${this.mainURL}/auth/loggedin`, { withCredentials: true })
    .pipe(map(res => res.json()), catchError(this.handleError));
  }

  getPrivateData() {
    return this.http.get(`${this.mainURL}/auth/private`, { withCredentials: true })
    .pipe(map(res => res.json()), catchError(this.handleError));
  }
}
