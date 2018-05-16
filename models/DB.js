// Setup Mongo Connection
var mongoose   = require('mongoose');

mongoose.connect("mongodb://localhost/myapp");
// check to make sure connection is stable
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database server.");
});

module.exports = db;