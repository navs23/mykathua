import { Injectable } from "@angular/core";

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TwitterService{
    constructor(private http:HttpClient){}
    getTweets():Observable<any>{
       return this.http.get<Observable<any>>('api/tweets')
        

    }
}