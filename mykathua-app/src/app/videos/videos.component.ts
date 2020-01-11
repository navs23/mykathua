import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos:any=
  [
    {
       "kind":"youtube#searchResult",
       "etag":"\"p4VTdlkQv3HQeTEaXgvLePAydmU/nWTJzNCLx6EcbXASAXUnQxl4ov4\"",
       "id":{
          "kind":"youtube#video",
          "videoId":"_UWyxQ0p76w"
       },
       "snippet":{
          "publishedAt":"2019-12-30T09:07:19.000Z",
          "channelId":"UCzDzJDRQbMVtf3tTeaCaBlg",
          "title":"#KATHUA SATSANG#08-12-2019.SATSANG SANT RAMPAL JI#B DASS#B TECHNICALBALJEET KALOTRA",
          "description":"SATSANG#SATSANG SANT RAMPAL JI#SATSANG BARWALA ASHRAM#SATSANG KATHUA#SATSAHIB JI#SANT RAMPAL JI BACHAN#SANT ...",
          "thumbnails":{
             "default":{
                "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/default.jpg",
                "width":120,
                "height":90
             },
             "medium":{
                "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/mqdefault.jpg",
                "width":320,
                "height":180
             },
             "high":{
                "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/hqdefault.jpg",
                "width":480,
                "height":360
             }
          },
          "channelTitle":"DASS BALJEET B-TECHNICAL",
          "liveBroadcastContent":"none"
       }
    },{
      "kind":"youtube#searchResult",
      "etag":"\"p4VTdlkQv3HQeTEaXgvLePAydmU/nWTJzNCLx6EcbXASAXUnQxl4ov4\"",
      "id":{
         "kind":"youtube#video",
         "videoId":"_UWyxQ0p76w"
      },
      "snippet":{
         "publishedAt":"2019-12-30T09:07:19.000Z",
         "channelId":"UCzDzJDRQbMVtf3tTeaCaBlg",
         "title":"#KATHUA SATSANG#08-12-2019.SATSANG SANT RAMPAL JI#B DASS#B TECHNICALBALJEET KALOTRA",
         "description":"SATSANG#SATSANG SANT RAMPAL JI#SATSANG BARWALA ASHRAM#SATSANG KATHUA#SATSAHIB JI#SANT RAMPAL JI BACHAN#SANT ...",
         "thumbnails":{
            "default":{
               "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/default.jpg",
               "width":120,
               "height":90
            },
            "medium":{
               "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/mqdefault.jpg",
               "width":320,
               "height":180
            },
            "high":{
               "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/hqdefault.jpg",
               "width":480,
               "height":360
            }
         },
         "channelTitle":"DASS BALJEET B-TECHNICAL",
         "liveBroadcastContent":"none"
      }
   },{
    "kind":"youtube#searchResult",
    "etag":"\"p4VTdlkQv3HQeTEaXgvLePAydmU/nWTJzNCLx6EcbXASAXUnQxl4ov4\"",
    "id":{
       "kind":"youtube#video",
       "videoId":"_UWyxQ0p76w"
    },
    "snippet":{
       "publishedAt":"2019-12-30T09:07:19.000Z",
       "channelId":"UCzDzJDRQbMVtf3tTeaCaBlg",
       "title":"#KATHUA SATSANG#08-12-2019.SATSANG SANT RAMPAL JI#B DASS#B TECHNICALBALJEET KALOTRA",
       "description":"SATSANG#SATSANG SANT RAMPAL JI#SATSANG BARWALA ASHRAM#SATSANG KATHUA#SATSAHIB JI#SANT RAMPAL JI BACHAN#SANT ...",
       "thumbnails":{
          "default":{
             "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/default.jpg",
             "width":120,
             "height":90
          },
          "medium":{
             "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/mqdefault.jpg",
             "width":320,
             "height":180
          },
          "high":{
             "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/hqdefault.jpg",
             "width":480,
             "height":360
          }
       },
       "channelTitle":"DASS BALJEET B-TECHNICAL",
       "liveBroadcastContent":"none"
    }
 },
 {
  "kind":"youtube#searchResult",
  "etag":"\"p4VTdlkQv3HQeTEaXgvLePAydmU/nWTJzNCLx6EcbXASAXUnQxl4ov4\"",
  "id":{
     "kind":"youtube#video",
     "videoId":"_UWyxQ0p76w"
  },
  "snippet":{
     "publishedAt":"2019-12-30T09:07:19.000Z",
     "channelId":"UCzDzJDRQbMVtf3tTeaCaBlg",
     "title":"#KATHUA SATSANG#08-12-2019.SATSANG SANT RAMPAL JI#B DASS#B TECHNICALBALJEET KALOTRA",
     "description":"SATSANG#SATSANG SANT RAMPAL JI#SATSANG BARWALA ASHRAM#SATSANG KATHUA#SATSAHIB JI#SANT RAMPAL JI BACHAN#SANT ...",
     "thumbnails":{
        "default":{
           "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/default.jpg",
           "width":120,
           "height":90
        },
        "medium":{
           "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/mqdefault.jpg",
           "width":320,
           "height":180
        },
        "high":{
           "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/hqdefault.jpg",
           "width":480,
           "height":360
        }
     },
     "channelTitle":"DASS BALJEET B-TECHNICAL",
     "liveBroadcastContent":"none"
  }
},
{
  "kind":"youtube#searchResult",
  "etag":"\"p4VTdlkQv3HQeTEaXgvLePAydmU/nWTJzNCLx6EcbXASAXUnQxl4ov4\"",
  "id":{
     "kind":"youtube#video",
     "videoId":"_UWyxQ0p76w"
  },
  "snippet":{
     "publishedAt":"2019-12-30T09:07:19.000Z",
     "channelId":"UCzDzJDRQbMVtf3tTeaCaBlg",
     "title":"#KATHUA SATSANG#08-12-2019.SATSANG SANT RAMPAL JI#B DASS#B TECHNICALBALJEET KALOTRA",
     "description":"SATSANG#SATSANG SANT RAMPAL JI#SATSANG BARWALA ASHRAM#SATSANG KATHUA#SATSAHIB JI#SANT RAMPAL JI BACHAN#SANT ...",
     "thumbnails":{
        "default":{
           "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/default.jpg",
           "width":120,
           "height":90
        },
        "medium":{
           "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/mqdefault.jpg",
           "width":320,
           "height":180
        },
        "high":{
           "url":"https://i.ytimg.com/vi/_UWyxQ0p76w/hqdefault.jpg",
           "width":480,
           "height":360
        }
     },
     "channelTitle":"DASS BALJEET B-TECHNICAL",
     "liveBroadcastContent":"none"
  }
}
 ];
  id = '_UWyxQ0p76w';
  playerVars = {
    cc_lang_pref: 'en'
  };
  ngOnInit(): void {
   
   // this.videos = this.route.snapshot.data;
    console.log(JSON.stringify(this.videos));
  }



  private player;
  private ytEvent;

  constructor(private route: ActivatedRoute) {
  
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}
