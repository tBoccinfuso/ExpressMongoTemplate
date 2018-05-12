// Include our config file that defines port #
var config = require('./config.json');
var express = require('express');
// parses post data and lets you access it from req.body.<nameofparam>
var bodyParser = require('body-parser')
// instantiate an app server.
var app = express();

// Setup Mongo Connection
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/myapp');
// check to make sure connection is stable
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database server.");
});

// Load models
var Insert = require("./models/InsertModel.js");

// MIDDLEWARE
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// gets static html files from public folder.
app.use(express.static("public"));


//ROUTES

// handles get requests to <domain>/
app.get("/", function (req, res) {
  
});

// handles post requests to <domain>/insert
app.post("/insert", function(req, res) {
  // POST is for adding new records
  console.log("New data received: ", req.body); // comment
  var insert = new Insert(req.body);
  insert.save(function(errors) {
    console.log("Errors content: ", errors);
  });
  res.redirect('/');
});

// handles get requests to <domain>/requests
app.get("/requests", function (res, req){
  // returns all 'inserts'
  Insert.find({}, function(err, inserts) {
    res.json(inserts);
  });
});

// handles get request by an id to <domain>/requests
app.get("/requests/:id", function (res, req){
  // returns an insert by the passed in id via url
  Insert.findById(req.params.id, function(err, inserts) {
    if (err)
      res.send(err);
    else
      res.json(inserts);
  });
});




// listens for http requests on our Port defined in config.json
app.listen(config.PORT, function() {
  console.log("listening on port: " + config.PORT);
});