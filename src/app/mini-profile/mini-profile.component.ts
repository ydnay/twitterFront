import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.css']
})
export class MiniProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// <h4> {{ user.tweets }} </h4>
// <h4> {{ user.following }} </h4>
// <h4> {{ user.followers }} </h4>
// </div>

