import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',

  styleUrls: ['./mini-profile.component.css']
})
export class MiniProfileComponent implements OnInit {
  user: any = false;
  error: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn()
      .subscribe(
        (user) => this.successCb(user)
      );
  }

  errorCb(err) {
    this.error = err;
    this.user = null;
  }

  successCb(user) {
    this.user = user;
    this.error = null;
  }

}
