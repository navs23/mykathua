import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
   news:any=[];
  constructor(private route: ActivatedRoute) {
   
  }
  
  ngOnInit() {
    this.news = this.route.snapshot.data;
    console.log(JSON.stringify(this.news));
  }

}
