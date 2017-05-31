process.env.PORT = process.env.PORT || 80;
process.env.VERSION = require('./package.json').version || 'undefined';

if (process.env.NODE_ENV == "development" || process.env.NODE_ENV == "testing") {
    process.env.DEBUG = process.env.DEBUG || 'app,express:router,express:application,info,cs:*';
}
var debug = require('debug')('app');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require("fs");
var https = require('https');
var app = express();

app.set('env', process.env.NODE_ENV);
app.set('port', process.env.PORT);
app.set('debug', process.env.DEBUG);
app.set('version', process.env.VERSION);


app.disable('x-powered-by');
app.disable('etag');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

//To server static asset's in root dir
app.use(express.static(__dirname));

//To allow cross origin request
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', function(req, res) {
    res.sendFile(require("path").join(__dirname, "main.html"));
});
/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var error = new Error('Are you lost?');
    error.status = 404;
    next(error);
});

if (app.get('env') == "development") {
    app.use(function(error, req, res, next) {
        debug("http_status: %d, %s", error.status || 500, error.message);
        next(error);
    });
}

app.use(function(error, req, res, next) {
    res.status(error.status || 500).send({
        title: 'error',
        error: error,
        message: error.message,
        trace: error.stack
    });
});
var httpsOptions = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}
var server = https.createServer(httpsOptions, app).listen(app.get("port"), () => {
    console.log('server running at ' + app.get("port"))
})

process.on('exit', function(code) {
    debug('Cleaning up ...');
    debug('Exiting !!!');
});

process.on('uncaughtException', function(error) {
    debug('error(unhandled): ' + error);
    console.log({
        title: 'error',
        error: error,
        message: error.message,
        trace: error.stack
    });
    process.exit(1);
});

process.on('SIGINT', function() {
    debug('gotta exit - SIGINT');
    process.exit(0);
});