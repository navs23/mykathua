const express = require('express')
const twitter=require("./services/twitter.service");
const cache = require('memory-cache');
var newsService = require('./news-scraper');
var videoService = require('./services/youtube');
const app = express()
const port = 3000
app.use(express.static('mykathua-app'))

if (process.env.NODE_ENV || "development"){

    process.env.TWITTER_CONSUMER_KEY='yBuiGvDaFlNeXdoMjaJAdjvl2';
    process.env.TWITTER_CONSUMER_SECRET='rKD8ZiJ10g5qwHnVrLghnVtDkoRb5q977FTt3N1fn1HYrOaIkY';
    process.env.TWITTER_ACCESS_TOKEN_KEY='703646797646995457-mUvHGxvX9mwrSsVa69Cy51RW3sHxwDh';
    process.env.TWITTER_ACCESS_TOKEN_SECRET='2YlEelXvhaBP9PyGV2A1QMuRnDVy9wBI98Ya0eJoFMB7E';
    process.env.SENDGRID_API_KEY='d1H4OpMPSn-P3wEpGR6g1A';
    process.env.GOOGLE_API_KEY='AIzaSyDc2SwSwRntH9m1e21OL8btHcxl3TPwwI0';
     
    process.env.SENDGRID_USER='mykathua';
    
    process.env.BASE_WEBSITE_URL='https://navs-navs23.c9users.io/account/confirm/';
    
    process.env.mode = "debug";
    
    process.env.pricecheckindiaKey='EQBSKJNCPNHSHCOP';
    process.env.pricecheckindiaUsername ='navshotm';
}
else
{
    process.env.TWITTER_CONSUMER_KEY='SQark1H85GiCfLxkqN4KHuekT';
    process.env.TWITTER_CONSUMER_SECRET='XbjoMydUrK8SbpRJN8Lpf7w7qf1zp7zFF1jJ6oFILajTLFfsrt';
    process.env.TWITTER_ACCESS_TOKEN_KEY='703646797646995457-3xgxegVvlsinnlhcwxZwLDffJdBSNuY';
    process.env.TWITTER_ACCESS_TOKEN_SECRET='WJSubhpmVHZ3XErI8kueh8TOVlPxnp8gqOeLcokryxoaV';
    process.env.SENDGRID_API_KEY='d1H4OpMPSn-P3wEpGR6g1A';
    process.env.SENDGRID_USER='mykathua';
    process.env.BASE_WEBSITE_URL='http://www.mykathua.com/account/confirm/';
    process.env.GOOGLE_API_KEY='AIzaSyDc2SwSwRntH9m1e21OL8btHcxl3TPwwI0';
    process.env.mode = "prod";
}
let memCache = new cache.Cache();
let cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = memCache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}
app.get('/', (req, res) => {
    res.render('index.html');
    //res.send('Hello World!');
})

app.get('/api/tweets', (req, res) => {
     twitter.getTweets((err,tweets)=>{
        res.send(tweets);
    });
  
    //res.send('Hello World!');
});
app.get('/api/news', cacheMiddleware(300), function(req, res){

    newsService.getNews().then(articles=>{
        res.send(articles);
        //console.log(articles);
    })
    
  // res.send(articles);
});
app.get('/api/videos', cacheMiddleware(300), function(req, res){
  
        videoService.search({searchStr:'kathua',maxResults:50,regionCode:"IN"},(videos)=>{
          
            res.send(videos);
        });
        // .then(videos=>{
        //     res.send(videos);
        //     //console.log(articles);
        // })
        
      // res.send(articles);
    });
    app.get('/api/images', cacheMiddleware(300), function(req, res){
  
        data.getGalleryImages({},function(err,images){
            if (err==null){
             console.log(images);
                 
            res.send(images);
            }
            else
            {
                res.send(err);
            }
            
          });
          
         
    });
    
app.listen(port, () => console.log(`Example app listening on port ${port}!`))