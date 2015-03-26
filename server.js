var express = require('express');
var app = express();

var SoundCloudAPI = require('soundcloud-node');

var client = new SoundCloudAPI (

  )

app.get('/', function(req, res) {
	res.send("hello world")
});

app.post('/', function(req, res) {
});

var server = app.listen(process.env.PORT || 3000, function() {

    var host = server.address().address
    var port = server.address().port

    console.log('App listening at http://%s:%s', host, port)
})
