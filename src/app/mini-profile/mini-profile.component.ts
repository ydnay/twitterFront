import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  template: `
  <h1> {{user.username}} </h1>
    <div>
      
        <h4> {{ user.tweets }} </h4>
        <h4> {{ user.following }} </h4>
        <h4> {{ user.followers }} </h4>
      </div>
    </div>
  `,
  styleUrls: ['./mini-profile.component.css']
})
export class MiniProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
