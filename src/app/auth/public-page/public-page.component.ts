import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.css']
})
export class PublicPageComponent implements OnInit {

  user = { username: '', password: '' };
  error: String;

  constructor(private session: AuthService, private router: Router) {}

  ngOnInit() {}

  login() {
    this.session.login(this.user)
      .subscribe(
        next => { this.router.navigate(['home']) },
        err => { this.error = err; }
      )
  }

}

