import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { TweetsComponent } from './tweets/tweets.component';
import { TweetResolver } from './tweets/tweets.resolver';
import { PhotosComponent } from './photos/photos.component';
import { NewsResolver } from './news/news.resolver';
import { YoutubeResolver } from './videos/youtube.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'home',
    component: HomeComponent
  }, 
  {
    path: 'aboutus',
    component: AboutusComponent
   
  },
  {
    path: 'vid',
    component: VideosComponent
    //,resolve:{videos:YoutubeResolver}
  }
  ,
  {
    path: 'photos',
    component: PhotosComponent
   
  }
  , {
    path: 'news',
    component: NewsComponent,
    resolve:{news:NewsResolver}
  }
  , {
    path: 'music',
    component: MusicComponent
   
  }
  , {
    path: 'tweets',
    component: TweetsComponent,
    resolve:{tweets:TweetResolver}

   
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
