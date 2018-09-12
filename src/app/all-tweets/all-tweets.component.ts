import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../services/tweet.service';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-all-tweets',
  templateUrl: './all-tweets.component.html',
  styleUrls: ['./all-tweets.component.css']
})
export class AllTweetsComponent implements OnInit {

  constructor(private tServ: TweetService, private router: Router, private authService: AuthService) {}

  ngOnInit() {}

}
