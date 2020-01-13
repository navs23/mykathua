const express = require('express')
const twitter=require("./services/twitter.service");
const cache = require('memory-cache');
var newsService = require('./news-scraper');
var videoService = require('./services/youtube');
const app = express()

app.use(express.static('mykathua-app'))

if (process.env.NODE_ENV || "development"){

    process.env.TWITTER_CONSUMER_KEY='';
    process.env.TWITTER_CONSUMER_SECRET='';
    process.env.TWITTER_ACCESS_TOKEN_KEY='';
    process.env.TWITTER_ACCESS_TOKEN_SECRET='';
    process.env.SENDGRID_API_KEY='';
    process.env.GOOGLE_API_KEY='';
     
    process.env.SENDGRID_USER='';
    
    process.env.BASE_WEBSITE_URL='';
    
    process.env.mode = "debug";
    
    process.env.pricecheckindiaKey='';
    process.env.pricecheckindiaUsername ='';
}
else
{
    
    process.env.mode = "prod";
}
const port = process.env.PORT || 3000 ;
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
    res.render('/mykathua-app/index.html');
    //res.send('Hello World!');
});
app.get('/index', (req, res) => {
    //res.render('/mykathua-app/index.html');
    res.send('Hello World!');
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
