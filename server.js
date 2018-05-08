var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

//App Secret
//process.env.APP_SECRET = "brez";

mongoose.connect('mongodb://BrianK:xbmk101x@ds249418.mlab.com:49418/bkriczky');
console.log("ConnectedToMongoose...");

app.use('/', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes

var categoryRoutes = require('./server/routes/category-routes');
var postRoutes = require('./server/routes/post-routes');


app.use('/category', categoryRoutes);
app.use('/post', postRoutes);
//app.use('/', categoryRoutes);
//app.use('/', postRoutes);

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname + '/public', 'index.html'));
});


app.listen(9072, function(){
	console.log('we have a server');
});

app.post('/', function(request, response){
  console.log(request.body.data);      
});