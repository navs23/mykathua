import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class YoutubeService{
    constructor(private http:HttpClient){}
    getVideos():Observable<any>{
       return this.http.get<Observable<any>>('api/videos')
        

    }
}