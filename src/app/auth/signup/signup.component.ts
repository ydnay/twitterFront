import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = { name: '', email: '', username: '', password: '' };
  error: String;

  constructor(private session: AuthService, private router: Router) {}

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe( 
        user => { return; },
        err => { this.error = err; }
      )
  }

  signup() {
    this.session.signup(this.user)
      .subscribe(
        user => { this.router.navigate(['']) },
        err => { this.error = err; }
      )
  }

}
