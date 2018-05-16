// Include our config file that defines port #
var config = require('../config/config.json');
var express = require('express');
const path = require('path');
// parses post data and lets you access it from req.body.<nameofparam>
var bodyParser = require('body-parser')
// instantiate an app server.
var app = express();



// MIDDLEWARE
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//ROUTES
var insertRouter = require('./routes/insert.js');
var findAllRouter = require('./routes/findAll.js');

// handles get requests to <domain>/
app.get("/", function (req, res) {
  res.render("index");
});

app.post("/", insertRouter);

// After inserting records, go to <domain>/requets and check your term/cmd console for results.
app.get("/requests", findAllRouter);


// // handles get request by an id to <domain>/requests
// app.get("/requests/:id", function (res, req){
//   // returns an insert by the passed in id via url
//   Insert.findById(req.params.id, function(err, inserts) {
//     if (err)
//       res.send(err);
//     else
//       res.json(inserts);
//   });
// });




// listens for http requests on our Port defined in config.json
app.listen(config.PORT, function() {
  console.log("listening on port: " + config.PORT);
});
