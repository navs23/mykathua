import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';

import { YoutubeService } from 'src/services/youtube.service';

@Injectable({ providedIn: 'root' })
export class YoutubeResolver implements Resolve<any> {
  constructor(private service: YoutubeService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.service.getVideos();
  }
}