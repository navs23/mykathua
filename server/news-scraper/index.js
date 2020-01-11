(function(newsService){
    const async =require('async');
   const de =  require('./de');
    newsService.getNews=()=>{
        let newsItems ={};
        return new Promise(function(resolve,reject){
            async.series([
                callback=> {
                    de.getNationalNews().then(news=>{
                        newsItems.deNews=news;
                        callback(null, news);
                    })
                    
                },
                callback=> {
                   de.getStateNews().then(news=>{
                        newsItems.deStateNews=news;
                        callback(null, news);
                    })
                       // newsItems.jagranNews=[];
                       // callback(null, []);
                    }
                    
                
            ],
            // optional callback
            function(err, results) {
                if (err)
                return reject(err);
                return resolve(newsItems)
                
            });
});
}

}(module.exports))
