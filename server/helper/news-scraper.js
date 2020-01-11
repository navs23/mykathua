
    (function(newsscraper){
        let axios = require('axios');
      
        let fs = require('fs'); 
        newsscraper.scrapeNews=(newsurl)=>{

           return new Promise(function(resolve, reject) {
            newsStorage=[];
          
         //  return resolve(mockNews.stateNews);
            axios.get(newsurl)
                .then((response) => {
                    if(response.status === 200) {
                        const html = response.data;
                   
                          return resolve(html);
                  
                }
                }, (error) => {
                    console.log(error);
                    reject(error);
                }

               );
              
              });
              
             

           
            
                
             
        }
       
    })(module.exports)