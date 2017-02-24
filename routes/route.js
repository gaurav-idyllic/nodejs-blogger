var express = require('express'),
    ejs = require('ejs'),
    blogger_routes = express.Router(),
    app = express();

blogger_routes.get('/', function(req, res, next) {
  title = 'Blog Application';
  partial_name = 'main';
  blogs = req.app.locals.blogs;
  res.render("index");
});

blogger_routes.get('/new', function(req, res, next) {
  title = 'Blog Application';
  partial_name = 'new';
  res.render("index");
});

blogger_routes.get('/add', function(req, res, next) {
  title = 'Blog Application';
  data = { name: req.query.name, content: req.query.content }
  blogs = req.app.locals.blogs;
  blogs.push(data);
  res.redirect('/');
});

module.exports = blogger_routes;
