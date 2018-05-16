var express = require('express');
var router = express.Router();

var Insert = require("../models/InsertModel.js");
var DB = require('../models/DB.js');

module.exports = {
  find : router.get("/requests", function (req, res){
    // returns all 'inserts'
    var results = Insert.find({}, function(err, inserts) {
      if(err){
        console.log(err);        
      } else{
          // if no errors, go to findAll.pug and pass in all the returned data to be parsed
          res.render("findAll", {'requests': inserts});
        }
      });
  })
}