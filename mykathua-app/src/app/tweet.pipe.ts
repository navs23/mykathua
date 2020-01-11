import { Pipe, PipeTransform, SecurityContext } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'tweet'
})
export class TweetPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(tweet: any, args?: any): any {
    //let text = this.sanitizer.sanitize(tweet.full_text);
    let text:string= this.sanitizer.sanitize(SecurityContext.HTML, tweet.full_text) || '';
    //let text = tweet.full_text;

    if (tweet.entities.user_mentions) {
      tweet.entities.user_mentions.forEach(mention => {
        text = text.replace(new RegExp(`@${mention.screen_name}`, 'gi'), `<a href="https://twitter.com/${mention.screen_name}" target="_blank">@${mention.screen_name}</a>`);
      });
    }

    if (tweet.entities.urls) {
      tweet.entities.urls.forEach(url => {
        text = text.replace(url.url, `<a href="${url.url}" target="_blank">${url.display_url}</a>`);
      });
    }

    if (tweet.entities.media) {
      tweet.entities.media.forEach(url => {
        text = text.replace(url.url, '');
      });
    }

    text = text.replace(/\n/gm, '<br />');
    text = this.linking(text);
    return this.sanitizer.bypassSecurityTrustHtml(text);
  }
  linking  (text) {
    var twit = text.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig,'<a href="$1" target="_blank" title="Visit this link">$1</a>')
         .replace(/#([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/search?q=%23$1&amp;src=hash" target="_blank" title="Search for #$1">#$1</a>')
         .replace(/@([a-zA-Z0-9_]+)/g,'<a href="http://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>');

    return twit;
};
}