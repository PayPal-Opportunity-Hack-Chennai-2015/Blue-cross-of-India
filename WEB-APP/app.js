var express        = require('express');
var path           = require('path');
var fs             = require('fs');
var bodyParser     = require('body-parser');
var app            = express();

// environments
app.set('json spaces', 2);

//All static contents are stored inside the static directory
app.use(express.static(path.join(__dirname, 'static')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var cors = require("cors");

app.use(cors({
    origin: true,
    credentials: true
}));


//CORS middleware
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);

var route = require('./url')(express, app);

exports.startServer = function(options) {

    app.set('port', process.env.PORT || 3000);

	app.listen(app.get('port'), function(){
		console.log('Server listening on port '+ app.get('port'));
	});
}



