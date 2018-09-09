import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: any;
  error: String;

  constructor(private session: AuthService) {}

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        user => { this.user = user; },
        err => { this.error = err; }
      )
  }

}
