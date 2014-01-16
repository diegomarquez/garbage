var express = require('express');

var app = express();
var port = 5000;

app.configure(function(){
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.listen(port);
