var express = require('express');
var path = require('path');

var events = require('./eventsController');

var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');
// Using JSON
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(rootPath + '/app'));

// Handle the request
app.get('/data/event/:id', events.get);
app.post('/data/event/:id', events.save);

app.listen(8000);
console.log('Listening on port 8000...');