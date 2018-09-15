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
  tweets: any = [];
  tweet: any = {};
  error: String;

  constructor(private tServ: TweetService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.tServ.getTweet()
    .subscribe((tweets) => {
      this.tweets = tweets;
    });
  }

  tweetTrackerFunction(index: number, tweet: any) {
    return tweet.id;
  }

  deleteTweet(event) {
    console.log(event.target.id);
    this.tServ.deleteTweet(event.target.id)
      .subscribe(
        next => {},
        err => { this.error = err; }
      );
  }

  // deleteTravel(travelId) {
  //   this.travel.deleteTravel(travelId).subscribe(() => {
  //     this.travel.getTravel().subscribe(travels => {
  //       this.travels = travels;
  //     });
  //   });
  // }

  // addTweet() {
  //   console.log(this.tweet);
  //   this.tServ.postTweet(this.tweet)
  //     .subscribe(
  //       next => {},
  //       err => { this.error = err; }
  //     );
  // }

}
