"use strict";
var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var path = require('path');
var bodyParser = require("body-parser");
var app = express();
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var stylus = require('stylus');
app.use(stylus.middleware(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(stylus.middleware(path.join(__dirname, '../node_modules')));
app.use(express.static(path.join(__dirname, '../node_modules')));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}
app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.post('/insertStatementItem', routes.insertStatementItem);
app.get('/categorizeStatementItems', routes.categorizeStatementItems);
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
//# sourceMappingURL=api.js.map