import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { NgxGalleryModule } from 'ngx-gallery';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from 'src/angular-material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';



import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { VideosComponent } from './videos/videos.component';
import { ContactsComponent } from './contacts/contacts.component';

import { TweetsComponent } from './tweets/tweets.component';
import { TweetResolver } from './tweets/tweets.resolver';
import { TwitterService } from 'src/services/twitter.service';
import { TweetComponent } from './tweet/tweet.component';
import { TweetPipe } from './tweet.pipe';
import { MomentModule } from 'angular2-moment';
import { ClarityModule } from '@clr/angular';
import { PhotosComponent } from './photos/photos.component';
import { NewsResolver } from './news/news.resolver';
import { NewsService } from 'src/services/news.service';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { YoutubeService } from 'src/services/youtube.service';
import { YoutubeResolver } from './videos/youtube.resolver';
export class CustomHammerConfig extends HammerGestureConfig  {
  overrides = {
      pinch: { enable: false },
      rotate: { enable: false }
  };
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutusComponent,
    NewsComponent,
    MusicComponent,
    VideosComponent,
    ContactsComponent,
    TweetsComponent,
    TweetComponent,
    TweetPipe,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
   
    MatNativeDateModule,
    ReactiveFormsModule,
    MomentModule,
    ClarityModule,
    NgxAudioPlayerModule,
    NgxGalleryModule,
    NgxYoutubePlayerModule.forRoot(),
    MDBBootstrapModule.forRoot()
    
  ],
  providers: [HttpClient,TwitterService ,YoutubeService,NewsService,TweetResolver,NewsResolver,YoutubeResolver,
    {
      provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig 
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



