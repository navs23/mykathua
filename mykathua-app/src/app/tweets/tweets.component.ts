import { Component, OnInit, Injector } from '@angular/core';
import { observable, bindCallback, Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  providers: [HttpClient],
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  title = 'mykathua tweets!';
 tweets:any;
 inflight = false;
 
  ids = [];
  timer;
  since = '';


  constructor(private route: ActivatedRoute) {
   
  }
  
  ngOnInit() {
    this.tweets = this.route.snapshot.data;
    
  }
 
  action(action, index) {
    if (this.inflight) {
      return;
    }
    const stateKey = (action.property === 'favorite') ? 'favorited' : 'retweeted';
    const newState = !action.tweet[stateKey];

    this.inflight = true;
    // this.twitter.action(action.property, action.tweet.id_str, newState).subscribe(tweet => {
    //   this.tweets[index][stateKey] = newState;
    //   this.tweets[index][action.property + '_count'] += (newState) ? 1 : -1;
    //   this.inflight = false;
    // });
  }
}

