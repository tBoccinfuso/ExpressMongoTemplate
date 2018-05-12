var mongoose = require('mongoose');

var insertSchema = mongoose.Schema({
  "firstName": String,
  "lastName": String,
  "email": String,
});

// Store our mongoose model into a variable
var Insert = mongoose.model('Insert', insertSchema);

//Export so we can use
module.exports = Insert;