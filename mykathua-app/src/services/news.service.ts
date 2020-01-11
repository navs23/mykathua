import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class NewsService{
    constructor(private http:HttpClient){}
    getNews():Observable<any>{
       return this.http.get<Observable<any>>('api/news')
        

    }
}