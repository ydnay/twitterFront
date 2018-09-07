import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  error: String;

  constructor(private session: AuthService, private router: Router) {}

  ngOnInit() {
    this.session.logout()
      .subscribe( 
        next => { this.router.navigate(['']) },
        err => { this.error = err; }
      )
  }

}
