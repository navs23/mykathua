import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { TwitterService } from 'src/services/twitter.service';
import { NewsService } from 'src/services/news.service';

@Injectable({ providedIn: 'root' })
export class NewsResolver implements Resolve<any> {
  constructor(private service: NewsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getNews();
  }
}