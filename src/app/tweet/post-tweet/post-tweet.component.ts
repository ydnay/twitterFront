import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { TweetService } from '../../services/tweet.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-post-tweet',
  templateUrl: './post-tweet.component.html',
  styleUrls: ['./post-tweet.component.css']
})

export class PostTweetComponent implements OnInit {
  tweet = { user: '', message: '' };
  error: String;

  constructor(private tServ: TweetService, private authService: AuthService, /* private router: Router */) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe(
      next => { this.tweet.user = next.username},
      err => { this.error = err; }
    );
  }

  addTweet(){
    console.log(this.tweet);
    this.tServ.postTweet(this.tweet)
      .subscribe(
        next => {},
        err => { this.error = err; }
      );
  };

}
