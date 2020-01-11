(function(news){

let newscraper = require('../helper/news-scraper');
const async =require('async');
let cheerio = require('cheerio');

const mockNews = require('../data/statenews');

news.getNationalNews=()=>{
return new Promise(function(resolve,reject){
  //  newscraper.scrapeNews('http://www.dailyexcelsior.com/national-news')
   // .then((html)=>{
    scrapeNews(mockNews.nationalNews).then(newsArticles=>{
       //   console.log(mockNews.nationalNews);
           return resolve(newsArticles);
      
       })
     
    });
    // .catch((error)=>{
    //    // console.log(error);
    //     return reject(error);
    // });
//});


}
news.getStateNews=()=>{
    return new Promise(function(resolve,reject){
      //  newscraper.scrapeNews('http://www.dailyexcelsior.com/state')
       // .then((html)=>{
        scrapeNews(mockNews.stateNews).then(newsArticles=>{
               //console.log(mockNews.stateNews);
               return resolve(newsArticles);
          
           })
         
        });
        // .catch((error)=>{
        //    // console.log(error);
        //     return reject(error);
        // });
    //});
    
    
    }


function scrapeNews(html){
   // console.log(html);
    let $ = cheerio.load(html);
    let artcileId=1;
    let news=[];
   return new Promise(function(resolve,reject){
    async.series([
        function(callback) {
            // do some more stuff ...
          //  console.log('scrapping state news');
            $('div.item-details').each(function(i,element)  {

                let newsItem={};
                let $a =  $(this).find('a')   ;

               
                let title = $a.attr('title');
                if (title){
                newsItem.id= artcileId++;
                newsItem.title= title;
                newsItem.link=$a.attr('href');
                newsItem.imgsrc = $a.find('img').attr('src') || ''; 
                newsItem.postdate=  $(this).find('time').attr('datetime')  ;;
                newsItem.author = $(this).find('span.td-post-author-name').attr('datetime')   ;
                newsItem.abstract =  $(this).find('div.td-excerpt').text();   

               if(newsItem.abstract == "")
                newsItem.abstract = newsItem.title;

                newsItem.source= "DailyExcelsior.com"
                news.push(newsItem);
                }
            });
            callback(null, news);
        }
    ],
    // optional callback
    function(err, results) {
        if (err)
        return reject(err);
        return resolve(news)
       
    });
       
    

});
     

    

}

}(module.exports))