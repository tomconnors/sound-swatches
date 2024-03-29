// Generated by CoffeeScript 1.4.0

/*
  make the server, set up shit
*/


(function() {
  var app, express, http, path, routes;

  express = require('express');

  routes = require('./routes/js/index');

  http = require('http');

  path = require('path');

  app = express();

  app.configure(function() {
    var _ref;
    app.set('port', (_ref = process.env.PORT) != null ? _ref : 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    return app.use(express["static"](path.join(__dirname, 'public')));
  });

  app.configure('development', function() {
    return app.use(express.errorHandler());
  });

  app.get('/', routes.index);

  http.createServer(app).listen(app.get('port'), function() {
    return console.log('Express server listening on port ' + app.get('port'));
  });

}).call(this);
