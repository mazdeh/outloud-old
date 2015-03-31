var express = require('express');
var path = require('path');
var app = express();

var nyt = require('newyorktimes')(keys);

// var SoundCloudAPI = require('soundcloud-node');

// var client = new SoundCloudAPI (
// 	5eaf39e81aa342b9d5015a999666cbe1,
// 	c8b6b03ee68491257384c06731e27cb9,
	

//   )

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
});

app.post('/', function(req, res) {
});

var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
