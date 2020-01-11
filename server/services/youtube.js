(function(vm){
    
    var yss = require('./youtube.simple.search');
    const util = require('util');
    const promise = util.promisify(yss);

    vm.search = function(params,cb){
        return yss({
		key: process.env.GOOGLE_API_KEY,
		query: params.searchStr || "kathua",
		maxResults: params.maxResults || 50,
		regionCode:"IN"
	 },
	 	function(result){
	 	    cb(result);
		    	
		    
	 	}
	);
    
    }
        
    })(module.exports);