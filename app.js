var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');
var routes = require('./routes/route');
var blogs = [];
app.locals.blogs = blogs;

app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(morgan('combined'));
var pub_path = path.resolve(__dirname, 'public');
app.use(express.static(pub_path));

app.use('/', routes);

app.use(function(req, res){
  res.status(200).send('page not found.');
});

app.listen(3003);

http.createServer(app).listen(3003, function(){
  console.log("Started server on port: 3003");
})
