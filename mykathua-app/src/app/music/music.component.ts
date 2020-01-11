import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
   track_list:any[]= 
[
	
	{
		genre:"Bollywood",
		title:"Hits of Bollywood",
		link:"http://50.7.77.115:8174/;"
	},
		{
			genre:"Bollywood",
			title:"JK City FM",
			link:"http://69.175.94.98:8138/;"
		
		},
		{
			genre:"bollywood",
			title:"Bollywood Sada Bahar",
			link:"http://192.240.102.133:8512/;stream/1;"
		},
		{
			genre:"Bollywood",
			title:"Hindi Evergreen Hits",
			link:"http://50.7.77.114:8296/;"
		
		},
		
		{
		genre:"Bollywood",
			title:"Radio HSL",
			link:"http://50.7.70.66:8485/;"
		
		}
		/*,{
		genre:"Dance",
			title:"Dancers music Radio",
			link:"http://uk1.internet-radio.com:8187/;stream"
		}*/
		,
		
		{
			genre:"Bollywood",
			title:"Kishore Kumar Radio"
			,link:"http://208.115.222.203:8834/;"
			
		},
		{title:"Radio Central",link:"http://176.31.107.8:8459/;"},
		{
			genre:"Bollywood",
			title:"Hits Of Bollywood",
			link:"http://50.7.77.115:8174/;"
		
		}
		,{
			genre:"Bollywood",
			title:"Non-stop hits"
			,link:"http://198.178.123.14:8216/;stream/1"
			
		}
		
		,{
				genre:"Bhajan",
			title:"OM Radio - Chillout, Ambient, Instrumental, Meditative"
			,link:"http://178.168.28.148:8000/"
			
		}
		,
		{
				genre:"Bhajan",
			title:"Bhajan Radio"
			,link:"http://188.165.192.5:8159/;stream/1"
			
		}
			,
		{
			genre:"Bhajan",
			title:"Radio Jai Ho - Bhajan"
			,link:"http://198.105.214.140:7868/;stream/1"
			
		}
		
			,
		{
			genre:"Rock",
			title:"Classic Rock Florida - SHE Radio"
			,link:"http://us1.internet-radio.com/proxy/dougclassicrock?mp=/;"
			
		}
		
	];
	msaapDisplayTitle = true;
	msaapDisplayPlayList = true;
	msaapPageSizeOptions = [2,4,6];
	msaapDisplayVolumeControls = true;
	msaapPlaylist: Track[] =    this.track_list;
	;

msbapDisplayTitle = false;   
  constructor() { }

  ngOnInit() {
  }

}
