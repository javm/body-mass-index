var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Promise = require('bluebird');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');


var config = require('./config');
var User = require('./models/user');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: true})); // Get POST Data.
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

function connectCb(err){
  if (err) {
    console.log("Couldn't connect to mongodb");
    process.exit(1);
  }
  console.log("Connected to mongodb...");
}

// Use bluebird
mongoose.Promise = require('bluebird');
//mongoose.connect('mongodb://localhost/body-mass-index', connectCb);
mongoose.connect(config.get('mongoDB'), connectCb);

//Just saying hello
/*app.get('/', (req, res, next) => {
  res.json({msg: 'Body Mass Index'});
});*/

var port = (process.argv[2] || config.get('port'));
app.set('port',port);

// Configuring Passport
var passport = require('passport');
var expressSession = require('express-session');
// TODO - Why Do we need this key ?
app.use(expressSession({secret: 'tangoSource', resave: false, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

 // Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);

var routes = require('./routes/index')(passport);
app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}



app.listen(app.get('port'), function() {
  console.log("Body Mass Index listening on port", app.get('port'));
});
