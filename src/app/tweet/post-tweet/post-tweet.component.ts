import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetService } from '../../services/tweet.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})
export class PostTweetComponent implements OnInit {
  tweet = { user: '', message: '' };
  error: String;

  constructor(private session: TweetService, private router: Router) {}

  ngOnInit() {
  }

}
