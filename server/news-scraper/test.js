var newsService = require('./index');
newsService.getNews().then(artilces=>{
    console.log(JSON.stringify(artilces));
})