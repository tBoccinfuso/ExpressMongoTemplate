var express = require('express');
var router = express.Router();

var Insert = require("../models/InsertModel.js");
var DB = require("../models/DB.js");

module.exports = {
  // POST is for adding new records
  insert : router.post("/", function(req, res) {
    console.log("New data received: ", req.body); // comment

    var insert = new Insert(req.body);

    insert.save(function(errors) {
      console.log("Errors content: ", errors);
    });
    
    res.render("index", {'reponse': 'New Record has been inserted!'});
  })
}
