
var express = require('express');
var path = require('path');
var app = express();

var convert = require('../modules/convertRandom');

app.use(express.static('public'));

app.get('/balance', function(request, response){
	var accountBalance = convert.domAppend();
	accountBalance += convert.finalUsd();
	response.send(accountBalance);
});

app.get('/', function(request, response){
	response.sendFile(path.join(__dirname, '../public/static/index.html'));
});


var server = app.listen(3000, function(){
	var port = server.address().port;
	console.log('Listening on port', port);
});
