var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var path = require('path');

var app = express();

var port = 8080;
var title = "Example Demo";

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/resources/views'));
app.use(expressLayouts);
app.use(express.static(__dirname + '/resources/public'));

app.listen(port, function() {
  console.log('app started in port ' + port);
});

app.get('/', function(req, res) {
  res.render('pages/index',     
  		{
  			layout:'layouts/master',
  			title : title,
  		}
  	);
});

app.get('/simple-crud', function(req, res) {
  res.render('pages/simple-crud/index',     
  		{
  			layout:'layouts/master',
  			title : title,
  		}
  	);
});

app.get('/simple-crud/create', function(req, res) {
  res.render('pages/simple-crud/create',     
  		{
  			layout:'layouts/master',
  			title : title,
  		}
  	);
});