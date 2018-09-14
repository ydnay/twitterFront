import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, catchError} from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class TweetService {
  mainURL: String = environment.BASE_URL;
  constructor(private http: Http) {}

  handleError(e) {
    return throwError(e.json().message);
  }

  postTweet(tweet) {
    return this.http.post(`${this.mainURL}/tweet`, tweet, { withCredentials: true })
    .pipe(map(res => res.json()), catchError(this.handleError));
  }

  getTweet() {
    return this.http.get(`${this.mainURL}/tweet`)
    .pipe(map(res => res.json()), catchError(this.handleError));
  }
}
