var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname);
app.set('view engine', 'jade');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/get/json', function(req,res){
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ foo: 'bar' }));
});

app.post('/post/json', function(req,res){
  console.log(req.body);
  res.end();
});

app.post('/post/uri', function(req,res){
  console.log(req.body);
  res.end();
});
app.listen(80);
