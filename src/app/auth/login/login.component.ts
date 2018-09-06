import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user = { username: '', password: '' };
  error: String;

  constructor(private session: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.session.login(this.user)
      .subscribe(
        user => { this.router.navigate(['']) },
        err => { this.error = err; }
      )
  }

}
