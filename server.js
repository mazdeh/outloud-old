var express = require('express');
var path = require('path');
var cors = require("cors");
var app = express();



// var SoundCloudAPI = require('soundcloud-node');

// var client = new SoundCloudAPI (
// 	5eaf39e81aa342b9d5015a999666cbe1,
// 	c8b6b03ee68491257384c06731e27cb9,
	

//   )

var keys = {
  article_search: 'API_KEY',
  best_sellers: 'API_KEY',
  campaign_finance: 'API_KEY',
  community: 'API_KEY',
  congress: 'API_KEY',
  districts: 'API_KEY',
  event_listings: 'API_KEY',
  geo: 'API_KEY',
  most_popular: 'b8269dd1516213a03c1e47f21fd5084e:7:71755816',
  movie_reviews: 'API_KEY',
  real_estate: 'API_KEY',
  semantic: 'API_KEY',
  times_newswire: 'API_KEY',
  timestags: 'API_KEY'
};

var nyt = require('newyorktimes')(keys);


app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/*', function(req, res) {
	nyt.query(req.url, function (err, json) {
  		if(!err) {
	  		res.send(json);
	  		console.log("i got something");
	  		console.log(json);
	  	}
	  	else {
	  		console.log("Error: ", err);
	  	}
	});
});

app.post('/', function(req, res) {
});

var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
