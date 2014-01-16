var express = require('express');

var app = express();
var port = process.env.PORT || 5000;

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(port, function() {
	console.log('Server listening on port ' + port);
});
