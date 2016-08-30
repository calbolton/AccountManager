import express = require('express');
import routes = require('./routes/index');
import http = require('http');
import path = require('path');
var bodyParser = require("body-parser");

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../../app/web/views/'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import stylus = require('stylus');
var dir = path.join(__dirname, '../../public');
app.use(stylus.middleware(dir));
app.use(express.static(dir));
//app.use(stylus.middleware(path.join(__dirname, '/public')));
//app.use(express.static(path.join(__dirname, '/public')));

app.use(stylus.middleware(path.join(__dirname, '../../node_modules')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use(stylus.middleware(path.join(__dirname, '../../app')));
app.use(express.static(path.join(__dirname, '../../app')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.post('/insertStatementItem', routes.insertStatementItem);
app.get('/getStatementItems', routes.getStatementItems);
app.get('/template/:name', (req, server) => {
    var name = req.params.name;
    server.render(name);
});


http.createServer(app).listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});
