var express = require('express');
var router = express.Router();

// Load InsertModel
var Insert = require("../models/InsertModel.js");
var DB = require('../models/DB.js');

module.exports = {
  // POST is for adding new records
  insert : router.post("/", function(req, res) {
    console.log("New data received: ", req.body);

    // New instance of a record and passing in our form body data.
    var insert = new Insert(req.body);

    insert.save(function(errors) {
      console.log("Errors content: ", errors);
    });

    // Return to home page and pass the reponse variable to be rendered in index.pug.
    res.render("index", {'reponse': 'New Record has been inserted!'});
  })
}
