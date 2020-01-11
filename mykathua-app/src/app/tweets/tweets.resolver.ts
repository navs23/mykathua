import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { TwitterService } from 'src/services/twitter.service';

@Injectable({ providedIn: 'root' })
export class TweetResolver implements Resolve<any> {
  constructor(private service: TwitterService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getTweets();
  }
}