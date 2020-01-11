import { Component, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.scss']
})
export class TweetComponent {
  @Input() tweet: any;
  @Input() retweet: any;
  @Output() action = new EventEmitter<{property: string, tweet: any}>();

  hasPhoto(tweet: any) {
    if (tweet.entities.media
        && tweet.entities.media.length
        && tweet.entities.media[0].type === 'photo') {
      return true;
    }
    return false;
  }

  toggleAction(property: 'favorite'|'retweet') {
    this.action.emit({property, tweet: this.tweet});
  }
}