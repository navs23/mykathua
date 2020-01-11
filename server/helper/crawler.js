var Crawler = require("crawler");
 
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            let news =scrapeNews($);
            console.log(news);
        //    var text= $('div.td-block-span12 > h3.entry-title').map(function(i, el) {
        //         // this === el
        //        // console.log($(this).text());
        //         return $(this).text();
        //       }).get().join('\n');
        //       console.log(text);
        }
        done();
    }
});
 
// Queue just one URL, with default callback
c.queue('https://www.dailyexcelsior.com/');
 
// // Queue a list of URLs
// c.queue(['http://www.google.com/','http://www.yahoo.com']);
 
// // Queue URLs with custom callbacks & parameters
// c.queue([{
//     uri: 'http://parishackers.org/',
//     jQuery: false,
 
//     // The global callback won't be called
//     callback: function (error, res, done) {
//         if(error){
//             console.log(error);
//         }else{
//             console.log('Grabbed', res.body.length, 'bytes');
//         }
//         done();
//     }
// }]);
 
// Queue some HTML code directly without grabbing (mostly for tests)
// c.queue([{
//     html: '<p>This is a <strong>test</strong></p>'
// }]);

function scrapeNews(newsScraper){
    let news=[];
    newsScraper('div.wpb_wrapper').find('h3 > a').each(function(i,element)  {
        let newsItem={};
        newsItem.title=$(this).text();
        newsItem.link=$(this).attr('href');
        news.push(newsItem);
});
newsScraper('div.td-block-span6').find('a').each(function(i,element)  {
   
    let newsItem={};
    let title = $(this).attr('title');
    if (title){
    newsItem.title= title;
    newsItem.link=$(this).attr('href');
    newsItem.imgsrc=$(this).find('img').attr('src') || '';
    news.push(newsItem);
    }
});
return news;
}